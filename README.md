msdn-delocalizer [![Chrome Web Store][badge-chrome-web-store]][chrome-web-store] [![Firefox Add-ons][badge-firefox-add-ons]][firefox-add-ons]
================
Sometimes, when looking for Microsoft documentation via a search engine, you
may be presented with a link leading to a localized documentation page from
Microsoft. Quality of translation varies a lot, but, as English speaker, you
may choose to not deal with localization at all, and always look for English
pages.

msdn-delocalizer is a browser (Chrome, Firefox) extension that will automatically delocalize Microsoft documentation pages, such as MSDN or docs.microsoft.com.

![Screenshot required by Chrome Web Store][screenshot]

Install
-------

- [Chrome Web Store][chrome-web-store]
- [Firefox Add-ons][firefox-add-ons]

Development
-----------
### Prerequisites

Install [yarn][] 1.22 or newer.

### Build

To compile the plugin into the `build/dest` directory, and pack the ZIP file to `build/web-ext` directory, use the following shell commands:

```console
$ yarn install
$ yarn run build
```

### Test

```console
$ yarn test
```

### Install (developer mode)

- **Chrome**: to install msdn-delocalizer to your Chrome in the [developer mode][chrome-dev-mode], load the `build/dest` directory as the unpacked extension source, and refresh it after every rebuild.
- **Firefox**:
  - enter the **Add-ons and Themes** page
  - click the **Debug Add-ons** action from the page gear menu
  - **Load Temporary Add-on**, navigate to the `build/web-ext/msdn-delocalizer-<VERSION>.zip` file

[badge-chrome-web-store]: https://img.shields.io/chrome-web-store/v/oakieneemalliefelmegebjjagnjgpbm
[badge-firefox-add-ons]: https://img.shields.io/amo/v/msdn-delocalizer
[chrome-dev-mode]: https://developer.chrome.com/extensions/getstarted#unpacked
[chrome-web-store]: https://chrome.google.com/webstore/detail/msdn-delocalizer/oakieneemalliefelmegebjjagnjgpbm
[firefox-add-ons]: https://addons.mozilla.org/en-US/firefox/addon/msdn-delocalizer/
[screenshot]: docs/screenshot.png
[yarn]: https://classic.yarnpkg.com/
