# Puck Editor 演示项目

这是一个基于 React Router 和 Puck Editor 的可视化页面编辑器演示项目。

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## 功能特性

- 🎨 **可视化编辑**: 拖拽式组件编辑界面
- 🔧 **实时配置**: 右侧属性面板实时配置组件
- 👀 **即时预览**: 编辑过程中实时预览效果
- 💾 **数据持久化**: 支持保存和加载页面数据
- 📱 **响应式设计**: 支持不同屏幕尺寸
- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling

## 包含的组件

- **标题组件** (HeadingBlock): 支持 H1-H3 标题，包含 SEO 重要性设置
- **文本组件** (TextBlock): 多行文本内容，支持 SEO 优化类型
- **按钮组件** (ButtonBlock): 可配置样式的按钮，包含 SEO 属性
- **图片组件** (ImageBlock): 支持 Alt 文本和 Title 属性的图片
- **SEO 章节** (SeoSection): 支持结构化数据的容器组件

## SEO 功能特性

- **页面级 SEO 设置**: 标题、描述、关键词、Open Graph 数据
- **组件级 SEO 优化**: 每个组件都支持 SEO 相关属性
- **结构化数据**: 支持 Schema.org 标记
- **SEO 分析工具**: 自动分析 SEO 数据并提供建议
- **Meta 标签生成**: 自动生成完整的 Meta 标签代码
- **Sitemap 生成**: 自动生成 XML 格式的站点地图
- **搜索结果预览**: 实时预览在搜索引擎中的显示效果

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

启动开发服务器:

```bash
pnpm dev
```

应用将在 `http://localhost:5173` 运行。

### 使用说明

1. 打开浏览器访问首页
2. 点击 "Puck Editor 演示" 进入编辑器
3. 从左侧拖拽组件到页面中
4. 点击组件在右侧面板编辑属性
5. 使用顶部按钮保存和预览页面

### 页面路由

- `/` - 首页
- `/puck-editor` - Puck 编辑器（包含 SEO 编辑功能）
- `/puck-preview` - 页面预览（显示 SEO 信息）
- `/seo-manager` - SEO 管理器（分析和工具）

### SEO 使用指南

1. **编辑页面 SEO**: 在 Puck Editor 中，右侧面板的 "Root" 部分可以编辑页面级 SEO 信息
2. **组件 SEO 优化**: 每个组件都有相应的 SEO 设置选项
3. **SEO 分析**: 使用 SEO 管理器查看 SEO 分析报告和建议
4. **导出工具**: 生成 Meta 标签、Sitemap 和 Robots.txt 文件
5. **预览效果**: 在预览页面查看搜索结果显示效果

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
