# Puck 网页编辑器组件库

这是一个基于 Puck 的网页编辑器组件库，类似于 WordPress Elementor、Wix、Shopify 的网页编辑器。

## 代码规范

1. **样式规范**: 除非是第三方库，否则不能使用 `style` 属性或自定义 CSS
2. **Tailwind CSS**: 所有样式必须使用 Tailwind CSS 实现
3. **类型安全**: 所有组件都有完整的 TypeScript 类型定义

## 组件列表

### 基础组件
- **HeadingBlock**: 标题组件，支持 H1-H6 级别、对齐方式、颜色、字重
- **TextBlock**: 文本组件，支持对齐方式、字体大小、颜色、字重、行高
- **ImageBlock**: 图片组件，支持圆角、边框样式
- **Button**: 按钮组件，支持多种样式变体、大小、全宽选项

### 布局组件
- **Container**: 容器组件，支持 Flex 和 Grid 布局、响应式、背景色
- **Columns**: 多列布局组件，支持 2-4 列、间距、垂直对齐、响应式
- **HeroSection**: 英雄区块组件，支持背景图片、遮罩、文本内容

### 媒体组件
- **ImageSlide**: 图片轮播组件，支持自动播放、导航、分页

### 装饰组件
- **Divider**: 分割线组件，支持样式、粗细、颜色、宽度、对齐
- **Spacer**: 间距组件，支持多种高度选项

## 使用示例

```typescript
import { HeadingBlock, TextBlock, ImageBlock } from './components/puck';

// 在 Puck 配置中使用
const config = {
  components: {
    HeadingBlock,
    TextBlock,
    ImageBlock,
    // ... 其他组件
  }
};
```

## 特性

- 🎨 完全使用 Tailwind CSS 实现样式
- 📱 响应式设计支持
- 🔧 丰富的配置选项
- 💪 TypeScript 类型安全
- 🚀 高性能渲染
- 🎯 符合现代网页编辑器标准

## 开发规范

- 所有新组件必须遵循 Tailwind CSS 规范
- 组件属性必须有完整的类型定义
- 支持常见的设计需求（对齐、颜色、大小等）
- 保持组件的简洁性和可复用性