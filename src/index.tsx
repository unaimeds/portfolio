import { render } from "preact";

import "./style.css";
import { GITHUB_PROFILE, PROJECTS, USERNAME } from "./data";
import { cn } from "./utils";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export function App() {
    const lines = useSignal([
        <Link href={GITHUB_PROFILE} label="<github>" className="text-orange" />,
        <br />,
        <p>I build stuff</p>,
        <br />,
        <p className="font-bold text-yellow">My projects:</p>,
    ]);
    const currentLine = useSignal<number | null>(null);

    useEffect(() => {
        PROJECTS.forEach(({ name, url, repo }) => {
            lines.value = [
                ...lines.value,
                <div className={`${url ? "text-green" : "text-foreground4"}`}>
                    <span className="mr-2">-</span>
                    {url ? (
                        <Link href={url} label={name} />
                    ) : (
                        <p className="inline">{name}</p>
                    )}
                    <Link
                        href={repo}
                        className="text-purple ml-2"
                        label="[source]"
                    />
                </div>,
            ];
        });
    }, []);

    return (
        <main className="mx-auto w-[min(80%,800px)] my-6 sm:text-lg text-foreground md:text-xl">
            <h1 className="font-extrabold text-red ml-2 mb-0.5 text-2xl tracking-wide sm:text-3xl md:text-4xl">
                {USERNAME}
            </h1>
            <div onMouseLeave={() => (currentLine.value = null)}>
                {lines.value.map((line, idx) => (
                    <div
                        key={idx}
                        className={`${currentLine.value === idx ? "bg-background1" : ""} py-0.5 px-2`}
                        onMouseEnter={() => (currentLine.value = idx)}
                    >
                        {line}
                    </div>
                ))}
            </div>
        </main>
    );
}

const Link = ({
    label,
    href,
    className,
}: {
    label: string;
    href: string;
    className?: string;
}) => (
    <a
        href={href}
        target="_blank"
        className={cn("text-green hover:underline", className)}
    >
        {label}
    </a>
);

render(<App />, document.getElementById("app"));
