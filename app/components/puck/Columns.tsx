import type { ComponentConfig } from "@measured/puck";
import { DropZone } from "@measured/puck";

export type ColumnsProps = {
  columns: number;
  gap: 8 | 16 | 20 | 24 | 32;
  verticalAlign: "top" | "center" | "bottom" | "stretch";
  responsive: boolean;
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
        { label: "小 (8px)", value: 8 },
        { label: "中 (16px)", value: 16 },
        { label: "大 (20px)", value: 20 },
        { label: "超大 (24px)", value: 24 },
        { label: "巨大 (32px)", value: 32 },
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
    responsive: {
      type: "radio",
      options: [
        { label: "开启", value: true },
        { label: "关闭", value: false },
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
    gap: 20,
    verticalAlign: "top",
    responsive: true,
    showBorder: false, // 默认不显示边框

  },
  render: ({ columns, gap, verticalAlign, responsive, showBorder }) => {
    // 响应式 flex 类名
    const getFlexClasses = () => {
      if (responsive) {
        // 小屏幕列布局，中屏幕以上行布局
        return "flex flex-col md:flex-row";
      } else {
        return "flex flex-row";
      }
    };

    // 构建容器类名
    const getContainerClasses = () => {
      let classes = [getFlexClasses()];

      // 垂直对齐
      const alignClasses = {
        top: "items-start",
        center: "items-center",
        bottom: "items-end",
        stretch: "items-stretch",
      };
      classes.push(alignClasses[verticalAlign]);

      return classes.join(" ");
    };

    // 构建 DropZone 类名
    const getDropZoneClasses = () => {
      let classes = ["min-h-[100px]", "p-2.5"];

      if (showBorder) {
        classes.push("border-2", "border-dashed", "border-gray-300", "rounded");
      }

      return classes.join(" ");
    };

    // 只使用 Tailwind 预设值
    const gapClasses = {
      8: "gap-2",
      16: "gap-4", 
      20: "gap-5",
      24: "gap-6",
      32: "gap-8",
    };
    
    const gapClass = gapClasses[gap as keyof typeof gapClasses] || "gap-5";
    const finalContainerClasses = `${getContainerClasses()} ${gapClass}`;

    return (
      <div className={finalContainerClasses}>
        {Array.from({ length: columns }, (_, index) => (
          <div key={index} className="flex-1">
            <DropZone
              zone={`column-${index}`}
              className={getDropZoneClasses()}
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