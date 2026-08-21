import { cn } from "@/lib/utils";

export function H1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-5xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export function H2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold",
        className
      )}
      {...props}
    />
  );
}

export function Text({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-neutral-600",
        className
      )}
      {...props}
    />
  );
}