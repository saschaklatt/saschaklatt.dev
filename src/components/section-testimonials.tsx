import type {Testimonial} from "../data/typedefs";
import {useMemo, useState} from "react";
import {matomoTrackEvent} from "../services/matomo";

interface SectionTestimonialProps {
    headline: string;
    testimonials: Testimonial[];
    name: string;
}

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
                <h2 className="font-serif text-4xl md:text-5xl flex flex-col items-center md:mb-20">{headline}</h2>

                <div className="relative max-w-prose text-base md:text-2xl bg-[url('/img/bg-heart.svg')] bg-no-repeat bg-center">
                    <img
                        src="/img/quote.svg"
                        width="60"
                        height="60"
                        className="absolute top-2 hidden md:block md:top-0 left-0 w-10 h-10 md:w-20 md:h-20"
                    />

                    {/* Slides --> */}
                    <ul className="pt-10 pb-4 md:py-20 grid-cols-1 grid-rows-1 grid">
                        {slides.map((slide) => (
                            <li
                                key={slide.id}
                                aria-hidden={slide !== selectedSlide}
                                className={[
                                    `w-full flex justify-center items-center col-start-1 col-span-1 row-start-1 row-span-1 transition-all duration-300`,
                                    slide === selectedSlide
                                        ? "opacity-100 scale-100 visible delay-200"
                                        : "opacity-0 scale-75 invisible",
                                ].join(" ")}
                            >
                                <p className="font-thin opacity-90 text-center">{slide.text}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Author */}
                    <section className="text-right self-end mb-14">
                        <h3 className="text-sm md:text-xl font-semibold">{`${selectedSlide.referrer.firstName} ${selectedSlide.referrer.lastName}`}</h3>
                        <p className="text-xs md:text-base font-thin uppercase opacity-75">{`${selectedSlide.referrerRole}`}</p>
                        <p className="text-xs md:text-base font-thin opacity-75">{selectedSlide.referrerCompany}</p>
                    </section>
                </div>

                {/*  Avatars */}
                <ul className="inline-flex flex-wrap gap-4 md:gap-6 items-center justify-center">
                    {slides.map((slide, idx) => (
                        <li
                            key={slide.id}
                            className={[
                                "relative text-center flex items-center",
                                "after:transition-all after:duration-300",
                                "after:content-[' '] after:absolute after:w-1/2 after:h-1 after:bg-accent after:-bottom-5 after:left-1/2 after:block after:rounded-full after:-translate-x-1/2",
                                "after:md:h-1.5 after:md:-bottom-8",
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
                                className={`cursor-pointer inline-block rounded-full overflow-hidden transition-all h-10 w-10 md:w-16 md:h-16
                                ${
                                    slide === selectedSlide
                                        ? "scale-150 opacity-100 shadow-2xl"
                                        : "opacity-40 md:hover:scale-110 shadow-md"
                                }`}
                            >
                                <img
                                    src={slide.referrer.image.src}
                                    width={slide.referrer.image.width}
                                    height={slide.referrer.image.height}
                                    alt={`${slide.referrer.firstName} ${slide.referrer.lastName}`}
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SectionTestimonial;
