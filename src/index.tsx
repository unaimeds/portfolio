import { render } from "preact";

import "./style.css";
import { GITHUB_PROFILE, PROJECTS, USERNAME } from "./data";

export function App() {
    return (
        <main className="mx-auto w-[min(80%,800px)] my-6 sm:text-lg md:text-xl">
            <h1 className="font-extrabold text-2xl tracking-wide sm:text-3xl md:text-4xl">
                {USERNAME}
            </h1>
            <a
                href={GITHUB_PROFILE}
                target="_blank"
                className="mb-4 mt-1 block text-operator underline hover:text-operator/70"
            >
                github
            </a>
            <p>I build stuff</p>
            <p className="font-bold mt-6">My projects:</p>
            <ul className="list-['-'] list-inside">
                {PROJECTS.map(({ name, url, repo }, idx) => (
                    <li key={idx} className="text-accent mt-2">
                        {url ? (
                            <a
                                href={url}
                                target="_blank"
                                className="hover:text-tag ml-2"
                            >
                                {name}
                            </a>
                        ) : (
                            <p className="inline ml-2 text-fg">{name}</p>
                        )}
                        <a
                            href={repo}
                            target="_blank"
                            className="ml-2 text-keyword hover:text-keyword/70"
                        >
                            [source]
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}

render(<App />, document.getElementById("app"));
