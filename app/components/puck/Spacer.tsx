import type { ComponentConfig } from "@measured/puck";

export type SpacerProps = {
  height: "h-2.5" | "h-5" | "h-8" | "h-10" | "h-12" | "h-16" | "h-20" | "h-24";
};

export const Spacer: ComponentConfig<SpacerProps> = {
  fields: {
    height: {
      type: "select",
      options: [
        { label: "极小", value: "h-2.5" },
        { label: "小", value: "h-5" },
        { label: "中小", value: "h-8" },
        { label: "中", value: "h-10" },
        { label: "中大", value: "h-12" },
        { label: "大", value: "h-16" },
        { label: "超大", value: "h-20" },
        { label: "巨大", value: "h-24" },
      ],
    },
  },
  defaultProps: {
    height: "h-10",
  },
  render: ({ height }) => {
    const baseClasses = "w-full border border-dashed border-gray-400 bg-gray-50 flex items-center justify-center text-xs text-gray-600";
    const className = `${baseClasses} ${height}`.trim();

    return (
      <div className={className}>
        间距组件
      </div>
    );
  },
};