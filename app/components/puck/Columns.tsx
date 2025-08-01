import type { ComponentConfig } from "@measured/puck";
import { DropZone } from "@measured/puck";

export type ColumnsProps = {
  columns: number;
  gap: 2 | 4 | 5 | 6 | 8;
  verticalAlign: "top" | "center" | "bottom" | "stretch";
  showBorder: boolean;
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
        { label: "小", value: 2 },
        { label: "中", value: 4 },
        { label: "大", value: 5 },
        { label: "超大", value: 6 },
        { label: "巨大", value: 8 },
      ],
    },
    verticalAlign: {
      type: "select",
      options: [
        { label: "顶部对齐", value: "top" },
        { label: "居中对齐", value: "center" },
        { label: "底部对齐", value: "bottom" },
        { label: "拉伸对齐", value: "stretch" },
      ],
    },

    showBorder: {
      type: "radio",
      options: [
        { label: "显示", value: true },
        { label: "隐藏", value: false },
      ],
    },
  },
  defaultProps: {
    columns: 2,
    gap: 5,
    verticalAlign: "top",
    showBorder: false,
  },
  render: ({ columns, gap, verticalAlign, showBorder }) => {
    const containerClasses = `flex flex-col md:flex-row items-${verticalAlign} gap-${gap}`;

    const borderString = showBorder ? "border-2 border-dashed border-gray-300 rounded" : "";
    const dropZoneClasses = `min-h-[100px] p-2.5 ${borderString}`;

    return (
      <div className={containerClasses}>
        {Array.from({ length: columns }, (_, index) => (
          <div key={index} className="flex-1">
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
          </div>
        ))}
      </div>
    );
  },
};