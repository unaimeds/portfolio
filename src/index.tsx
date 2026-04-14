import { render } from "preact";

import "./style.css";
import { GITHUB_PROFILE, PROJECTS, USERNAME } from "./data";
import { cn } from "./utils";

export function App() {
    return (
        <main className="mx-auto w-[min(80%,800px)] my-6 sm:text-lg text-foreground md:text-xl">
            <h1 className="font-extrabold text-red mb-0.5 text-2xl tracking-wide sm:text-3xl md:text-4xl">
                {USERNAME}
            </h1>
            <Link
                href={GITHUB_PROFILE}
                label="<github>"
                className="text-orange"
            />
            <p className="mt-4">I build stuff</p>
            <p className="font-bold mt-6 text-yellow">My projects:</p>
            <ul className="list-inside">
                {PROJECTS.map(({ name, url, repo }, idx) => (
                    <li
                        key={idx}
                        className={`${url ? "text-green" : "text-foreground4"} mt-2`}
                    >
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
                    </li>
                ))}
            </ul>
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
