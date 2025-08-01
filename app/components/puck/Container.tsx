import type { ComponentConfig } from "@measured/puck";
import { DropZone } from "@measured/puck";

export type ContainerProps = {
  layoutType: "flex" | "grid";
  flexDirection?: "row" | "column";
  justifyContent?: "start" | "center" | "end" | "between" | "around";
  alignItems?: "start" | "center" | "end" | "stretch";
  gridRows?: 1 | 2 | 3 | 4 | 5 | 6;
  gridColumns?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 8 | 16 | 24 | 32;
  padding?: 0 | 10 | 20 | 30 | 40;
  backgroundColor?: "" | "gray-50" | "white" | "blue-50" | "green-50" | "red-50";
  maxWidth?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  centerContainer?: boolean;
  responsive?: boolean;
  showBorder?: boolean;
};

export const Container: ComponentConfig<ContainerProps> = {
  fields: {
    layoutType: {
      type: "select",
      options: [
        { label: "Flex 布局", value: "flex" },
        { label: "Grid 布局", value: "grid" },
      ],
    },
    flexDirection: {
      type: "select",
      options: [
        { label: "水平排列", value: "row" },
        { label: "垂直排列", value: "column" },
      ],
    },
    justifyContent: {
      type: "select",
      options: [
        { label: "左对齐", value: "start" },
        { label: "居中", value: "center" },
        { label: "右对齐", value: "end" },
        { label: "两端对齐", value: "between" },
        { label: "环绕对齐", value: "around" },
      ],
    },
    alignItems: {
      type: "select",
      options: [
        { label: "顶部对齐", value: "start" },
        { label: "居中对齐", value: "center" },
        { label: "底部对齐", value: "end" },
        { label: "拉伸对齐", value: "stretch" },
      ],
    },
    maxWidth: {
      type: "select",
      options: [
        { label: "无限制", value: "none" },
        { label: "小 (640px)", value: "sm" },
        { label: "中 (768px)", value: "md" },
        { label: "大 (1024px)", value: "lg" },
        { label: "超大 (1280px)", value: "xl" },
        { label: "全宽", value: "full" },
      ],
    },
    centerContainer: {
      type: "radio",
      options: [
        { label: "是", value: true },
        { label: "否", value: false },
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
    gridRows: {
      type: "select",
      options: [
        { label: "1行", value: 1 },
        { label: "2行", value: 2 },
        { label: "3行", value: 3 },
        { label: "4行", value: 4 },
        { label: "5行", value: 5 },
        { label: "6行", value: 6 },
      ],
    },
    gridColumns: {
      type: "select",
      options: [
        { label: "1列", value: 1 },
        { label: "2列", value: 2 },
        { label: "3列", value: 3 },
        { label: "4列", value: 4 },
        { label: "5列", value: 5 },
        { label: "6列", value: 6 },
      ],
    },
    gap: {
      type: "select",
      options: [
        { label: "小 (8px)", value: 8 },
        { label: "中 (16px)", value: 16 },
        { label: "大 (24px)", value: 24 },
        { label: "超大 (32px)", value: 32 },
      ],
    },
    padding: {
      type: "select",
      options: [
        { label: "无", value: 0 },
        { label: "小 (10px)", value: 10 },
        { label: "中 (20px)", value: 20 },
        { label: "大 (30px)", value: 30 },
        { label: "超大 (40px)", value: 40 },
      ],
    },
    backgroundColor: {
      type: "select",
      options: [
        { label: "无背景", value: "" },
        { label: "浅灰", value: "gray-50" },
        { label: "白色", value: "white" },
        { label: "浅蓝", value: "blue-50" },
        { label: "浅绿", value: "green-50" },
        { label: "浅红", value: "red-50" },
      ],
    },
  },
  defaultProps: {
    layoutType: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
    gridRows: 2,
    gridColumns: 2,
    gap: 16,
    padding: 20,
    backgroundColor: "", // 默认透明
    maxWidth: "none",
    centerContainer: false,
    responsive: true,
    showBorder: false,
  },
  render: ({ layoutType, flexDirection, justifyContent, alignItems, gridRows, gridColumns, gap, padding, backgroundColor, maxWidth, centerContainer, responsive, showBorder }) => {
    // 构建 Tailwind CSS 类名
    const getClassName = () => {
      let classes = ["my-4"];

      // 最大宽度控制
      const maxWidthClasses = {
        none: "",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-4xl",
        xl: "max-w-6xl",
        full: "max-w-full",
      };
      if (maxWidth && maxWidth !== "none") {
        classes.push(maxWidthClasses[maxWidth]);
      }

      // 容器居中
      if (centerContainer) {
        classes.push("mx-auto");
      }

      if (layoutType === "flex") {
        classes.push("flex");
        classes.push(flexDirection === "column" ? "flex-col" : "flex-row");

        // Justify content
        const justifyClasses = {
          start: "justify-start",
          center: "justify-center",
          end: "justify-end",
          between: "justify-between",
          around: "justify-around",
        };
        classes.push(justifyClasses[justifyContent || "start"]);

        // Align items
        const alignClasses = {
          start: "items-start",
          center: "items-center",
          end: "items-end",
          stretch: "items-stretch",
        };
        classes.push(alignClasses[alignItems || "start"]);

        classes.push("flex-wrap");
      } else {
        classes.push("grid");
        // Grid 列数配置
        if (gridColumns) {
          const gridColClasses = {
            1: "grid-cols-1",
            2: "grid-cols-2", 
            3: "grid-cols-3",
            4: "grid-cols-4",
            5: "grid-cols-5",
            6: "grid-cols-6",
          };
          classes.push(gridColClasses[gridColumns as keyof typeof gridColClasses] || "grid-cols-2");
        }
        // Grid 行数配置
        if (gridRows) {
          const gridRowClasses = {
            1: "grid-rows-1",
            2: "grid-rows-2",
            3: "grid-rows-3", 
            4: "grid-rows-4",
            5: "grid-rows-5",
            6: "grid-rows-6",
          };
          classes.push(gridRowClasses[gridRows as keyof typeof gridRowClasses] || "grid-rows-2");
        }
      }

      // Gap 类名
      const gapClass = gap === 8 ? "gap-2" : gap === 16 ? "gap-4" : gap === 24 ? "gap-6" : "gap-8";
      classes.push(gapClass);

      // Padding 类名
      if (padding > 0) {
        const paddingClass = padding === 10 ? "p-2.5" : padding === 20 ? "p-5" : padding === 30 ? "p-7.5" : "p-10";
        classes.push(paddingClass);
      }

      // 响应式支持 - 只在 flex 布局时应用
      if (layoutType === "flex" && responsive) {
        if (flexDirection === "row") {
          // 移除之前添加的 flex-row，添加响应式类
          classes = classes.filter(cls => cls !== "flex-row");
          classes.push("flex-col", "md:flex-row");
        }
        // 如果是 column，在大屏幕上可以保持列布局或改为行布局
        // 这里保持原有的列布局，用户可以根据需要调整
      }

      // 背景色类名映射
      if (backgroundColor) {
        classes.push(`bg-${backgroundColor}`);
      }

      // 边框
      if (showBorder) {
        classes.push("border border-gray-300");
      }

      return classes.join(" ");
    };



    return (
      <DropZone
        zone="container-content"
        className={getClassName()}
        allow={[
          'HeadingBlock',
          'TextBlock',
          'ImageBlock',
          'ImageSlide',
          'Container',
          'HeroSection',
          'Button',
          'Spacer',
          'Divider',
          'Columns'
        ]}
      />
    );
  },
};