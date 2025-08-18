import type { ComponentConfig } from "@measured/puck";

export type DividerProps = {
  style: "border-t border-solid" | "border-t border-dashed" | "border-t border-dotted";
  color: "border-gray-300" | "border-blue-500" | "border-red-500" | "border-green-500" | "bg-yellow-500";
  thickness: "h-px" | "h-0.5" | "h-1" | "h-1.5";
};

export const Divider: ComponentConfig<DividerProps> = {
  fields: {
    style: {
      type: "select",
      options: [
        { label: "实线", value: "border-t border-solid" },
        { label: "虚线", value: "border-t border-dashed " },
        { label: "点线", value: "border-t border-dotted" },
      ],
    },
    color: {
      type: "select",
      options: [
        { label: "灰色", value: "border-gray-300" },
        { label: "蓝色", value: "border-blue-500" },
        { label: "红色", value: "border-red-500" },
        { label: "绿色", value: "border-green-500" },
        { label: "黄色", value: "border-yellow-500" },
      ],
    },
    thickness: {
      type: "select",
      options: [
        { label: "极细", value: "h-px" },
        { label: "细", value: "h-0.5" },
        { label: "中", value: "h-1" },
        { label: "粗", value: "h-1.5" },
      ],
    },

  },
  defaultProps: {
    style: "border-t border-solid",
    color: "border-gray-300",
    thickness: "h-px",
  },
  render: ({ style, color, thickness }) => {
    // console.log(`color: ${color}, select: ${style}`)

    return (
        <div className={`my-5 ${style}  ${color} ${thickness}`} >
        </div>


    );
  },
};