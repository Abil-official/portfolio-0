import { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  // cta: string;
  technologies: string[];
  year: string;
  github: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full  grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  // cta,
  technologies,
  year,
  github,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4 sm:p-6 flex flex-col">
      <div className="flex-1 z-10 transform-gpu gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
        <div className="flex flex-col gap-2">
          <Icon className="h-10 w-10 sm:h-12 sm:w-12 origin-left transform-gpu text-neutral-700 dark:text-neutral-300 transition-all duration-300 ease-in-out group-hover:scale-75" />
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-700 dark:text-neutral-300">
              {name}
            </h3>
            <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">
              {year}
            </span>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 line-clamp-4 sm:line-clamp-none">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-amber-600/10 text-amber-700 dark:text-amber-500 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet buttons - always visible */}
      <div className="flex gap-3 mt-4 lg:hidden">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
          >
            <Github size={16} /> Code
          </a>
        )}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>

    {/* Desktop buttons - show on hover */}
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 sm:p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex lg:gap-3"
      )}
    >
      {github && (
        <Button variant="link" size="sm" className="pointer-events-auto p-0">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} /> Code
          </a>
        </Button>
      )}

      {href && (
        <Button variant="link" size="sm" className="pointer-events-auto p-0">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </Button>
      )}
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
