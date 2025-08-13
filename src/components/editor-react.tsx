import {useState} from "react";

import {classList} from "@/helpers/string-helpers";
import {matomoTrackEvent} from "@/services/matomo";

interface EditorPane {
    id: string;
    tabLabel: string;
    lines: string[];
}

interface Props {
    className?: string;
    panes: EditorPane[];
}

const Editor = ({className, panes}: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectTab = (pane: EditorPane, idx: number) => {
        setSelectedIndex(idx);
        matomoTrackEvent({category: "editor", action: "select-tab", name: pane.tabLabel, value: idx});
    };

    const handleTabClick = (pane: EditorPane, idx: number) => {
        selectTab(pane, idx);
    };

    const handleKeyDown = (pane: EditorPane, idx: number, evt: React.KeyboardEvent) => {
        if (evt.code !== "Enter") return;
        selectTab(pane, idx);
    };

    return (
        <section className={classList(["rounded-lg", "overflow-hidden", className])}>
            <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 h-10 flex items-center px-4 gap-x-2">
                <span className="bg-accent h-3 w-3 rounded-full inline-block"></span>
                <span className="bg-[#F2F598] h-3 w-3 rounded-full inline-block"></span>
                <span className="bg-[#00FFBD] h-3 w-3 rounded-full inline-block"></span>
            </div>
            <ul className="bg-neutral-900 flex gap-x-1 px-4" role="tablist" aria-label="editor tabs">
                {panes.map((pane, idx) => (
                    <li
                        key={`${pane.tabLabel}-${idx}`}
                        className={classList(["editor-tab", idx === selectedIndex && "active"])}
                        onClick={() => handleTabClick(pane, idx)}
                        onKeyUp={(evt) => handleKeyDown(pane, idx, evt)}
                        aria-selected={idx === selectedIndex}
                        aria-controls={pane.id}
                        role="tab"
                        tabIndex={0}
                        id={pane.id}
                    >
                        {pane.tabLabel}
                    </li>
                ))}
            </ul>
            {panes.map(({id, lines}, paneIdx) => (
                <article
                    key={id}
                    className={classList([
                        "editor-pane",
                        "px-6 py-4 bg-gradient-to-b from-neutral-800 to-neutral-900",
                        paneIdx === selectedIndex && "active",
                    ])}
                    aria-hidden={paneIdx !== selectedIndex}
                    aria-labelledby={id}
                    id={id}
                >
                    <ol>
                        {lines.map((line, lineIdx) => (
                            <li key={`${line}-${lineIdx}`}>{line}</li>
                        ))}
                    </ol>
                </article>
            ))}
        </section>
    );
};

export default Editor;
