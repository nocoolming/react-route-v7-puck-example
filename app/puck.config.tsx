import type { Config } from "@measured/puck";

// 定义组件属性类型
type Props = {
    HeadingBlock: { title: string };
    TextBlock: { text: string };
    ImageBlock: { src: string; alt: string };
};

// Puck 配置
export const config: Config<Props> = {
    components: {
        HeadingBlock: {
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
        },
        TextBlock: {
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
        },
        ImageBlock: {
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
                        borderRadius: "8px",
                    }}
                />
            ),
        },
    },
};

export default config;