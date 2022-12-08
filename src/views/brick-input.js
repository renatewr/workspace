import renderHTML from "./default.js";

import {
  renderBrickInput,
  getCssText,
} from "https://assets.acdn.no/pkg/@amedia/brick-input/v0/template.js";
const renderBrickInputs = () => {
  const tmp1 = renderBrickInput({
    type: "date",
    labelText: "Date",
    required: "true",
    name: "date",
    value: "",
    min: "2023-01-01",
    max: "2028-12-31",
  });

  const tmp2 = renderBrickInput({
    type: "text",
    labelText: "Firstname",
    required: "true",
  });

  return `<div class="themeAlfa">
  <h2>Alfa</h2>
  ${tmp1}
  ${tmp2}
  </div>
  <div class="themeBravo">
  <h2>Bravo</h2>
  ${tmp1}
  ${tmp2}
  </div>
  <div class="themeCharlie">
  <h2>Charlie</h2>
  ${tmp1}
  ${tmp2}
  </div>
  <div class="themeNettavisen">
  <h2>Nettavisen</h2>
  ${tmp1}
  ${tmp2}
  </div>
  <style>${getCssText()}</style>
  `;
};

export default function renderBrick() {
  return `${renderHTML(`${renderBrickInputs()}`)}`;
}
