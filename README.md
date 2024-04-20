# @jeffchi/react-pkg

[![release-please-action](https://github.com/poechiang/react-pkg/actions/workflows/release-please.yml/badge.svg?branch=main)](https://github.com/poechiang/react-pkg/actions/workflows/release-please.yml)
[![Release to NPM](https://github.com/poechiang/react-pkg/actions/workflows/release-please.yml/badge.svg)](https://github.com/poechiang/react-pkg/actions/workflows/release-please.yml)
[![release-please-alpha](https://github.com/poechiang/react-pkg/actions/workflows/alpha.yml/badge.svg)](https://github.com/poechiang/react-pkg/actions/workflows/alpha.yml)
[![release-please-beta](https://github.com/poechiang/react-pkg/actions/workflows/beta.yml/badge.svg)](https://github.com/poechiang/react-pkg/actions/workflows/beta.yml)
[![release-please-rc](https://github.com/poechiang/react-pkg/actions/workflows/rc.yml/badge.svg)](https://github.com/poechiang/react-pkg/actions/workflows/rc.yml)

一个react库，包括基于Styled的组件及一些通用的三方Hooks

## 特性

- 🚀 快速构建组件
- 💄 基于 styled-components 和 styled-system
- 📦 开箱即用
- ⚙️ 支持按需加载
- 🎨 支持主题定制
- 🌍 支持国际化
- 🪝 支持 Hooks
- 🧩 支持组件

## 安装

```bash
// Npm
npm install @jeffchi/react-pkg

// Yarn
yarn add @jeffchi/react-pkg
```

## 使用

```jsx
import { Button } from '@jeffchi/react-pkg';

export default () => <Button>Hello World</Button>;
```

## 发布

1. 修改 `package.json` 中的版本号。
2. 运行 `npm run release`。

## 示例

```jsx
import React from 'react';
import { Button } from '@jeffchi/react-pkg';

export default () => <Button>Hello World</Button>;
```

## 贡献

欢迎提交 PR 或者 Issue。

### 提交

- 请确保你的代码符合代码规范。
- 请确保你的代码通过了测试。
- 请确保你的代码通过了 lint 检查。
- 提交规范
  - fix:它代表错误修复，并与SemVer补丁相关 。
  - feat:它代表一个新功能，并与 SemVer 次要相关。
  - feat!:、或fix!:、refactor!:等，它们代表重大更改（由 表示!）并将导致 SemVer 主要。

### 代码规范

- 请确保你的代码符合 [ESLint](https://eslint.org/) 规范。
- 请确保你的代码符合 [Prettier](https://prettier.io/) 规范。

### 测试

- 请确保你的代码通过了 [Jest](https://jestjs.io/) 测试。

## 协议

MIT
