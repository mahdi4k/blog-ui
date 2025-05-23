# 📰 Blog UI – Next.js + Mantine

A modern blog interface built with **Next.js 15 App Router**, **Mantine v8**, and **Framer Motion**. This project demonstrates best practices in UI structure, server-side data fetching, pagination, animation, and image optimization.

---

## 🚀 Features

- 🔄 **Server-side data fetching** using `async` components
- 🗂️ **Paginated article list** (10 items per page)
- 🖼️ **Optimized responsive images** with blur placeholder & fallback
- 💥 **Framer Motion animations** on page transitions and hover
- 🌓 **Dark mode toggle** (Mantine-based)
- 🔗 **Dynamic article detail pages**
- 🧱 Clean and responsive grid layout using Mantine’s Grid system

---

## 📦 Stack

- **Next.js 15 App Router**
- **Mantine v8**
- **Framer Motion**
- **TypeScript**
---

## 🧪 Pages

| Page                | Description                        |
|---------------------|------------------------------------|
| `/`                 | Article list with pagination       |
| `/article/[id]`     | Article detail with animation      |

---

## 📷 Image Handling

- Uses `next/image` for optimization
- Custom `<ImageWithFallback />` component provides:
  - Blur **shimmer** loading placeholder
  - **Fallback image** when original fails
  - Responsive `fill` + `sizes` + `aspectRatio`

---

## 💡 How to Run

```bash
# 1. Install dependencies
yarn install

# 2. Start dev server
yarn dev
