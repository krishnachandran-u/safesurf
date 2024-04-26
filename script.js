/*
chrome.storage.local.get('settings', function(data) {
    const settings = data.settings;
    document.getElementById('showNotificationCheckbox').checked = settings.notify;
    document.getElementById('redirectCheckbox').checked = settings.redirect;
});

document.getElementById('showNotificationCheckbox').addEventListener('change', function() {
    const newState = this.checked;
  
    chrome.storage.local.get('settings', function(data) {
      const settings = data.settings || defaultSettings;
      settings.notify = newState;
  
      chrome.storage.local.set({ 'settings': settings }, function() {
        console.log('Settings updated');
      });
    });
});
  
  document.getElementById('redirectCheckbox').addEventListener('change', function() {
    const newState = this.checked;
  
    chrome.storage.local.get('settings', function(data) {
      const settings = data.settings || defaultSettings;
      settings.redirect = newState;
  
      chrome.storage.local.set({ 'settings': settings }, function() {
        console.log('Settings updated');
      });
    });
});
*/

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