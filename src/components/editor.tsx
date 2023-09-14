import {useState} from "react";
import {classList} from "../helpers/string-helpers";
import {matomoTrackEvent} from "../services/matomo";

interface EditorPane {
    tab: string;
    lines: string[];
}

interface Props {
    className?: string;
    panes: EditorPane[];
}

const Editor = ({className, panes}: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleTabClick = (pane: EditorPane, idx: number) => {
        setSelectedIndex(idx);
        matomoTrackEvent({category: "editor", action: "click-tab", name: pane.tab, value: idx});
    };

    return (
        <section className={classList(["rounded-lg", "overflow-hidden", className])}>
            <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 h-10 flex items-center px-4 gap-x-2">
                <span className="bg-[#FF5F57] h-3 w-3 rounded-full inline-block"></span>
                <span className="bg-[#FDBC2E] h-3 w-3 rounded-full inline-block"></span>
                <span className="bg-[#28C83E] h-3 w-3 rounded-full inline-block"></span>
            </div>
            <ul className="bg-neutral-900 flex">
                {panes.map((pane, idx) => (
                    <li
                        key={`${pane.tab}-${idx}`}
                        className={classList(["editor-tab", idx === selectedIndex && "active"])}
                        onClick={() => handleTabClick(pane, idx)}
                        aria-selected={idx === selectedIndex}
                        role="tab"
                    >
                        {pane.tab}
                    </li>
                ))}
            </ul>
            <div className="px-6 py-4 bg-gradient-to-b from-neutral-800 to-neutral-900">
                {panes.map(({lines}, paneIdx) => (
                    <ol
                        key={paneIdx}
                        className={classList(["editor-pane", paneIdx === selectedIndex && "active"])}
                        aria-hidden={paneIdx !== selectedIndex}
                    >
                        {lines.map((line, lineIdx) => (
                            <li className="md:pl-4" key={`${line}-${lineIdx}`}>
                                {line}
                            </li>
                        ))}
                    </ol>
                ))}
            </div>
        </section>
    );
};

export default Editor;
