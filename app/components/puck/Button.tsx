import type { ComponentConfig } from "@measured/puck";


const primary = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
const secondary = 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500';
const outline = 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500';
const ghost = 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500';

export type ButtonProps = {
  text: string;
  href?: string;
  variant:
  primary
  | secondary
  | outline
  | ghost;
  size: "px-3 py-1.5 text-sm" | "px-4 py-2 text-base" | "px-6 py-3 text-lg";
  target?: "_self" | "_blank";
  borderRadius?: "rounded-none" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-full";
};

export const Button: ComponentConfig<ButtonProps> = {
  fields: {
    text: { type: "text" },
    href: { type: "text" },
    variant: {
      type: "select",
      options: [
        { label: "primary", value: primary },
        { label: "secondary", value: secondary },
        { label: "outline", value: outline },
        { label: "ghost", value: ghost },
      ],
    },
    size: {
      type: "select",
      options: [
        { label: "小", value: "px-3 py-1.5 text-sm" },
        { label: "中", value: "px-4 py-2 text-base" },
        { label: "大", value: "px-6 py-3 text-lg" },
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
        { label: "无圆角", value: "rounded-none" },
        { label: "小圆角", value: "rounded-sm" },
        { label: "中圆角", value: "rounded-md" },
        { label: "大圆角", value: "rounded-lg" },
        { label: "超大圆角", value: "rounded-xl" },
        { label: "圆形", value: "rounded-full" },
      ],
    },
  },
  defaultProps: {
    text: "点击按钮",
    href: "#",
    variant: primary,
    size: "px-4 py-2 text-base",
    target: "_self",
    borderRadius: "md",
  },
  render: ({ text, href, variant, size, target, borderRadius }) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const className = `${baseClasses} ${variant} ${size} ${borderRadius} `.trim();

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

