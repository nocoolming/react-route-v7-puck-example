import type { ComponentConfig } from "@measured/puck";

export type ButtonProps = {
  text: string;
  href?: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  size: "sm" | "md" | "lg";
  fullWidth?: boolean;
  target?: "_self" | "_blank";
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
};

export const Button: ComponentConfig<ButtonProps> = {
  fields: {
    text: { type: "text" },
    href: { type: "text" },
    variant: {
      type: "select",
      options: [
        { label: "主要按钮", value: "primary" },
        { label: "次要按钮", value: "secondary" },
        { label: "边框按钮", value: "outline" },
        { label: "幽灵按钮", value: "ghost" },
      ],
    },
    size: {
      type: "select",
      options: [
        { label: "小", value: "sm" },
        { label: "中", value: "md" },
        { label: "大", value: "lg" },
      ],
    },
    fullWidth: {
      type: "radio",
      options: [
        { label: "是", value: true },
        { label: "否", value: false },
      ],
    },
    target: {
      type: "select",
      options: [
        { label: "当前窗口", value: "_self" },
        { label: "新窗口", value: "_blank" },
      ],
    },
    borderRadius: {
      type: "select",
      options: [
        { label: "无圆角", value: "none" },
        { label: "小圆角", value: "sm" },
        { label: "中圆角", value: "md" },
        { label: "大圆角", value: "lg" },
        { label: "超大圆角", value: "xl" },
        { label: "圆形", value: "full" },
      ],
    },
  },
  defaultProps: {
    text: "点击按钮",
    href: "#",
    variant: "primary",
    size: "md",
    fullWidth: false,
    target: "_self",
    borderRadius: "md",
  },
  render: ({ text, href, variant, size, fullWidth, target, borderRadius }) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variantClasses = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
      ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    };

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const radiusClasses = {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg", 
      xl: "rounded-xl",
      full: "rounded-full",
    };

    const widthClass = fullWidth ? "w-full" : "";
    const radiusClass = radiusClasses[borderRadius as keyof typeof radiusClasses] || "rounded-md";

    const className = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      radiusClass,
      widthClass,
    ].filter(Boolean).join(" ");

    return (
      <a
        href={href}
        target={target}
        className={className}
      >
        {text}
      </a>
    );
  },
};