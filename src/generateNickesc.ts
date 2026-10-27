import fs from "fs";

const [input, output = "img/nickesc.svg"] = process.argv.slice(2);
if (!input!.endsWith(".png")) throw new Error("expected a .png");
const size = 122.88;
const data = fs.readFileSync(input).toString("base64");

fs.writeFileSync(
    output,
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${size} ${size}">
  <defs>
    <clipPath id="clip"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}"/></clipPath>
  </defs>
  <image width="${size}" height="${size}" clip-path="url(#clip)" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,${data}"/>
</svg>
`,
);
