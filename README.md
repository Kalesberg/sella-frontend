This is a [Next.js](https://nextjs.org/) project bootstrapped

## Used stack
* [park-ui](https://park-ui.com/) for the styled-system
* [tailwind](https://tailwindcss.com/) as a css framework
* methodology: [FSD](https://feature-sliced.design/docs/get-started/overview). If you are not familiar, then just follow at least these rules:
	1. Do not create any folders on `src/` folder
	2. Use `shared` folder for utilities, ui-kit and etc
	3. Use `pages` to composite full-fledged pages that are ready to connect to the router
	4. Follow the order of imports by layer priority. Module in `app` can import `pages`, `shared` code, and `pages` can only from `shared`

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding components
We are use [Park-UI component library](https://park-ui.com/docs/tailwind/components/accordion), so first of all explore if a required component present in this library
After you have found it, use the `ui` command:

```bash
yarn ui add button # or something else instead of button
```

Use snake-case to write the component name

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.