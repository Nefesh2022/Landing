This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and node@18.2.0.

## Getting Started

First time you open this repo, install dependencies:

```bash
npm install
# or
yarn install
```

Then you can run the development server anytime you need:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000/template](http://localhost:3000/template) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Scaffolding

Add files in the `/pages` folder and they will be automatically mapped to new routes.

Put common use components in the `/components` folder and use the `/views` folder to save components related to a single view or page.

Use the `/services` folder to save your services related files and global constants files. Services should fetch from API routes and then API routes should interact with Backend endpoints. All API routes are in the `/pages/api` folder and each file is mapped to an API route endpoint.

The `/utils` folder can be used to store common use functions or custom libraries.

If you create custom React Hooks, you can save them on a `/hooks` folder.

### Creating a component

To create a component, you can use the following command:

```bash
npm run cast <ComponentName> [<directory>]
# or
yarn cast <ComponentName> [<directory>]
```

This will create a new component in the `/components` folder. If you want to create a component inside a specific folder, you can pass the folder name as a second argument.

For example, if you want to create a component called `Button` inside the `/components` folder, you can simply run `npm run cast Button`.

This will create this simple scaffolding:

```bash
components
└───Button
		│   index.js
		│   Button.jsx
		│   Button.module.css
```

If you want to create a component called `MediaButton` inside a different folder, for example, `/components/TinyComponents` folder, you can run `npm run cast MediaButton components/TinyComponents`.

### Creating a page

To create a page, you can use the following command:

```bash
npm run cast <page-route> -- --page
# or
yarn cast <page-route> -- --page
```

This will create a new page in the `/pages` folder. If you want to create a page with a specific route, include the complete route as the first argument.

For example, if you want to create a page called `AboutApp` with the route `/menu/about-app`, you can simply run `npm run cast menu/about-app -- --page`.

This will create this simple scaffolding:

```bash
pages
└───menu
		│   about-app.js
styles
└───Menu
		│   AboutApp.module.css
```
