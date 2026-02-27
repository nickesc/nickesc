import { makeBadge } from "badge-maker";
import fs from "fs";
import path from "path";
import { LanguageBadges, DistributionBadges } from "./badges.ts";
import type { Format } from "badge-maker";
const OUTPUT_DIR = "badges";

const template: Format = {
    style: "for-the-badge",
    message: "",
    color: "black",
};

function writeBadge(badgeSvg: string, filename: string) {
    fs.writeFileSync(filename, badgeSvg);
}

function generateBadges(badges: Format[] = []) {
    try {
        for (const badge of badges) {
            let badgeSvg = makeBadge({ ...template, ...badge });
            writeBadge(badgeSvg, path.join(process.cwd(), OUTPUT_DIR, `${(badge.label ?? badge.message).replace(/[^a-zA-Z0-9]/g, "-")}.svg`));
        }
    } catch (e) {
        console.log(e);
    }
}

generateBadges(LanguageBadges);
generateBadges(DistributionBadges);
