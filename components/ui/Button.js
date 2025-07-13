import { cn } from "@/utils/cn";

const buttonVariants = {
  default: "bg-[#FFFFFF1A] text-white w-full rounded-full h-fit capitalize font-bold text-[14px] hover:bg-white hover:text-primary ",
  destructive: "bg-transparent  text-white border border-white rounded-full hover:bg-destructive/90",
  outline: "border border-solid border-[1px] border-primary text-primary bg- hover:bg-primary hover:text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent text-primary bg-[#CDE1DF]  ",
  link: "text-primary underline-offset-4 hover:underline",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-full px-3",
  lg: "h-11 rounded-full px-8   font-bold text-[14px] leading-[100%] tracking-[0%] text-center capitalize",
  icon: "h-10 w-10",
};

export default function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? "span" : "button";
  
  return (
    <Comp
      className={cn(
        "inline-flex capitalize items-center justify-center  cursor-pointer  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    />
  );
} 