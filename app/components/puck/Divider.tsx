import type { ComponentConfig } from "@measured/puck";

export type DividerProps = {
  style: "solid" | "dashed" | "dotted";
  thickness: 1 | 2 | 3 | 4;
  color: "gray" | "blue" | "red" | "green" | "yellow";
  width: 25 | 50 | 75 | 100;
  align: "left" | "center" | "right";
};

export const Divider: ComponentConfig<DividerProps> = {
  fields: {
    style: {
      type: "select",
      options: [
        { label: "实线", value: "solid" },
        { label: "虚线", value: "dashed" },
        { label: "点线", value: "dotted" },
      ],
    },
    thickness: {
      type: "select",
      options: [
        { label: "极细 (1px)", value: 1 },
        { label: "细 (2px)", value: 2 },
        { label: "中 (3px)", value: 3 },
        { label: "粗 (4px)", value: 4 },
      ],
    },
    color: {
      type: "select",
      options: [
        { label: "灰色", value: "gray" },
        { label: "蓝色", value: "blue" },
        { label: "红色", value: "red" },
        { label: "绿色", value: "green" },
        { label: "黄色", value: "yellow" },
      ],
    },
    width: {
      type: "select",
      options: [
        { label: "25%", value: 25 },
        { label: "50%", value: 50 },
        { label: "75%", value: 75 },
        { label: "100%", value: 100 },
      ],
    },
    align: {
      type: "select",
      options: [
        { label: "左对齐", value: "left" },
        { label: "居中", value: "center" },
        { label: "右对齐", value: "right" },
      ],
    },
  },
  defaultProps: {
    style: "solid",
    thickness: 1,
    color: "gray",
    width: 100,
    align: "center",
  },
  render: ({ style, thickness, color, width, align }) => {
    // 容器对齐类名
    const alignClasses = {
      left: "justify-start",
      center: "justify-center", 
      right: "justify-end",
    };

    const containerClasses = `flex my-5 ${alignClasses[align]}`;

    // 只使用 Tailwind 预设值
    const widthClasses = {
      25: "w-1/4",
      50: "w-1/2",
      75: "w-3/4", 
      100: "w-full",
    };
    
    const heightClasses = {
      1: "h-px",
      2: "h-0.5",
      3: "h-1",
      4: "h-1.5",
    };

    const colorClasses = {
      gray: "gray-300",
      blue: "blue-500",
      red: "red-500",
      green: "green-500",
      yellow: "yellow-500",
    };
    
    const widthClass = widthClasses[width as keyof typeof widthClasses] || "w-full";
    const heightClass = heightClasses[thickness as keyof typeof heightClasses] || "h-px";
    const colorClass = colorClasses[color as keyof typeof colorClasses] || "gray-300";
    
    let dividerClasses = `${widthClass} ${heightClass}`;
    
    if (style === "solid") {
      dividerClasses += ` bg-${colorClass}`;
    } else {
      const borderStyle = style === "dashed" ? "border-dashed" : "border-dotted";
      dividerClasses += ` border-t ${borderStyle} border-${colorClass}`;
    }

    return (
      <div className={containerClasses}>
        <div className={dividerClasses} />
      </div>
    );
  },
};