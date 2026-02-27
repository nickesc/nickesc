import type { SimpleIcon } from "simple-icons";
import type { Format } from "badge-maker";
import * as icons from "simple-icons";
import fs from "fs";
import path from "path";

const ASSET_DIR = "src/assets";

function svgFileToBase64(filename: string) {
    return `data:image/svg+xml;base64,${btoa(fs.readFileSync(path.join(process.cwd(), ASSET_DIR, filename), "utf8"))}`;
}

function iconToBase64(icon: SimpleIcon, color: "light" | "dark" = "light") {
    const svg = icon.svg.replace("<svg", `<svg fill="${color === "light" ? "#fff" : "#333"}"`);
    return `data:image/svg+xml;base64,${btoa(svg)}`;
}

export const LanguageBadges: Format[] = [
    {
        message: "TypeScript",
        color: "#3178C6",
        logoBase64: iconToBase64(icons.siTypescript),
    },
    {
        message: "JavaScript",
        color: "#f0db4f",
        logoBase64: iconToBase64(icons.siJavascript, "dark"),
    },
    {
        message: "HTML",
        color: "#E44D26",
        logoBase64: iconToBase64(icons.siHtml5),
    },
    {
        message: "CSS",
        color: "#1572B6",
        logoBase64: iconToBase64(icons.siCss),
    },
    {
        message: "React",
        color: "#3eb6d6",
        logoBase64: iconToBase64(icons.siReact),
    },
    {
        message: "Nodejs",
        color: "#339933",
        logoBase64: iconToBase64(icons.siNodedotjs),
    },

    {
        message: "Python",
        color: "#306998",
        logoBase64: iconToBase64(icons.siPython),
    },
    {
        message: "Zsh",
        color: "#111111",
        logoBase64: iconToBase64(icons.siZsh),
    },
    {
        message: "Godot",
        color: "#478CBF",
        logoBase64: iconToBase64(icons.siGodotengine),
    },
];

export const DistributionBadges: Format[] = [
    {
        label: "GitHub",
        message: "Source code",
        color: "hsl(135, 11%, 7%)",
        labelColor: "hsl(135, 11%, 4%)",
        logoBase64: iconToBase64(icons.siGithub),
    },
    {
        label: "NPM",
        message: "Packages",
        color: "hsl(0, 60%, 50%)",
        labelColor: "hsl(0, 60%, 35%)",
        logoBase64: iconToBase64(icons.siNpm),
    },
    {
        label: "Modrinth",
        message: "Minecraft",
        color: "hsl(145, 78%, 48%)",
        labelColor: "hsl(145, 78%, 33%)",
        logoBase64: iconToBase64(icons.siModrinth),
    },
    {
        label: "VS Marketplace",
        message: "Extensions",
        color: "hsl(288, 57%, 30%)",
        labelColor: "hsl(288, 57%, 15%)",
        logoBase64: svgFileToBase64("vs-mp.svg"),
    },
    {
        label: "OpenVSX",
        message: "Extensions",
        color: "hsl(282, 88%, 48%)",
        labelColor: "hsl(282, 88%, 33%)",
        logoBase64: svgFileToBase64("open-vsx.svg"),
    },
    {
        label: "Itch.io",
        message: "Games",
        color: "hsl(0, 94%, 67%)",
        labelColor: "hsl(0, 94%, 52%)",
        logoBase64: iconToBase64(icons.siItchdotio),
    },
    {
        label: "Firefox Add-ons",
        message: "Add-ons",
        color: "hsl(22, 100%, 67%)",
        labelColor: "hsl(22, 100%, 52%)",
        logoBase64: iconToBase64(icons.siFirefox),
    },
];
