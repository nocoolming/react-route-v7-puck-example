import type { ComponentConfig } from "@measured/puck";

export type TextBlockProps = {
  text: string;
};

export const TextBlock: ComponentConfig<TextBlockProps> = {
  fields: {
    text: { type: "textarea" },
  },
  defaultProps: {
    text: "这里是文本内容...",
  },
  render: ({ text }) => (
    <p style={{ margin: "16px 0", lineHeight: "1.6" }}>
      {text}
    </p>
  ),
};