import renderHTML from "./default.js";

import {
  renderBrickToggle,
  getCssText,
} from "https://assets.acdn.no/pkg/@amedia/brick-toggle/0.2.0/template.js";

const tmp1 = renderBrickToggle({
    ontext: "På",
    offtext: "Av",
    value: "Lysbryter",
    checked: "true"
  });

const render =`<div class="themeAlfa">
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

export default function renderBrick() {
  return renderHTML(render);
}
