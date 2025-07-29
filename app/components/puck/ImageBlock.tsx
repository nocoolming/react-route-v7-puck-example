import type { ComponentConfig } from "@measured/puck";

export type ImageBlockProps = {
  src: string;
  alt: string;
};

export const ImageBlock: ComponentConfig<ImageBlockProps> = {
  fields: {
    src: { type: "text" },
    alt: { type: "text" },
  },
  defaultProps: {
    src: "https://via.placeholder.com/400x200",
    alt: "示例图片",
  },
  render: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      style={{
        maxWidth: "100%",
        height: "auto",
        margin: "16px 0",
      }}
    />
  ),
};