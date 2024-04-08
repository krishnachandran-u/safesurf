document.addEventListener('DOMContentLoaded', getCurrentTab);
// document.addEventListener('DOMContentLoaded', getContent("https://github.com/"));

async function getCurrentTab() {
  try {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    const urlDiv = document.getElementById('url');
    urlDiv.textContent = tab.url;

    //const content = getContent(tab.url);
    const content = await getContent(tab.url);
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "Content: " + content;

  } catch (error) {
    console.error("Error retrieving tab URL:", error);
  }
}

async function getContent(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        // Replace all non-alphabetic characters with spaces
        const plainText = data.replace(/[^a-zA-Z]/g, ' ');
        return plainText;
      })
      .catch(error => {
        console.error('Error:', error);
        return null;
      });
  }