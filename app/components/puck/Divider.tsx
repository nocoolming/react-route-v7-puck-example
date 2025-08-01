import type { ComponentConfig } from "@measured/puck";

export type DividerProps = {
  style: "solid" | "dashed" | "dotted";
  thickness: 1 | 2 | 3 | 4;
  color: "gray-500" | "blue-500" | "red-500" | "green-500" | "yellow-500";
  width: '1/4' | '1/2' | '3/4' | 'full';
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
        { label: "极细 ", value: 'px' },
        { label: "细 ", value: '0.5' },
        { label: "中 ", value: '1' },
        { label: "粗 ", value: '1.5' },
      ],
    },
    color: {
      type: "select",
      options: [
        { label: "灰色", value: "gray-500" },
        { label: "蓝色", value: "blue-500" },
        { label: "红色", value: "red-500" },
        { label: "绿色", value: "green-500" },
        { label: "黄色", value: "yellow-500" },
      ],
    },
    width: {
      type: "select",
      options: [
        { label: "25%", value: '1/4' },
        { label: "50%", value: '1/2' },
        { label: "75%", value: '3/4' },
        { label: "100%", value: 'full' },
      ],
    },
  },
  defaultProps: {
    style: "solid",
    thickness: 1,
    color: "green-500",
    width: 'full',
  },
  render: ({ style, thickness, color, width }) => {
// debugger;
    let dividerClasses = `h-${thickness} w-${width} `;

    if (style === "solid") {
      dividerClasses += ` bg-${color}`;
    } else {
      dividerClasses += `  border-${color}`;
    }

    return (
      <div className={dividerClasses} >
       
      </div>
    );
  },
};