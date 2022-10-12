function site(siteData) {
  const html = document.createElement("div");
  html.innerText = JSON.stringify(siteData);

  return html;
}

function addHtmlToElement(html, elementSelector) {
  const element = document.querySelector(elementSelector);
  element.innerHTML = html;
}

async function getSiteData(url) {
  const response = await fetch(url);
  const siteData = await response.json();

  return siteData;
}

async function showSiteData(url) {
  const siteData = await getSiteData(url);
  const html = `<h2>${siteData.name}</h2>
    <ul>
      ${siteData.productionLines.map(
        (line) => `<li>${JSON.stringify(line)}</li>`
      )}
    </ul>
  `;

  addHtmlToElement(html, "body");
}

showSiteData("/site-info");
