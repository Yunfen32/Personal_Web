# AIGC Director Portfolio

个人 AIGC 导演 / Workflow Engineer 作品集网站，基于 Vite、React、Tailwind CSS 和 Framer Motion。

## 本地运行

```bash
npm install
npm run dev
```

## 项目结构

- `src/App.jsx`：单页作品集的页面模块与交互
- `src/data/portfolio.js`：导航、画廊和静态展示数据
- `src/styles.css`：全局视觉样式与动效
- `src/assets`：网站实际打包和部署的图片、视频、封面与下载文件
- `素材投放目录`：按网页模块投放或替换素材的工作目录
- `素材归档`：高码率原始素材，不参与 Git 提交
- `docs/素材接入指南.md`：网站所需素材、命名和接入位置

## 检查与构建

```bash
npm run lint
npm run build
```

生成的 `dist` 目录属于构建产物，不需要手动提交。
