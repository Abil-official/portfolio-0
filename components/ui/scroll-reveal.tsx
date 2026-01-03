"use client";

import React, {
    ComponentPropsWithoutRef,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { AnimatePresence, motion, MotionProps, Variants } from "motion/react";

import { cn } from "@/lib/utils";

// Animation variants for different reveal effects
const revealVariants: Record<string, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
};

export interface ScrollRevealItemProps {
    children: React.ReactNode;
    variant?: keyof typeof revealVariants;
    delay?: number;
    duration?: number;
    className?: string;
}

export function ScrollRevealItem({
    children,
    variant = "fadeUp",
    delay = 0,
    duration = 0.5,
    className,
}: ScrollRevealItemProps) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                });
            },
            { threshold: 0.1, rootMargin: "-50px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const animations: MotionProps = {
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        variants: revealVariants[variant],
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay,
            duration,
        },
    };

    return (
        <motion.div ref={ref} {...animations} className={cn("w-full", className)}>
            {children}
        </motion.div>
    );
}

export interface ScrollRevealListProps extends ComponentPropsWithoutRef<"div"> {
    children: React.ReactNode;
    variant?: keyof typeof revealVariants;
    staggerDelay?: number;
    duration?: number;
}

/**
 * ScrollRevealList - A container that reveals its children with staggered animations
 * as they scroll into view, and hides them when scrolled out of view.
 */
export const ScrollRevealList = React.memo(
    ({
        children,
        className,
        variant = "fadeUp",
        staggerDelay = 0.1,
        duration = 0.5,
        ...props
    }: ScrollRevealListProps) => {
        const childrenArray = useMemo(
            () => React.Children.toArray(children),
            [children]
        );

        return (
            <div
                className={cn("flex flex-col items-center gap-4", className)}
                {...props}
            >
                {childrenArray.map((child, index) => (
                    <ScrollRevealItem
                        key={(child as React.ReactElement).key ?? index}
                        variant={variant}
                        delay={index * staggerDelay}
                        duration={duration}
                    >
                        {child}
                    </ScrollRevealItem>
                ))}
            </div>
        );
    }
);

ScrollRevealList.displayName = "ScrollRevealList";

export interface ScrollRevealProps extends ComponentPropsWithoutRef<"div"> {
    children: React.ReactNode;
    variant?: keyof typeof revealVariants;
    delay?: number;
    duration?: number;
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

/**
 * ScrollReveal - A single element that reveals when scrolled into view
 * and optionally hides when scrolled out of view.
 */
export const ScrollReveal = React.memo(
    ({
        children,
        className,
        variant = "fadeUp",
        delay = 0,
        duration = 0.5,
        threshold = 0.1,
        rootMargin = "-50px",
        once = false,
        ...props
    }: ScrollRevealProps) => {
        const [isInView, setIsInView] = useState(false);
        const [hasAnimated, setHasAnimated] = useState(false);
        const ref = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (once) {
                            // Only animate once
                            if (entry.isIntersecting && !hasAnimated) {
                                setIsInView(true);
                                setHasAnimated(true);
                            }
                        } else {
                            // Animate on every scroll in/out
                            setIsInView(entry.isIntersecting);
                        }
                    });
                },
                { threshold, rootMargin }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [once, hasAnimated, threshold, rootMargin]);

        const animations: MotionProps = {
            initial: "hidden",
            animate: isInView ? "visible" : "hidden",
            variants: revealVariants[variant],
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay,
                duration,
            },
        };

        return (
            <motion.div
                ref={ref}
                {...animations}
                className={cn("w-full", className)}
            >
                {children}
            </motion.div>
        );
    }
);

ScrollReveal.displayName = "ScrollReveal";
