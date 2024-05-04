# SafeSurf Chrome Extension

SafeSurf is a Chrome extension designed to enhance your browsing experience by providing a safe and secure online environment. This extension aims to protect you from potentially harmful websites and promote responsible internet usage.

[safesurf.webm](https://github.com/krishnachandran-u/safesurf/assets/129476971/308b648a-def5-4d23-b646-82c24615bd5f)

## Installation

1. **Clone the Repository**

  Open your terminal or command prompt and navigate to the desired directory where you want to clone the repository. Run the following command:
```bash
git clone https://github.com/krishnachandran-u/safesurf.git
```
This will create a local copy of the SafeSurf Chrome extension on your machine.

2. **Load the Extension in Chrome**

To load the extension in Google Chrome, follow these steps:

- Open Google Chrome and navigate to `chrome://extensions/`.
- Enable the "Developer mode" toggle switch in the top-right corner of the page.
- Click on the "Load unpacked" button.
- Navigate to the directory where you cloned the SafeSurf repository and select the `safesurf` folder.
- The SafeSurf extension should now be loaded and visible in your Chrome extensions list.

3. **Reload Chrome**

## Usage

Once the SafeSurf extension is installed and enabled, it will automatically start protecting your browsing session. Here's how it works:

1. **Website Filtering**: SafeSurf does not maintain a list of potentially harmful or malicious websites. Instead, it reads the content of the webpage you attempt to visit and takes the following actions before the page finishes loading, based on your configured settings:

   - **Redirection**: If the redirection option is enabled, SafeSurf will automatically redirect you to a safe webpage or a custom URL when you try to access an inappropriate site.
   - **Notification**: If the notification option is enabled, SafeSurf will display a warning message, alerting you that the website you're trying to access is potentially harmful or inappropriate.
2. **Statistics**: Shows statistics of the user.
   - **Doughnut Chart**: SafeSurf provides a visual representation of the severity of the websites you visit, classified into five categories:
      - neutral
      - mild
      - moderate
      - severe
      - extreme

      This feature displays a doughnut chart, showing the distribution of the websites you've accessed across these categories, helping you monitor and manage your browsing habits more effectively.

## Contributions

SafeSurf is an open-source project, and contributions from the community are welcome. If you encounter any issues, have feature requests, or would like to contribute code improvements, please feel free to submit a pull request or open an issue on the [GitHub repository](https://github.com/krishnachandran-u/safesurf).

Happy and safe browsing with SafeSurf!
