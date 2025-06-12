import { cn } from "@st/lib/utils";
import * as React from "react";

type InputWithIconProps = React.ComponentPropsWithoutRef<"input"> & {
  icon?: React.ReactNode;
};

const InputWithIcon = React.forwardRef<
  React.ComponentRef<"input">,
  InputWithIconProps
>(({ className, type, icon, ...props }, ref) => {
  return (
    <div className="w-full relative flex items-center">
      <input
        type={type}
        className={cn(
          "pl-3.5 h-12  w-full bg-bg-color dark:placeholder:text-slate-400 py-2 rounded-xl placeholder:text-sm placeholder:text-gray-600 border border-border-faded transition duration-300 ease focus:outline-none focus:border-border-primary",
          icon && "pr-9",
          className
        )}
        ref={ref}
        {...props}
      />
      {icon && (
        <div className="absolute right-4 text-center transition-all disabled:pointer-events-none disabled:opacity-50">
          {icon}
        </div>
      )}
    </div>
  );
});

InputWithIcon.displayName = "InputWithIcon";

export { InputWithIcon };
