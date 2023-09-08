import type {Testimonial} from "../data/typedefs";
import {useMemo, useState} from "react";
import {matomoTrackEvent} from "../services/matomo";
import {getBreakpoints} from "../helpers/tailwind-helpers";
import {numToPx} from "../helpers/converter-helpers";

interface SectionTestimonialProps {
    headline: string;
    testimonials: Testimonial[];
    name: string;
}

const breakpoints = getBreakpoints();

const SectionTestimonial = ({headline, testimonials, name}: SectionTestimonialProps) => {
    const slides = useMemo(() => testimonials.map((testimonial, idx) => ({...testimonial, id: `slide-${idx}`})), []);
    const [selectedIdx, setSelectedIdx] = useState(0);
    const selectedSlide = slides[selectedIdx];

    const handleChange = (newIndex: number) => {
        setSelectedIdx(newIndex);
        const newSlide = slides[newIndex];
        const referrerFullName = `${newSlide.referrer.firstName}  ${newSlide.referrer.lastName}`;
        matomoTrackEvent({action: "select", category: "testimonial", name: referrerFullName, value: newIndex});
    };

    return (
        <section className="my-32 md:my-80">
            <div className="content flex flex-col items-center">
                <h2 className="font-serif text-center text-4xl md:text-5xl flex flex-col items-center mb-20 md:mb-32">
                    {headline}
                </h2>

                {/*  Avatars */}
                <ul className="inline-flex flex-wrap gap-4 md:gap-6 items-center justify-center md:mb-10">
                    {slides.map((slide, idx) => (
                        <li
                            key={slide.id}
                            className={[
                                "relative text-center flex items-center",
                                slide === selectedSlide
                                    ? "after:opacity-100 after:scale-100 after:animate-pulse"
                                    : "after:opacity-0 after:scale-75",
                            ].join(" ")}
                        >
                            <input
                                type="radio"
                                name={name}
                                id={slide.id}
                                checked={slide === selectedSlide}
                                onChange={() => handleChange(idx)}
                                className="sr-only common-focus-label-after"
                            />
                            <label
                                htmlFor={slide.id}
                                className={[
                                    "cursor-pointer no-tap-highlight inline-block rounded-full overflow-hidden transition-all",
                                    slide === selectedSlide
                                        ? "scale-150 opacity-100 shadow-2xl"
                                        : "opacity-40 md:hover:scale-110 shadow-md",
                                ].join(" ")}
                            >
                                <picture>
                                    <source
                                        srcSet={`${slide.referrer.image60.src}, ${slide.referrer.image60_2x.src} 2x`}
                                        media={`(max-width: ${numToPx(breakpoints.md)})`}
                                    />
                                    <source
                                        srcSet={`${slide.referrer.image96.src}, ${slide.referrer.image96_2x.src} 2x`}
                                        media={`(min-width: ${numToPx(breakpoints.md + 1)})`}
                                    />
                                    <img
                                        src={slide.referrer.image96.src}
                                        alt={`${slide.referrer.firstName} ${slide.referrer.lastName}`}
                                        className="w-10 h-10 md:w-16 md:h-16"
                                        width="96"
                                        height="96"
                                        loading="lazy"
                                        draggable="false"
                                    />
                                </picture>
                            </label>
                        </li>
                    ))}
                </ul>

                <div className="relative max-w-prose text-base md:text-2xl bg-[url('/img/bg-heart.svg')] bg-no-repeat bg-center">
                    <img
                        src="/img/quote.svg"
                        alt=""
                        width="60"
                        height="60"
                        className="absolute hidden md:block md:-top-8 left-0 w-10 h-10 md:w-20 md:h-20"
                    />

                    {/* Quotes --> */}
                    <div className="pt-4 md:pt-10 pb-4 md:py-20 grid grid-cols-1 grid-rows-1">
                        {slides.map((slide) => (
                            <q
                                key={slide.id}
                                aria-hidden={slide !== selectedSlide}
                                className={[
                                    "relative w-full flex justify-center items-center col-start-1 col-span-1 row-start-1 row-span-1",
                                    "transition-all duration-300",
                                    "font-thin text-center",
                                    slide === selectedSlide
                                        ? "opacity-90 scale-100 visible delay-200"
                                        : "opacity-0 scale-75 invisible",
                                ].join(" ")}
                            >
                                {slide.text}
                            </q>
                        ))}
                    </div>

                    {/* Author */}
                    <div className="grid grid-cols-1 grid-rows-1 self-end mb-14 text-right">
                        {slides.map((slide) => (
                            <address
                                key={slide.id}
                                rel="author"
                                aria-hidden={slide !== selectedSlide}
                                className={[
                                    "transition-all duration-300 origin-right col-start-1 col-span-1 row-start-1 row-span-1",
                                    slide === selectedSlide
                                        ? "opacity-100 translate-x-0 visible scale-100 delay-200"
                                        : "opacity-0 translate-x-8 scale-90 invisible delay-50",
                                ].join(" ")}
                            >
                                <h3 className="text-sm md:text-xl font-semibold">{`${slide.referrer.firstName} ${slide.referrer.lastName}`}</h3>
                                <p className="text-xs md:text-base font-light uppercase opacity-75">{`${slide.referrerRole}`}</p>
                                <p className="text-xs md:text-base font-light opacity-75">{slide.referrerCompany}</p>
                            </address>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionTestimonial;
