document.addEventListener('DOMContentLoaded', getCurrentTab);

async function getCurrentTab() {
  try {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    const urlDiv = document.getElementById('url');
    urlDiv.textContent = tab.url;
  } catch (error) {
    console.error("Error retrieving tab URL:", error);
  }
}