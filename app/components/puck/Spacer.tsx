import type { ComponentConfig } from "@measured/puck";

export type SpacerProps = {
  height: 10 | 20 | 30 | 40 | 50 | 60 | 80 | 100;
  showInEditor?: boolean;
};

export const Spacer: ComponentConfig<SpacerProps> = {
  fields: {
    height: {
      type: "select",
      options: [
        { label: "极小 (10px)", value: 10 },
        { label: "小 (20px)", value: 20 },
        { label: "中小 (30px)", value: 30 },
        { label: "中 (40px)", value: 40 },
        { label: "中大 (50px)", value: 50 },
        { label: "大 (60px)", value: 60 },
        { label: "超大 (80px)", value: 80 },
        { label: "巨大 (100px)", value: 100 },
      ],
    },
    showInEditor: {
      type: "radio",
      options: [
        { label: "显示", value: true },
        { label: "隐藏", value: false },
      ],
    },
  },
  defaultProps: {
    height: 40,
    showInEditor: true,
  },
  render: ({ height, showInEditor }) => {
    // 基础类名
    const baseClasses = "w-full";
    
    // 编辑器显示类名
    const editorClasses = showInEditor 
      ? "border border-dashed border-gray-400 bg-gray-50 flex items-center justify-center text-xs text-gray-600"
      : "";

    const className = `${baseClasses} ${editorClasses}`.trim();

    // 只使用 Tailwind 预设高度值
    const heightClasses = {
      10: "h-2.5",
      20: "h-5",
      30: "h-8", 
      40: "h-10",
      50: "h-12",
      60: "h-16",
      80: "h-20",
      100: "h-24",
    };
    
    const heightClass = heightClasses[height as keyof typeof heightClasses] || "h-10";
    const finalClassName = `${className} ${heightClass}`;

    return (
      <div className={finalClassName}>
        {showInEditor && `间距 ${height}px`}
      </div>
    );
  },
};