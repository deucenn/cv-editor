# CV Builder Application

This is a **dynamic CV builder application** that allows users to create, preview, and download customized CVs in a structured format. Built with modern technologies, this application provides an intuitive interface for users to input personal, professional, and academic details, which are then compiled into a formatted CV.

Link: https://cv-crafter.netlify.app/

## Features

- **Dynamic Input Forms**: Add and manage multiple sections such as profile, work experience, education, skills, and projects.
- **Real-Time Preview**: See changes in real-time with a live preview of your CV.
- **PDF Export**: Download the formatted CV as a DIN A4-sized PDF.
- **Customizable Sections**: Add or remove details dynamically.
- **Responsive Design**: Optimized for all screen sizes using TailwindCSS.

## Tech Stack

- **Frontend**: React with TailwindCSS for styling.
- **UI Components**: Custom and reusable components using `@mui/icons-material` and `@shadcn`.
- **PDF Generation**: [html2canvas](https://github.com/niklasvh/html2canvas) and [jsPDF](https://github.com/parallax/jsPDF) for generating PDFs.
- **State Management**: React's `useState` for dynamic updates.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
