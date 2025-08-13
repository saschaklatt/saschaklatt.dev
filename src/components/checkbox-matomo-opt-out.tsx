import {useEffect, useState} from "react";

import {hasOptOutCookie, matomoPush, matomoTrackEvent} from "@/services/matomo";

interface CheckboxMatomoOptOutProps {
    className?: string;
    id?: string;
    labelOptedOut: string;
    labelOptedIn: string;
    labelLoading: string;
}

export const CheckboxMatomoUserOptOut = ({
    className,
    id,
    labelLoading,
    labelOptedOut,
    labelOptedIn,
}: CheckboxMatomoOptOutProps) => {
    const [isServerSide, setIsServerSide] = useState(true);
    const [isOptedOut, setIsOptedOut] = useState(false);
    const label = isOptedOut ? labelOptedOut : labelOptedIn;

    useEffect(() => {
        setIsServerSide(false);
        setIsOptedOut(hasOptOutCookie());
    }, []);

    const handleChange = () => {
        if (isOptedOut) {
            matomoTrackEvent({category: "tracking_consent", action: "click_checkbox", name: "forget_user_opt_out"});
            matomoPush(["forgetUserOptOut"]);
            setIsOptedOut(!isOptedOut);
        } else {
            matomoTrackEvent({category: "tracking_consent", action: "click_checkbox", name: "opt_user_out"});
            matomoPush(["optUserOut"]);
            setIsOptedOut(!isOptedOut);
        }
    };

    return isServerSide ? (
        <span className={className}>{labelLoading}</span>
    ) : (
        <span className={["flex gap-x-4", className].filter(Boolean).join(" ")}>
            <input checked={isOptedOut} onChange={handleChange} id={id} className={"flex-initial"} type="checkbox" />
            <label htmlFor={id} className="flex-1">
                {label}
            </label>
        </span>
    );
};
