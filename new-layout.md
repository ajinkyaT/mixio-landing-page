Directory structure:
└── necto-pro-boilerplate-landing-next/
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .env.example
├── .eslintrc.json
├── public/
│ ├── noise.webp
│ ├── assets/
│ ├── fonts/
│ │ ├── AeonikPro-Air.woff2
│ │ ├── AeonikPro-Black.woff2
│ │ ├── AeonikPro-Bold.woff2
│ │ ├── AeonikPro-Light.woff2
│ │ ├── AeonikPro-Medium.woff2
│ │ ├── AeonikPro-Regular.woff2
│ │ └── AeonikPro-Thin.woff2
│ └── icons/
└── src/
├── app/
│ ├── layout.tsx
│ ├── not-found.tsx
│ └── (marketing)/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── changelog/
│ │ └── page.tsx
│ ├── enterprise/
│ │ └── page.tsx
│ ├── features/
│ │ ├── analytics/
│ │ │ └── page.tsx
│ │ ├── link-shortening/
│ │ │ └── page.tsx
│ │ ├── password-protection/
│ │ │ └── page.tsx
│ │ └── qr-codes/
│ │ └── page.tsx
│ ├── pricing/
│ │ └── page.tsx
│ ├── privacy/
│ │ └── page.tsx
│ ├── resources/
│ │ ├── blog/
│ │ │ ├── page.tsx
│ │ │ └── [slug]/
│ │ │ └── page.tsx
│ │ └── help/
│ │ └── page.tsx
│ └── terms/
│ └── page.tsx
├── components/
│ ├── index.ts
│ ├── pricing-cards.tsx
│ ├── blog/
│ │ └── blogs.tsx
│ ├── dashboard/
│ │ ├── dashboard-navbar.tsx
│ │ └── sidebar.tsx
│ ├── global/
│ │ ├── animation-container.tsx
│ │ ├── icons.tsx
│ │ └── max-width-wrapper.tsx
│ ├── navigation/
│ │ ├── footer.tsx
│ │ ├── mobile-navbar.tsx
│ │ └── navbar.tsx
│ ├── providers/
│ │ └── providers.tsx
│ └── ui/
│ ├── accordion.tsx
│ ├── alert-dialog.tsx
│ ├── alert.tsx
│ ├── animated-background.tsx
│ ├── animated-beam.tsx
│ ├── animated-text.tsx
│ ├── aspect-ratio.tsx
│ ├── avatar.tsx
│ ├── background.tsx
│ ├── badge.tsx
│ ├── bento-grid.tsx
│ ├── blur-image.tsx
│ ├── border-beam.tsx
│ ├── breadcrumb.tsx
│ ├── button.tsx
│ ├── calendar.tsx
│ ├── card.tsx
│ ├── carousel.tsx
│ ├── checkbox.tsx
│ ├── collapsible.tsx
│ ├── command.tsx
│ ├── context-menu.tsx
│ ├── copy-button.tsx
│ ├── dialog.tsx
│ ├── drawer.tsx
│ ├── dropdown-menu.tsx
│ ├── form.tsx
│ ├── hover-card.tsx
│ ├── input-otp.tsx
│ ├── input.tsx
│ ├── integrations.tsx
│ ├── label.tsx
│ ├── lamp.tsx
│ ├── logo.tsx
│ ├── magic-badge.tsx
│ ├── magic-card.tsx
│ ├── marquee.tsx
│ ├── menubar.tsx
│ ├── modal.tsx
│ ├── navigation-menu.tsx
│ ├── pagination.tsx
│ ├── particles.tsx
│ ├── popover.tsx
│ ├── progress.tsx
│ ├── radio-group.tsx
│ ├── resizable.tsx
│ ├── retro-grid.tsx
│ ├── scroll-area.tsx
│ ├── select.tsx
│ ├── separator.tsx
│ ├── sheet.tsx
│ ├── skeleton.tsx
│ ├── slider.tsx
│ ├── sonner.tsx
│ ├── switch.tsx
│ ├── table.tsx
│ ├── tabs.tsx
│ ├── text-hover-effect.tsx
│ ├── textarea.tsx
│ ├── toast.tsx
│ ├── toggle-group.tsx
│ ├── toggle.tsx
│ └── tooltip.tsx
├── lib/
│ ├── index.ts
│ └── names.ts
├── styles/
│ └── globals.css
└── utils/
├── index.ts
├── constants/
│ ├── animation.ts
│ ├── blogs.json
│ ├── faq.ts
│ ├── fonts.ts
│ ├── misc.ts
│ ├── nav-links.ts
│ ├── pricing.ts
│ └── site.ts
└── functions/
├── cn.ts
├── metadata.ts
└── urls.ts

Files Content:

# (Files content cropped to 300k characters, download full ingest to see more)

# FILE: components.json

{
"$schema": "https://ui.shadcn.com/schema.json",
"style": "default",
"rsc": true,
"tsx": true,
"tailwind": {
"config": "tailwind.config.ts",
"css": "src/app/globals.css",
"baseColor": "neutral",
"cssVariables": true,
"prefix": ""
},
"aliases": {
"components": "@/components",
"utils": "@/utils"
}
}

================================================
FILE: next.config.mjs
================================================
/\*_ @type {import('next').NextConfig} _/
const nextConfig = {
output: "export",
};

export default nextConfig;

================================================
FILE: package.json
================================================
{
"name": "necto-studio",
"version": "0.1.0",
"private": true,
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
},
"dependencies": {
"@hookform/resolvers": "^3.6.0",
"@radix-ui/react-accordion": "^1.1.2",
"@radix-ui/react-alert-dialog": "^1.0.5",
"@radix-ui/react-aspect-ratio": "^1.0.3",
"@radix-ui/react-avatar": "^1.0.4",
"@radix-ui/react-checkbox": "^1.0.4",
"@radix-ui/react-collapsible": "^1.0.3",
"@radix-ui/react-context-menu": "^2.1.5",
"@radix-ui/react-dialog": "^1.0.5",
"@radix-ui/react-dropdown-menu": "^2.0.6",
"@radix-ui/react-hover-card": "^1.0.7",
"@radix-ui/react-label": "^2.0.2",
"@radix-ui/react-menubar": "^1.0.4",
"@radix-ui/react-navigation-menu": "^1.1.4",
"@radix-ui/react-popover": "^1.0.7",
"@radix-ui/react-progress": "^1.0.3",
"@radix-ui/react-radio-group": "^1.1.3",
"@radix-ui/react-scroll-area": "^1.0.5",
"@radix-ui/react-select": "^2.0.0",
"@radix-ui/react-separator": "^1.0.3",
"@radix-ui/react-slider": "^1.1.2",
"@radix-ui/react-slot": "^1.0.2",
"@radix-ui/react-switch": "^1.0.3",
"@radix-ui/react-tabs": "^1.0.4",
"@radix-ui/react-toast": "^1.1.5",
"@radix-ui/react-toggle": "^1.0.3",
"@radix-ui/react-toggle-group": "^1.0.4",
"@radix-ui/react-tooltip": "^1.0.7",
"@tanstack/react-query": "^5.40.1",
"class-variance-authority": "^0.7.0",
"clsx": "^2.1.1",
"cmdk": "^1.0.0",
"date-fns": "^3.6.0",
"embla-carousel-react": "^8.1.3",
"framer-motion": "^11.2.10",
"input-otp": "^1.2.4",
"lucide-react": "^0.383.0",
"mini-svg-data-uri": "^1.4.4",
"next": "14.2.13",
"next-themes": "^0.3.0",
"react": "^18",
"react-day-picker": "^8.10.1",
"react-dom": "^18",
"react-hook-form": "^7.51.5",
"react-resizable-panels": "^2.0.19",
"sonner": "^1.4.41",
"tailwind-merge": "^2.3.0",
"tailwind-scrollbar-hide": "^1.1.7",
"tailwindcss-animate": "^1.0.7",
"unique-names-generator": "^4.7.1",
"usehooks-ts": "^3.1.0",
"vaul": "^0.9.1",
"zod": "^3.23.8"
},
"devDependencies": {
"@types/node": "^20",
"@types/react": "^18",
"@types/react-dom": "^18",
"eslint": "^8",
"eslint-config-next": "14.2.3",
"postcss": "^8",
"tailwindcss": "^3.4.1",
"typescript": "^5"
}
}

================================================
FILE: postcss.config.mjs
================================================
/\*_ @type {import('postcss-load-config').Config} _/
const config = {
plugins: {
tailwindcss: {},
},
};

export default config;

================================================
FILE: tailwind.config.ts
================================================
import type { Config } from "tailwindcss"

const colors = require("tailwindcss/colors");
const svgToDataUri = require("mini-svg-data-uri");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
darkMode: ["class"],
content: [
'./pages/**/*.{ts,tsx}',
'./components/**/*.{ts,tsx}',
'./app/**/*.{ts,tsx}',
'./src/**/*.{ts,tsx}',
],
prefix: "",
theme: {
container: {
center: true,
padding: "2rem",
screens: {
"2xl": "1400px",
},
},
extend: {
colors: {
border: "hsl(var(--border))",
input: "hsl(var(--input))",
ring: "hsl(var(--ring))",
background: "hsl(var(--background))",
foreground: "hsl(var(--foreground))",
primary: {
DEFAULT: "hsl(var(--primary))",
foreground: "hsl(var(--primary-foreground))",
},
secondary: {
DEFAULT: "hsl(var(--secondary))",
foreground: "hsl(var(--secondary-foreground))",
},
tertiary: {
DEFAULT: "hsl(var(--tertiary))",
foreground: "hsl(var(--tertiary-foreground))",
},
subtle: {
DEFAULT: "hsl(var(--subtle))",
foreground: "hsl(var(--subtle-foreground))",
},
destructive: {
DEFAULT: "hsl(var(--destructive))",
foreground: "hsl(var(--destructive-foreground))",
},
muted: {
DEFAULT: "hsl(var(--muted))",
foreground: "hsl(var(--muted-foreground))",
},
accent: {
DEFAULT: "hsl(var(--accent))",
foreground: "hsl(var(--accent-foreground))",
},
popover: {
DEFAULT: "hsl(var(--popover))",
foreground: "hsl(var(--popover-foreground))",
},
card: {
DEFAULT: "hsl(var(--card))",
foreground: "hsl(var(--card-foreground))",
},
},
borderRadius: {
lg: "var(--radius)",
md: "calc(var(--radius) - 2px)",
sm: "calc(var(--radius) - 4px)",
},
fontFamily: {
"heading": ["var(--font-aeonik)"],
"default": ["var(--font-inter)"],
},
keyframes: {
"accordion-down": {
from: { height: "0" },
to: { height: "var(--radix-accordion-content-height)" },
},
"accordion-up": {
from: { height: "var(--radix-accordion-content-height)" },
to: { height: "0" },
},
"grid": {
"0%": { transform: "translateY(-50%)" },
"100%": { transform: "translateY(0)" },
},
"wiggle": {
"0%, 100%": {
transform: "translateX(0%)",
transformOrigin: "50% 50%",
},
"15%": { transform: "translateX(-4px) rotate(-4deg)" },
"30%": { transform: "translateX(6px) rotate(4deg)" },
"45%": { transform: "translateX(-6px) rotate(-2.4deg)" },
"60%": { transform: "translateX(2px) rotate(1.6deg)" },
"75%": { transform: "translateX(-1px) rotate(-0.8deg)" },
},
"spinner": {
"0%": {
opacity: "1",
},
"100%": {
opacity: "0",
},
},
"blink": {
"0%": {
opacity: "0.2",
},
"20%": {
opacity: "1",
},
"100%": {
opacity: "0.2",
},
},
"shimmer": {
"0%, 90%, 100%": {
"background-position": "calc(-100% - var(--shimmer-width)) 0",
},
"30%, 60%": {
"background-position": "calc(100% + var(--shimmer-width)) 0",
},
},
"image-glow": {
"0%": {
"opacity": "0",
"animation-timing-function": "cubic-bezier(.74, .25, .76, 1)",
},
"10%": {
"opacity": "0.5",
"animation-timing-function": "cubic-bezier(.12, .01, .08, .99)",
},
"100%": {
"opacity": "0.7",
},
},
"border-beam": {
"100%": {
"offset-distance": "100%",
},
},
"marquee": {
from: { transform: "translateX(0)" },
to: { transform: "translateX(calc(-100% - var(--gap)))" },
},
"flip": {
to: {
transform: "rotate(360deg)",
},
},
"rotate": {
to: {
transform: "rotate(90deg)",
},
},
"caret-blink": {
"0%,70%,100%": { opacity: "1" },
"20%,50%": { opacity: "0" },
},
"loading": {
"0%": {
transform: "rotate(0deg)",
},
"100%": {
transform: "rotate(360deg)",
},
}
},
animation: {
"accordion-down": "accordion-down 0.2s ease-out",
"accordion-up": "accordion-up 0.2s ease-out",
"grid": "grid 15s linear infinite",
"wiggle": "wiggle 0.75s infinite",
"spinner": "spinner 1.2s linear infinite",
"blink": "blink 1.4s infinite both",
"shimmer": "shimmer 5s infinite",
"border-beam": "border-beam calc(var(--duration)\*1s) infinite linear",
"image-glow": "image-glow 4s ease-out 0.6s forwards",
"marquee": "marquee var(--duration) linear infinite",
"flip": "flip 6s infinite steps(2, end)",
"rotate": "rotate 3s linear infinite both",
"caret-blink": "caret-blink 1.25s ease-out infinite",
"loading": "loading 0.5s linear infinite",
},
},
},
plugins: [
require("tailwindcss-animate"),
require("tailwind-scrollbar-hide"),
addVariablesForColors,
function ({ matchUtilities, theme }: any) {
matchUtilities(
{
"bg-grid": (value: any) => ({
backgroundImage: `url("${svgToDataUri(
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
)}")`,
}),
"bg-grid-small": (value: any) => ({
backgroundImage: `url("${svgToDataUri(
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
)}")`,
}),
"bg-dot": (value: any) => ({
backgroundImage: `url("${svgToDataUri(
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
)}")`,
}),
},
{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
);
},
],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
let allColors = flattenColorPalette(theme("colors"));
let newVars = Object.fromEntries(
Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
);

addBase({
":root": newVars,
});
};

export default config

================================================
FILE: tsconfig.json
================================================
{
"compilerOptions": {
"lib": ["dom", "dom.iterable", "esnext"],
"allowJs": true,
"skipLibCheck": true,
"strict": true,
"noEmit": true,
"esModuleInterop": true,
"module": "esnext",
"moduleResolution": "bundler",
"resolveJsonModule": true,
"isolatedModules": true,
"jsx": "preserve",
"incremental": true,
"plugins": [
{
"name": "next"
}
],
"paths": {
"@/_": ["./src/_"]
}
},
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
"exclude": ["node_modules"]
}

================================================
FILE: .env.example
================================================

# app

NEXT_PUBLIC_APP_DOMAIN=
NEXT_PUBLIC_APP_NAME=

# clerk

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# database

DATABASE_URL=

================================================
FILE: .eslintrc.json
================================================
{
"extends": "next/core-web-vitals"
}

================================================
FILE: public/noise.webp
================================================
[Non-text file]

================================================
FILE: public/fonts/AeonikPro-Air.woff2
================================================
[Non-text file]

================================================
FILE: public/fonts/AeonikPro-Black.woff2
================================================
[Non-text file]

================================================
FILE: public/fonts/AeonikPro-Bold.woff2
================================================
[Non-text file]

================================================
FILE: public/fonts/AeonikPro-Light.woff2
================================================
[Non-text file]

================================================
FILE: public/fonts/AeonikPro-Medium.woff2
================================================
[Non-text file]

================================================
FILE: public/fonts/AeonikPro-Regular.woff2
================================================
[Non-text file]

================================================
FILE: public/fonts/AeonikPro-Thin.woff2
================================================
[Non-text file]

================================================
FILE: src/app/layout.tsx
================================================
import { Providers } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import { aeonik, cn, generateMetadata, inter } from "@/utils";

export const metadata = generateMetadata();

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en" className="scrollbar">
<body
className={cn(
"min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",
aeonik.variable,
inter.variable,
)} >
<Providers>
<Toaster richColors theme="dark" position="top-right" />
{children}
</Providers>
</body>
</html>
);
};

{/_ <div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(100%_50%_at_50%_0%,rgba(168,85,247,0.13)_0,rgba(168,85,247,0)_50%,rgba(168,85,247,0)_100%)]"></div> _/ }
{/_ <AnimatedBackground
numSquares={6}
maxOpacity={0.2}
duration={10}
repeatDelay={10}
className={cn(
"[mask-image:radial-gradient(800px_circle_at_center,black,transparent)]",
"inset-0 w-full h-[100%] inset-y-[-30%] hidden md:block",
)}
/> _/}

================================================
FILE: src/app/not-found.tsx
================================================
import { Footer, Navbar } from '@/components';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const NotFound = () => {
return (
<main className="relative flex flex-col items-center justify-center px-4">

            <Navbar />

            <div className="flex flex-col items-center justify-center mx-auto h-screen">

                <div className="flex items-center justify-center h-full flex-col">
                    <span className="text-sm font-medium px-3.5 py-1 rounded-md bg-gradient-to-br from-violet-400 to-purple-600 text-neutral-50 not-found">
                        404
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-neutral-50 mt-5">
                        Not Found
                    </h1>
                    <p className="text-base text-neutral-400 font-medium mt-5 text-center mx-auto max-w-xl">
                        The page you are looking for does not exist. <br /> But don&apos;t worry, we&apos;ve got you covered. You can{" "}
                        <Link href="/resources/help" className="text-foreground">
                            contact us
                        </Link>
                        .
                    </p>
                    <Link href="/">
                        <Button className="mt-8">
                            Back to homepage
                        </Button>
                    </Link>
                </div>

            </div>

            <Footer />

        </main>
    )

}

export default NotFound

================================================
FILE: src/app/(marketing)/layout.tsx
================================================
import React from 'react';
import { Footer, Navbar } from "@/components";

interface Props {
children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
return (
<>
<div id="home" className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full" />
<Navbar />
<main className="mt-20 mx-auto w-full z-0 relative">
{children}
</main>
<Footer />
</>
);
};

export default MarketingLayout

================================================
FILE: src/app/(marketing)/page.tsx
================================================
import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES, PROCESS } from "@/utils";
import { REVIEWS } from "@/utils/constants/misc";
import { ArrowRightIcon, CreditCardIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
return (
<div className="overflow-x-hidden scrollbar-hide size-full">
{/_ Hero Section _/}
<MaxWidthWrapper>
<div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
<AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
<button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
<span>
<span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
</span>
<span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
<span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
<span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
✨ The Future of Video Editing is Here
<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
</span>
</button>
<h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
Necto Studio: The <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
Cursor
</span> for Video Editing
</h1>
<p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
Bridge the gap between powerful AI and your creative vision. Necto Studio empowers you to harness GenAI for video editing while maintaining originality and control.
<br className="hidden md:block" />
<span className="hidden md:block">Perfect for creatives and brands who value authenticity and cutting-edge tools.</span>
</p>
<div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
<Button asChild>
<Link href="/" className="flex items-center">
Explore Necto Studio
<ArrowRightIcon className="w-4 h-4 ml-2" />
</Link>
</Button>
</div>
</AnimationContainer>

                    <AnimationContainer delay={0.2} className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
                        <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
                        <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                            <BorderBeam
                                size={250}
                                duration={12}
                                delay={9}
                            />
                            <Image
                                src="/assets/editor-view.jpg"
                                alt="Dashboard"
                                width={1200}
                                height={1200}
                                quality={100}
                                className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
                                unoptimized={true}
                            />
                            <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                            <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                        </div>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper >

            {/* Companies Section */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.4}>
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                                Empowering Video Creators Worldwide
                            </h2>
                            <div className="mt-8">
                                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                                    {COMPANIES.map((company) => (
                                        <li key={company.name}>
                                            <Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                                unoptimized={true}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Features Section */}
            <MaxWidthWrapper className="pt-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
                        <MagicBadge title="Necto Studio Features" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Next-Gen Video Editing Features
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Necto Studio offers a suite of innovative tools designed to enhance your video editing process, integrating AI seamlessly where it matters most.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <BentoGrid className="py-8">
                        {CARDS.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </BentoGrid>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Process Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Our Workflow" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Seamless Video Editing in Simple Steps
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Discover how Necto Studio transforms your video editing workflow, from concept to final cut.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                    {PROCESS.map((process, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-foreground">
                                            {process.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {process.description}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>

            {/* Pricing Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Pricing Plans" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Choose a plan that works for you
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Get started with Necto Studio today and unlock advanced video editing capabilities with our pro plans.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <PricingCards />
                </AnimationContainer>
                <AnimationContainer delay={0.3}>
                    <div className="flex flex-wrap items-start md:items-center justify-center lg:justify-evenly gap-6 mt-12 max-w-5xl mx-auto w-full">
                        <div className="flex items-center gap-2">
                            <CreditCardIcon className="w-5 h-5 text-foreground" />
                            <span className="text-muted-foreground">
                                No credit card required
                            </span>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Reviews Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Creator Testimonials" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            What our users are saying
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Here&apos;s what creators are saying about Necto Studio.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(0, 3).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(3, 6).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(6, 9).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>

            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                Step into the Future of Video Editing with Necto Studio
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Embrace the power of AI-assisted video editing. Necto Studio helps you create stunning videos faster, smarter, and with complete creative freedom.
                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <Link href="/" className="flex items-center">
                                        Join the Video Editing Revolution
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>

        </div>
    )

};

export default HomePage

================================================
FILE: src/app/(marketing)/changelog/page.tsx
================================================
import AnimationContainer from "@/components/global/animation-container";
import React from 'react'

const ChangeLogPage = () => {
return (
<div className="flex flex-col items-center justify-center py-20">
<AnimationContainer delay={0.1}>
<h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
Change Log
</h1>
<p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
Stay up to date with the latest changes to our platform.
</p>
</AnimationContainer>
</div>
)
};

export default ChangeLogPage

================================================
FILE: src/app/(marketing)/enterprise/page.tsx
================================================
import React from 'react'
import AnimationContainer from "@/components/global/animation-container";
const EnterprisePage = () => {
return (
<div className="flex flex-col items-center justify-center py-20">
<AnimationContainer delay={0.1}>
<h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
Enterprise
</h1>
<p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
Get in touch with us to learn more about our enterprise solutions.
</p>
</AnimationContainer>
</div>
)
};

export default EnterprisePage

================================================
FILE: src/app/(marketing)/features/analytics/page.tsx
================================================
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AnalyticsPage = () => {
return (
<>
<MaxWidthWrapper>
<AnimationContainer delay={0.1} className="w-full">
<div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
<MagicBadge title="New" />
<h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
Advanced analytics for your business
</h1>
<p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
Gain deep insights into your link performance with real-time analytics. Track clicks, device usage, and more to optimize your strategy.
</p>
<div className="flex items-center justify-center gap-x-4 mt-8">
<Button size="sm" asChild>
<Link href="/dashboard">
Get started
</Link>
</Button>
<Button size="sm" variant="outline" asChild>
<Link href="/blog">
Learn more
</Link>
</Button>
</div>
</div>
</AnimationContainer>
<AnimationContainer delay={0.2} className="w-full">
<div className="w-full flex max-w-4xl py-10 mx-auto">
<Image
                            src="/assets/analytics.svg"
                            alt="Advanced analytics for your business"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                        />
</div>
</AnimationContainer>
<AnimationContainer delay={0.3} className="w-full">
<div className="py-14">
<div className="mx-auto px-4 md:px-8">
<h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
Trusted by the best in the industry
</h2>
<div className="mt-8">
<ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center py-8">
{COMPANIES.map((company) => (
<li key={company.name}>
<Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                            />
</li>
))}
</ul>
</div>
</div>
</div>
</AnimationContainer>
</MaxWidthWrapper>
<MaxWidthWrapper className="pt-20">
<AnimationContainer delay={0.4} className="w-full">
<LampContainer className="max-w-2xl mx-auto">
<div className="flex flex-col items-center justify-center relative w-full text-center">
<h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
Powerup your link strategy
</h2>
<p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
Take control of your links with advanced features and real-time insights. Simplify your workflow and achieve more.
</p>
<div className="mt-6">
<Button asChild>
<Link href="/auth/sign-up" className="flex items-center">
Get started for free
<ArrowRightIcon className="w-4 h-4 ml-2" />
</Link>
</Button>
</div>
</div>
</LampContainer>
</AnimationContainer>
</MaxWidthWrapper>
</>
)
};

export default AnalyticsPage

================================================
FILE: src/app/(marketing)/features/link-shortening/page.tsx
================================================
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LinkShorteningPage = () => {
return (
<>
<MaxWidthWrapper>
<AnimationContainer delay={0.1} className="w-full">
<div className="flex flex-col items-center justify-center py-10 max-w-xl mx-auto">
<MagicBadge title="Simple" />
<h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
Shorten links and track their performance
</h1>
<p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
Simplify your workflow with powerful link management tools. Shorten links, track clicks, and optimize your strategy with ease.
</p>
<div className="flex items-center justify-center gap-x-4 mt-8">
<Button size="sm" asChild>
<Link href="/dashboard">
Get started
</Link>
</Button>
<Button size="sm" variant="outline" asChild>
<Link href="/blog">
Learn more
</Link>
</Button>
</div>
</div>
</AnimationContainer>
<AnimationContainer delay={0.2} className="w-full">
<div className="w-full flex max-w-4xl py-10 mx-auto">
<Image
                            src="/assets/shorten-links.svg"
                            alt="Shorten links and track their performance"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                        />
</div>
</AnimationContainer>
<AnimationContainer delay={0.3} className="w-full">
<div className="py-14">
<div className="mx-auto px-4 md:px-8">
<h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
Trusted by the best in the industry
</h2>
<div className="mt-8">
<ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center py-8">
{COMPANIES.map((company) => (
<li key={company.name}>
<Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                            />
</li>
))}
</ul>
</div>
</div>
</div>
</AnimationContainer>
</MaxWidthWrapper>
<MaxWidthWrapper className="pt-20">
<AnimationContainer delay={0.4} className="w-full">
<LampContainer className="max-w-2xl mx-auto">
<div className="flex flex-col items-center justify-center relative w-full text-center">
<h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
Powerup your link strategy
</h2>
<p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
Take control of your links with advanced features and real-time insights. Simplify your workflow and achieve more.
</p>
<div className="mt-6">
<Button asChild>
<Link href="/auth/sign-up" className="flex items-center">
Get started for free
<ArrowRightIcon className="w-4 h-4 ml-2" />
</Link>
</Button>
</div>
</div>
</LampContainer>
</AnimationContainer>
</MaxWidthWrapper>
</>
)
};

export default LinkShorteningPage

================================================
FILE: src/app/(marketing)/features/password-protection/page.tsx
================================================
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LinkShorteningPage = () => {
return (
<>
<MaxWidthWrapper>
<AnimationContainer delay={0.1} className="w-full">
<div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
<MagicBadge title="Secure" />
<h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
Frotify your links with a password
</h1>
<p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
Safeguard sensitive information with robust password protection, providing peace of mind and enhanced security.
</p>
<div className="flex items-center justify-center gap-x-4 mt-8">
<Button size="sm" asChild>
<Link href="/dashboard">
Get started
</Link>
</Button>
<Button size="sm" variant="outline" asChild>
<Link href="/blog">
Learn more
</Link>
</Button>
</div>
</div>
</AnimationContainer>
<AnimationContainer delay={0.2} className="w-full">
<div className="w-full flex max-w-4xl py-10 mx-auto">
<Image
                            src="/assets/password-protection.svg"
                            alt="Protect your links with a password"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                        />
</div>
</AnimationContainer>
<AnimationContainer delay={0.3} className="w-full">
<div className="py-14">
<div className="mx-auto px-4 md:px-8">
<h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
Trusted by the best in the industry
</h2>
<div className="mt-8">
<ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center py-8">
{COMPANIES.map((company) => (
<li key={company.name}>
<Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                            />
</li>
))}
</ul>
</div>
</div>
</div>
</AnimationContainer>
</MaxWidthWrapper>
<MaxWidthWrapper className="pt-20">
<AnimationContainer delay={0.4} className="w-full">
<LampContainer className="max-w-2xl mx-auto">
<div className="flex flex-col items-center justify-center relative w-full text-center">
<h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
Powerup your link strategy
</h2>
<p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
Take control of your links with advanced features and real-time insights. Simplify your workflow and achieve more.
</p>
<div className="mt-6">
<Button asChild>
<Link href="/auth/sign-up" className="flex items-center">
Get started for free
<ArrowRightIcon className="w-4 h-4 ml-2" />
</Link>
</Button>
</div>
</div>
</LampContainer>
</AnimationContainer>
</MaxWidthWrapper>
</>
)
};

export default LinkShorteningPage

================================================
FILE: src/app/(marketing)/features/qr-codes/page.tsx
================================================
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LinkShorteningPage = () => {
return (
<>
<MaxWidthWrapper>
<AnimationContainer delay={0.1} className="w-full">
<div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
<MagicBadge title="Unique" />
<h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
Create QR codes for your links
</h1>
<p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
Enhance your marketing strategy with custom QR codes. Drive engagement and track performance with ease.
</p>
<div className="flex items-center justify-center gap-x-4 mt-8">
<Button size="sm" asChild>
<Link href="/dashboard">
Get started
</Link>
</Button>
<Button size="sm" variant="outline" asChild>
<Link href="/blog">
Learn more
</Link>
</Button>
</div>
</div>
</AnimationContainer>
<AnimationContainer delay={0.2} className="w-full">
<div className="w-full flex max-w-4xl py-10 mx-auto">
<Image
                            src="/assets/qr-codes.svg"
                            alt="Create QR codes for your links"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                        />
</div>
</AnimationContainer>
<AnimationContainer delay={0.3} className="w-full">
<div className="py-14">
<div className="mx-auto px-4 md:px-8">
<h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
Trusted by the best in the industry
</h2>
<div className="mt-8">
<ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center py-8">
{COMPANIES.map((company) => (
<li key={company.name}>
<Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                            />
</li>
))}
</ul>
</div>
</div>
</div>
</AnimationContainer>
</MaxWidthWrapper>
<MaxWidthWrapper className="pt-20">
<AnimationContainer delay={0.4} className="w-full">
<LampContainer className="max-w-2xl mx-auto">
<div className="flex flex-col items-center justify-center relative w-full text-center">
<h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
Powerup your link strategy
</h2>
<p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
Take control of your links with advanced features and real-time insights. Simplify your workflow and achieve more.
</p>
<div className="mt-6">
<Button asChild>
<Link href="/auth/sign-up" className="flex items-center">
Get started for free
<ArrowRightIcon className="w-4 h-4 ml-2" />
</Link>
</Button>
</div>
</div>
</LampContainer>
</AnimationContainer>
</MaxWidthWrapper>
</>
)
};

export default LinkShorteningPage

================================================
FILE: src/app/(marketing)/pricing/page.tsx
================================================
import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components";
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion";
import MagicBadge from "@/components/ui/magic-badge";
import { FAQ } from "@/utils/constants/faq";

const PricingPage = () => {
return (
<MaxWidthWrapper className="mb-40">
<AnimationContainer delay={0.1}>
<div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
<MagicBadge title="Pricing" />
<h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
Simple and transparent pricing
</h1>
<p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
Choose a plan that works for you. No hidden fees. No surprises.
</p>
</div>
</AnimationContainer>

            <AnimationContainer delay={0.2}>
                <PricingCards />
            </AnimationContainer>

            <AnimationContainer delay={0.3}>
                <div className="mt-20 w-full">
                    <div className="flex flex-col items-center justify-center w-full pt-12">
                        <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="max-w-lg mt-6 text-center text-neutral-500">
                            Here are some of the most common questions we get asked. If you have a question that isn&apos;t answered here, feel free to reach out to us.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto w-full mt-20">
                        <Accordion type="single" collapsible>
                            {FAQ.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </AnimationContainer>

        </MaxWidthWrapper>
    )

};

export default PricingPage

================================================
FILE: src/app/(marketing)/privacy/page.tsx
================================================
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import React from 'react';

const Privacy = () => {
return (
<MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
<AnimationContainer delay={0.1} className="w-full">
<h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
Privacy Policy
</h1>
<p className="text-sm mb-2 italic mt-20">
Last updated: 17th June 2024
</p>
<p className="mt-4">
At <strong>Necto Studio</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
</p>

                <h2 className="text-xl font-medium mt-8">
                    Information We Collect
                </h2>

                <h3 className="text-lg mt-4">
                    Personal Information
                </h3>
                <p className="mt-8 text-muted-foreground">
                    When you use our services, we may collect personal information that can identify you, such as your name, email address, and payment information if you make a purchase.
                </p>

                <h3 className="text-lg font-medium mt-12">
                    Non-Personal Information
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We may also collect non-personal information about your use of the service, such as IP addresses, browser types, referring URLs, and other technical data.
                </p>

                <h3 className="text-lg font-medium mt-8">
                    Cookies and Tracking Technologies
                </h3>
                <p className="mt-8">
                    We use cookies and similar tracking technologies to collect and store information about your interactions with our website. You can manage your cookie preferences through your browser settings.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    How We Use Your Information
                </h2>

                <h3 className="text-lg mt-8">
                    Provide and Improve Services
                </h3>
                <div className="mt-8">
                    We use the information we collect to:
                    <ul className="list-disc ml-8 text-muted-foreground">
                        <li>Provide, operate, and maintain our services.</li>
                        <li>Improve and personalize your experience.</li>
                        <li>Process transactions.</li>
                    </ul>
                </div>

                <h3 className="text-xl font-medium mt-12">
                    Communication
                </h3>
                <div className="mt-8">
                    We may use your information to:
                    <ul className="list-disc text-muted-foreground ml-8">
                        <li>Send you updates, promotional materials, and other information related to our services.</li>
                        <li>Respond to your inquiries and provide customer support.</li>
                    </ul>
                </div>

                <h3 className="text-lg mt-8">
                    Analytics and Research
                </h3>
                <div className="mt-8">
                    We use non-personal information for analytical purposes, such as:
                    <ul className="list-disc text-muted-foreground ml-8">
                        <li>Monitoring and analyzing usage trends and preferences.</li>
                        <li>Conducting research and improving our services.</li>
                    </ul>
                </div>

                <h2 className="text-xl font-medium mt-12">
                    How We Share Your Information
                </h2>

                <h3 className="text-lg mt-8">
                    Service Providers
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We may share your information with third-party service providers who assist us in operating our services, such as payment processors, email services, and hosting providers.
                </p>

                <h3 className="text-lg mt-8">
                    Legal Requirements
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </p>

                <h3 className="text-lg mt-8">
                    Business Transfers
                </h3>
                <p className="mt-8 text-muted-foreground">
                    In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Data Security
                </h2>
                <p className="mt-8 text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or alteration. However, no method of transmission over the internet or method of electronic storage is 100% secure.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Data Retention
                </h2>
                <p className="mt-8 text-muted-foreground">
                    We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Your Rights and Choices
                </h2>

                <h3 className="text-lg mt-8">
                    Access and Update
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You have the right to access and update your personal information. You can contact us to request access or updates to your information.
                </p>

                <h3 className="text-lg mt-8">
                    Opt-Out
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You can opt out of receiving promotional emails from us by following the unsubscribe instructions in those emails. You may also contact us directly to opt out.
                </p>

                <h3 className="text-lg mt-8">
                    Data Deletion
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You have the right to request the deletion of your personal information. Please contact us at support@necto.studio to make this request.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Children&apos;s Privacy
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    International Data Transfers
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Your information may be transferred to and processed in countries other than your own. We will ensure that appropriate safeguards are in place to protect your personal information when it is transferred across borders.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Changes to This Privacy Policy
                </h2>
                <p className="mt-8 text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and updating the &quot;Last updated&quot; date at the top of this page.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Contact Us
                </h2>
                <p className="mt-8 text-muted-foreground">
                    If you have any questions or concerns about this Privacy Policy, please contact us at support@necto.studio.
                </p>

                <p className="mt-8 font-medium">
                    By using Necto Studio, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );

};

export default Privacy;

================================================
FILE: src/app/(marketing)/resources/blog/page.tsx
================================================
import { AnimationContainer, Blogs, MaxWidthWrapper } from "@/components";
import React from 'react'

const BlogPage = () => {
return (
<div className="flex flex-col items-center justify-center pb-20">
<AnimationContainer delay={0.1} className="w-full">
<h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
Blog
</h1>
<p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
Latest news and updates.
</p>
</AnimationContainer>
<AnimationContainer delay={0.2} className="w-full pt-20">
<Blogs />
</AnimationContainer>
</div>
)
};

export default BlogPage

================================================
FILE: src/app/(marketing)/resources/blog/[slug]/page.tsx
================================================
import React from 'react'
import blogs from "@/utils/constants/blogs.json";
interface Props {
params: {
slug: string
}
}

export async function generateStaticParams() {
return blogs.map((blog) => ({
slug: blog.slug,
}));
}

const BlogPage = ({ params }: Props) => {

    const blog = blogs.find((blog) => blog.slug === params.slug);
    return (
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 md:px-0 pb-80">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    {blog?.title}
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    {blog?.description}
                </p>
            </div>
        </div>
    )

};

export default BlogPage

================================================
FILE: src/app/(marketing)/resources/help/page.tsx
================================================
import { AnimationContainer } from "@/components";
import React from 'react'

const HelpPage = () => {
return (
<div className="flex flex-col items-center justify-center py-20">
<AnimationContainer delay={0.1} className="w-full">
<h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
Help
</h1>
<p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
Need help? We got you.
</p>
</AnimationContainer>
</div>
)
};

export default HelpPage

================================================
FILE: src/app/(marketing)/terms/page.tsx
================================================
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Link from "next/link";

const TermsPage = () => {
return (
<MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
<AnimationContainer delay={0.1} className="w-full">
<h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
Terms and Conditions
</h1>
<p className="text-sm mb-2 italic mt-20">
Last updated: 17th June 2024
</p>
<p className="mt-4">
Welcome to Necto Studio. These terms and conditions outline the rules and regulations for the use of Necto Studio&apos;s website and services.
</p>

                <h2 className="text-xl font-medium mt-8">
                    Acceptance of Terms
                </h2>

                <p className="mt-8 text-muted-foreground">
                    By accessing and using Necto Studio, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms, you may not use our website or services.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Changes to Terms
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Necto Studio reserves the right to modify these terms at any time. We will notify you of any changes by updating the &quot;Last updated&quot; data at the top of this page. You continued use of our website and services after any modifications indicates your acceptance of the new terms.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Use of Services
                </h2>

                <h3 className="text-lg mt-8">
                    Eligibility
                </h3>
                <p className="mt-8">
                    To use Necto Studio, you must be at least 18 years old and capable of entering into a binding contact.
                </p>
                {/* Account Registration section removed as there are no user accounts */}
                <h3 className="text-lg mt-8">
                    Acceptable Use
                </h3>
                <div className="mt-8">
                    You agree not to use Necto Studio for any unlawful or prohibited activities, including but not limited to:
                    <ul className="list-disc text-muted-foreground ml-8">
                        <li>Uploading or sharing content that is offensive, harmful, or violates any laws.</li>
                        <li>Using the service to distribute spam or malicious content.</li>
                        <li>Attempting to gain unauthorized access to Necto Studio&apos;s systems.</li>
                    </ul>
                </div>

                <h2 className="text-xl font-medium mt-12">
                    Link Shortening and Management
                </h2>

                <h3 className="text-lg mt-8">
                    URL Shortening
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Necto Studio provides a URL shortening service that allows you to create shortened links from long URLs. You agree not to use this service to create links to illegal or harmful content.
                </p>

                <h3 className="text-lg mt-8">
                    Analytics
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Necto Studio offers analytics for your shortened URLs. You agree to use this data responsibly and comply with all applicable privacy laws.
                </p>

                <h3 className="text-lg mt-8">
                    QR Code Generation
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You may generate QR codes for your shortened URLs. You agree not to use QR codes for any malicious purposes.
                </p>

                <h3 className="text-lg mt-8">
                    Business Transfers
                </h3>
                <p className="mt-8 text-muted-foreground">
                    In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    User Content
                </h2>

                <h3 className="text-lg mt-8">
                    Ownership
                </h3>

                <p className="mt-8 text-muted-foreground">
                    You retain ownership of any content you upload or create using Necto Studio. However, by uploading or creating content, you grant Necto Studio a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your content as necessary to provide our services.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Responsibility
                </h2>
                <p className="mt-8 text-muted-foreground">
                    You are solely responsible for the content you upload or create. Necto Studio does not endorse or assume any liability for user content.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Privacy
                </h2>

                <p className="mt-8 text-muted-foreground">
                    Your privacy is important to us. Please review our <Link href="/privacy" className="underline">Privacy Policy</Link> to understand how we collect, use, and protect your information.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Termination
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Necto Studio reserves the right to suspend or terminate your access to the service at any time, with or without notice, for any reason, including but not limited to violation of these terms.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Disclaimers and Limitations of Liability
                </h2>

                <h3 className="text-lg mt-8">
                    No Warranties
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Necto Studio is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not warrant that the service will be uninterrupted, error-free, or free from viruses or other harmful components.
                </p>

                <h3 className="text-lg mt-8">
                    Limitation of Liability
                </h3>
                <p className="mt-8 text-muted-foreground">
                    In no event shall Necto Studio be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the service.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Governing Law
                </h2>
                <p className="mt-8 text-muted-foreground">
                    These terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Contact Us
                </h2>
                <p className="mt-8 text-muted-foreground">
                    If you have any questions or concerns about this Privacy Policy, please contact us at support@necto.studio.
                </p>

                <p className="mt-8 font-medium">
                    By using Necto Studio, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );

};

export default TermsPage;

================================================
FILE: src/components/index.ts
================================================
// global
import { Icons } from "./global/icons";
import MaxWidthWrapper from "./global/max-width-wrapper";
import AnimationContainer from "./global/animation-container";
// navigation
import Navbar from "./navigation/navbar";
import Footer from "./navigation/footer";

// providers
import Providers from "./providers/providers";

// dashboard
import Sidebar from "./dashboard/sidebar";
import DashboardNavbar from "./dashboard/dashboard-navbar";

// pricing
import PricingCards from "./pricing-cards";

// blog
import Blogs from "./blog/blogs";

export {
Icons,
MaxWidthWrapper,
AnimationContainer,
Navbar,
Footer,

    Providers,

    Sidebar,
    DashboardNavbar,

    PricingCards,

    Blogs,

};

================================================
FILE: src/components/pricing-cards.tsx
================================================
"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn, PLANS } from "@/utils";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { useState } from 'react';

type Tab = "monthly" | "yearly";

const PricingCards = () => {

    const MotionTabTrigger = motion(TabsTrigger);

    const [activeTab, setActiveTab] = useState<Tab>("monthly");

    return (
        <Tabs defaultValue="monthly" className="w-full flex flex-col items-center justify-center">
            <TabsList>
                <MotionTabTrigger
                    value="monthly"
                    onClick={() => setActiveTab("monthly")}
                    className="relative"
                >
                    {activeTab === "monthly" && (
                        <motion.div
                            layoutId="active-tab-indicator"
                            transition={{
                                type: "spring",
                                bounce: 0.5,
                            }}
                            className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
                        />
                    )}
                    <span className="z-20">
                        Monthly
                    </span>
                </MotionTabTrigger>
                <MotionTabTrigger
                    value="yearly"
                    onClick={() => setActiveTab("yearly")}
                    className="relative"
                >
                    {activeTab === "yearly" && (
                        <motion.div
                            layoutId="active-tab-indicator"
                            transition={{
                                type: "spring",
                                bounce: 0.5,
                            }}
                            className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
                        />
                    )}
                    <span className="z-20">
                        Yearly
                    </span>
                </MotionTabTrigger>
            </TabsList>

            <TabsContent value="monthly" className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6">
                {PLANS.map((plan) => (
                    <Card
                        key={plan.name}
                        className={cn(
                            "flex flex-col w-full border-border rounded-xl",
                            plan.name === "Pro" && "border-2 border-purple-500"
                        )}
                    >
                        <CardHeader className={cn(
                            "border-b border-border",
                            plan.name === "Pro" ? "bg-purple-500/[0.07]" : "bg-foreground/[0.03]"
                        )}>
                            <CardTitle className={cn(plan.name !== "Pro" && "text-muted-foreground", "text-lg font-medium")}>
                                {plan.name}
                            </CardTitle>
                            <CardDescription>
                                {plan.info}
                            </CardDescription>
                            <h5 className="text-3xl font-semibold">
                                ${plan.price.monthly}
                                <span className="text-base text-muted-foreground font-normal">
                                    {plan.name !== "Free" ? "/month" : ""}
                                </span>
                            </h5>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            {plan.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircleIcon className="text-purple-500 w-4 h-4" />
                                    <TooltipProvider>
                                        <Tooltip delayDuration={0}>
                                            <TooltipTrigger asChild>
                                                <p className={cn(feature.tooltip && "border-b !border-dashed border-border cursor-pointer")}>
                                                    {feature.text}
                                                </p>
                                            </TooltipTrigger>
                                            {feature.tooltip && (
                                                <TooltipContent>
                                                    <p>{feature.tooltip}</p>
                                                </TooltipContent>
                                            )}
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter className="w-full mt-auto">
                            <Link
                                href={plan.btn.href}
                                style={{ width: "100%" }}
                                className={buttonVariants({ className: plan.name === "Pro" && "bg-purple-500 hover:bg-purple-500/80 text-white" })}
                            >
                                {plan.btn.text}
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </TabsContent>
            <TabsContent value="yearly" className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6">
                {PLANS.map((plan) => (
                    <Card
                        key={plan.name}
                        className={cn(
                            "flex flex-col w-full border-border rounded-xl",
                            plan.name === "Pro" && "border-2 border-purple-500"
                        )}
                    >
                        <CardHeader className={cn(
                            "border-b border-border",
                            plan.name === "Pro" ? "bg-purple-500/[0.07]" : "bg-foreground/[0.03]"
                        )}>
                            <CardTitle className={cn(plan.name !== "Pro" && "text-muted-foreground", "text-lg font-medium")}>
                                {plan.name}
                            </CardTitle>
                            <CardDescription>
                                {plan.info}
                            </CardDescription>
                            <h5 className="text-3xl font-semibold flex items-end">
                                ${plan.price.yearly}
                                <div className="text-base text-muted-foreground font-normal">
                                    {plan.name !== "Free" ? "/year" : ""}
                                </div>
                                {plan.name !== "Free" && (
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3, type: "spring", bounce: 0.25 }}
                                        className="px-2 py-0.5 ml-2 rounded-md bg-purple-500 text-foreground text-sm font-medium"
                                    >
                                        -12%
                                    </motion.span>
                                )}
                            </h5>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            {plan.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircleIcon className="text-purple-500 w-4 h-4" />
                                    <TooltipProvider>
                                        <Tooltip delayDuration={0}>
                                            <TooltipTrigger asChild>
                                                <p className={cn(feature.tooltip && "border-b !border-dashed border-border cursor-pointer")}>
                                                    {feature.text}
                                                </p>
                                            </TooltipTrigger>
                                            {feature.tooltip && (
                                                <TooltipContent>
                                                    <p>{feature.tooltip}</p>
                                                </TooltipContent>
                                            )}
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter className="w-full pt- mt-auto">
                            <Link
                                href={plan.btn.href}
                                style={{ width: "100%" }}
                                className={buttonVariants({ className: plan.name === "Pro" && "bg-purple-500 hover:bg-purple-500/80 text-white" })}
                            >
                                {plan.btn.text}
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </TabsContent>
        </Tabs>
    )

};

export default PricingCards

================================================
FILE: src/components/blog/blogs.tsx
================================================
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from "next/link";
import MagicCard from "../ui/magic-card";
import blogs from "@/utils/constants/blogs.json";

const Blogs = () => {
return (
<div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 md:px-0">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{blogs.map((blog, id) => (
<MagicCard key={id} className="p-0 md:p-0 relative">
<Link href={`/resources/blog/${blog.slug}`} className="w-full h-full absolute -z-1 inset-0"></Link>
<Card className="group border-0">
<CardContent className="p-4 lg:p-6">
<div className="flex items-center justify-center h-40 lg:h-52 overflow-hidden">
<Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={1024}
                                        height={1024}
                                        unoptimized
                                        className="w-full h-full object-cover rounded-lg"
                                    />
</div>
<div className="flex flex-col items-start justify-start mt-4">
<CardTitle className="text-lg font-semibold text-foreground/80 group-hover:text-foreground transition-all duration-300">
{blog.title}
</CardTitle>
<CardDescription className="mt-2">
{blog.description.length > 100 ? `${blog.description.substring(0, 100)}...` : blog.description}
</CardDescription>
</div>
</CardContent>
</Card>
</MagicCard>
))}
</div>
</div>
)
};

export default Blogs

================================================
FILE: src/components/dashboard/dashboard-navbar.tsx
================================================

const DashboardNavbar = () => {
return (
<header className="flex items-center h-14 gap-4 border-b border-border px-4 lg:px-6">
navbar
</header>
)
};

export default DashboardNavbar

================================================
FILE: src/components/dashboard/sidebar.tsx
================================================
import React from 'react'

const Sidebar = () => {
return (
<div className="hidden md:block border-r border-border bg-muted/20">
sidebarok
</div>
)
};

export default Sidebar

================================================
FILE: src/components/global/animation-container.tsx
================================================
"use client";

import { motion } from 'framer-motion';

interface AnimationContainerProps {
children: React.ReactNode;
delay?: number;
reverse?: boolean;
className?: string;
};

const AnimationContainer = ({ children, className, reverse, delay }: AnimationContainerProps) => {
return (
<motion.div
className={className}
initial={{ opacity: 0, y: reverse ? -20 : 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: false }}
transition={{ duration: 0.2, delay: delay, ease: 'easeInOut', type: 'spring', stiffness: 260, damping: 20 }} >
{children}
</motion.div>
)
};

export default AnimationContainer

================================================
FILE: src/components/global/icons.tsx
================================================
import { LucideProps } from "lucide-react";

export const Icons = {
logo: (props: LucideProps) => (
<svg {...props} width="1600" height="1600" viewBox="0 0 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1600" height="1600" rx="275" fill="url(#paint0_radial_133_317)" />
<path d="M736.024 862.258L1101.46 408.859C1107.79 401.008 1102.2 389.328 1092.12 389.328H822.67C792.245 389.328 763.476 403.179 744.501 426.961L412.745 842.774C406.475 850.634 412.071 862.258 422.126 862.258H736.024Z" fill="black" />
<path d="M1113.35 882.258C1113.35 871.213 1104.4 862.258 1093.35 862.258H736.024V915.995C736.024 1081.68 870.338 1215.99 1036.02 1215.99H1093.35C1104.4 1215.99 1113.35 1207.04 1113.35 1195.99V882.258Z" fill="black" />
<defs>
<radialGradient id="paint0_radial_133_317" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(800 800) rotate(90) scale(800)">
<stop stopColor="#FAFAFA" stopOpacity="0.85" />
<stop offset="1" stopColor="#FAFAFA" />
</radialGradient>
</defs>
</svg>
),
wordmark: (props: LucideProps) => (
<svg {...props} width="391" height="129" viewBox="0 0 391 129" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
                d="M9.55126 104.62C4.28626 104.62 0.371264 100.57 0.371264 95.305V9.445C0.371264 4.17999 4.28626 0.129997 9.55126 0.129997C14.6813 0.129997 18.5963 4.17999 18.5963 9.445V95.305C18.5963 100.57 14.6813 104.62 9.55126 104.62ZM48.5061 0.804996C54.5811 0.804996 59.8461 5.665 59.8461 11.875C59.8461 17.95 54.5811 22.81 48.5061 22.81C42.1611 22.81 37.0311 17.95 37.0311 11.875C37.0311 5.665 42.1611 0.804996 48.5061 0.804996ZM48.3711 104.62C43.2411 104.62 39.3261 100.57 39.3261 95.305V43.87C39.3261 38.605 43.2411 34.69 48.5061 34.69C53.6361 34.69 57.5511 38.605 57.5511 43.87V95.305C57.5511 100.57 53.6361 104.62 48.3711 104.62ZM114.596 34.69C129.851 34.69 139.706 45.22 139.706 61.555V95.305C139.706 100.705 135.926 104.62 130.661 104.62C125.531 104.62 121.616 100.57 121.616 95.305V63.985C121.616 56.29 116.621 51.025 109.196 51.025C101.771 51.025 96.506 56.425 96.506 63.985V95.305C96.506 100.705 92.591 104.62 87.461 104.62C82.196 104.62 78.281 100.57 78.281 95.305V43.87C78.281 38.605 82.196 34.69 87.326 34.69C91.511 34.69 94.886 37.525 95.831 41.575C100.556 37.255 107.171 34.69 114.596 34.69ZM169.131 0.129997C174.396 0.129997 178.176 4.04499 178.176 9.445V95.305C178.176 100.705 174.261 104.62 169.131 104.62C163.866 104.62 159.951 100.57 159.951 95.305V9.445C159.951 4.17999 163.866 0.129997 169.131 0.129997ZM219.621 90.58C221.106 92.47 221.781 94.225 221.781 96.25C221.781 100.975 218.136 104.62 213.546 104.62C210.711 104.62 208.551 103.54 206.796 101.245L183.981 73.165C181.956 70.465 181.146 68.575 181.146 66.55C181.146 64.255 182.091 62.365 184.386 59.8L205.716 37.525C207.471 35.635 209.766 34.69 212.061 34.69C216.786 34.69 220.431 38.2 220.431 42.79C220.431 45.085 219.486 47.245 217.461 49.27L200.451 66.55L219.621 90.58ZM247.373 0.804996C253.448 0.804996 258.713 5.665 258.713 11.875C258.713 17.95 253.448 22.81 247.373 22.81C241.028 22.81 235.898 17.95 235.898 11.875C235.898 5.665 241.028 0.804996 247.373 0.804996ZM247.238 104.62C242.108 104.62 238.193 100.57 238.193 95.305V43.87C238.193 38.605 242.108 34.69 247.373 34.69C252.503 34.69 256.418 38.605 256.418 43.87V95.305C256.418 100.57 252.503 104.62 247.238 104.62ZM308.198 16.465C301.988 16.465 298.478 20.245 298.478 26.86V36.175H306.848C311.303 36.175 314.543 39.415 314.543 43.87C314.543 48.325 311.303 51.565 306.848 51.565H298.478V95.305C298.478 100.705 294.563 104.62 289.433 104.62C284.168 104.62 280.253 100.57 280.253 95.305V51.565H277.283C272.828 51.565 269.453 48.325 269.453 43.87C269.453 39.415 272.828 36.175 277.283 36.175H280.253V25.24C280.253 9.445 289.568 0.129997 305.093 0.129997C308.603 0.129997 311.303 0.669998 313.733 1.885C316.568 3.1 318.323 5.8 318.323 9.17499C318.323 13.63 315.218 16.6 310.358 16.6C309.818 16.6 309.143 16.465 308.198 16.465ZM382.119 34.69C386.844 34.69 390.894 38.74 390.894 43.465C390.894 44.815 390.624 46.165 389.814 47.65L360.384 107.995C353.229 122.71 345.129 128.92 332.979 128.92C330.009 128.92 327.309 128.38 325.284 127.435C322.449 126.22 320.694 123.385 320.694 120.28C320.694 115.825 324.339 112.45 328.929 112.45C329.604 112.45 330.144 112.585 330.549 112.585C336.354 112.585 340.269 110.155 343.239 104.08L345.669 98.68L322.584 47.785C321.774 46.165 321.369 44.815 321.369 43.465C321.369 38.74 325.419 34.69 330.279 34.69C333.789 34.69 336.894 36.58 338.244 39.82L355.929 79.375L374.019 39.82C375.369 36.715 378.474 34.69 382.119 34.69Z"
                fill="black" />
</svg>
),
bolt: (props: LucideProps) => (
<svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003" transform="rotate(0)">
<g id="SVGRepo_bgCarrier" strokeWidth="0">
</g>
<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.144">
</g>
<g id="SVGRepo_iconCarrier">
<path fillRule="evenodd" clipRule="evenodd" d="M20.5279 10.3736C20.1572 9.73163 19.4779 9.5206 18.8294 9.42992C18.1757 9.33852 17.3008 9.33855 16.2426 9.33858L16.1824 9.33858C15.5523 9.33858 15.1403 9.33237 14.8402 9.29064C14.5688 9.2529 14.4825 9.19704 14.4456 9.16446C14.4187 9.13635 14.3706 9.07063 14.3379 8.83366C14.2993 8.55425 14.2976 8.1711 14.2976 7.55704V7.18255C14.2977 5.59503 14.2977 4.32329 14.1755 3.4166C14.0608 2.56554 13.7882 1.60969 12.844 1.32035C11.9164 1.03608 11.1384 1.64564 10.5337 2.27405C9.88942 2.9435 9.12413 3.97895 8.16596 5.27538L5.02896 9.51969C4.41863 10.3454 3.90984 11.0337 3.60669 11.6029C3.3028 12.1735 3.08164 12.8509 3.41872 13.5268L3.41989 13.5293L3.42344 13.5365L3.42748 13.5445L3.43146 13.5522L3.4358 13.5603L3.44023 13.5685L3.44441 13.576L3.44884 13.5838L3.45289 13.5907L3.45438 13.5931C3.82188 14.2296 4.49825 14.4524 5.1526 14.5523C5.82693 14.6553 6.72671 14.6619 7.81795 14.6619C8.45456 14.6619 8.86048 14.6633 9.1586 14.7013C9.42195 14.7349 9.50071 14.7867 9.53447 14.8165C9.56438 14.8478 9.61682 14.9207 9.6538 15.1663C9.69612 15.4473 9.70276 15.8364 9.70275 16.4435L9.70274 16.8178C9.7027 18.4053 9.70266 19.6771 9.82483 20.5838C9.9395 21.4349 10.2121 22.3907 11.1563 22.6801C12.0839 22.9644 12.8619 22.3548 13.4667 21.7264C14.1109 21.0569 14.8762 20.0215 15.8344 18.725L18.9338 14.5317C19.5646 13.6783 20.0834 12.9652 20.3893 12.3718C20.6887 11.7911 20.8976 11.1097 20.5636 10.44L20.5624 10.4376L20.5589 10.4303L20.5548 10.4223L20.5508 10.4146L20.5465 10.4064L20.542 10.3982L20.5378 10.3907L20.5334 10.3829L20.5293 10.3759L20.5279 10.3736ZM11.6145 3.31416C11.0465 3.90435 10.3387 4.85927 9.335 6.21733L6.27286 10.3604C5.61517 11.2502 5.17513 11.849 4.93062 12.3081C4.81161 12.5315 4.76693 12.6725 4.75421 12.7578C4.74635 12.8105 4.75115 12.8343 4.75742 12.8496C4.78161 12.8852 4.88663 12.9943 5.379 13.0695C5.9169 13.1516 6.69032 13.1619 7.81795 13.1619L7.86392 13.1619C8.44106 13.1618 8.94393 13.1618 9.3483 13.2134C9.78148 13.2686 10.2118 13.3942 10.568 13.7293L10.5739 13.7348L10.5796 13.7404C10.9296 14.0839 11.0719 14.5099 11.1371 14.9429C11.1994 15.3568 11.2028 15.8658 11.2028 16.4435L11.2027 16.753C11.2027 18.42 11.2044 19.5894 11.3114 20.3835C11.3647 20.7789 11.4363 21.0108 11.505 21.1404C11.5564 21.2374 11.586 21.2438 11.5943 21.2456L11.5958 21.2459L11.5973 21.2464C11.6078 21.25 11.6446 21.2628 11.7583 21.2056C11.9003 21.1341 12.1032 20.98 12.3858 20.6863C12.9538 20.0961 13.6616 19.1412 14.6654 17.7831L17.7275 13.6401C18.3815 12.7553 18.8172 12.1478 19.0561 11.6845C19.2608 11.2873 19.2385 11.1528 19.2249 11.1171C19.2024 11.0843 19.1016 10.9826 18.6217 10.9155C18.0846 10.8404 17.3161 10.8386 16.1824 10.8386C15.5796 10.8386 15.0567 10.8352 14.6336 10.7763C14.1968 10.7156 13.7655 10.5841 13.4123 10.252L13.4065 10.2465L13.4008 10.2409C13.0476 9.89419 12.9114 9.46874 12.852 9.03887C12.7975 8.64454 12.7976 8.15622 12.7976 7.60538L12.7976 7.24733C12.7976 5.58044 12.7959 4.41099 12.6889 3.61692C12.6356 3.22153 12.564 2.98959 12.4954 2.86008C12.4439 2.76301 12.4143 2.75666 12.406 2.75487L12.4045 2.75451L12.403 2.75401C12.3925 2.7504 12.3557 2.73767 12.242 2.79487C12.1 2.86633 11.8972 3.02042 11.6145 3.31416Z" fill="#3f3f46">
</path>
</g>
</svg>
),
google: (props: LucideProps) => (
<svg {...props} width="256" height="262" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
<path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4" />
<path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853" />
<path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05" />
<path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335" />
</svg>
),
company1: (props: LucideProps) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1000 198">
<path fill="#fff" fillRule="evenodd" d="M974.795 150.604c.605 6.893 6.119 15.668 15.672 15.668h5.59c2.166 0 3.943-1.776 3.943-3.944V39.3998h-.025c-.113-2.0709-1.824-3.7296-3.918-3.7296h-17.32c-2.094 0-3.805 1.6587-3.92 3.7296h-.022v9.9886c-10.611-13.0803-27.342-18.5095-44.119-18.5095-38.137 0-69.051 30.9384-69.051 69.1051 0 38.169 30.914 69.108 69.051 69.108v.003c16.777 0 35.06-6.513 44.116-18.507l.003.016Zm-44.052-5.698c-24.254 0-43.918-20.11-43.918-44.9218 0-24.8074 19.664-44.9189 43.918-44.9189 24.253 0 43.914 20.1115 43.914 44.9189 0 24.8118-19.661 44.9218-43.914 44.9218Zm-91.014 9.926-.008-63.6102h.002c0-35.8566-22.604-60.046-58.648-60.046-17.206 0-31.311 9.9571-36.292 18.5105-1.077-6.6881-4.625-13.7182-15.628-13.7182h-5.608c-2.169 0-3.941 1.7772-3.941 3.9458V162.852h.022c.114 2.068 1.827 3.729 3.921 3.729h17.32c.265 0 .525-.032.776-.081.115-.022.222-.067.333-.099.129-.04.263-.07.385-.12.155-.064.294-.15.438-.23.07-.043.143-.074.211-.119.173-.111.332-.245.485-.383.025-.025.055-.042.08-.065.172-.166.329-.35.469-.541l.001-.003c.434-.596.697-1.314.74-2.088h.022V90.2356c0-19.2575 15.601-34.8704 34.846-34.8704 19.243 0 34.844 15.6129 34.844 34.8704l.016 60.6974.004-.021c0 .054.009.109.009.167v11.773h.023c.114 2.068 1.825 3.729 3.919 3.729h17.321c.266 0 .525-.032.776-.081.102-.019.197-.06.297-.088.142-.041.287-.077.424-.131.141-.059.27-.141.404-.216.082-.047.168-.08.247-.133.159-.105.306-.232.449-.357.037-.034.078-.059.113-.094.164-.158.31-.329.444-.509.009-.013.02-.024.03-.037.427-.591.688-1.303.733-2.072 0-.006.002-.011.002-.011h.023v-8.018l-.004-.002m-180.378-4.228c.606 6.893 6.12 15.668 15.672 15.668h5.59c2.167 0 3.94-1.776 3.94-3.944V39.3998h-.022c-.113-2.0709-1.826-3.7296-3.918-3.7296h-17.32c-2.094 0-3.805 1.6587-3.922 3.7296h-.02v9.9886c-10.613-13.0803-27.343-18.5095-44.121-18.5095-38.135 0-69.049 30.9384-69.049 69.1051 0 38.169 30.914 69.108 69.049 69.108v.003c16.778 0 35.063-6.513 44.119-18.507l.002.016Zm-44.054-5.698c-24.252 0-43.915-20.11-43.915-44.9218 0-24.8074 19.663-44.9189 43.915-44.9189 24.255 0 43.914 20.1115 43.914 44.9189 0 24.8118-19.659 44.9218-43.914 44.9218Zm-171.541-11.908c11.562 8.016 24.183 11.909 36.311 11.909 11.554 0 23.499-5.994 23.499-16.428 0-13.93-26.028-16.097-42.382-21.66-16.356-5.562-30.443-17.0605-30.443-35.6813 0-28.4928 25.368-40.2607 49.045-40.2607 15.002 0 30.481 4.9507 40.516 12.0427 3.456 2.6207 1.351 5.6296 1.351 5.6296l-9.579 13.692c-1.077 1.5422-2.959 2.8745-5.662 1.2054-2.702-1.6681-12.181-8.3824-26.626-8.3824-14.446 0-23.148 6.6765-23.148 14.9519 0 9.9236 11.31 13.0447 24.557 16.4271 23.085 6.2275 48.268 13.7127 48.268 42.0357 0 25.104-23.464 40.619-49.396 40.619-19.652 0-36.383-5.607-50.416-15.912-2.923-2.928-.881-5.647-.881-5.647l9.532-13.622c1.939-2.548 4.385-1.659 5.454-.919m-66.583 17.606c.606 6.893 6.12 15.668 15.673 15.668h5.59c2.166 0 3.942-1.776 3.942-3.944V39.3998h-.024c-.113-2.0709-1.824-3.7296-3.918-3.7296h-17.32c-2.094 0-3.805 1.6587-3.922 3.7296h-.021v9.9886c-10.611-13.0803-27.342-18.5095-44.119-18.5095-38.135 0-69.05 30.9384-69.05 69.1051 0 38.169 30.915 69.108 69.05 69.108v.003c16.777 0 35.061-6.513 44.117-18.507l.002.016Zm-44.051-5.698c-24.254 0-43.917-20.11-43.917-44.9218 0-24.8074 19.663-44.9189 43.917-44.9189 24.253 0 43.913 20.1115 43.913 44.9189 0 24.8118-19.66 44.9218-43.913 44.9218Z" clipRule="evenodd" />
<path fill="#F06A6A" fillRule="evenodd" d="M167.197 104.685c-25.664 0-46.468 20.804-46.468 46.47 0 25.664 20.804 46.468 46.468 46.468 25.664 0 46.468-20.804 46.468-46.468 0-25.666-20.804-46.47-46.468-46.47Zm-120.7287.004C20.8048 104.689 0 125.49 0 151.155c0 25.664 20.8048 46.469 46.4683 46.469 25.6646 0 46.4704-20.805 46.4704-46.469 0-25.665-20.8058-46.466-46.4704-46.466ZM153.3 46.5982c0 25.6656-20.804 46.4724-46.467 46.4724-25.6649 0-46.4687-20.8068-46.4687-46.4724 0-25.6605 20.8038-46.467341 46.4687-46.467341 25.663 0 46.467 20.806841 46.467 46.467341Z" clipRule="evenodd" />
</svg>
),
company2: (props: LucideProps) => (
<svg {...props} version="1.0" xmlns="http://www.w3.org/2000/svg" width="753.000000pt" height="100.000000pt" viewBox="0 0 753.000000 100.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
<path d="M120 875 l-125 -125 125 -125 125 -125 125 125 125 125 -125 125
-125 125 -125 -125z" />
<path d="M620 875 l-125 -125 125 -125 125 -125 -125 -125 -125 -125 125 -125
125 -125 125 125 125 125 -125 125 -125 125 125 125 125 125 -125 125 -125
125 -125 -125z" />
<path d="M1120 875 l-125 -125 125 -125 125 -125 125 125 125 125 -125 125
-125 125 -125 -125z" />
<path d="M2300 795 l0 -85 125 0 125 0 0 -345 0 -345 95 0 95 0 0 345 0 345
125 0 125 0 0 85 0 85 -345 0 -345 0 0 -85z" />
<path d="M3570 450 l0 -430 95 0 95 0 0 430 0 430 -95 0 -95 0 0 -430z" />
<path d="M4410 451 l0 -431 190 0 c104 0 213 5 242 11 234 49 377 254 341 488
-27 175 -132 289 -310 337 -39 10 -126 17 -260 21 l-203 6 0 -432z m442 226
c31 -15 68 -43 83 -63 79 -103 70 -260 -19 -348 -56 -56 -115 -76 -228 -76
l-88 0 0 261 0 261 98 -4 c81 -3 107 -8 154 -31z" />
<path d="M5912 833 c-55 -130 -332 -802 -332 -807 0 -3 46 -6 103 -6 l102 0
30 83 30 82 180 3 180 2 30 -82 30 -83 109 -3 c85 -2 107 0 103 10 -11 27
-290 707 -319 776 l-30 72 -98 0 -98 0 -20 -47z m182 -336 c31 -81 56 -150 56
-152 0 -3 -57 -5 -126 -5 -69 0 -124 4 -122 8 2 5 30 79 63 165 33 86 63 151
66 144 4 -7 32 -79 63 -160z" />
<path d="M7000 450 l0 -430 265 0 265 0 0 85 0 85 -170 0 -170 0 0 345 0 345
-95 0 -95 0 0 -430z" />
</g>
</svg>
),
company3: (props: LucideProps) => (
<svg {...props} width="1821" height="309" viewBox="0 0 1821 309" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_574_2)">
<path d="M636.491 232.657H538.448L526.368 267.171C524.403 272.788 517.748 277.383 511.581 277.383H458.625C452.459 277.383 449.267 272.875 451.535 267.364L547.509 34.0849C549.774 28.5737 556.676 24.0648 562.845 24.0648H612.505C618.672 24.0648 625.568 28.5762 627.826 34.09L723.418 267.358C725.677 272.872 722.479 277.383 716.313 277.383H663.358C657.191 277.383 650.536 272.788 648.57 267.171L636.491 232.657ZM619.188 182.784L587.468 90.956L555.751 182.784H619.188ZM949.151 277.383C942.983 277.383 935.325 273.235 932.134 268.164L886.857 196.243L841.582 268.164C838.389 273.235 830.731 277.383 824.564 277.383H760.072C753.905 277.383 751.724 273.392 755.227 268.515L842.367 147.162L762.918 33.0208C759.491 28.0951 761.732 24.0648 767.899 24.0648H827.446C833.613 24.0648 841.316 28.1871 844.562 33.2258L886.857 98.874L928.774 33.2476C932 28.197 939.687 24.0648 945.854 24.0648H1005.81C1011.98 24.0648 1014.21 28.0849 1010.76 32.9984L930.934 146.765L1018.48 268.519C1021.99 273.394 1019.81 277.383 1013.64 277.383H949.151ZM1132.94 266.608C1132.94 272.535 1127.9 277.383 1121.73 277.383H1074.13C1067.96 277.383 1062.91 272.535 1062.91 266.608V34.8391C1062.91 28.9133 1067.96 24.0648 1074.13 24.0648H1121.73C1127.9 24.0648 1132.94 28.9133 1132.94 34.8391V266.608ZM1175.12 149.932C1175.12 76.312 1232.79 16.9412 1321.35 16.9412C1409.92 16.9412 1467.59 76.312 1467.59 149.932C1467.59 223.949 1409.92 283.321 1321.35 283.321C1232.79 283.321 1175.12 223.949 1175.12 149.932ZM1395.92 149.932C1395.92 111.54 1367.9 76.7066 1321.35 76.7066C1275.22 76.7066 1246.79 111.54 1246.79 149.932C1246.79 188.328 1275.22 223.949 1321.35 223.949C1367.49 223.949 1395.92 188.328 1395.92 149.932ZM1766.49 277.383C1760.33 277.383 1754.63 272.575 1753.83 266.698L1735.51 130.935L1682.58 267.288C1680.43 272.841 1673.62 277.383 1667.45 277.383H1644.15C1637.98 277.383 1631.18 272.836 1629.05 267.279L1576.09 129.746L1557.75 266.696C1556.96 272.575 1551.27 277.383 1545.1 277.383H1500.38C1494.22 277.383 1489.86 272.58 1490.7 266.709L1523.89 34.7389C1524.73 28.8682 1530.47 24.0648 1536.63 24.0648H1578.05C1584.22 24.0648 1591.06 28.5973 1593.25 34.1375L1655.59 191.889L1718.33 34.1297C1720.52 28.5938 1727.38 24.0648 1733.53 24.0648H1774.96C1781.13 24.0648 1786.87 28.8682 1787.71 34.7389L1820.9 266.709C1821.74 272.58 1817.38 277.383 1811.21 277.383H1766.49ZM354.75 215.609L278.412 87.8475C274.911 81.9755 266.285 77.1714 259.242 77.1714H211.583C200.506 77.1714 195.965 69.6237 201.49 60.3991L227.626 16.7722C229.7 13.3099 229.695 9.04737 227.615 5.5887C225.534 2.13003 221.691 0 217.533 0H151.048C144.004 0 135.36 4.79349 131.836 10.6524L2.6449 225.448C-0.880053 231.307 -0.881407 240.895 2.63949 246.755L35.8815 302.08C41.4207 311.297 50.5038 311.308 56.0661 302.103L82.0403 259.123C87.6039 249.918 96.6855 249.928 102.225 259.146L125.773 298.338C129.294 304.198 137.937 308.992 144.98 308.992H298.613C305.653 308.992 314.298 304.198 317.819 298.338L354.711 236.941C358.232 231.081 358.249 221.482 354.75 215.609ZM251.654 209.46C257.159 218.696 252.599 226.254 241.522 226.254H122.021C110.944 226.254 106.412 218.712 111.951 209.494L171.747 109.977C177.286 100.759 186.349 100.76 191.888 109.978L251.654 209.46Z" fill="white" />
</g>
<defs>
<clipPath id="clip0_574_2">
<rect width="1821" height="309" fill="white" />
</clipPath>
</defs>
</svg>
),
company4: (props: LucideProps) => (
<svg {...props} viewBox="0 0 1000 405" xmlns="http://www.w3.org/2000/svg" width="1000" height="405">
<g fill="#1A1919" fillRule="evenodd">
<path d="M219.76 136.638c12.601 0 22.817-10.216 22.817-22.819 0-12.602-10.216-22.819-22.818-22.819-12.603 0-22.819 10.217-22.819 22.819 0 12.603 10.216 22.819 22.82 22.819M275.042 214.199v-.019L151.863 91c-17.822 17.823-17.722 46.619.1 64.442l39.2 39.199-.066.067 22.215 22.214c.807.807 1.341 1.921 1.341 3.152 0 1.265-.59 2.386-1.437 3.197l-25.91 25.91a4.44 4.44 0 0 1-6.277 0l-25.993-25.993a4.439 4.439 0 0 1 0-6.278c17.734-18.925 4.497-41.58-3.696-49.255l-5.795-5.795L93.6 213.805a8.878 8.878 0 0 0 0 12.555l84.257 84.257a8.876 8.876 0 0 0 12.554 0l84.077-84.077a8.392 8.392 0 0 0 2.987-6.426c0-2.306-.93-4.395-2.433-5.915M391.643 195.22c-20.552-2.691-24.019-6.909-24.019-15.345 0-8.552 7.934-13.864 20.706-13.864 14.076 0 21.077 4.579 23.41 15.312l.072.332h11.858l-.06-.48c-2.016-15.886-14.545-24.635-35.28-24.635-19.13 0-33.015 10.228-33.015 24.321 0 17.686 16.456 22.317 34.235 24.686 18.518 2.603 24.164 6.447 24.164 16.454 0 9.39-9.543 16.205-22.69 16.205-20.702 0-24.914-9.122-26.382-18.979l-.054-.361h-12.73l.06.478c1.584 12.926 9.655 28.334 39.105 28.334 20.196 0 35.425-11.357 35.425-26.416 0-17.725-13.317-23.106-34.805-26.042M510.634 157.647H438.51v11.295h29.483v77.627h13.158v-77.627h29.483v-11.295M538.383 210.996l16.117-42.908 16.117 42.908h-32.234Zm8.326-53.349-35.206 88.922h12.518l9.781-25.374h41.255l9.922 25.374h13.081l-34.634-88.922H546.71ZM599.889 168.942h29.483v77.627h13.158v-77.627h29.483v-11.295h-72.124v11.295M704.369 207.499h24.97v-11.174h-24.97v-27.383h49.202v-11.295h-62.362v88.922h62.362v-11.295h-49.202v-27.775M788.082 157.647h-13.158v88.922h59.51v-11.295h-46.352v-77.627M895.257 157.647l-25.295 40.544-26.278-40.544h-14.907l34.258 50.2v38.722h13.159v-38.605l32.39-50.317h-13.327" />
</g>
</svg>
),
company5: (props: LucideProps) => (
<svg {...props} viewBox="0 0 91 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.05 8.11L7.02 4.06 0 8.1V4.06L7.03 0l7.02 4.06V8.1z" fill="#A435F0" />
<path d="M0 11.52h3.68v8.94a3.27 3.27 0 003.35 3.44 3.3 3.3 0 003.34-3.47v-8.91h3.68v9.15c0 2.13-.67 3.77-2 4.9a7.55 7.55 0 01-5.06 1.67 7.4 7.4 0 01-5.01-1.67C.67 24.44 0 22.87 0 20.77v-9.25zm45.87 11.11a5.57 5.57 0 01-3.83 1.48c-2.64 0-4.41-1.5-4.61-3.83h11.89s.08-.76.08-1.46c0-2.2-.7-4.02-2.13-5.5a7.13 7.13 0 00-5.45-2.23 7.9 7.9 0 00-5.78 2.22 7.93 7.93 0 00-2.25 5.87v.12c0 2.4.76 4.32 2.25 5.75a8.17 8.17 0 005.87 2.16c2.8 0 5.02-1.1 6.69-3l-2.73-1.58zm-7-7.46a4.7 4.7 0 012.95-.98c1.07 0 1.95.34 2.7 1a3 3 0 011.16 2.23h-8.16c.12-.9.57-1.64 1.35-2.25zm44.04 14.1C81.41 32.8 79.86 34 77.46 34H75.8v-3.26h1.34c.83 0 1.6-.31 2.32-2l.73-1.68-6.3-15.54h3.75L82.1 22.7l4.6-11.2h3.73L82.9 29.27zM28.38 5.66v7.26a7.58 7.58 0 00-4.9-1.73c-2.16 0-3.98.76-5.47 2.31a7.87 7.87 0 00-2.2 5.69 8 8 0 002.2 5.72 7.37 7.37 0 005.47 2.28c2.5 0 4.06-.98 4.9-1.75v1.42h3.65V5.65h-3.65zm-1.1 16.88c-.88.88-2 1.34-3.31 1.34a4.4 4.4 0 01-3.26-1.34c-.85-.89-1.27-2.01-1.27-3.35 0-1.34.42-2.46 1.27-3.34.88-.89 1.95-1.34 3.26-1.34s2.43.45 3.31 1.34c.91.88 1.37 2 1.37 3.34 0 1.34-.46 2.47-1.37 3.35zM68.22 11.2a6.39 6.39 0 00-5.2 2.26c-.4-.75-1.5-2.26-4.1-2.26a5.17 5.17 0 00-4.14 1.9v-1.59h-3.62v15.33h3.62v-8.82c0-2.07 1.28-3.56 2.98-3.56 1.74 0 2.74 1.3 2.74 3.4v8.98h3.62v-8.82c0-2.1 1.24-3.56 3.04-3.56 1.73 0 2.73 1.3 2.73 3.4v8.97h3.65v-9.48c0-4-2.14-6.15-5.32-6.15z" fill="#000" />
</svg>
),
company6: (props: LucideProps) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2159 500">
<path fill="#13171B" d="M615.473 158.84c5.214 4.374 9.075 9.323 12.898 14.937 1.439 2.318 1.439 2.318 3.629 3.223l.148-2.938c.4-7.362.951-14.68 1.852-22l.251-2.095c.623-4.841.623-4.841 1.749-5.967 2.219-.088 4.44-.107 6.66-.098l2.014.005c2.13.005 4.259.018 6.389.03A3970.043 3970.043 0 0 1 666 144a82745 82745 0 0 1 .103 79.202c.01 12.26.024 24.52.047 36.78.02 10.692.033 21.385.037 32.079.003 5.655.009 11.31.023 16.965.014 5.338.018 10.675.015 16.013 0 1.944.005 3.89.012 5.834.11 29.078-2.49 59.37-23.863 81.315-17.988 17.689-44.26 24.8-68.984 25.05l-2.427.03c-33.444.324-33.444.324-47.964-4.268l-3.613-1.133c-19.789-7.022-36.24-18.861-46.2-37.617C468.906 385.208 466 376.062 466 366h35l5 13c9.123 14.307 22.304 21.295 38.469 25.254 4.537.959 8.899 1.58 13.531 1.746l2.973.121c19.026.393 38.732-3.004 53.27-16.148 11.47-11.97 15.922-28.186 15.855-44.438l-.005-2.055c-.005-2.14-.018-4.278-.03-6.418-.006-1.461-.01-2.923-.014-4.384-.011-3.56-.028-7.119-.049-10.678l-1.795 2.237-2.396 2.962-2.358 2.925C609.626 346.348 590.89 353.948 570 356c-25.036 1.745-53.63-2.994-73.285-19.71-3.005-2.666-5.858-5.468-8.715-8.29l-1.984-1.766c-17.071-15.504-24.97-41.86-26.239-64.145-.14-4.217-.164-8.432-.152-12.651l.002-2.26c.04-12.089.853-23.54 4.373-35.178l.633-2.126c4.991-16.11 13.6-28.961 25.367-40.874l1.762-1.98c29.833-32.84 89.826-33.393 123.71-8.18Zm-99.262 31.765c-17.097 17.898-21.903 39.863-21.461 63.903.412 11.893 2.987 22.763 8.25 33.492l1.152 2.387c8.107 15.64 20.942 26.21 37.536 31.87 17.938 5.348 37.3 4.013 54.125-4.32 17.137-10.038 28.25-25.977 33.335-45.039 5.407-24.75 2.876-50.486-10.96-72.148-9.673-13.8-23.455-23.984-40.204-27.128-22.91-3.879-44.403.756-61.773 16.983ZM1908.748 141.76c2.153-.01 4.305-.04 6.457-.072 23.198-.18 44.74 5.894 62.045 21.937 17.273 18.107 19.04 41.261 19.024 65.012 0 3.451.012 6.902.03 10.354.045 9.803.07 19.606.077 29.41.005 6.019.03 12.038.065 18.057.01 2.286.012 4.573.007 6.86-.007 3.19.01 6.379.033 9.568l-.025 2.848c.07 5.533.643 9.007 4.539 13.266 6.277 2.805 6.277 2.805 19 3v31l-14.688.25-4.545.11c-9.733.08-20.31-.541-28.33-6.735-6.035-6.5-8.088-13.202-10.437-21.625l-1.547 1.871c-15.02 17.496-34.586 27.16-57.453 29.129-22.73 1.136-48.9-1.392-66.798-16.939-13.133-11.959-18.983-24.608-20.386-42.39-.54-17.161 4.818-34.223 16.446-47.023 19.35-18.35 47.052-21.017 72.39-20.843l4.913.008c4.256.008 8.512.027 12.769.05 4.364.02 8.729.03 13.094.04 8.524.02 17.048.055 25.572.097-.12-3.7-.256-7.399-.395-11.098l-.101-3.16c-.502-12.857-4.28-22.059-13.692-30.93-12.222-9.902-29.04-11.7-44.198-10.418-14.008 1.487-27.172 6.139-36.712 16.993-4.247 5.744-6.118 10.654-8.902 17.613h-34c1.933-19.333 9.196-35.258 24.305-47.934 18.273-13.45 39.102-18.246 61.443-18.306Zm-50.81 129.115c-5.628 7.16-7.817 16.1-6.938 25.125 2.204 10.486 7.214 17.83 16 24 17.977 8.73 39.41 8.138 58.129 1.969 14.487-5.477 25.403-15.31 31.84-29.446L1958 290l.969-2.336c2.213-6.495 2.176-12.772 2.105-19.55l-.016-2.951c-.014-2.388-.033-4.775-.058-7.163-8.98-.07-17.962-.123-26.943-.155a2778.77 2778.77 0 0 1-12.515-.071c-4.04-.033-8.08-.05-12.119-.059a639.1 639.1 0 0 1-4.582-.032c-16.223-.167-35.044.616-46.904 13.192ZM857 153l2.754 1.398c21.417 11.895 34.879 31.84 41.727 54.96 2.453 8.725 3.66 17.116 4.207 26.142l.147 2.337c.309 6.27-.253 11.758-.835 18.163H743c3.687 26.282 3.687 26.282 17 48l1.867 2.203c9.89 10.752 24.546 16.986 39.066 17.922 18.305.685 35.11-2.134 49.505-14.438 8.2-7.958 12.076-15.922 16.562-26.687h35c-3.376 16.878-9.6 31.038-21 44l-1.984 2.273c-15.854 16.986-38.282 25.709-61.258 26.837-31.775.824-59.425-6.888-82.946-28.86-22.392-23.573-28.545-53.96-28.058-85.54.837-29.547 11.394-55.71 32.7-76.401C770.653 137.027 820.428 134.323 857 153Zm-98.504 40.82c-8.45 10.665-11.25 19.699-13.496 33.18h125c-3.426-18.271-7.937-31.554-22.629-43.059-28.015-18.962-66.117-15.755-88.875 9.88ZM1476 159c4.29 3.373 8.17 7.119 12 11l2.02 2.023c17.564 18.794 24.196 45.31 24.105 70.352l.012 3.309-.004 3.152-.004 2.86C1514 254 1514 254 1513 256h-161c2.372 21.35 6.097 40.73 23.344 54.93 15.372 11.334 33.984 15.447 52.824 12.76 15.18-2.745 28.878-9.13 38.125-21.842 4.057-6.333 6.266-11.524 8.707-18.848h35c-.704 6.335-1.39 11.133-3.625 16.875l-.805 2.093c-8.77 21.933-26.323 37.726-47.507 47.344-24.736 10.149-55.504 9.26-80.47.196-10.553-4.428-20.081-9.775-28.593-17.508l-2.703-2.422c-18.293-17.271-29.267-42.105-30.474-67.268-.56-36.098 3.723-67.598 29.654-94.92 33.748-31.879 92.742-35.217 130.523-8.39Zm-109 35c-7.319 9.591-13 20.764-13 33h124c-1.657-18.226-8.095-31.104-22-43-28.006-20.326-66.22-14.785-89 10ZM1090 67h34l1 108 7-9c12.857-14.07 30.177-22.973 49.259-24.211 26.024-1.005 50.682 2.357 70.928 20.274 16.24 15.137 23.115 37.286 24.813 58.937.135 4.38.127 8.757.114 13.139v3.905c0 3.508-.006 7.016-.013 10.523-.006 3.676-.006 7.351-.008 11.027-.003 6.948-.01 13.896-.021 20.845-.011 7.915-.017 15.83-.022 23.746-.01 16.272-.028 32.543-.05 48.815h-34l-.06-10.762a26637.34 26637.34 0 0 0-.228-35.347c-.05-7.138-.096-14.276-.134-21.414-.033-6.23-.073-12.459-.12-18.688a3150.44 3150.44 0 0 1-.061-9.874c-.033-37.39-.033-37.39-17.46-69.665-10.286-9.53-24.78-13.12-38.437-13.625-15.466.594-30.52 5.328-42 16-19.195 21.13-19.789 47.887-19.914 74.898a8637.209 8637.209 0 0 0-.175 25.704c-.039 6.852-.088 13.703-.138 20.555-.103 14.072-.191 28.145-.273 42.218h-34V67ZM389.688 164.313C410.145 181.708 421.704 205.577 425 232c.208 4.724.228 9.447.24 14.176.01 2.225.04 4.449.072 6.674.1 13.349-1.618 26.175-6.437 38.713l-.91 2.394C412.7 307.292 405.15 317.966 395 328l-2.395 2.426c-19.696 18.913-46.763 26.189-73.529 25.926-25.28-.757-49.016-8.343-68.076-25.352-.82-.726-1.64-1.451-2.484-2.2-18.422-17.305-29.596-43.574-30.639-68.76-.745-30.648 3.212-58.348 23.123-83.04l2.05-2.55c35.832-42.12 104.725-43.056 146.637-10.137Zm-114.825 25.699c-16.193 17.28-22.446 39.397-22.078 62.629.436 12.025 3.211 23.42 8.215 34.359l1.27 2.824C269.77 304.976 283.173 316.3 299 322c18.675 5.657 37.925 4.213 55.3-4.674 6.046-3.29 10.94-7.354 15.7-12.326l1.879-1.785c14.556-14.817 18.397-37.249 18.44-57.091-.22-18.014-5.1-34.84-16.319-49.124l-1.734-2.305c-10.268-12.68-26.11-20.14-42.079-22.132-20.062-2.038-40.37 3.485-55.324 17.449ZM101 86h34v58h53v32h-53c.063 16.664.138 33.328.236 49.992.045 7.738.084 15.476.11 23.214.023 6.748.057 13.495.103 20.242.024 3.57.042 7.14.049 10.71.007 3.993.037 7.986.07 11.978l-.005 3.558c.086 7.515.551 14.675 5.375 20.743 6.507 4.93 13.752 4.728 21.617 4.88l2.732.062c2.862.065 5.725.125 8.588.183l5.844.131c4.76.108 9.52.207 14.281.307v31c-7.256.092-14.51.172-21.765.22-2.461.02-4.923.047-7.384.082-37.527.518-37.527.518-51.835-12.044-10.755-11.077-12.327-26.282-12.243-40.948v-4.082c-.002-3.67.01-7.338.024-11.007.013-3.843.014-7.687.016-11.53.006-7.268.023-14.535.043-21.802.022-8.278.033-16.556.043-24.834.021-17.019.058-34.037.101-51.055H63v-32h38V86ZM961 86h34v58h53v32h-53c.086 16.403.18 32.807.288 49.21.05 7.617.096 15.234.134 22.85.033 6.643.073 13.284.12 19.926.026 3.514.048 7.028.061 10.543.016 3.93.046 7.86.078 11.791l.007 3.5c.053 12.362.053 12.362 5.312 23.18 7.132 3.698 13.604 4.166 21.457 4.316l2.736.063c2.873.066 5.746.125 8.62.183l5.857.131c4.777.108 9.553.207 14.33.307v31c-7.256.092-14.51.172-21.765.22-2.461.02-4.923.047-7.384.082-37.856.523-37.856.523-51.613-11.892-11.057-11.837-12.715-27.99-12.579-43.484V293.9c-.002-3.594.016-7.188.037-10.782.019-3.774.02-7.548.024-11.323.01-7.125.034-14.25.064-21.375.034-8.121.05-16.242.065-24.364.031-16.685.086-33.37.151-50.056h-38v-32h38V86ZM1555 144h31l4 28c4.656-4.446 4.656-4.446 6.96-7.531 10.525-12.742 26.635-18.625 42.58-20.286 4.34-.323 8.673-.287 13.023-.245L1662 144v34c-12.75.313-12.75.313-16.69.388-13.6.422-26.567 3.12-36.935 12.424-13.875 14.834-17.476 36.261-17.58 55.815l-.03 3.49a6415.62 6415.62 0 0 0-.081 11.38l-.063 7.906c-.05 6.219-.095 12.437-.138 18.656-.05 7.084-.105 14.167-.16 21.25-.114 14.564-.22 29.128-.323 43.691h-35V144ZM2057 144h34v209h-34V144Z" />
<path fill="#0262F2" d="M1737 291c8.363 4.823 13.282 11.64 15.938 20.875 2.078 9.893.687 17.515-4.141 26.39-5.07 7.715-12.428 12.344-21.39 14.301-8.447 1.153-16.363-.36-23.844-4.441-6.967-5.777-12.966-11.977-14.563-21.125-.873-11.015.163-19.604 7.25-28.313 10.431-11.056 26.871-14.774 40.75-7.687Z" />
<path fill="#13171B" d="M2085.5 65.5c5.049 3.03 8.656 7.969 10.5 13.5.146 2.268.221 4.54.25 6.813l.078 3.644c-.59 6.378-3.514 10.477-8.328 14.543-6.045 4.228-11.756 4.837-19 4-6.188-1.114-9.718-4.1-13.59-8.969-3.997-5.757-4.296-12.224-3.41-19.031 2.26-7.125 5.563-11.304 12-15 6.491-2.164 15.167-2.291 21.5.5Z" />
</svg>
),
company7: (props: LucideProps) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 93 24">
<g clip-path="url(#logo-full_svg__a)">
<path fill="#FF6363" fill-rule="evenodd" d="M6 15.491v2.504l-6-6 1.251-1.251L6 15.49Zm2.504 2.504H6l6 6 1.251-1.251-4.747-4.749Zm14.24-4.747 1.253-1.253-12-12-1.25 1.256 4.747 4.747h-2.868L9.312 2.691 8.061 3.942l2.06 2.061h-1.44v9.314h9.314v-1.44l2.061 2.06 1.251-1.25-3.312-3.314v-2.87l4.749 4.745ZM6.626 5.374 5.37 6.627 6.714 7.97l1.252-1.252-1.34-1.344ZM17.282 16.03l-1.252 1.253 1.343 1.344 1.253-1.253-1.344-1.344ZM3.939 8.06 2.686 9.315 6 12.627v-2.506l-2.06-2.06ZM13.88 18h-2.506l3.313 3.314 1.253-1.253L13.88 18Z" clipRule="evenodd">
</path>
<path fill="#E6E6E6" d="M90.987 17.98c-.808 0-1.44-.219-1.89-.659-.452-.44-.678-1.05-.678-1.825v-4.8h-1.45V8.899h1.458l.26-2.4h1.707v2.4h2.227v1.8h-2.227v4.538a.948.948 0 0 0 .256.667.883.883 0 0 0 .68.278h1.29v1.799h-1.633ZM82.268 18.15c-1.077 0-1.944-.257-2.6-.77a3.45 3.45 0 0 1-1.259-2.049h2.143c.093.312.301.577.582.742.344.199.737.296 1.134.28 1.143 0 1.717-.32 1.717-.937 0-.308-.18-.544-.539-.706a6.034 6.034 0 0 0-1.302-.389 15.466 15.466 0 0 1-1.538-.376 2.669 2.669 0 0 1-1.314-.875c-.356-.427-.537-.987-.537-1.681a2.376 2.376 0 0 1 .905-1.903c.606-.505 1.446-.758 2.52-.757 1.074 0 1.92.24 2.56.719a3.222 3.222 0 0 1 1.215 1.94h-2.146c-.228-.571-.77-.857-1.624-.857-.917 0-1.373.287-1.373.86a.736.736 0 0 0 .386.64c.293.18.62.296.96.345.426.072.847.17 1.26.291.43.123.85.273 1.26.451.399.181.737.475.971.845.272.435.407.942.389 1.455a2.4 2.4 0 0 1-.96 1.974c-.639.504-1.576.757-2.81.758ZM75.88 9.636c-.66-.593-1.586-.89-2.773-.89-.95 0-1.745.255-2.386.766a3.586 3.586 0 0 0-1.28 1.979h2.026c.103-.297.3-.553.56-.728a1.786 1.786 0 0 1 1.072-.303 1.92 1.92 0 0 1 1.317.427 1.514 1.514 0 0 1 .48 1.197v.436h-2.31c-1.071 0-1.91.266-2.514.8a2.59 2.59 0 0 0-.907 2.019 2.663 2.663 0 0 0 .844 2.033c.564.534 1.31.8 2.24.8a3.42 3.42 0 0 0 1.658-.385c.411-.2.759-.51 1.005-.896h.083l.16 1.12h1.715v-5.92c.001-1.04-.329-1.858-.99-2.455Zm-.975 4.852a1.834 1.834 0 0 1-.6 1.44c-.397.353-.939.53-1.627.53-.5 0-.885-.114-1.149-.34a1.081 1.081 0 0 1-.4-.866c0-.8.523-1.197 1.55-1.197h2.226v.433ZM64.021 18.17c-1.3 0-2.338-.418-3.117-1.252-.776-.834-1.168-1.987-1.168-3.462 0-1.476.39-2.624 1.164-3.46.774-.835 1.816-1.25 3.121-1.25 1.06 0 1.94.282 2.637.849a4.017 4.017 0 0 1 1.389 2.147h-1.965a2.205 2.205 0 0 0-2.06-1.197 2.081 2.081 0 0 0-1.683.76c-.426.509-.64 1.226-.64 2.15 0 .925.214 1.643.64 2.152a2.08 2.08 0 0 0 1.682.764 2.21 2.21 0 0 0 2.06-1.2h1.966a4.025 4.025 0 0 1-1.39 2.15c-.694.565-1.573.848-2.636.848ZM52.43 21.432l1.371-3.43-3.683-9.082h2.143l2.486 6.427h.082l2.49-6.427h2.142l-4.975 12.512H52.43ZM48.267 9.636c-.66-.594-1.585-.89-2.774-.89-.949 0-1.744.255-2.386.766a3.57 3.57 0 0 0-1.27 1.979h2.024c.103-.297.299-.553.56-.728a1.794 1.794 0 0 1 1.072-.303c.556 0 .996.143 1.316.427a1.508 1.508 0 0 1 .48 1.197v.436h-2.32c-1.066 0-1.904.266-2.513.8a2.586 2.586 0 0 0-.909 2.019 2.663 2.663 0 0 0 .845 2.025c.563.534 1.31.8 2.24.8a3.412 3.412 0 0 0 1.656-.385c.412-.2.76-.51 1.006-.896h.082l.17 1.12h1.712v-5.92c0-1.035-.33-1.85-.99-2.447Zm-.978 4.852a1.834 1.834 0 0 1-.6 1.44c-.396.353-.94.53-1.628.53-.5 0-.885-.114-1.15-.34a1.086 1.086 0 0 1-.4-.866c.007-.796.523-1.195 1.55-1.197h2.228v.433ZM37.152 13.456c.306-.081.601-.197.88-.346.326-.178.631-.393.909-.64.336-.31.595-.693.757-1.12.194-.502.29-1.036.283-1.574 0-1.143-.365-2.058-1.094-2.746-.73-.688-1.68-1.03-2.848-1.027h-4.972v12h2.143v-4.454h1.625L37.923 18h2.4l-3.17-4.545ZM33.21 11.65v-3.76h2.654c.608 0 1.088.16 1.44.494.352.335.531.792.531 1.386 0 .594-.177 1.058-.534 1.389-.392.34-.9.517-1.42.491H33.21Z">
</path>
</g>
<defs>
<clipPath id="logo-full_svg__a">
<path fill="#fff" d="M0 0h92.622v24H0z">
</path>
</clipPath>
</defs>
</svg>
),
};

================================================
FILE: src/components/global/max-width-wrapper.tsx
================================================
import { cn } from "@/utils";
import React from 'react';

interface Props {
className?: string;
children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
return (
<section className={cn(
"h-full mx-auto w-full max-w-full md:max-w-screen-xl px-4 md:px-12 lg:px-20",
className,
)}>
{children}
</section>
)
};

export default MaxWidthWrapper

================================================
FILE: src/components/navigation/footer.tsx
================================================
import Link from 'next/link';
import { AnimationContainer, Icons } from "@/components"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

const Footer = () => {
return (
<footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                            <Icons.logo className="w-7 h-7" />
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            Manage your links with ease.
                        </p>
                        <span className="mt-4 text-neutral-200 text-sm flex items-center">
                            Made by <Link href="https://shreyas-sihasane.vercel.app/" className="font-semibold ml-1">Shreyas</Link>
                        </span>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Product
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Features
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Testimonials
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Integration
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Integrations
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Twitter
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Resources
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/resources/blog" className="hover:text-foreground transition-all duration-300">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/resources/help" className="hover:text-foreground transition-all duration-300">
                                            Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Company
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Necto Studio INC. All rights reserved.
                    </p>
                </AnimationContainer>
            </div>

            <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="NECTO STUDIO" />
            </div>
        </footer>
    )

}

export default Footer

================================================
FILE: src/components/navigation/mobile-navbar.tsx
================================================
"use client";

import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
Sheet,
SheetClose,
SheetContent,
SheetTrigger
} from "@/components/ui/sheet";
import { cn, NAV_LINKS } from "@/utils";
import { LucideIcon, Menu, X, ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from 'react';

const MobileNavbar = () => {
const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex lg:hidden items-center justify-end">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button size="icon" variant="ghost">
                        <Menu className="w-5 h-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-screen">
                    <SheetClose asChild className="absolute top-3 right-5 bg-background z-20 flex items-center justify-center">
                        <Button size="icon" variant="ghost" className="text-neutral-600">
                            <X className="w-5 h-5" />
                        </Button>
                    </SheetClose>
                    <div className="flex flex-col items-start w-full py-2 mt-10">
                        <div className="flex items-center justify-evenly w-full">
                            <Link href="/" className={buttonVariants({ className: "w-full" })}>
                                Get Started
                                <ZapIcon className="size-3.5 ml-1.5 text-orange-500 fill-orange-500" />
                            </Link>
                        </div>
                        <ul className="flex flex-col items-start w-full mt-6">
                            <Accordion type="single" collapsible className="!w-full">
                                {NAV_LINKS.map((link) => (
                                    <AccordionItem key={link.title} value={link.title} className="last:border-none">
                                        {link.menu ? (
                                            <>
                                                <AccordionTrigger>
                                                    {link.title}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <ul
                                                        onClick={handleClose}
                                                        className={cn(
                                                            "w-full",
                                                        )}
                                                    >
                                                        {link.menu.map((menuItem) => (
                                                            <ListItem key={menuItem.title} title={menuItem.title} href={menuItem.href} icon={menuItem.icon}>
                                                                {menuItem.tagline}
                                                            </ListItem>
                                                        ))}
                                                    </ul>
                                                </AccordionContent>
                                            </>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={handleClose}
                                                className="flex items-center w-full py-4 font-medium text-muted-foreground hover:text-foreground"
                                            >
                                                <span>{link.title}</span>
                                            </Link>
                                        )}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )

};

const ListItem = React.forwardRef<
React.ElementRef<"a">,
React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }

> (({ className, title, href, icon: Icon, children, ...props }, ref) => {

    return (
        <li>
            <Link
                href={href!}
                ref={ref}
                className={cn(
                    "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <div className="flex items-center space-x-2 text-foreground">
                    <Icon className="h-4 w-4" />
                    <h6 className="text-sm !leading-none">
                        {title}
                    </h6>
                </div>
                <p title={children! as string} className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
            </Link>
        </li>
    )

})
ListItem.displayName = "ListItem"

export default MobileNavbar

================================================
FILE: src/components/navigation/navbar.tsx
================================================
"use client";

import { buttonVariants } from "@/components/ui/button";
import {
NavigationMenu,
NavigationMenuContent,
NavigationMenuItem,
NavigationMenuLink,
NavigationMenuList,
NavigationMenuTrigger,
navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, NAV_LINKS } from "@/utils";
import { LucideIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../global/animation-container";

const Navbar = () => {
const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 8) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={cn(
            "sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-[99999] select-none",
            scroll && "border-background/80 bg-background/40 backdrop-blur-md"
        )}>
            <AnimationContainer reverse delay={0.1} className="size-full">
                <MaxWidthWrapper className="flex items-center justify-between">
                    <div className="flex items-center space-x-12">
                        <Link href="/#home">
                            <span className="text-lg font-bold font-heading !leading-none">
                                Necto Studio
                            </span>
                        </Link>

                        <NavigationMenu className="hidden lg:flex">
                            <NavigationMenuList>
                                {NAV_LINKS.map((link) => (
                                    <NavigationMenuItem key={link.title}>
                                        {link.menu ? (
                                            <>
                                                <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className={cn(
                                                        "grid gap-1 p-4 md:w-[400px] lg:w-[500px] rounded-xl",
                                                        link.title === "Features" ? "lg:grid-cols-[.75fr_1fr]" : "lg:grid-cols-2"
                                                    )}>
                                                        {link.title === "Features" && (
                                                            <li className="row-span-4 pr-2 relative rounded-lg overflow-hidden">
                                                                <div className="absolute inset-0 !z-10 h-full w-[calc(100%-10px)] bg-[linear-gradient(to_right,rgb(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.5)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                                                                <NavigationMenuLink asChild className="z-20 relative">
                                                                    <Link
                                                                        href="/"
                                                                        className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                                                                    >
                                                                        <h6 className="mb-2 mt-4 text-lg font-medium">
                                                                            All Features
                                                                        </h6>
                                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                                            Manage links, track performance, and more.
                                                                        </p>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            </li>
                                                        )}
                                                        {link.menu.map((menuItem) => (
                                                            <ListItem
                                                                key={menuItem.title}
                                                                title={menuItem.title}
                                                                href={menuItem.href}
                                                                icon={menuItem.icon}
                                                            >
                                                                {menuItem.tagline}
                                                            </ListItem>
                                                        ))}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </>
                                        ) : (
                                            <Link href={link.href} legacyBehavior passHref>
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    {link.title}
                                                </NavigationMenuLink>
                                            </Link>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="hidden lg:flex items-center">
                        <Link href="/" className={buttonVariants({ size: "sm", })}>
                            Get Started
                            <ZapIcon className="size-3.5 ml-1.5 text-orange-500 fill-orange-500" />
                        </Link>
                    </div>

                    <MobileNavbar />

                </MaxWidthWrapper>
            </AnimationContainer>
        </header>
    )

};

const ListItem = React.forwardRef<
React.ElementRef<"a">,
React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }

> (({ className, title, href, icon: Icon, children, ...props }, ref) => {

    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href!}
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center space-x-2 text-neutral-300">
                        <Icon className="h-4 w-4" />
                        <h6 className="text-sm font-medium !leading-none">
                            {title}
                        </h6>
                    </div>
                    <p title={children! as string} className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )

})
ListItem.displayName = "ListItem"

export default Navbar

================================================
FILE: src/components/providers/providers.tsx
================================================
"use client";

import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )

};

export default Providers

================================================
FILE: src/components/ui/accordion.tsx
================================================
"use client"

import _ as React from "react"
import _ as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
React.ElementRef<typeof AccordionPrimitive.Item>,
React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>

> (({ className, ...props }, ref) => (
> <AccordionPrimitive.Item

    ref={ref}
    className={cn("border-b border-border w-full", className)}
    {...props}

/>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
React.ElementRef<typeof AccordionPrimitive.Trigger>,
React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>

> (({ className, children, ...props }, ref) => (
> <AccordionPrimitive.Header className="flex">

    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 w-full items-center justify-between py-4 font-medium transition-all text-muted-foreground hover:text-foreground [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink- transition-transform duration-200" />
    </AccordionPrimitive.Trigger>

</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
React.ElementRef<typeof AccordionPrimitive.Content>,
React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>

> (({ className, children, ...props }, ref) => (
> <AccordionPrimitive.Content

    ref={ref}
    className="overflow-hidden w-full text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}

>

    <div className={cn("pb-4 pt-0", className)}>{children}</div>

</AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

================================================
FILE: src/components/ui/alert-dialog.tsx
================================================
"use client"

import _ as React from "react"
import _ as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>

> (({ className, ...props }, ref) => (
> <AlertDialogPrimitive.Overlay

    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}

/>
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
React.ElementRef<typeof AlertDialogPrimitive.Content>,
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>

> (({ className, ...props }, ref) => (
> <AlertDialogPortal>

    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />

  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
className,
...props
}: React.HTMLAttributes<HTMLDivElement>) => (

  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
className,
...props
}: React.HTMLAttributes<HTMLDivElement>) => (

  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
React.ElementRef<typeof AlertDialogPrimitive.Title>,
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>

> (({ className, ...props }, ref) => (
> <AlertDialogPrimitive.Title

    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}

/>
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
React.ElementRef<typeof AlertDialogPrimitive.Description>,
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>

> (({ className, ...props }, ref) => (
> <AlertDialogPrimitive.Description

    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}

/>
))
AlertDialogDescription.displayName =
AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
React.ElementRef<typeof AlertDialogPrimitive.Action>,
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>

> (({ className, ...props }, ref) => (
> <AlertDialogPrimitive.Action

    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}

/>
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>

> (({ className, ...props }, ref) => (
> <AlertDialogPrimitive.Cancel

    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}

/>
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
AlertDialog,
AlertDialogPortal,
AlertDialogOverlay,
AlertDialogTrigger,
AlertDialogContent,
AlertDialogHeader,
AlertDialogFooter,
AlertDialogTitle,
AlertDialogDescription,
AlertDialogAction,
AlertDialogCancel,
}

================================================
FILE: src/components/ui/alert.tsx
================================================
import \* as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const alertVariants = cva(
"relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
{
variants: {
variant: {
default: "bg-background text-foreground",
destructive:
"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
},
},
defaultVariants: {
variant: "default",
},
}
)

const Alert = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>

> (({ className, variant, ...props }, ref) => (

  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLHeadingElement>

> (({ className, ...props }, ref) => (

  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLParagraphElement>

> (({ className, ...props }, ref) => (

  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

================================================
FILE: src/components/ui/animated-background.tsx
================================================
"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

interface Props {
width?: number;
height?: number;
x?: number;
y?: number;
strokeDasharray?: any;
numSquares?: number;
className?: string;
maxOpacity?: number;
duration?: number;
repeatDelay?: number;
}

export function AnimatedBackground({
width = 40,
height = 40,
x = -1,
y = -1,
strokeDasharray = 0,
numSquares = 50,
className,
maxOpacity = 0.5,
duration = 4,
repeatDelay = 0.5,
...props
}: Props) {
const id = useId();
const containerRef = useRef(null);
const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
const [squares, setSquares] = useState(() => generateSquares(numSquares));

    function getPos() {
        return [
            Math.floor((Math.random() * dimensions.width) / width),
            Math.floor((Math.random() * dimensions.height) / height),
        ];
    }

    // Adjust the generateSquares function to return objects with an id, x, and y
    function generateSquares(count: number) {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            pos: getPos(),
        }));
    }

    // Function to update a single square's position
    const updateSquarePosition = (id: number) => {
        setSquares((currentSquares) =>
            currentSquares.map((sq) =>
                sq.id === id
                    ? {
                        ...sq,
                        pos: getPos(),
                    }
                    : sq,
            ),
        );
    };

    // Update squares to animate in
    useEffect(() => {
        if (dimensions.width && dimensions.height) {
            setSquares(generateSquares(numSquares));
        }
    }, [dimensions, numSquares]);

    // Resize observer to update container dimensions
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, [containerRef]);

    return (
        <svg
            ref={containerRef}
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full fill-[rgba(0,0,0,0.01)] stroke-muted-foreground/20",
                className,
            )}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
            <svg x={x} y={y} className="overflow-visible">
                {squares.map(({ pos: [x, y], id }, index) => (
                    <motion.rect
                        initial={{ opacity: 0 }}
                        animate={{ opacity: maxOpacity }}
                        transition={{
                            duration,
                            repeat: 1,
                            delay: index * 0.1,
                            repeatType: "reverse",
                        }}
                        onAnimationComplete={() => updateSquarePosition(id)}
                        key={`${x}-${y}-${index}`}
                        width={width - 1}
                        height={height - 1}
                        x={x * width + 1}
                        y={y * height + 1}
                        fill="currentColor"
                        strokeWidth="0"
                    // opacity={0.5}
                    />
                ))}
            </svg>
        </svg>
    );

}

export default AnimatedBackground;

================================================
FILE: src/components/ui/animated-beam.tsx
================================================
"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import { RefObject, useEffect, useId, useState } from "react";

export interface AnimatedBeamProps {
className?: string;
containerRef: RefObject<HTMLElement>; // Container ref
fromRef: RefObject<HTMLElement>;
toRef: RefObject<HTMLElement>;
curvature?: number;
reverse?: boolean;
pathColor?: string;
pathWidth?: number;
pathOpacity?: number;
gradientStartColor?: string;
gradientStopColor?: string;
delay?: number;
duration?: number;
startXOffset?: number;
startYOffset?: number;
endXOffset?: number;
endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
className,
containerRef,
fromRef,
toRef,
curvature = 0,
reverse = false, // Include the reverse prop
duration = Math.random() \* 3 + 4,
delay = 0,
pathColor = "gray",
pathWidth = 2,
pathOpacity = 0.2,
gradientStartColor = "#ffaa40",
gradientStopColor = "#9c40ff",
startXOffset = 0,
startYOffset = 0,
endXOffset = 0,
endYOffset = 0,
}) => {
const id = useId();
const [pathD, setPathD] = useState("");
const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

    // Calculate the gradient coordinates based on the reverse prop
    const gradientCoordinates = reverse
        ? {
            x1: ["90%", "-10%"],
            x2: ["100%", "0%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
        }
        : {
            x1: ["10%", "110%"],
            x2: ["0%", "100%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
        };

    useEffect(() => {
        const updatePath = () => {
            if (containerRef.current && fromRef.current && toRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const rectA = fromRef.current.getBoundingClientRect();
                const rectB = toRef.current.getBoundingClientRect();

                const svgWidth = containerRect.width;
                const svgHeight = containerRect.height;
                setSvgDimensions({ width: svgWidth, height: svgHeight });

                const startX =
                    rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
                const startY =
                    rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
                const endX =
                    rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
                const endY =
                    rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

                const controlY = startY - curvature;
                const d = `M ${startX},${startY} Q ${(startX + endX) / 2
                    },${controlY} ${endX},${endY}`;
                setPathD(d);
            }
        };

        // Initialize ResizeObserver
        const resizeObserver = new ResizeObserver((entries) => {
            // For all entries, recalculate the path
            for (let entry of entries) {
                updatePath();
            }
        });

        // Observe the container element
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        // Call the updatePath initially to set the initial path
        updatePath();

        // Clean up the observer on component unmount
        return () => {
            resizeObserver.disconnect();
        };
    }, [
        containerRef,
        fromRef,
        toRef,
        curvature,
        startXOffset,
        startYOffset,
        endXOffset,
        endYOffset,
    ]);

    return (
        <svg
            fill="none"
            width={svgDimensions.width}
            height={svgDimensions.height}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
                "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
                className,
            )}
            viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
        >
            <path
                d={pathD}
                stroke={pathColor}
                strokeWidth={pathWidth}
                strokeOpacity={pathOpacity}
                strokeLinecap="round"
            />
            <path
                d={pathD}
                strokeWidth={pathWidth}
                stroke={`url(#${id})`}
                strokeOpacity="1"
                strokeLinecap="round"
            />
            <defs>
                <motion.linearGradient
                    className="transform-gpu"
                    id={id}
                    gradientUnits={"userSpaceOnUse"}
                    initial={{
                        x1: "0%",
                        x2: "0%",
                        y1: "0%",
                        y2: "0%",
                    }}
                    animate={{
                        x1: gradientCoordinates.x1,
                        x2: gradientCoordinates.x2,
                        y1: gradientCoordinates.y1,
                        y2: gradientCoordinates.y2,
                    }}
                    transition={{
                        delay,
                        duration,
                        ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
                        repeat: Infinity,
                        repeatDelay: 0,
                    }}
                >
                    <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
                    <stop stopColor={gradientStartColor}></stop>
                    <stop offset="32.5%" stopColor={gradientStopColor}></stop>
                    <stop
                        offset="100%"
                        stopColor={gradientStopColor}
                        stopOpacity="0"
                    ></stop>
                </motion.linearGradient>
            </defs>
        </svg>
    );

};

================================================
FILE: src/components/ui/animated-text.tsx
================================================
import { cn } from "@/utils";
import { CSSProperties, FC, ReactNode } from "react";

interface Props {
children: ReactNode;
className?: string;
shimmerWidth?: number;
}

const AnimatedText: FC<Props> = ({
children,
className,
shimmerWidth = 100,
}) => {
return (
<p
style={
{
"--shimmer-width": `${shimmerWidth}px`,
} as CSSProperties
}
className={cn(
"mx-auto max-w-md text-muted-foreground",

                // Shimmer effect
                "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

                // Shimmer gradient
                "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent ",

                className,
            )}
        >
            {children}
        </p>
    );

};

export default AnimatedText;

================================================
FILE: src/components/ui/aspect-ratio.tsx
================================================
"use client"

import \* as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }

================================================
FILE: src/components/ui/avatar.tsx
================================================
"use client"

import _ as React from "react"
import _ as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/utils"

const Avatar = React.forwardRef<
React.ElementRef<typeof AvatarPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

> (({ className, ...props }, ref) => (
> <AvatarPrimitive.Root

    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}

/>
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
React.ElementRef<typeof AvatarPrimitive.Image>,
React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>

> (({ className, ...props }, ref) => (
> <AvatarPrimitive.Image

    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}

/>
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
React.ElementRef<typeof AvatarPrimitive.Fallback>,
React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>

> (({ className, ...props }, ref) => (
> <AvatarPrimitive.Fallback

    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}

/>
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }

================================================
FILE: src/components/ui/background.tsx
================================================
// import React from 'react'

// const background = () => {
// return (
// <div className="w-screen min-h-screen fixed z[1] flex justify-center pt-32 px-6 pb-40 pointer-events-none">
// <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
// </div>
// )
// };

// export default background
import { cn } from "@/utils";
import { useId } from "react";

interface Props {
children: React.ReactNode;
width?: any;
height?: any;
x?: any;
y?: any;
squares?: Array<[x: number, y: number]>;
strokeDasharray?: any;
className?: string;
[key: string]: any;
}

export function Background({
children,
width = 40,
height = 40,
x = -1,
y = -1,
strokeDasharray = 0,
squares,
className,
...props
}: Props) {
const id = useId();

    return (
        <div className="flex min-h-screen flex-col w-full relative">
            <div className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] w-full h-full absolute inset-0"></div>
            <div className="min-h-screen absolute inset-0 w-full">
                <svg
                    aria-hidden="true"
                    className={cn(
                        "pointer-events-none w-full h-full fill-neutral-400/30 stroke-neutral-400/30",
                        className,
                    )}
                    {...props}
                >
                    <defs>
                        <pattern
                            id={id}
                            width={width}
                            height={height}
                            patternUnits="userSpaceOnUse"
                            x={x}
                            y={y}
                        >
                            <path
                                d={`M.5 ${height}V.5H${width}`}
                                fill="none"
                                strokeDasharray={strokeDasharray}
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
                    {squares && (
                        <svg x={x} y={y} className="overflow-visible">
                            {squares.map(([x, y]) => (
                                <rect
                                    strokeWidth="0"
                                    key={`${x}-${y}`}
                                    width={width - 1}
                                    height={height - 1}
                                    x={x * width + 1}
                                    y={y * height + 1}
                                />
                            ))}
                        </svg>
                    )}
                </svg>
            </div>
            {children}
        </div>
    );

}

export default Background;

================================================
FILE: src/components/ui/badge.tsx
================================================
import \* as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const badgeVariants = cva(
"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
{
variants: {
variant: {
default:
"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
secondary:
"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
destructive:
"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
outline: "text-foreground",
},
},
defaultVariants: {
variant: "default",
},
}
)

export interface BadgeProps
extends React.HTMLAttributes<HTMLDivElement>,
VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
return (
<div className={cn(badgeVariants({ variant }), className)} {...props} />
)
}

export { Badge, badgeVariants }

================================================
FILE: src/components/ui/bento-grid.tsx
================================================
import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/utils";
import { ArrowRightIcon, CalendarIcon, Link2Icon, SearchIcon, WaypointsIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Integrations } from "./integrations";
import { Label } from "./label";

export const CARDS = [
{
Icon: Link2Icon,
name: "Shorten links",
description: "Create short links that are easy to remember and share.",
href: "#",
cta: "Learn more",
className: "col-span-3 lg:col-span-1",
background: (
<Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
<CardHeader>
<CardTitle>
Create short links
</CardTitle>
<CardDescription>
Create short links that are easy to remember and share.
</CardDescription>
</CardHeader>
<CardContent className="-mt-4">
<Label>
Paste your link
</Label>
<Input
                        type="text"
                        placeholder="Paste your link here..."
                        className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
                    />
</CardContent>
</Card>
),
},
{
Icon: SearchIcon,
name: "Search your links",
description: "Quickly find the links you need with AI-powered search.",
href: "#",
cta: "Learn more",
className: "col-span-3 lg:col-span-2",
background: (
<Command className="absolute right-10 top-10 w-[70%] origin-to translate-x-0 border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10 p-2">
<Input placeholder="Type to search..." />
<div className="mt-1 cursor-pointer">
<div className="px-4 py-2 hover:bg-muted rounded-md">necto.studio/hdf00c</div>
<div className="px-4 py-2 hover:bg-muted rounded-md">necto.studio/sdv0n0</div>
<div className="px-4 py-2 hover:bg-muted rounded-md">necto.studio/03gndo</div>
<div className="px-4 py-2 hover:bg-muted rounded-md">necto.studio/09vmmw</div>
<div className="px-4 py-2 hover:bg-muted rounded-md">necto.studio/s09vws</div>
<div className="px-4 py-2 hover:bg-muted rounded-md">necto.studio/sd8fv5</div>
</div>
</Command>
),
},
{
Icon: WaypointsIcon,
name: "Connect your apps",
description: "Integrate with your favorite apps and services.",
href: "#",
cta: "Learn more",
className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
background: (
<Integrations className="absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
),
},
{
Icon: CalendarIcon,
name: "Calendar",
description: "Keep track of your links with our calendar view.",
className: "col-span-3 lg:col-span-1",
href: "#",
cta: "Learn more",
background: (
<Calendar
mode="single"
selected={new Date(2022, 4, 11, 0, 0, 0)}
className="absolute right-0 top-10 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
/>
),
},
];

const BentoGrid = ({
children,
className,
}: {
children: ReactNode;
className?: string;
}) => {
return (
<div
className={cn(
"grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
className,
)} >
{children}
</div>
);
};

const BentoCard = ({
name,
className,
background,
Icon,
description,
href,
cta,
}: {
name: string;
className: string;
background: ReactNode;
Icon: any;
description: string;
href: string;
cta: string;
}) => (
<div
key={name}
className={cn(
"group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
"bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
className,
)} >
<div>{background}</div>
<div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
<Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
<h3 className="text-xl font-semibold text-neutral-300">
{name}
</h3>
<p className="max-w-lg text-neutral-400">{description}</p>
</div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link href={href} className={buttonVariants({ size: "sm", variant: "ghost", className: "cursor-pointer" })}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>

);

export { BentoCard, BentoGrid };

================================================
FILE: src/components/ui/blur-image.tsx
================================================
"use client";

import { cn } from "@/utils";
import Image from "next/image"
import React, { useEffect, useState } from 'react'

interface Props {
src: string;
alt: string;
className?: string;
}

const BlurImage = ({ src, alt, className, ...props }: Props) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [url, setUrl] = useState<string>(src);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsLoading(false);
        const target = e.target as HTMLImageElement;
        if (target.naturalWidth <= 32 && target.naturalHeight <= 32) {
            setUrl(`https://github.com/shadcn.png`);
        }
    };

    useEffect(() => {
        setUrl(src);
    }, [src]);

    return (
        <Image
            {...props}
            src={src}
            alt={alt}
            unoptimized
            onLoad={handleLoad}
            className={cn(isLoading ? "filter blur-sm" : "blur-0", className)}
        />
    )

}

export default BlurImage

================================================
FILE: src/components/ui/border-beam.tsx
================================================
import { cn } from "@/utils";

interface BorderBeamProps {
className?: string;
size?: number;
duration?: number;
borderWidth?: number;
anchor?: number;
colorFrom?: string;
colorTo?: string;
delay?: number;
}

export const BorderBeam = ({
className,
size = 200,
duration = 15,
anchor = 90,
borderWidth = 1.5,
colorFrom = "#ffaa40",
colorTo = "#9c40ff",
delay = 0,
}: BorderBeamProps) => {
return (
<div
style={
{
"--size": size,
"--duration": duration,
"--anchor": anchor,
"--border-width": borderWidth,
"--color-from": colorFrom,
"--color-to": colorTo,
"--delay": `-${delay}s`,
} as React.CSSProperties
}
className={cn(
"absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*2px)_solid_transparent]",

                // mask styles
                "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

                // pseudo styles
                "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
                className,
            )}
        />
    );

};

================================================
FILE: src/components/ui/breadcrumb.tsx
================================================
import \* as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/utils"

const Breadcrumb = React.forwardRef<
HTMLElement,
React.ComponentPropsWithoutRef<"nav"> & {
separator?: React.ReactNode
}

> (({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
> Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
HTMLOListElement,
React.ComponentPropsWithoutRef<"ol">

> (({ className, ...props }, ref) => (

  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
HTMLLIElement,
React.ComponentPropsWithoutRef<"li">

> (({ className, ...props }, ref) => (

  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
HTMLAnchorElement,
React.ComponentPropsWithoutRef<"a"> & {
asChild?: boolean
}

> (({ asChild, className, ...props }, ref) => {
> const Comp = asChild ? Slot : "a"

return (
<Comp
ref={ref}
className={cn("transition-colors hover:text-foreground", className)}
{...props}
/>
)
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
HTMLSpanElement,
React.ComponentPropsWithoutRef<"span">

> (({ className, ...props }, ref) => (
> <span

    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}

/>
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
children,
className,
...props
}: React.ComponentProps<"li">) => (

  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
className,
...props
}: React.ComponentProps<"span">) => (
<span
role="presentation"
aria-hidden="true"
className={cn("flex h-9 w-9 items-center justify-center", className)}
{...props}

>

    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>

  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
Breadcrumb,
BreadcrumbList,
BreadcrumbItem,
BreadcrumbLink,
BreadcrumbPage,
BreadcrumbSeparator,
BreadcrumbEllipsis,
}

================================================
FILE: src/components/ui/button.tsx
================================================
import \* as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const buttonVariants = cva(
"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all",
{
variants: {
variant: {
primary: "bg-primary text-primary-foreground hover:bg-primary/90 primary",
purple: "bg-purple-500 text-white hover:bg-purple-500/80",
ghost: "hover:bg-accent hover:text-accent-foreground",
subtle: "bg-subtle text-subtle-foreground hover:bg-subtle/80",
outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-border",
destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
},
size: {
default: "h-9 px-4 py-2",
sm: "h-8 rounded-md px-3",
lg: "h-11 rounded-md px-8",
icon: "h-8 w-8",
iconlg: "h-10 w-10",
},
},
defaultVariants: {
variant: "primary",
size: "default",
},
}
)
export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {
asChild?: boolean
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
({ className, variant, size, asChild = false, ...props }, ref) => {
const Comp = asChild ? Slot : "button"
return (
<Comp
className={cn(buttonVariants({ variant, size, className }))}
ref={ref}
{...props}
/>
)
}
)
Button.displayName = "Button"

export { Button, buttonVariants };

// export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
// children?: React.ReactNode;
// variant?: "primary" | "ghost" | "subtle" | "outline" | "destructive";
// isLoading?: boolean;
// icon?: React.ReactNode;
// size?: "default" | "sm" | "lg" | "icon" | "iconlg";
// };
// export const buttonVariants = cva(
// "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 relative",
// {
// variants: {
// variant: {
// primary: "bg-primary text-primary-foreground hover:bg-primary/90",
// ghost: "hover:bg-accent hover:text-accent-foreground",
// subtle: "bg-subtle text-foreground/80 hover:bg-subtle/80",
// outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-neutral-500",
// destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
// },
// size: {
// default: "h-9 px-4 py-2",
// sm: "h-8 rounded-md px-3",
// lg: "h-11 rounded-md px-8",
// icon: "h-8 w-8",
// iconlg: "h-10 w-10",
// },
// },
// defaultVariants: {
// variant: "primary",
// size: "default",
// },
// }
// )
// const Button = ({
// icon,
// children,
// isLoading = false,
// variant = "primary",
// size = "default",
// ...props
// }: ButtonProps) => {
// return (
// <button
// className={cn(
// props.className,
// "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 relative",
// {
// primary: "bg-primary text-primary-foreground hover:bg-primary/90",
// ghost: "hover:bg-accent hover:text-accent-foreground",
// subtle: "bg-subtle text-foreground/80 hover:bg-subtle/80",
// outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-neutral-500",
// destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
// }[variant],
// {
// default: "h-9 px-4 py-2",
// sm: "h-8 rounded-md px-3",
// lg: "h-11 rounded-md px-8",
// icon: "h-8 w-8",
// iconlg: "h-10 w-10",
// }[size]
// )}
// {...props}
// >
// {isLoading ? "Loading" : icon ? icon : null}
// {children}
// </button>
// );
// };

// export default Button;

================================================
FILE: src/components/ui/calendar.tsx
================================================
"use client"

import \* as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
className,
classNames,
showOutsideDays = true,
...props
}: CalendarProps) {
return (
<DayPicker
showOutsideDays={showOutsideDays}
className={cn("p-3", className)}
classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
{...props}
/>
)
}
Calendar.displayName = "Calendar"

export { Calendar }

================================================
FILE: src/components/ui/card.tsx
================================================
import \* as React from "react"

import { cn } from "@/utils"

const Card = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>

> (({ className, ...props }, ref) => (

  <div
    ref={ref}
    className={cn(
      "rounded-lg lg:rounded-2xl border border-border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>

> (({ className, ...props }, ref) => (

  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLHeadingElement>

> (({ className, ...props }, ref) => (

  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLParagraphElement>

> (({ className, ...props }, ref) => (

  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>

> (({ className, ...props }, ref) => (

  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>

> (({ className, ...props }, ref) => (

  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

================================================
FILE: src/components/ui/carousel.tsx
================================================
"use client"

import \* as React from "react"
import useEmblaCarousel, {
type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
opts?: CarouselOptions
plugins?: CarouselPlugin
orientation?: "horizontal" | "vertical"
setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
carouselRef: ReturnType<typeof useEmblaCarousel>[0]
api: ReturnType<typeof useEmblaCarousel>[1]
scrollPrev: () => void
scrollNext: () => void
canScrollPrev: boolean
canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
const context = React.useContext(CarouselContext)

if (!context) {
throw new Error("useCarousel must be used within a <Carousel />")
}

return context
}

const Carousel = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & CarouselProps

> (
> (

    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref

) => {
const [carouselRef, api] = useEmblaCarousel(
{
...opts,
axis: orientation === "horizontal" ? "x" : "y",
},
plugins
)
const [canScrollPrev, setCanScrollPrev] = React.useState(false)
const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )

}
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>

> (({ className, ...props }, ref) => {
> const { carouselRef, orientation } = useCarousel()

return (
<div ref={carouselRef} className="overflow-hidden">
<div
ref={ref}
className={cn(
"flex",
orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
className
)}
{...props}
/>
</div>
)
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>

> (({ className, ...props }, ref) => {
> const { orientation } = useCarousel()

return (
<div
ref={ref}
role="group"
aria-roledescription="slide"
className={cn(
"min-w-0 shrink-0 grow-0 basis-full",
orientation === "horizontal" ? "pl-4" : "pt-4",
className
)}
{...props}
/>
)
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
HTMLButtonElement,
React.ComponentProps<typeof Button>

> (({ className, variant = "outline", size = "icon", ...props }, ref) => {
> const { orientation, scrollPrev, canScrollPrev } = useCarousel()

return (
<Button
ref={ref}
variant={variant}
size={size}
className={cn(
"absolute h-8 w-8 rounded-full",
orientation === "horizontal"
? "-left-12 top-1/2 -translate-y-1/2"
: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
className
)}
disabled={!canScrollPrev}
onClick={scrollPrev}
{...props} >
<ArrowLeft className="h-4 w-4" />
<span className="sr-only">Previous slide</span>
</Button>
)
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
HTMLButtonElement,
React.ComponentProps<typeof Button>

> (({ className, variant = "outline", size = "icon", ...props }, ref) => {
> const { orientation, scrollNext, canScrollNext } = useCarousel()

return (
<Button
ref={ref}
variant={variant}
size={size}
className={cn(
"absolute h-8 w-8 rounded-full",
orientation === "horizontal"
? "-right-12 top-1/2 -translate-y-1/2"
: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
className
)}
disabled={!canScrollNext}
onClick={scrollNext}
{...props} >
<ArrowRight className="h-4 w-4" />
<span className="sr-only">Next slide</span>
</Button>
)
})
CarouselNext.displayName = "CarouselNext"

export {
type CarouselApi,
Carousel,
CarouselContent,
CarouselItem,
CarouselPrevious,
CarouselNext,
}

================================================
FILE: src/components/ui/checkbox.tsx
================================================
"use client"

import _ as React from "react"
import _ as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/utils"

const Checkbox = React.forwardRef<
React.ElementRef<typeof CheckboxPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

> (({ className, ...props }, ref) => (
> <CheckboxPrimitive.Root

    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}

>

    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>

</CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

================================================
FILE: src/components/ui/collapsible.tsx
================================================
"use client"

import \* as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

================================================
FILE: src/components/ui/command.tsx
================================================
"use client"

import \* as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
React.ElementRef<typeof CommandPrimitive>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive>

> (({ className, ...props }, ref) => (
> <CommandPrimitive

    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}

/>
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps { }

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
return (
<Dialog {...props}>
<DialogContent className="overflow-hidden p-0 shadow-lg">
<Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
{children}
</Command>
</DialogContent>
</Dialog>
)
}

const CommandInput = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.Input>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>

> (({ className, ...props }, ref) => (

  <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.List>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>

> (({ className, ...props }, ref) => (
> <CommandPrimitive.List

    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}

/>
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.Empty>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>

> ((props, ref) => (
> <CommandPrimitive.Empty

    ref={ref}
    className="py-6 text-center text-sm"
    {...props}

/>
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.Group>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>

> (({ className, ...props }, ref) => (
> <CommandPrimitive.Group

    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}

/>
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.Separator>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>

> (({ className, ...props }, ref) => (
> <CommandPrimitive.Separator

    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}

/>
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.Item>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>

> (({ className, ...props }, ref) => (
> <CommandPrimitive.Item

    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}

/>
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
className,
...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
return (
<span
className={cn(
"ml-auto text-xs tracking-widest text-muted-foreground",
className
)}
{...props}
/>
)
}
CommandShortcut.displayName = "CommandShortcut"

export {
Command,
CommandDialog,
CommandInput,
CommandList,
CommandEmpty,
CommandGroup,
CommandItem,
CommandShortcut,
CommandSeparator,
}

================================================
FILE: src/components/ui/context-menu.tsx
================================================
"use client"

import _ as React from "react"
import _ as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
inset?: boolean
}

> (({ className, inset, children, ...props }, ref) => (
> <ContextMenuPrimitive.SubTrigger

    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}

>

    {children}
    <ChevronRight className="ml-auto h-4 w-4" />

</ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>

> (({ className, ...props }, ref) => (
> <ContextMenuPrimitive.SubContent

    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}

/>
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
React.ElementRef<typeof ContextMenuPrimitive.Content>,
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>

> (({ className, ...props }, ref) => (
> <ContextMenuPrimitive.Portal>

    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />

</ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
React.ElementRef<typeof ContextMenuPrimitive.Item>,
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
inset?: boolean
}

> (({ className, inset, ...props }, ref) => (
> <ContextMenuPrimitive.Item

    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}

/>
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>

> (({ className, children, checked, ...props }, ref) => (
> <ContextMenuPrimitive.CheckboxItem

    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}

>

    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}

</ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>

> (({ className, children, ...props }, ref) => (
> <ContextMenuPrimitive.RadioItem

    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}

>

    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}

</ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
React.ElementRef<typeof ContextMenuPrimitive.Label>,
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
inset?: boolean
}

> (({ className, inset, ...props }, ref) => (
> <ContextMenuPrimitive.Label

    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}

/>
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
React.ElementRef<typeof ContextMenuPrimitive.Separator>,
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>

> (({ className, ...props }, ref) => (
> <ContextMenuPrimitive.Separator

    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}

/>
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
className,
...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
return (
<span
className={cn(
"ml-auto text-xs tracking-widest text-muted-foreground",
className
)}
{...props}
/>
)
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
ContextMenu,
ContextMenuTrigger,
ContextMenuContent,
ContextMenuItem,
ContextMenuCheckboxItem,
ContextMenuRadioItem,
ContextMenuLabel,
ContextMenuSeparator,
ContextMenuShortcut,
ContextMenuGroup,
ContextMenuPortal,
ContextMenuSub,
ContextMenuSubContent,
ContextMenuSubTrigger,
ContextMenuRadioGroup,
}

================================================
FILE: src/components/ui/copy-button.tsx
================================================
"use client";

import { cn } from "@/utils";
import { Check, Copy, LucideIcon } from "lucide-react";
import React, { useState } from 'react'
import { toast } from "sonner";

interface Props {
text: string;
className?: string;
icon?: LucideIcon;
}

const CopyButton = ({ text, className, icon }: Props) => {

    const [isCopied, setIsCopied] = useState<boolean>(false);

    const Comp = icon || Copy;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsCopied(true);
        navigator.clipboard.writeText(text).then(() => {
            toast.success("Copied to clipboard!");
        });
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <button
            className={cn(
                "flex items-center justify-center group bg-foreground/10 p-2 transition-all duration-100 hover:scale-105 hover:bg-foreground/20 rounded-md active:scale-95",
                className
            )}
        >
            <span className="sr-only">Copy</span>
            {isCopied ? (
                <Check className="text-neutral-700 group-hover:text-accent" />
            ) : (
                <Comp className="text-neutral-700 group-hover:text-foreground" />
            )}
        </button>
    )

};

export default CopyButton

================================================
FILE: src/components/ui/dialog.tsx
================================================
"use client"

import _ as React from "react"
import _ as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
React.ElementRef<typeof DialogPrimitive.Overlay>,
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>

> (({ className, ...props }, ref) => (
> <DialogPrimitive.Overlay

    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}

/>
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
React.ElementRef<typeof DialogPrimitive.Content>,
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>

> (({ className, children, ...props }, ref) => (
> <DialogPortal>

    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>

  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
className,
...props
}: React.HTMLAttributes<HTMLDivElement>) => (

  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
className,
...props
}: React.HTMLAttributes<HTMLDivElement>) => (

  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
React.ElementRef<typeof DialogPrimitive.Title>,
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>

> (({ className, ...props }, ref) => (
> <DialogPrimitive.Title

    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}

/>
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
React.ElementRef<typeof DialogPrimitive.Description>,
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>

> (({ className, ...props }, ref) => (
> <DialogPrimitive.Description

    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}

/>
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
Dialog,
DialogPortal,
DialogOverlay,
DialogClose,
DialogTrigger,
DialogContent,
DialogHeader,
DialogFooter,
DialogTitle,
DialogDescription,
}

================================================
FILE: src/components/ui/drawer.tsx
================================================
"use client"

import \* as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/utils"

const Drawer = ({
shouldScaleBackground = true,
...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
<DrawerPrimitive.Root
shouldScaleBackground={shouldScaleBackground}
{...props}
/>
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
React.ElementRef<typeof DrawerPrimitive.Overlay>,
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>

> (({ className, ...props }, ref) => (
> <DrawerPrimitive.Overlay

    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}

/>
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
React.ElementRef<typeof DrawerPrimitive.Content>,
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>

> (({ className, children, ...props }, ref) => (
> <DrawerPortal>

    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>

  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
className,
...props
}: React.HTMLAttributes<HTMLDivElement>) => (

  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
className,
...props
}: React.HTMLAttributes<HTMLDivElement>) => (

  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
React.ElementRef<typeof DrawerPrimitive.Title>,
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>

> (({ className, ...props }, ref) => (
> <DrawerPrimitive.Title

    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}

/>
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
React.ElementRef<typeof DrawerPrimitive.Description>,
React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>

> (({ className, ...props }, ref) => (
> <DrawerPrimitive.Description

    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}

/>
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
Drawer,
DrawerPortal,
DrawerOverlay,
DrawerTrigger,
DrawerClose,
DrawerContent,
DrawerHeader,
DrawerFooter,
DrawerTitle,
DrawerDescription,
}

================================================
FILE: src/components/ui/dropdown-menu.tsx
================================================
"use client"

import _ as React from "react"
import _ as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
inset?: boolean
}

> (({ className, inset, children, ...props }, ref) => (
> <DropdownMenuPrimitive.SubTrigger

    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}

>

    {children}
    <ChevronRight className="ml-auto h-4 w-4" />

</DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>

> (({ className, ...props }, ref) => (
> <DropdownMenuPrimitive.SubContent

    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}

/>
))
DropdownMenuSubContent.displayName =
DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
React.ElementRef<typeof DropdownMenuPrimitive.Content>,
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>

> (({ className, sideOffset = 4, ...props }, ref) => (
> <DropdownMenuPrimitive.Portal>

    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />

</DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
React.ElementRef<typeof DropdownMenuPrimitive.Item>,
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
inset?: boolean
}

> (({ className, inset, ...props }, ref) => (
> <DropdownMenuPrimitive.Item

    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}

/>
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>

> (({ className, children, checked, ...props }, ref) => (
> <DropdownMenuPrimitive.CheckboxItem

    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}

>

    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}

</DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>

> (({ className, children, ...props }, ref) => (
> <DropdownMenuPrimitive.RadioItem

    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}

>

    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}

</DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
React.ElementRef<typeof DropdownMenuPrimitive.Label>,
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
inset?: boolean
}

> (({ className, inset, ...props }, ref) => (
> <DropdownMenuPrimitive.Label

    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}

/>
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>

> (({ className, ...props }, ref) => (
> <DropdownMenuPrimitive.Separator

    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}

/>
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
className,
...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
return (
<span
className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
{...props}
/>
)
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
DropdownMenu,
DropdownMenuTrigger,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuCheckboxItem,
DropdownMenuRadioItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuShortcut,
DropdownMenuGroup,
DropdownMenuPortal,
DropdownMenuSub,
DropdownMenuSubContent,
DropdownMenuSubTrigger,
DropdownMenuRadioGroup,
}

================================================
FILE: src/components/ui/form.tsx
================================================
"use client";
import _ as React from "react"
import _ as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
Controller,
ControllerProps,
FieldPath,
FieldValues,
FormProvider,
useFormContext,
} from "react-hook-form"

import { cn } from "@/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
TFieldValues extends FieldValues = FieldValues,
TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>

> = {
> name: TName
> }

const FormFieldContext = React.createContext<FormFieldContextValue>(
{} as FormFieldContextValue
)

const FormField = <
TFieldValues extends FieldValues = FieldValues,
TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>

> ({
> ...props
> }: ControllerProps<TFieldValues, TName>) => {
> return (

    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>

)
}

const useFormField = () => {
const fieldContext = React.useContext(FormFieldContext)
const itemContext = React.useContext(FormItemContext)
const { getFieldState, formState } = useFormContext()

const fieldState = getFieldState(fieldContext.name, formState)

if (!fieldContext) {
throw new Error("useFormField should be used within <FormField>")
}

const { id } = itemContext

return {
id,
name: fieldContext.name,
formItemId: `${id}-form-item`,
formDescriptionId: `${id}-form-item-description`,
formMessageId: `${id}-form-item-message`,
...fieldState,
}
}

type FormItemContextValue = {
id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
{} as FormItemContextValue
)

const FormItem = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>

> (({ className, ...props }, ref) => {
> const id = React.useId()

return (
<FormItemContext.Provider value={{ id }}>
<div ref={ref} className={cn("space-y-2", className)} {...props} />
</FormItemContext.Provider>
)
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
React.ElementRef<typeof LabelPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>

> (({ className, ...props }, ref) => {
> const { error, formItemId } = useFormField()

return (
<Label
ref={ref}
className={cn(error && "text-destructive", className)}
htmlFor={formItemId}
{...props}
/>
)
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
React.ElementRef<typeof Slot>,
React.ComponentPropsWithoutRef<typeof Slot>

> (({ ...props }, ref) => {
> const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

return (
<Slot
ref={ref}
id={formItemId}
aria-describedby={
!error
? `${formDescriptionId}`
: `${formDescriptionId} ${formMessageId}`
}
aria-invalid={!!error}
{...props}
/>
)
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLParagraphElement>

> (({ className, ...props }, ref) => {
> const { formDescriptionId } = useFormField()

return (
<p
ref={ref}
id={formDescriptionId}
className={cn("text-sm text-muted-foreground", className)}
{...props}
/>
)
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLParagraphElement>

> (({ className, children, ...props }, ref) => {
> const { error, formMessageId } = useFormField()
> const body = error ? String(error?.message) : children

if (!body) {
return null
}

return (
<p
ref={ref}
id={formMessageId}
className={cn("text-sm font-medium text-destructive", className)}
{...props} >
{body}
</p>
)
})
FormMessage.displayName = "FormMessage"

export {
useFormField,
Form,
FormItem,
FormLabel,
FormControl,
FormDescription,
FormMessage,
FormField,
}

================================================
FILE: src/components/ui/hover-card.tsx
================================================
"use client"

import _ as React from "react"
import _ as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
React.ElementRef<typeof HoverCardPrimitive.Content>,
React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>

> (({ className, align = "center", sideOffset = 4, ...props }, ref) => (
> <HoverCardPrimitive.Content

    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}

/>
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }

================================================
FILE: src/components/ui/input-otp.tsx
================================================
"use client"

import \* as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/utils"

const InputOTP = React.forwardRef<
React.ElementRef<typeof OTPInput>,
React.ComponentPropsWithoutRef<typeof OTPInput>

> (({ className, containerClassName, ...props }, ref) => (
> <OTPInput

    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}

/>
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
React.ElementRef<"div">,
React.ComponentPropsWithoutRef<"div">

> (({ className, ...props }, ref) => (

  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
React.ElementRef<"div">,
React.ComponentPropsWithoutRef<"div"> & { index: number }

> (({ index, className, ...props }, ref) => {
> const inputOTPContext = React.useContext(OTPInputContext)
> const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

return (
<div
ref={ref}
className={cn(
"relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
isActive && "z-10 ring-2 ring-ring ring-offset-background",
className
)}
{...props} >
{char}
{hasFakeCaret && (
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
</div>
)}
</div>
)
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
React.ElementRef<"div">,
React.ComponentPropsWithoutRef<"div">

> (({ ...props }, ref) => (

  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

================================================
FILE: src/components/ui/input.tsx
================================================
import \* as React from "react"

import { cn } from "@/utils"

export interface InputProps
extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
({ className, type, ...props }, ref) => {
return (
<input
type={type}
className={cn(
"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
className
)}
ref={ref}
{...props}
/>
)
}
)
Input.displayName = "Input"

export { Input }

================================================
FILE: src/components/ui/integrations.tsx
================================================
"use client";

import { cn } from "@/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { LucideProps } from "lucide-react";
import React, { forwardRef, useRef } from "react";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
function Circle({ className, children }, ref) {
return (
<div
ref={ref}
className={cn(
"z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
className,
)} >
{children}
</div>
);
}
);

export function Integrations({
className,
}: {
className?: string;
}) {
const containerRef = useRef<HTMLDivElement>(null);
const div1Ref = useRef<HTMLDivElement>(null);
const div2Ref = useRef<HTMLDivElement>(null);
const div3Ref = useRef<HTMLDivElement>(null);
const div4Ref = useRef<HTMLDivElement>(null);
const div5Ref = useRef<HTMLDivElement>(null);
const div6Ref = useRef<HTMLDivElement>(null);
const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className={cn(
                "relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl",
                className,
            )}
            ref={containerRef}
        >
            <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
                <div className="flex flex-col justify-center">
                    <Circle ref={div7Ref}>
                        <Icons.user className="text-black" />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div6Ref} className="h-16 w-16">
                        <Icons.openai className="h-6 w-6" />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <Circle ref={div1Ref}>
                        <Icons.googleDrive className="h-6 w-6" />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <Icons.googleDocs className="h-6 w-6" />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <Icons.whatsapp className="h-6 w-6" />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <Icons.messenger className="h-6 w-6" />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <Icons.notion className="h-6 w-6" />
                    </Circle>
                </div>
            </div>

            {/* AnimatedBeams */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div7Ref}
                duration={3}
            />
        </div>
    );

}

const Icons = {
openai: (props: LucideProps) => (
<svg role="img" viewBox="0 0 24 24" {...props}>
<path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
</svg>
),
user: (props: LucideProps) => (
<svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
className="lucide lucide-user"
{...props} >
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
<circle cx="12" cy="7" r="4" />
</svg>
),
googleDrive: (props: LucideProps) => (
<svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" {...props}>
<path
                d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
                fill="#0066da"
            />
<path
                d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
                fill="#00ac47"
            />
<path
                d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
                fill="#ea4335"
            />
<path
                d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
                fill="#00832d"
            />
<path
                d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                fill="#2684fc"
            />
<path
                d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
                fill="#ffba00"
            />
</svg>
),
googleDocs: (props: LucideProps) => (
<svg
width="47px"
height="65px"
viewBox="0 0 47 65"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
{...props} >
<title>Docs-icon</title>
<desc>Created with Sketch.</desc>
<defs>
<path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-1"
                ></path>
<path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-3"
                ></path>
<linearGradient
                    x1="50.0053945%"
                    y1="8.58610612%"
                    x2="50.0053945%"
                    y2="100.013939%"
                    id="linearGradient-5"
                >
<stop stopColor="#1A237E" stopOpacity="0.2" offset="0%"></stop>
<stop stopColor="#1A237E" stopOpacity="0.02" offset="100%"></stop>
</linearGradient>
<path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-6"
                ></path>
<path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-8"
                ></path>
<path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-10"
                ></path>
<path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-12"
                ></path>
<path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-14"
                ></path>
<radialGradient
                    cx="3.16804688%"
                    cy="2.71744318%"
                    fx="3.16804688%"
                    fy="2.71744318%"
                    r="161.248516%"
                    gradientTransform="translate(0.031680,0.027174),scale(1.000000,0.723077),translate(-0.031680,-0.027174)"
                    id="radialGradient-16"
                >
<stop stopColor="#FFFFFF" stopOpacity="0.1" offset="0%"></stop>
<stop stopColor="#FFFFFF" stopOpacity="0" offset="100%"></stop>
</radialGradient>
</defs>
<g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
<g
                    id="Consumer-Apps-Docs-Large-VD-R8"
                    transform="translate(-451.000000, -463.000000)"
                >
<g id="Hero" transform="translate(0.000000, 63.000000)">
<g id="Personal" transform="translate(277.000000, 309.000000)">
<g id="Docs-icon" transform="translate(174.000000, 91.000000)">
<g id="Group">
<g id="Clipped">
<mask id="mask-2" fill="white">
<use xlinkHref="#path-1"></use>
</mask>
<g id="SVGID_1_"></g>
<path
                                            d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L36.71875,10.3409091 L29.375,0 Z"
                                            id="Path"
                                            fill="#4285F4"
                                            fillRule="nonzero"
                                            mask="url(#mask-2)"
                                        ></path>
</g>
<g id="Clipped">
<mask id="mask-4" fill="white">
<use xlinkHref="#path-3"></use>
</mask>
<g id="SVGID_1_"></g>
<polygon
                                            id="Path"
                                            fill="url(#linearGradient-5)"
                                            fillRule="nonzero"
                                            mask="url(#mask-4)"
                                            points="30.6638281 16.4309659 47 32.8582386 47 17.7272727"
                                        ></polygon>
</g>
<g id="Clipped">
<mask id="mask-7" fill="white">
<use xlinkHref="#path-6"></use>
</mask>
<g id="SVGID_1_"></g>
<path
                                            d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z"
                                            id="Shape"
                                            fill="#F1F1F1"
                                            fillRule="nonzero"
                                            mask="url(#mask-7)"
                                        ></path>
</g>
<g id="Clipped">
<mask id="mask-9" fill="white">
<use xlinkHref="#path-8"></use>
</mask>
<g id="SVGID_1_"></g>
<g id="Group" mask="url(#mask-9)">
<g transform="translate(26.437500, -2.954545)">
<path
                                                    d="M2.9375,2.95454545 L2.9375,16.25 C2.9375,18.6985795 4.90929688,20.6818182 7.34375,20.6818182 L20.5625,20.6818182 L2.9375,2.95454545 Z"
                                                    id="Path"
                                                    fill="#A1C2FA"
                                                    fillRule="nonzero"
                                                ></path>
</g>
</g>
</g>
<g id="Clipped">
<mask id="mask-11" fill="white">
<use xlinkHref="#path-10"></use>
</mask>
<g id="SVGID_1_"></g>
<path
                                            d="M4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,4.80113636 C0,2.36363636 1.9828125,0.369318182 4.40625,0.369318182 L29.375,0.369318182 L29.375,0 L4.40625,0 Z"
                                            id="Path"
                                            fillOpacity="0.2"
                                            fill="#FFFFFF"
                                            fillRule="nonzero"
                                            mask="url(#mask-11)"
                                        ></path>
</g>
<g id="Clipped">
<mask id="mask-13" fill="white">
<use xlinkHref="#path-12"></use>
</mask>
<g id="SVGID_1_"></g>
<path
                                            d="M42.59375,64.6306818 L4.40625,64.6306818 C1.9828125,64.6306818 0,62.6363636 0,60.1988636 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,60.1988636 C47,62.6363636 45.0171875,64.6306818 42.59375,64.6306818 Z"
                                            id="Path"
                                            fillOpacity="0.2"
                                            fill="#1A237E"
                                            fillRule="nonzero"
                                            mask="url(#mask-13)"
                                        ></path>
</g>
<g id="Clipped">
<mask id="mask-15" fill="white">
<use xlinkHref="#path-14"></use>
</mask>
<g id="SVGID_1_"></g>
<path
                                            d="M33.78125,17.7272727 C31.3467969,17.7272727 29.375,15.7440341 29.375,13.2954545 L29.375,13.6647727 C29.375,16.1133523 31.3467969,18.0965909 33.78125,18.0965909 L47,18.0965909 L47,17.7272727 L33.78125,17.7272727 Z"
                                            id="Path"
                                            fillOpacity="0.1"
                                            fill="#1A237E"
                                            fillRule="nonzero"
                                            mask="url(#mask-15)"
                                        ></path>
</g>
</g>
<path
                                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                                    id="Path"
                                    fill="url(#radialGradient-16)"
                                    fillRule="nonzero"
                                ></path>
</g>
</g>
</g>
</g>
</g>
</svg>
),
whatsapp: (props: LucideProps) => (
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 175.216 175.552"
{...props} >
<defs>
<linearGradient
                    id="b"
                    x1="85.915"
                    x2="86.535"
                    y1="32.567"
                    y2="137.092"
                    gradientUnits="userSpaceOnUse"
                >
<stop offset="0" stopColor="#57d163" />
<stop offset="1" stopColor="#23b33a" />
</linearGradient>
<filter
                    id="a"
                    width="1.115"
                    height="1.114"
                    x="-.057"
                    y="-.057"
                    colorInterpolationFilters="sRGB"
                >
<feGaussianBlur stdDeviation="3.531" />
</filter>
</defs>
<path
                fill="#b3b3b3"
                d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
                filter="url(#a)"
            />
<path
                fill="#fff"
                d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
            />
<path
                fill="url(#linearGradient1780)"
                d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
            />
<path
                fill="url(#b)"
                d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
            />
<path
                fill="#fff"
                fillRule="evenodd"
                d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
            />
</svg>
),
messenger: (props: LucideProps) => (
<svg
xmlns="http://www.w3.org/2000/svg"
x="0px"
y="0px"
width="100"
height="100"
viewBox="0 0 48 48"
{...props} >
<radialGradient
                id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
                cx="11.087"
                cy="7.022"
                r="47.612"
                gradientTransform="matrix(1 0 0 -1 0 50)"
                gradientUnits="userSpaceOnUse"
            >
<stop offset="0" stopColor="#1292ff"></stop>
<stop offset=".079" stopColor="#2982ff"></stop>
<stop offset=".23" stopColor="#4e69ff"></stop>
<stop offset=".351" stopColor="#6559ff"></stop>
<stop offset=".428" stopColor="#6d53ff"></stop>
<stop offset=".754" stopColor="#df47aa"></stop>
<stop offset=".946" stopColor="#ff6257"></stop>
</radialGradient>
<path
                fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
                d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
            ></path>
<path
                d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
                opacity=".05"
            ></path>
<path
                d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
                opacity=".07"
            ></path>
<path
                fill="#fff"
                d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
            ></path>
</svg>
),
notion: (props: LucideProps) => (
<svg
width="100"
height="100"
viewBox="0 0 100 100"
fill="none"
xmlns="http://www.w3.org/2000/svg"
{...props} >
<path
                d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
                fill="#fff"
            />
<path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
                fill="#000"
            />
</svg>
),
};

================================================
FILE: src/components/ui/label.tsx
================================================
"use client"

import _ as React from "react"
import _ as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const labelVariants = cva(
"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
React.ElementRef<typeof LabelPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
VariantProps<typeof labelVariants>

> (({ className, ...props }, ref) => (
> <LabelPrimitive.Root

    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}

/>
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

================================================
FILE: src/components/ui/lamp.tsx
================================================
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

export const LampContainer = ({
children,
className,
}: {
children: React.ReactNode;
className?: string;
}) => {
return (
<div
className={cn(
"relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
className
)} >
<div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
<motion.div
initial={{ opacity: 0.5, width: "15rem" }}
whileInView={{ opacity: 1, width: "30rem" }}
transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]" >
<div className="absolute  w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
<div className="absolute  w-40 h-[100%] left-0 bg-background  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
</motion.div>
<motion.div
initial={{ opacity: 0.5, width: "15rem" }}
whileInView={{ opacity: 1, width: "30rem" }}
transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]" >
<div className="absolute  w-40 h-[100%] right-0 bg-background  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
<div className="absolute  w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
</motion.div>
<div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-[8rem]"></div>
<div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
<motion.div
initial={{ width: "8rem" }}
whileInView={{ width: "16rem" }}
transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-400 blur-2xl" ></motion.div>
<motion.div
initial={{ width: "15rem" }}
whileInView={{ width: "30rem" }}
transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-purple-400" ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background "></div>
            </div>

            <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
                {children}
            </div>
        </div>
    );

};

================================================
FILE: src/components/ui/logo.tsx
================================================
import React from 'react'
import { Icons } from "@/components";
import { cn } from "@/utils";

interface Props {
variant?: "icon" | "text" | "full";
className?: string;
}

const Logo = ({ variant = "icon", className }: Props) => {
return (
<>
{variant === "icon" ? (
<Icons.logo className={cn("w-8 h-8 transition-all", className)} />
) : variant === "text" ? (
<Icons.wordmark className={cn("w-auto h-5 transition-all", className)} />
) : (
<div className={cn("w-auto h-8 flex items-center space-x-2 transition-all", className)}>
<Icons.logo className="w-8 h-8 transition-all" />
<Icons.wordmark className="w-auto h-5 transition-all" />
</div>
)}
</>
)
};

export default Logo

================================================
FILE: src/components/ui/magic-badge.tsx
================================================
import React from 'react'

interface Props {
title: string;
}

const MagicBadge = ({ title }: Props) => {
return (
<div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]" />
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
{title}
</span>
</div>
)
};

export default MagicBadge

================================================
FILE: src/components/ui/magic-card.tsx
================================================
"use client";

import { cn } from "@/utils";
import React, { useRef, useState } from "react";

interface Props {
children: React.ReactNode;
className?: string;
}

const MagicCard = ({ children, className }: Props) => {
const divRef = useRef<HTMLDivElement>(null);
const [isFocused, setIsFocused] = useState(false);
const [position, setPosition] = useState({ x: 0, y: 0 });
const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative max-w-md overflow-hidden rounded-xl border border-border/60 bg-gradient-to-r from-background to-background/40 p-4 md:p-6",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(168,85,247,.15), transparent 60%)`,
                }}
            />
            {children}
        </div>
    );

};

export default MagicCard;

================================================
FILE: src/components/ui/marquee.tsx
================================================
import { cn } from "@/utils";

interface MarqueeProps {
className?: string;
reverse?: boolean;
pauseOnHover?: boolean;
children?: React.ReactNode;
vertical?: boolean;
repeat?: number;
[key: string]: any;
}

export default function Marquee({
className,
reverse,
pauseOnHover = false,
children,
vertical = false,
repeat = 4,
...props
}: MarqueeProps) {
return (
<div
{...props}
className={cn(
"group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
{
"flex-row": !vertical,
"flex-col": vertical,
},
className,
)} >
{Array(repeat)
.fill(0)
.map((\_, i) => (
<div
key={i}
className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
"animate-marquee flex-row": !vertical,
"animate-marquee-vertical flex-col": vertical,
"group-hover:[animation-play-state:paused]": pauseOnHover,
"[animation-direction:reverse]": reverse,
})} >
{children}
</div>
))}
</div>
);
};

================================================
FILE: src/components/ui/menubar.tsx
================================================
"use client"

import _ as React from "react"
import _ as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
React.ElementRef<typeof MenubarPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>

> (({ className, ...props }, ref) => (
> <MenubarPrimitive.Root

    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}

/>
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
React.ElementRef<typeof MenubarPrimitive.Trigger>,
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>

> (({ className, ...props }, ref) => (
> <MenubarPrimitive.Trigger

    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}

/>
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
inset?: boolean
}

> (({ className, inset, children, ...props }, ref) => (
> <MenubarPrimitive.SubTrigger

    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}

>

    {children}
    <ChevronRight className="ml-auto h-4 w-4" />

</MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
React.ElementRef<typeof MenubarPrimitive.SubContent>,
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>

> (({ className, ...props }, ref) => (
> <MenubarPrimitive.SubContent

    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}

/>
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
React.ElementRef<typeof MenubarPrimitive.Content>,
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>

> (
> (

    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref

) => (
<MenubarPrimitive.Portal>
<MenubarPrimitive.Content
ref={ref}
align={align}
alignOffset={alignOffset}
sideOffset={sideOffset}
className={cn(
"z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
className
)}
{...props}
/>
</MenubarPrimitive.Portal>
)
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
React.ElementRef<typeof MenubarPrimitive.Item>,
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
inset?: boolean
}

> (({ className, inset, ...props }, ref) => (
> <MenubarPrimitive.Item

    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}

/>
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>

> (({ className, children, checked, ...props }, ref) => (
> <MenubarPrimitive.CheckboxItem

    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}

>

    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}

</MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
React.ElementRef<typeof MenubarPrimitive.RadioItem>,
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>

> (({ className, children, ...props }, ref) => (
> <MenubarPrimitive.RadioItem

    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}

>

    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}

</MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
React.ElementRef<typeof MenubarPrimitive.Label>,
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
inset?: boolean
}

> (({ className, inset, ...props }, ref) => (
> <MenubarPrimitive.Label

    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}

/>
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
React.ElementRef<typeof Men
