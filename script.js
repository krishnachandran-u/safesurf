/*
Open your extension's background page by going to chrome://extensions/ ("Developer mode" needs to be checked to see background pages)

Go to the Console tab and type this to get the current settings:

chrome.storage.local.get(console.log)
*/

// Event listener for the switches are added after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('settings', function(data) {
        const settings = data.settings;

        const showNotificationCheckbox = document.getElementById('showNotificationCheckbox');
        const redirectCheckbox = document.getElementById('redirectCheckbox');

        if (showNotificationCheckbox && redirectCheckbox) {
            showNotificationCheckbox.checked = settings.notify;
            redirectCheckbox.checked = settings.redirect;

            showNotificationCheckbox.addEventListener('change', function() {
                const newState = this.checked;

                chrome.storage.local.get('settings', function(data) {
                    const settings = data.settings ? { ...data.settings } : { ...defaultSettings };
                    settings.notify = newState;

                    chrome.storage.local.set({ 'settings': settings }, function() {
                        console.log('Settings updated');
                    });
                });
            });

            redirectCheckbox.addEventListener('change', function() {
                const newState = this.checked;

                chrome.storage.local.get('settings', function(data) {
                    const settings = data.settings ? { ...data.settings } : { ...defaultSettings };
                    settings.redirect = newState;

                    chrome.storage.local.set({ 'settings': settings }, function() {
                        console.log('Settings updated');
                    });
                });
            });
        } else {
            console.error('Could not find checkbox elements in the DOM');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
  });
});

