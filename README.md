This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## About the tool itself

This tool has functions to make developing collages for the app easier, it has a visual interface that allows developers to see the placements of frames inside a collage and move them according to visuals. Then developer can easily get a generated JSON string and put it inside the app.

The tool also has shape saving/loading function, this was done because there are cases where some collages are pretty much the same functionally

Steps to use the tool

1. import image file by clicking choose file button
2. add frame by clicking add frame button and start editing the frame to fit the image
3. save preset will save the generated JSON to be used in other frames
4. Other functions like deleting frames and presets should be self explanatory

This is an internal tool for our own app, I just made it public because there is nothing to hide here. this tool is worthless for people who are unrelated to the project.

