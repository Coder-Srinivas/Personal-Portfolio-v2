import React, { useEffect, useRef } from 'react';
import { useInView, useAnimation, motion } from 'framer-motion';

export const AnimatedInView = ({
    children,
    animationProps = {},
    initialProps = { opacity: 0, scale: 0.5 },
    transitionProps = {},
}) => {
    const controls = useAnimation();
    const container = useRef(null);
    const inView = useInView(container);

    useEffect(() => {
        if (inView) {
            controls.start({
                ...animationProps,
                opacity: 1,
                scale: 1,
            });
        } else {
            controls.start(initialProps);
        }
    }, [controls, inView, animationProps, initialProps]);

    return (
        <motion.div
            ref={container}
            initial={initialProps}
            animate={controls}
            transition={{
                duration: 1,
                ease: 'easeOut',
                ...transitionProps,
            }}
        >
            {children}
        </motion.div>
    );
};
