"use client";

import {
    Blocks,
    Braces,
    FileCode2,
    FileText,
    FolderTree,
    GitBranch,
    Network,
    Paintbrush,
    Route,
    ShieldCheck,
    TestTube2,
    Wrench,
} from "lucide-react";
import { useEffect, useRef } from "react";

type StructureNode = {
    name: string;
    kind: "folder" | "file";
    icon?: typeof FileCode2;
    children?: StructureNode[];
};

const uiStructure: StructureNode[] = [
    {
        name: "app/",
        kind: "folder",
        children: [
            {
                name: "(public)/",
                kind: "folder",
                children: [
                    { name: "login/page.tsx", kind: "file", icon: ShieldCheck },
                    {
                        name: "signup/page.tsx",
                        kind: "file",
                        icon: ShieldCheck,
                    },
                    { name: "terms/page.tsx", kind: "file", icon: FileText },
                ],
            },
            {
                name: "(dashboard)/",
                kind: "folder",
                children: [
                    { name: "page.tsx", kind: "file", icon: Route },
                    { name: "loading.tsx", kind: "file", icon: FileCode2 },
                    { name: "settings/page.tsx", kind: "file", icon: Route },
                    { name: "<resource>/page.tsx", kind: "file", icon: Route },
                    {
                        name: "<resource>/[id]/page.tsx",
                        kind: "file",
                        icon: Route,
                    },
                ],
            },
            { name: "globals.css", kind: "file", icon: Paintbrush },
            { name: "layout.tsx", kind: "file", icon: Blocks },
            { name: "page.tsx", kind: "file", icon: Route },
        ],
    },
    {
        name: "features/",
        kind: "folder",
        children: [
            {
                name: "<feature>/",
                kind: "folder",
                children: [
                    {
                        name: "api/<feature>.api.ts",
                        kind: "file",
                        icon: Network,
                    },
                    {
                        name: "components/",
                        kind: "folder",
                        children: [
                            {
                                name: "<Feature>Form.tsx",
                                kind: "file",
                                icon: Blocks,
                            },
                            {
                                name: "<Feature>List.tsx",
                                kind: "file",
                                icon: Blocks,
                            },
                            {
                                name: "<Feature>Card.tsx",
                                kind: "file",
                                icon: Blocks,
                            },
                        ],
                    },
                    {
                        name: "hooks/use-<feature>.ts",
                        kind: "file",
                        icon: Wrench,
                    },
                    {
                        name: "server/get-<feature>.ts",
                        kind: "file",
                        icon: Braces,
                    },
                    {
                        name: "types/<feature>.types.ts",
                        kind: "file",
                        icon: Braces,
                    },
                    {
                        name: "utils/<feature>.utils.ts",
                        kind: "file",
                        icon: Wrench,
                    },
                ],
            },
        ],
    },
    {
        name: "shared/",
        kind: "folder",
        children: [
            {
                name: "components/",
                kind: "folder",
                children: [
                    {
                        name: "layout/",
                        kind: "folder",
                        children: [
                            {
                                name: "DashboardLayout.tsx",
                                kind: "file",
                                icon: Blocks,
                            },
                            { name: "Navbar.tsx", kind: "file", icon: Blocks },
                        ],
                    },
                    {
                        name: "ui/",
                        kind: "folder",
                        children: [
                            { name: "Button.tsx", kind: "file", icon: Blocks },
                            {
                                name: "FormField.tsx",
                                kind: "file",
                                icon: Blocks,
                            },
                            { name: "Modal.tsx", kind: "file", icon: Blocks },
                            {
                                name: "EmptyState.tsx",
                                kind: "file",
                                icon: Blocks,
                            },
                            {
                                name: "LoadingState.tsx",
                                kind: "file",
                                icon: Blocks,
                            },
                        ],
                    },
                ],
            },
            {
                name: "lib/",
                kind: "folder",
                children: [
                    { name: "api-client.ts", kind: "file", icon: Network },
                ],
            },
        ],
    },
];

const apiStructure: StructureNode[] = [
    {
        name: "src/",
        kind: "folder",
        children: [
            { name: "app.ts", kind: "file", icon: Braces },
            { name: "router.ts", kind: "file", icon: Route },
            {
                name: "common/",
                kind: "folder",
                children: [
                    { name: "middleware/", kind: "folder" },
                    { name: "error/", kind: "folder" },
                    { name: "utils/", kind: "folder" },
                ],
            },
            {
                name: "config/",
                kind: "folder",
                children: [
                    { name: "db.ts", kind: "file", icon: Braces },
                    { name: "env.ts", kind: "file", icon: Braces },
                ],
            },
            {
                name: "features/",
                kind: "folder",
                children: [
                    {
                        name: "v1/",
                        kind: "folder",
                        children: [
                            {
                                name: "<domain>/<feature>/",
                                kind: "folder",
                                children: [
                                    { name: "dto/", kind: "folder" },
                                    { name: "types/", kind: "folder" },
                                    {
                                        name: "tests/",
                                        kind: "folder",
                                        icon: TestTube2,
                                    },
                                    {
                                        name: "<feature>.controller.ts",
                                        kind: "file",
                                        icon: Braces,
                                    },
                                    {
                                        name: "<feature>.service.ts",
                                        kind: "file",
                                        icon: Braces,
                                    },
                                    {
                                        name: "<feature>.repository.ts",
                                        kind: "file",
                                        icon: Braces,
                                    },
                                    {
                                        name: "<feature>.model.ts",
                                        kind: "file",
                                        icon: Braces,
                                    },
                                    {
                                        name: "<feature>.routes.ts",
                                        kind: "file",
                                        icon: Route,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "vx/",
                        kind: "folder",
                        children: [
                            {
                                name: "(domain)/(feature)/",
                                kind: "folder",
                                children: [
                                    {
                                        name: "dto/",
                                        kind: "folder",
                                        children: [
                                            {
                                                name: "create-data.dto.ts",
                                                kind: "file",
                                                icon: Braces,
                                            },
                                            {
                                                name: "update-data.dto.ts",
                                                kind: "file",
                                                icon: Braces,
                                            },
                                        ],
                                    },
                                    {
                                        name: "types/",
                                        kind: "folder",
                                        children: [
                                            {
                                                name: "feature.enums.ts",
                                                kind: "file",
                                                icon: Braces,
                                            },
                                            {
                                                name: "feature.repository.interface.ts",
                                                kind: "file",
                                                icon: Braces,
                                            },
                                            {
                                                name: "feature.types.ts",
                                                kind: "file",
                                                icon: Braces,
                                            },
                                            {
                                                name: "feature.interfaces.ts",
                                                kind: "file",
                                                icon: Braces,
                                            },
                                        ],
                                    },
                                    {
                                        name: "feature.controller.ts",
                                        kind: "file",
                                        icon: Braces,
                                    },
                                    {
                                        name: "feature.service.ts",
                                        kind: "file",
                                        icon: Braces,
                                    },
                                    {
                                        name: "feature.repository.ts",
                                        kind: "file",
                                        icon: Braces,
                                    },
                                    {
                                        name: "feature.model.ts",
                                        kind: "file",
                                        icon: Braces,
                                    },
                                    {
                                        name: "feature.routes.ts",
                                        kind: "file",
                                        icon: Route,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const workflow = [
    {
        title: "Plan the sprint",
        description:
            "Break product goals into small user stories and prioritize the work.",
    },
    {
        title: "Build by feature",
        description:
            "Keep related routes, business logic, data, and validation together.",
    },
    {
        title: "Test as you go",
        description:
            "Add focused service, controller, integration, API, and end-to-end tests.",
    },
    {
        title: "Review and iterate",
        description:
            "Review the increment, gather feedback, and refine the next sprint.",
    },
];

function countNodes(node: StructureNode): number {
    return (
        1 +
        (node.children?.reduce(
            (total, child) => total + countNodes(child),
            0,
        ) ?? 0)
    );
}

function getIconColor(node: StructureNode): string {
    if (node.kind === "folder") {
        const folderColors: Record<string, string> = {
            app: "#c792ea",
            api: "#4ec9b0",
            common: "#e5a84b",
            components: "#4fc1ff",
            config: "#e5a84b",
            dto: "#e5c454",
            error: "#f07178",
            features: "#c792ea",
            hooks: "#f071a8",
            lib: "#e5c454",
            middleware: "#c792ea",
            server: "#4ec9b0",
            shared: "#e5c454",
            tests: "#f07178",
            types: "#4fc1ff",
            ui: "#4fc1ff",
            utils: "#e5a84b",
            v1: "#4fc1ff",
        };
        const folderName = node.name.replace(/\/$/, "").toLowerCase();
        return folderColors[folderName] ?? "#e5c454";
    }

    const fileName = node.name.split("/").pop()?.toLowerCase() ?? "";
    if (fileName.endsWith(".tsx")) return "#61dafb";
    if (fileName.endsWith(".ts")) return "#519aba";
    if (fileName.endsWith(".jsx")) return "#f7df1e";
    if (fileName.endsWith(".js")) return "#f7df1e";
    if (fileName.endsWith(".css")) return "#42a5f5";
    if (fileName.endsWith(".json")) return "#e5c454";
    if (fileName.endsWith(".html")) return "#e44d26";
    if (fileName.endsWith(".md")) return "#aab4c0";
    if (fileName.endsWith(".py")) return "#4b8bbe";
    return "#b7c4d2";
}

function getFileBadge(name: string): string {
    const fileName = name.split("/").pop()?.toLowerCase() ?? "";
    if (fileName.endsWith(".tsx")) return "TSX";
    if (fileName.endsWith(".ts")) return "TS";
    if (fileName.endsWith(".jsx")) return "JSX";
    if (fileName.endsWith(".js")) return "JS";
    if (fileName.endsWith(".css")) return "CSS";
    if (fileName.endsWith(".json")) return "{}";
    if (fileName.endsWith(".html")) return "HTML";
    if (fileName.endsWith(".md")) return "MD";
    if (fileName.endsWith(".py")) return "PY";
    return "FILE";
}

function StructureMaterialIcon({ node }: { node: StructureNode }) {
    const color = getIconColor(node);
    const SemanticIcon = node.icon;

    if (node.kind === "folder") {
        return (
            <span className="structure-tree-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                    <path
                        d="M1.7 5.1c0-.9.7-1.6 1.6-1.6h4l1.8 1.8h7.6c.9 0 1.6.7 1.6 1.6v7.7c0 .9-.7 1.6-1.6 1.6H3.3c-.9 0-1.6-.7-1.6-1.6V5.1Z"
                        fill={color}
                        stroke="rgba(255,255,255,.55)"
                        strokeWidth=".7"
                    />
                    <path
                        d="M2.4 7h15.2v1.1H2.4z"
                        fill="white"
                        fillOpacity=".28"
                    />
                </svg>
                {SemanticIcon && (
                    <SemanticIcon className="structure-tree-icon-badge" />
                )}
            </span>
        );
    }

    return (
        <span className="structure-tree-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none">
                <path
                    d="M4.1 1.6h7l4.8 4.8v11.1H4.1V1.6Z"
                    fill="#19212d"
                    stroke={color}
                    strokeWidth="1.15"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.1 1.9v4.7h4.5"
                    fill={color}
                    fillOpacity=".48"
                    stroke={color}
                    strokeWidth=".75"
                    strokeLinejoin="round"
                />
                <rect
                    x="5.6"
                    y="10"
                    width="9.5"
                    height="4.3"
                    rx="1"
                    fill={color}
                />
                <text
                    x="10.35"
                    y="12.95"
                    fill="#11151d"
                    fontSize={
                        getFileBadge(node.name).length > 3 ? "2.7" : "3.6"
                    }
                    fontWeight="800"
                    textAnchor="middle"
                    fontFamily="Arial, sans-serif"
                >
                    {getFileBadge(node.name)}
                </text>
            </svg>
            {SemanticIcon && (
                <SemanticIcon className="structure-tree-icon-badge" />
            )}
        </span>
    );
}

function TreeItem({
    node,
    startIndex,
}: {
    node: StructureNode;
    startIndex: number;
}) {
    const children = node.children;

    return (
        <li>
            <div
                className={`structure-tree-node structure-tree-node--${node.kind} flex min-w-0 items-center gap-2 py-1.5 text-sm text-gray-300`}
                style={{ animationDelay: `${startIndex * 55}ms` }}
            >
                <StructureMaterialIcon node={node} />
                <span className="min-w-0 [overflow-wrap:anywhere]">
                    {node.name}
                </span>
            </div>
            {children && (
                <ul className="ml-2 min-w-0 border-l border-white/10 pl-4">
                    {children.map((child, index) => {
                        const precedingNodes = children
                            .slice(0, index)
                            .reduce(
                                (total, previous) =>
                                    total + countNodes(previous),
                                0,
                            );

                        return (
                            <TreeItem
                                key={child.name}
                                node={child}
                                startIndex={startIndex + 1 + precedingNodes}
                            />
                        );
                    })}
                </ul>
            )}
        </li>
    );
}

function StructureTree({
    title,
    icon: Icon,
    nodes,
}: {
    title: string;
    icon: typeof FileCode2;
    nodes: StructureNode[];
}) {
    const treeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const tree = treeRef.current;
        if (
            !tree ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            !("IntersectionObserver" in window)
        ) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    tree.classList.add("is-building");
                    observer.disconnect();
                }
            },
            { threshold: 0.15 },
        );
        observer.observe(tree);

        return () => observer.disconnect();
    }, []);

    return (
        <article
            ref={treeRef}
            className="structure-tree-scene min-w-0 overflow-hidden rounded-xl border border-white/10 bg-white/3 p-5"
        >
            <div className="flex items-center gap-3 mb-4">
                <Icon
                    size={20}
                    className="shrink-0 text-(--primaryground)"
                    aria-hidden="true"
                />
                <h3 className="text-base font-semibold text-white">{title}</h3>
            </div>
            <div className="max-h-[36rem] min-w-0 overflow-x-hidden overflow-y-auto pr-2">
                <ul className="min-w-0 border-l border-white/10 pl-4">
                    {nodes.map((node, index) => {
                        const precedingNodes = nodes
                            .slice(0, index)
                            .reduce(
                                (total, previous) =>
                                    total + countNodes(previous),
                                0,
                            );

                        return (
                            <TreeItem
                                key={node.name}
                                node={node}
                                startIndex={precedingNodes}
                            />
                        );
                    })}
                </ul>
            </div>
        </article>
    );
}

export default function Structure() {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="content-panel py-12 px-8">
                <div className="flex items-center gap-2 mb-4">
                    <FolderTree
                        size={25}
                        className="text-(--primaryground)"
                        aria-hidden="true"
                    />
                    <h2 className="text-2xl font-semibold text-white">
                        How I Structure Projects
                    </h2>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-3xl">
                    I organize the frontend around routes and the backend around
                    domain features, keeping each layer easy to find, test, and
                    evolve. Names in angle brackets are placeholders for actual
                    domains and features.
                </p>

                <div className="grid gap-4 lg:grid-cols-2">
                    <StructureTree
                        title="Frontend · Next.js"
                        icon={Blocks}
                        nodes={uiStructure}
                    />
                    <StructureTree
                        title="Backend · Express"
                        icon={GitBranch}
                        nodes={apiStructure}
                    />
                </div>

                <div className="mt-8">
                    <div className="flex items-center gap-2 mb-4">
                        <GitBranch
                            size={20}
                            className="text-(--primaryground)"
                            aria-hidden="true"
                        />
                        <h3 className="text-lg font-semibold text-white">
                            Agile, Iterative Workflow
                        </h3>
                    </div>
                    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {workflow.map((step, index) => (
                            <li
                                key={step.title}
                                className="rounded-xl bg-white/3 border border-white/10 p-5"
                            >
                                <span className="text-xs font-medium text-[#C02BFF]">
                                    STEP {index + 1}
                                </span>
                                <h4 className="text-sm font-semibold text-white mt-2 mb-2">
                                    {step.title}
                                </h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}
