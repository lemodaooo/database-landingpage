# Nexastream 网站技术规格文档

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui
- **动画库**: Framer Motion
- **图标**: Lucide React

## 组件清单

### shadcn/ui 组件
- Button
- Card
- Badge
- Separator

### 自定义组件

| 组件名 | 用途 | 位置 |
|--------|------|------|
| Navbar | 导航栏 | components/Navbar.tsx |
| HeroSection | 主视觉区域 | sections/HeroSection.tsx |
| FloatingCard | 浮动功能卡片 | components/FloatingCard.tsx |
| TrustedBy | 信任标志区域 | sections/TrustedBy.tsx |
| ClusteringSection | 智能聚类功能 | sections/ClusteringSection.tsx |
| IngestionSection | 数据摄取区域 | sections/IngestionSection.tsx |
| ExpertsSection | 专家帮助区域 | sections/ExpertsSection.tsx |
| CTASection | 行动号召区域 | sections/CTASection.tsx |
| Footer | 页脚 | sections/Footer.tsx |
| CodeBlock | 代码展示块 | components/CodeBlock.tsx |
| StatusBadge | 状态标签 | components/StatusBadge.tsx |

## 动画实现方案

| 动画效果 | 实现库 | 实现方式 |
|----------|--------|----------|
| 页面加载入场 | Framer Motion | `motion.div` + `initial/animate` |
| 滚动触发显示 | Framer Motion | `whileInView` + `viewport` |
| 卡片浮动效果 | Framer Motion | `animate` + 无限循环 |
| 按钮悬停 | Tailwind CSS | `hover:` 类 |
| 卡片悬停 | Framer Motion | `whileHover` |
| 背景光晕 | CSS | 绝对定位 + blur + 动画 |
| 错开入场 | Framer Motion | `staggerChildren` |

## 项目文件结构

```
/mnt/okcomputer/output/app/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── FloatingCard.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── StatusBadge.tsx
│   │   └── ui/           # shadcn/ui 组件
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TrustedBy.tsx
│   │   ├── ClusteringSection.tsx
│   │   ├── IngestionSection.tsx
│   │   ├── ExpertsSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── lib/
│       └── utils.ts
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 依赖列表

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

## 字体配置

- Playfair Display: Google Fonts (标题)
- Inter: Google Fonts (正文)
- JetBrains Mono: Google Fonts (代码)

## 颜色变量 (Tailwind 配置)

```javascript
colors: {
  background: '#050505',
  'background-secondary': '#0a0a0a',
  card: '#111111',
  'card-border': '#222222',
  primary: '#3b82f6',
  'primary-light': '#60a5fa',
  accent: '#22d3ee',
  'text-primary': '#ffffff',
  'text-secondary': '#a1a1aa',
  'text-muted': '#71717a',
}
```

## 响应式断点

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
