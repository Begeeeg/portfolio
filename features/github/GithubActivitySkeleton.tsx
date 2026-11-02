export default function GithubActivitySkeleton() {
    const weeks = Array.from({ length: 52 });
    const days = Array.from({ length: 7 });

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="content-panel py-12 px-8 animate-pulse">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                    <div className="h-4 w-48 bg-white/10 rounded" />
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-8 bg-white/10 rounded" />
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span
                                key={i}
                                className="h-3 w-3 rounded-sm bg-white/10"
                            />
                        ))}
                        <div className="h-3 w-8 bg-white/10 rounded" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div className="inline-flex gap-1 min-w-fit pl-8">
                        {weeks.map((_, wi) => (
                            <div key={wi} className="flex flex-col gap-1">
                                {days.map((_, di) => (
                                    <div
                                        key={di}
                                        className="h-3 w-3 rounded-sm bg-white/6"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
