import type { SimpleIcon } from "simple-icons";
import type { Format } from "badge-maker";
import * as icons from "simple-icons";
import fs from "fs";
import path from "path";

const ASSET_DIR = "assets";

function svgFileToBase64(filename: string) {
    return `data:image/svg+xml;base64,${btoa(fs.readFileSync(path.join(process.cwd(), ASSET_DIR, filename), "utf8"))}`;
}

function iconToBase64(icon: SimpleIcon) {
    const svg = icon.svg.replace("<svg", '<svg fill="#fff"');
    return `data:image/svg+xml;base64,${btoa(svg)}`;
}

export const LanguageBadges: Format[] = [
    {
        message: "React",
        color: "black",
        logoBase64: iconToBase64(icons.siReact),
    },
    {
        message: "TypeScript",
        color: "black",
        logoBase64: iconToBase64(icons.siTypescript),
    },
    {
        message: "HTML5",
        color: "black",
        logoBase64: iconToBase64(icons.siHtml5),
    },
    {
        message: "Nodejs",
        color: "black",
        logoBase64: iconToBase64(icons.siNodedotjs),
    },
    {
        message: "Express",
        color: "black",
        logoBase64: iconToBase64(icons.siExpress),
    },
    {
        message: "Python",
        color: "black",
        logoBase64: iconToBase64(icons.siPython),
    },
];

export const DistributionBadges: Format[] = [
    {
        message: "GitHub",
        color: "black",
        logoBase64: iconToBase64(icons.siGithub),
    },
    {
        message: "NPM",
        color: "black",
        logoBase64: iconToBase64(icons.siNpm),
    },
    {
        message: "Modrinth",
        color: "black",
        logoBase64: iconToBase64(icons.siModrinth),
    },
    {
        message: "VS Marketplace",
        color: "black",
        logoBase64: svgFileToBase64("vs-mp.svg"),
    },
];
