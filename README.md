msdn-delocalizer [![Chrome Web Store][badge-chrome-web-store]][chrome-web-store] [![Firefox Add-ons][badge-firefox-add-ons]][firefox-add-ons]
================
![Extension icon][icon]

Sometimes, when looking for Microsoft documentation via a search engine, you
may be presented with a link leading to a localized documentation page from
Microsoft. Quality of translation varies a lot, but, as English speaker, you
may choose to not deal with localization at all, and always look for English
pages.

msdn-delocalizer is a browser (Chrome, Firefox) extension that will automatically delocalize Microsoft documentation pages, such as MSDN, docs.microsoft.com, or learn.microsoft.com.

![Screenshot required by Chrome Web Store][screenshot]

Install
-------

- [Chrome Web Store][chrome-web-store]
- [Firefox Add-ons][firefox-add-ons]

Development
-----------
### Prerequisites

- [yarn][] 1.22 or newer
- [ImageMagick][imagemagick] 7.0.11-12 or newer (only if you need to prepare a new extension icon)

### Build

Install the dependencies:

```console
$ yarn install
```

The project supports several build options. Use the following commands based on your needs:

- **Development with hot reload**:  
Launches a development server with hot reload. The extension files are placed in the `build/dest` directory.  
    ```console
    $ yarn run dev # for Chromium-based browsers (manifest v3)
    $ yarn run dev:firefox # for Firefox-based browsers (manifest v2)
    ```

- **Build for production**:  
Creates a ZIP file of the extension in the `build/web-ext` directory.  
  ```console
  $ yarn run build # for Chromium-based browsers (manifest v3)
  $ yarn run build:firefox # for Firefox-based browsers (manifest v2)
  ```

- **Publish for multiple browsers**:  
Builds the extension for both Chrome and Firefox, generating two ZIP files in the `build/web-ext` directory.  
  ```console
  $ yarn run publish
  ```


### Test

```console
$ yarn test
```

### Icon (optional)

If you have prepared a new extension icon, then run the following shell command to add it to the package:

```console
$ yarn run icon
```

### Install (developer mode)

- **Chrome**: to install msdn-delocalizer to your Chrome in the [developer mode][chrome-dev-mode], load the `build/dest` directory as the unpacked extension source, and refresh it after every rebuild.
- **Firefox**:
  - enter the **Add-ons and Themes** page
  - click the **Debug Add-ons** action from the page gear menu
  - **Load Temporary Add-on**, navigate to the `build/web-ext/msdn-delocalizer-<VERSION>.zip` file

Documentation
-------------

- [Changelog][changelog]
- [Maintainership][maintainership]
- [License (MIT)][license]

[badge-chrome-web-store]: https://img.shields.io/chrome-web-store/v/oakieneemalliefelmegebjjagnjgpbm
[badge-firefox-add-ons]: https://img.shields.io/amo/v/msdn-delocalizer
[changelog]: ./CHANGELOG.md
[chrome-dev-mode]: https://developer.chrome.com/extensions/getstarted#unpacked
[chrome-web-store]: https://chrome.google.com/webstore/detail/msdn-delocalizer/oakieneemalliefelmegebjjagnjgpbm
[firefox-add-ons]: https://addons.mozilla.org/en-US/firefox/addon/msdn-delocalizer/
[icon]: ./src/icon.svg
[imagemagick]: https://imagemagick.org/
[license]: ./LICENSE.md
[maintainership]: ./MAINTAINERSHIP.md
[screenshot]: docs/screenshot.png
[yarn]: https://classic.yarnpkg.com/
