const getDate = () => new Date().toUTCString()

const generateSvg = (text) => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="0 0 500 500">
  <g id="UrTavla">
    <circle style="fill:url(#toning);stroke:#010101;stroke-width:1.6871;stroke-miterlimit:10;" cx="250" cy="250" r="245">
    </circle>
    <text x="50%" y="50%" text-anchor="middle" stroke="#51c5cf" stroke-width="2px" dy=".3em">${text}</text>
  </g>
</svg>
    `.trim()
};

console.log(
    generateSvg(getDate())
)