# 发布说明 / Publish

本仓库已配置通过 **GitHub Pages** 自动发布。推送 `main` 分支后会触发构建并部署。

## 首次发布（只需做一次）

1. 打开仓库：https://github.com/lemodaooo/database-landingpage  
2. 进入 **Settings** → **Pages**  
3. 在 **Build and deployment** 中：
   - **Source** 选择 **GitHub Actions**  
4. 保存后，每次推送到 `main` 或手动运行 **Actions** 中的 “Deploy to GitHub Pages” 工作流即可发布。

## 访问地址

启用并完成首次部署后，网站地址为：

**https://lemodaooo.github.io/database-landingpage/**

## 其他发布方式（可选）

- **Vercel**：在 [vercel.com](https://vercel.com) 导入该 GitHub 仓库，无需改代码即可部署（使用默认 `base: './'`）。  
- **Netlify**：在 [netlify.com](https://netlify.com) 连接该仓库，构建命令 `npm run build`，发布目录 `dist`。
