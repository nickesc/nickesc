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
        message: "JavaScript",
        color: "black",
        logoBase64: iconToBase64(icons.siJavascript),
    },
    {
        message: "HTML",
        color: "black",
        logoBase64: iconToBase64(icons.siHtml5),
    },
    {
        message: "Nodejs",
        color: "black",
        logoBase64: iconToBase64(icons.siNodedotjs),
    },
    {
        message: "CSS",
        color: "black",
        logoBase64: iconToBase64(icons.siCss),
    },
    {
        message: "Python",
        color: "black",
        logoBase64: iconToBase64(icons.siPython),
    },
    {
        message: "Zsh",
        color: "black",
        logoBase64: iconToBase64(icons.siZsh),
    },
];

export const DistributionBadges: Format[] = [
    {
        message: "GitHub",
        color: "#101411",
        logoBase64: iconToBase64(icons.siGithub),
    },
    {
        message: "NPM",
        color: "#CC3534",
        logoBase64: iconToBase64(icons.siNpm),
    },
    {
        message: "Modrinth",
        color: "#1BD96A",
        logoBase64: iconToBase64(icons.siModrinth),
    },
    {
        message: "VS Marketplace",
        color: "#68217a",
        logoBase64: svgFileToBase64("vs-mp.svg"),
    },
    {
        message: "OpenVSX",
        color: "#a60ee5",
        logoBase64: svgFileToBase64("open-vsx.svg"),
    },
    {
        message: "Itch.io",
        color: "#fa5c5c",
        logoBase64: iconToBase64(icons.siItchdotio),
    },
];
