const V = "GITHUB_FABULOUS_VERSION";

// github-fabulous style (gulp)
const gfCSS = document.createElement("style");
gfCSS.id = "github-fabulous-style";
gfCSS.type = "text/css";
const gfCSSContent = document.createTextNode(`GITHUB_FABULOUS_STYLE`);
gfCSS.appendChild(gfCSSContent);
document.head.appendChild(gfCSS);

// TODO

console.log("Fabulous!");
