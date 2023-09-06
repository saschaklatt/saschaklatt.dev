import type {Testimonial} from "../data/typedefs";
import {useMemo, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {AnimatedHeight} from "./animated-height";

interface SectionTestimonialProps {
    headline: string;
    testimonials: Testimonial[];
    name: string;
}

const SectionTestimonial = ({headline, testimonials, name}: SectionTestimonialProps) => {
    const slides = useMemo(() => testimonials.map((testimonial, idx) => ({...testimonial, id: `slide-${idx}`})), []);
    const [selectedIdx, setSelectedIdx] = useState(0);
    const selectedSlide = slides[selectedIdx];

    return (
        <section className="my-32 md:my-80">
            <div className="content flex flex-col items-center">
                <h2 className="font-serif text-4xl md:text-5xl flex flex-col items-center md:mb-20">{headline}</h2>

                <div className="max-w-prose text-base md:text-2xl bg-[url('/img/bg-heart.svg')] bg-no-repeat bg-center">
                    {/* Slides --> */}
                    <AnimatedHeight>
                        <ul className="py-10 md:py-20 grid-cols-1 grid-rows-1 grid">
                            {slides.map((slide) => (
                                <AnimatePresence key={slide.id} initial={false} mode="popLayout">
                                    {slide === selectedSlide && (
                                        <motion.li
                                            key={slide.id}
                                            initial={{opacity: 0, transform: "translateY(-20%)"}}
                                            animate={{opacity: 1, transform: "translateY(0)"}}
                                            exit={{opacity: 0, transform: "translateY(20%)"}}
                                            className={`w-full flex justify-center items-center col-start-1 col-span-1 row-start-1 row-span-1`}
                                        >
                                            <p className="font-thin opacity-90 text-center">{slide.text}</p>
                                        </motion.li>
                                    )}
                                </AnimatePresence>
                            ))}
                        </ul>
                    </AnimatedHeight>

                    {/* Author */}
                    <section className="text-right self-end mb-14">
                        <h3 className="text-sm md:text-xl font-semibold">{`${selectedSlide.referrer.firstName} ${selectedSlide.referrer.lastName}`}</h3>
                        <p className="text-xs md:text-base font-thin uppercase opacity-75">{`${selectedSlide.referrerRole}`}</p>
                        {selectedSlide.referrerCompany && (
                            <p className="text:xs md:text-base font-thin opacity-75">{selectedSlide.referrerCompany.name}</p>
                        )}
                    </section>
                </div>

                {/*  Avatars */}
                <ul className="inline-flex flex-wrap gap-4 items-center justify-center">
                    {slides.map((slide, idx) => (
                        <li key={slide.id} className={`text-center flex items-center`}>
                            <input
                                type="radio"
                                name={name}
                                id={slide.id}
                                checked={slide === selectedSlide}
                                onChange={() => setSelectedIdx(idx)}
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
                                    alt={`Profile picture of ${slide.referrer.firstName} ${slide.referrer.lastName}`}
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
