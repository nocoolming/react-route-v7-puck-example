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
    const heightClass = height === 10 ? "h-2.5" : height === 20 ? "h-5" : height === 30 ? "h-8" : 
                      height === 40 ? "h-10" : height === 50 ? "h-12" : height === 60 ? "h-16" : 
                      height === 80 ? "h-20" : "h-24";
    
    const editorString = showInEditor ? "border border-dashed border-gray-400 bg-gray-50 flex items-center justify-center text-xs text-gray-600" : "";
    const className = `w-full ${heightClass} ${editorString}`;

    return (
      <div className={className}>
        {showInEditor && `间距 ${height}px`}
      </div>
    );
  },
};