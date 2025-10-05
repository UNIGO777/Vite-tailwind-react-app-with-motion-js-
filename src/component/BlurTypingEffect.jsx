import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const BlurTypingEffect = ({ text, className, textSizeClass = 'text-lg sm:text-3xl md:text-5xl', duration, as = 'h1' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const blurTypingVariants = {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: (custom) => ({
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: 0.02 * custom,
                duration: duration || 0.2,
                ease: "easeOut"
            }
        })
    };

    const MotionTag = `motion.${as}`;

    return (
        <MotionTag
            ref={ref}
            className={`${textSizeClass}  bebas-neue-regular  font-bold  flex flex-wrap  ${className}`}
            key={text}
        >
            {text.split('').map((char, index) => (
                <motion.span
                    key={`${text}-${index}`}
                    custom={index}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={blurTypingVariants}
                    className="inline-block"
                    style={{ marginRight: char === ' ' ? '0.25em' : '0' }}
                >
                    {char}
                </motion.span>
            ))}
        </MotionTag>
    );
};

export default BlurTypingEffect;

// Usage example:
// <BlurTypingEffect text={currentData.title} as="h2" />
