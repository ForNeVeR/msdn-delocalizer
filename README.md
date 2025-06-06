<!--
SPDX-FileCopyrightText: 2024-2025 Friedrich von Never <friedrich@fornever.me>

SPDX-License-Identifier: MIT
-->

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

- [node.js][] v22 or newer
- [yarn][] 1.22 or newer
- [ImageMagick][imagemagick] 7.0.11-12 or newer (only if you need to prepare a new extension icon)

To set the Node-related prerequisites up, you may use [Volta][volta]:

```console
$ volta install node@22
$ volta install yarn@1
```

### Build

Install the dependencies:

```console
$ yarn install
```

The project supports several build options. Use the following commands based on your needs:

- **Development with hot reload**:
Launches a development server with hot reload. The extension files are placed in the `build/{browser-name}-mv{mv-ver}` directory.
    ```console
    $ yarn run dev # for Chromium-based browsers (manifest v3)
    $ yarn run dev:firefox # for Firefox-based browsers (manifest v2)
    ```

- **Build for production**:
Creates a production build of the extension in the `build/{browser-name}-mv{mv-ver}` directory.
  ```console
  $ yarn run build # for Chromium-based browsers (manifest v3)
  $ yarn run build:firefox # for Firefox-based browsers (manifest v2)
  ```

- **Create ZIP files for extension stores**:
Builds the extension for both Chrome and Firefox, generating two ZIP files in the `build` directory. Firefox-specific command also creates a zip with sources as its store requires them.
  ```console
  $ yarn run zip # for Chromium-based browsers (manifest v3)
  $ yarn run zip:firefox # for Firefox-based browsers (manifest v2)
  $ yarn run zip:all # for all browsers
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

- **Chrome**: to install msdn-delocalizer to your Chrome in the [developer mode][chrome-dev-mode], load the `build/chrome-mv3` directory as the unpacked extension source, and refresh it after every rebuild.
- **Firefox**:
  - open **Settings** via the main menu,
  - enter the **Extensions and Themes** page
  - click the **Debug Add-ons** action from the page gear menu
  - **Load Temporary Add-on**, navigate to the `build/firefox-mv2` and select `manifest.json`

Documentation
-------------

- [Changelog][changelog]
- [Contributor Guide][docs.contributing]
- [Maintainership][maintainership]

License
-------
The project is distributed under the terms of [the MIT license][docs.license].

The license indication in the project's sources is compliant with the [REUSE specification v3.3][reuse.spec].

[badge-chrome-web-store]: https://img.shields.io/chrome-web-store/v/oakieneemalliefelmegebjjagnjgpbm
[badge-firefox-add-ons]: https://img.shields.io/amo/v/msdn-delocalizer
[changelog]: ./CHANGELOG.md
[chrome-dev-mode]: https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked
[chrome-web-store]: https://chrome.google.com/webstore/detail/msdn-delocalizer/oakieneemalliefelmegebjjagnjgpbm
[docs.contributing]: CONTRIBUTING.md
[docs.license]: ./LICENSE.txt
[firefox-add-ons]: https://addons.mozilla.org/en-US/firefox/addon/msdn-delocalizer/
[icon]: ./src/icon.svg
[imagemagick]: https://imagemagick.org/
[maintainership]: ./MAINTAINERSHIP.md
[node.js]: https://nodejs.org/en
[reuse.spec]: https://reuse.software/spec-3.3/
[screenshot]: docs/screenshot.png
[volta]: https://volta.sh/
[yarn]: https://classic.yarnpkg.com/
