chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "analyzeResult") {
      if (message.isPresent) {
        const notificationOptions = {
          type: "basic",
          iconUrl: "notification.png", // Replace with the path to your notification icon
          title: "Inappropriate Content Detected!",
          message: message.detectedWords ? `Words: ${message.detectedWords.join(', ')}` : "",
        };
        
        chrome.notifications.create("inappropriate-content", notificationOptions, (notificationId) => {
          console.log(`Notification created: ${notificationId}`);
        });
      }
    }
  });
  