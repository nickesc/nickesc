import { makeBadge } from "badge-maker";
import fs from "fs";
import path from "path";
import { LanguageBadges, DistributionBadges, WebBadges, SocialBadges } from "./badges.ts";
import type { Format } from "badge-maker";

const OUTPUT_DIR = "img/badges";

const template: Format = {
    style: "for-the-badge",
    message: "",
    color: "black",
};

const badgeNames: string[] = [];

function writeBadge(badgeSvg: string, filename: string) {
    if (badgeNames.includes(filename)) {
        let i = 1;
        while (badgeNames.includes(`${filename}-${i}`)) {
            i++;
        }
        filename = `${filename}-${i}`;
    }
    fs.writeFileSync(`${filename}.svg`, badgeSvg);
    badgeNames.push(filename);
}

function generateBadges(badges: Format[] = []) {
    try {
        for (const badge of badges) {
            let badgeSvg = makeBadge({ ...template, ...badge });
            writeBadge(badgeSvg, path.join(process.cwd(), OUTPUT_DIR, `${(badge.label ?? badge.message).replace(/[^a-zA-Z0-9]/g, "-")}`));
        }
    } catch (e) {
        console.log(e);
    }
}

generateBadges(LanguageBadges);
generateBadges(DistributionBadges);
generateBadges(WebBadges);
generateBadges(SocialBadges);
