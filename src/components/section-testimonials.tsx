import type {Testimonial} from "../data/typedefs";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {AnimatedHeight} from "./animated-height";

interface SectionTestimonialProps {
    headline: string;
    testimonials: Testimonial[];
    name: string;
}

const SectionTestimonial = ({headline, testimonials, name}: SectionTestimonialProps) => {
    const initialSlideId = `slide-0`;
    const [selectedSlideId, setSelectedSlideId] = useState(initialSlideId);

    const slides = testimonials.map((testimonial, idx) => ({
        ...testimonial,
        active: `slide-${idx}` === selectedSlideId,
        id: `slide-${idx}`,
    }));

    const handleRadioChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        console.log(evt.target.id);
        setSelectedSlideId(evt.target.id);
    };

    return (
        <section className="my-32 md:my-80">
            <div className="content flex flex-col items-center">
                <h2 className="font-serif text-4xl md:text-6xl flex flex-col items-center">{headline}</h2>

                {/* Slides --> */}
                <AnimatedHeight>
                    <ul className="py-20 grid-cols-1 grid-rows-1 grid">
                        {slides.map(({id, text, active}) => (
                            <AnimatePresence key={id} initial={false} mode="popLayout">
                                {active && (
                                    <motion.li
                                        key={id}
                                        initial={{opacity: 0, transform: "translateY(-20%)"}}
                                        animate={{opacity: 1, transform: "translateY(0)"}}
                                        exit={{opacity: 0, transform: "translateY(20%)"}}
                                        className={`w-full flex justify-center items-center col-start-1 col-span-1 row-start-1 row-span-1`}
                                    >
                                        <p className="font-thin max-w-prose text-2xl opacity-75 text-center italic">{text}</p>
                                    </motion.li>
                                )}
                            </AnimatePresence>
                        ))}
                    </ul>
                </AnimatedHeight>

                {/*  Avatars */}
                <ul className="inline-flex flex-wrap gap-4 items-center h-28">
                    {slides.map(({referrer, id, active}) => (
                        <li key={id} className={`text-center h-28 flex items-center`}>
                            <input
                                type="radio"
                                name={name}
                                id={id}
                                checked={active}
                                onChange={handleRadioChange}
                                className="sr-only common-focus-label-after"
                            />
                            <label
                                htmlFor={id}
                                className={`cursor-pointer inline-block rounded-full overflow-hidden transition-all 
                                ${
                                    active
                                        ? "w-28 h-28 opacity-100 shadow-2xl"
                                        : "w-20 h-20 opacity-50 md:hover:scale-110 shadow-md"
                                }`}
                            >
                                <img
                                    src={referrer.image.src}
                                    width={referrer.image.width}
                                    height={referrer.image.height}
                                    alt={`Profile picture of ${referrer.firstName} ${referrer.lastName}`}
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
