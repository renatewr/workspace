import renderHTML from "./default.js";

import {
  renderBrickToggle,
  getCssText,
} from "https://assets.acdn.no/pkg/@amedia/brick-toggle/0.2.0/template.js";

export default function renderBrick() {
  const tmp1 = renderBrickToggle({
    value: "Lysbryter",
    onText: "På",
    offText: "Av",
    checked: "false",
  });

  const markup = `<div class="themeAlfa">
  <h2>Alfa</h2>
  ${tmp1}
  
  </div>
  <div class="themeBravo">
  <h2>Bravo</h2>
  ${tmp1}
  
  </div>
  <div class="themeCharlie">
  <h2>Charlie</h2>
  ${tmp1}
  
  </div>
  <div class="themeNettavisen">
  <h2>Nettavisen</h2>
  ${tmp1}
  
  </div>
  <style>${getCssText()}</style>
  `;

  return `${renderHTML(markup)}`;
}
