import type { ComponentConfig } from "@measured/puck";

export type HeadingBlockProps = {
  title: string;
};

export const HeadingBlock: ComponentConfig<HeadingBlockProps> = {
  fields: {
    title: { type: "text" },
  },
  defaultProps: {
    title: "标题",
  },
  render: ({ title }) => (
    <h1 style={{ margin: "16px 0", fontSize: "24px", fontWeight: "bold" }}>
      {title}
    </h1>
  ),
};