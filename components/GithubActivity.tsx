type ContributionDay = {
    date: string;
    contributionCount: number;
    weekday: number;
};

type Week = {
    contributionDays: ContributionDay[];
};

type ContributionData = {
    totalContributions: number;
    weeks: Week[];
};

async function getContributions(): Promise<ContributionData | null> {
    const query = `
        query($username: String!) {
            user(login: $username) {
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                date
                                contributionCount
                                weekday
                            }
                        }
                    }
                }
            }
        }
    `;

    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables: { username: process.env.GITHUB_USERNAME },
        }),
        next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    const calendar =
        json?.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) return null;

    return {
        totalContributions: calendar.totalContributions,
        weeks: calendar.weeks,
    };
}

function levelForCount(count: number): number {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 9) return 3;
    return 4;
}

const levelColors = [
    "bg-white/[0.04]",
    "bg-[#6A00FF]/25",
    "bg-[#6A00FF]/50",
    "bg-[#9A15FF]/75",
    "bg-[#C02BFF]",
];

const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

export default async function GithubActivity() {
    const data = await getContributions();

    if (!data) {
        return (
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="p-8 rounded-2xl bg-[#171717]/80 border border-white/10 backdrop-blur-xl">
                    <p className="text-sm text-gray-500">
                        Couldn&apos;t load GitHub activity right now.
                    </p>
                </div>
            </div>
        );
    }

    const { totalContributions, weeks } = data;

    const monthLabels: { index: number; label: string }[] = [];
    let lastMonth = "";
    weeks.forEach((week, i) => {
        const firstDay = week.contributionDays[0];
        if (!firstDay) return;
        const month = new Date(firstDay.date).toLocaleString("en-US", {
            month: "short",
        });
        if (month !== lastMonth) {
            monthLabels.push({ index: i, label: month });
            lastMonth = month;
        }
    });

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="py-20 px-8 rounded-2xl bg-[#171717]/80  backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                    <h2 className="text-sm text-gray-300">
                        <span className="text-white font-semibold">
                            {totalContributions}
                        </span>{" "}
                        contributions in the last year
                    </h2>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>Less</span>
                        {levelColors.map((color, i) => (
                            <span
                                key={i}
                                className={`h-3 w-3 rounded-sm ${color}`}
                            />
                        ))}
                        <span>More</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div className="inline-flex flex-col gap-1 min-w-fit border rounded-xl p-3 border-gray-400">
                        <div className="flex gap-1 pl-8">
                            {weeks.map((_, i) => {
                                const label = monthLabels.find(
                                    (m) => m.index === i
                                )?.label;
                                return (
                                    <div
                                        key={i}
                                        className="w-3 text-[10px] text-gray-500"
                                    >
                                        {label ?? ""}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex gap-1">
                            <div className="flex flex-col gap-1 pr-2">
                                {dayLabels.map((label, i) => (
                                    <div
                                        key={i}
                                        className="h-3 text-[10px] text-gray-500 leading-3"
                                    >
                                        {label}
                                    </div>
                                ))}
                            </div>

                            {weeks.map((week, wi) => (
                                <div key={wi} className="flex flex-col gap-1">
                                    {week.contributionDays.map((day) => (
                                        <div
                                            key={day.date}
                                            title={`${day.contributionCount} contributions on ${day.date}`}
                                            className={`h-3 w-3 rounded-sm ${
                                                levelColors[
                                                    levelForCount(
                                                        day.contributionCount
                                                    )
                                                ]
                                            }`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
