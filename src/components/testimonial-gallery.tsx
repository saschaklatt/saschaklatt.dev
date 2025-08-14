import type {CollectionEntry} from "astro:content";
import {useState, type ChangeEventHandler} from "react";
import {useSwipeable} from "react-swipeable";

import {classList} from "@/utils/common";
import {matomoTrackEvent} from "@/services/matomo";

interface SectionTestimonialProps {
    testimonials: CollectionEntry<"testimonials">[];
    name: string;
}

const TestimonialGallery = ({testimonials, name}: SectionTestimonialProps) => {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const selectedSlide = testimonials[selectedIdx];

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            const nextIdx = selectedIdx < testimonials.length - 1 ? selectedIdx + 1 : 0;
            const referrerFullName = testimonials[nextIdx].data.referrer;
            setSelectedIdx(nextIdx);
            matomoTrackEvent({action: "swipe-left", category: "testimonial", name: referrerFullName, value: nextIdx});
        },
        onSwipedRight: () => {
            const prevIdx = selectedIdx > 0 ? selectedIdx - 1 : testimonials.length - 1;
            const referrerFullName = testimonials[prevIdx].data.referrer;
            setSelectedIdx(prevIdx);
            matomoTrackEvent({action: "swipe-right", category: "testimonial", name: referrerFullName, value: prevIdx});
        },
    });

    const handleRadioChange = (newIndex: number) => {
        setSelectedIdx(newIndex);
        const name = testimonials[newIndex].data.referrer;
        matomoTrackEvent({action: "select", category: "testimonial", name, value: newIndex});
    };

    return (
        <>
            {/* Avatars */}
            <div className="inline-flex flex-wrap gap-4 md:gap-6 items-center justify-center md:mb-10">
                {testimonials.map((slide, idx) => (
                    <Avatar
                        key={slide.id}
                        testimonial={slide}
                        isActive={slide === selectedSlide}
                        onChange={() => handleRadioChange(idx)}
                        name={name}
                    />
                ))}
            </div>

            <div className="relative max-w-prose text-base md:text-2xl bg-[url('/img/bg-heart.svg')] bg-no-repeat bg-center">
                <img
                    src="/img/quote.svg"
                    alt=""
                    width="60"
                    height="60"
                    className="absolute hidden md:block md:-top-8 left-0 w-10 h-10 md:w-20 md:h-20"
                />

                {/* Quote */}
                <div className="pt-4 md:pt-10 pb-4 md:py-20 grid grid-cols-1 grid-rows-1" {...swipeHandlers}>
                    {testimonials.map((slide) => (
                        <Quote key={slide.id} testimonial={slide} isActive={slide === selectedSlide} />
                    ))}
                </div>

                {/* Author */}
                <div className="grid grid-cols-1 grid-rows-1 self-end mb-14 text-right">
                    {testimonials.map((slide) => (
                        <Author key={slide.id} testimonial={slide} isActive={slide === selectedSlide} />
                    ))}
                </div>
            </div>
        </>
    );
};

interface AvatarProps {
    isActive: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    testimonial: CollectionEntry<"testimonials">;
    name?: string;
}

const Avatar = ({testimonial, isActive, onChange, name}: AvatarProps) => (
    <div
        className={classList([
            "relative text-center flex items-center",
            isActive ? "after:opacity-100 after:scale-100 after:animate-pulse" : "after:opacity-0 after:scale-75",
        ])}
    >
        <input
            type="radio"
            name={name}
            id={testimonial.id}
            checked={isActive}
            onChange={onChange}
            className="sr-only common-focus-label-after"
        />
        <label
            htmlFor={testimonial.id}
            className={classList([
                "cursor-pointer no-tap-highlight inline-block rounded-full overflow-hidden transition-all",
                isActive ? "scale-150 opacity-100 shadow-2xl" : "opacity-40 md:hover:scale-110 shadow-md",
            ])}
        >
            <picture>
                <img
                    src={testimonial.data.referrerImage?.src}
                    alt={`Profile picture of ${testimonial.data.referrer}`}
                    className="w-10 h-10 md:w-16 md:h-16"
                    width="96"
                    height="96"
                    loading="lazy"
                    draggable="false"
                />
            </picture>
        </label>
    </div>
);

const Quote = ({testimonial, isActive}: {testimonial: CollectionEntry<"testimonials">; isActive: boolean}) => (
    <q
        aria-hidden={!isActive}
        className={classList([
            "relative w-full flex justify-center items-center col-start-1 col-span-1 row-start-1 row-span-1",
            "transition-all duration-300",
            "font-thin text-center",
            "pointer-events-none lg:pointer-events-auto",
            isActive ? "opacity-90 scale-100 visible delay-200" : "opacity-0 scale-75 invisible",
        ])}
    >
        {testimonial.body}
    </q>
);

const Author = ({testimonial, isActive}: {testimonial: CollectionEntry<"testimonials">; isActive: boolean}) => (
    <address
        key={testimonial.id}
        rel="author"
        aria-hidden={!isActive}
        className={classList([
            "transition-all duration-300 origin-right col-start-1 col-span-1 row-start-1 row-span-1",
            isActive
                ? "opacity-100 translate-x-0 visible scale-100 delay-200"
                : "opacity-0 translate-x-8 scale-90 invisible delay-50",
        ])}
    >
        <h3 className="text-sm md:text-xl font-semibold">{`${testimonial.data.referrer}`}</h3>
        <p className="text-xs md:text-base font-light uppercase opacity-75">{`${testimonial.data.referrerRole}`}</p>
        <p className="text-xs md:text-base font-light opacity-75">{testimonial.data.referrerCompany}</p>
    </address>
);

export default TestimonialGallery;
