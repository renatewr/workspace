const basepath = "";

export default function renderHTML(component) {
  return `
    <!doctype html>
        <html>
        <head>
            <title>Hello</title>
            <link rel="stylesheet" href="${basepath}/assets/example.css">
            <script src="${basepath}/public/example.js"></script>
            <script type="module" src="https://assets.acdn.no/pkg/@amedia/brick-toggle/0.2.0/brick-toggle.js"></script>
            <script type="module" src="https://assets.acdn.no/pkg/@amedia/brick-input/0.2.0/brick-input.js"></script>
            <style>
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/alfa/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/alt/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/bravo/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/charlie/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/dagens/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/dagens2/font-face.css');
  @import url('https://assets.acdn.no/pkg/@amedia/brick-fonts/v1/css/nettavisen/font-face.css');
</style>
<link rel="stylesheet" href="https://assets.acdn.no/pkg/@amedia/brick-tokens/5.0.1/css/theme-alfa.css">
<link rel="stylesheet" href="https://assets.acdn.no/pkg/@amedia/brick-tokens/5.0.1/css/theme-bravo.css">
<link rel="stylesheet" href="https://assets.acdn.no/pkg/@amedia/brick-tokens/5.0.1/css/theme-charlie.css">
<link rel="stylesheet" href="https://assets.acdn.no/pkg/@amedia/brick-tokens/5.0.1/css/theme-nettavisen.css">
<link rel="stylesheet" href="https://assets.acdn.no/pkg/@amedia/brick-tokens/5.0.1/css/theme-alt.css">

        </head>
        <body>
            ${component}
        </body>
        </html>
    `;
}
