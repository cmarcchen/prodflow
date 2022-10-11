function site(siteData) {
  const html = document.createElement("div");
  html.innerText = JSON.stringify(siteData);

  return html;
}

function displayHTML(html, targetElement) {
  targetElement.appendChild(html);
}

async function getSiteData(url) {
  const response = await fetch(url);
  const siteData = await response.json();

  return siteData;
}

async function showSiteData(url) {
  const siteData = await getSiteData(url);
  const body = document.querySelector("body");
  displayHTML(site(siteData), body);
}

showSiteData("/site-info");
