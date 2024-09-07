import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center gap-2 bold-sm text-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/85 rounded-[10px]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border-none bg-transparent hover:bg-primary-foreground/5",
        secondary: "bg-gray-100 hover:bg-gray-100/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        carousel: "bg-background border-2 border-gray-100",
      },
      size: {
        default: "h-9 py-2 px-4 rounded-lg",
        sm: "py-2 px-4 rounded-lg",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        carouselSize: "h-14 w-14 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
