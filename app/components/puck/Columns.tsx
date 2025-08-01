import type { ComponentConfig } from "@measured/puck";
import { DropZone } from "@measured/puck";

export type ColumnsProps = {
  columns: number;
  gap: 'gap-2' | 'gap-4' | 'gap-5' | 'gap-6' | 'gap-8';
  verticalAlign: "items-top" | "items-center" | "items-bottom" | "items-stretch";
  borderRadius?: "rounded-none" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-full";
};

export const Columns: ComponentConfig<ColumnsProps> = {
  fields: {
    columns: {
      type: "select",
      options: [
        { label: "2列", value: 2 },
        { label: "3列", value: 3 },
        { label: "4列", value: 4 },
      ],
    },
    gap: {
      type: "select",
      options: [
        { label: "小", value: 'gap-2' },
        { label: "中", value: 'gap-4' },
        { label: "大", value: 'gap-5' },
        { label: "超大", value: 'gap-6' },
        { label: "巨大", value: 'gap-8' },
      ],
    },
    verticalAlign: {
      type: "select",
      options: [
        { label: "顶部对齐", value: "items-top" },
        { label: "居中对齐", value: "items-center" },
        { label: "底部对齐", value: "items-bottom" },
        { label: "拉伸对齐", value: "items-stretch" },
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
    columns: 2,
    gap: 'gap-5',
    verticalAlign: "items-top",
    borderRadius: 'rounded-sm',
  },
  render: ({ columns, gap, verticalAlign, borderRadius }) => {
    const containerClasses = `flex flex-col md:flex-row ${verticalAlign} ${gap} my-3`;
    
    const dropZoneClasses = `min-h-[100px] p-2.5 ${borderRadius} border-2 border-gray-300 rounded`;

    return (
      <ul className={containerClasses}>
        {Array.from({ length: columns }, (_, index) => (
          <li key={index} className="flex-1">
            <DropZone
              zone={`column-${index}`}
              className={`flex justify-center ${dropZoneClasses}`}
              allow={[
                'HeadingBlock',
                'TextBlock',
                'ImageBlock',
                'Button',
                'Spacer',
                'Divider',
              ]}
            />
          </li>
        ))}
      </ul>
    );
  },
};