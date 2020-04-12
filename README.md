msdn-delocalizer
================
Sometimes, when looking for Microsoft documentation via a search engine, you
may be presented with a link leading to a localized documentation page from
Microsoft. Quality of translation varies a lot, but, as English speaker, you
may choose to not deal with localization at all, and always look for English
pages.

msdn-delocalizer is a Chrome extension that will automatically delocalize
Microsoft documentation pages, such as MSDN or docs.microsoft.com.

Prerequisites
-------------
Install [yarn][] 1.22 or newer.

Build
-----
To compile Chrome plugin into the `build/dest` directory, use

```console
$ yarn install
$ yarn run build
```

To perform the tests, use

```console
$ yarn test
```

Install
-------
Currently only developer mode installation is supported. To install
msdn-delocalizer to your Chrome, first build it. After that you could install
the extension from the `build/dest` directory using the
[developer mode][chrome-dev-mode].

[chrome-dev-mode]: https://developer.chrome.com/extensions/getstarted#unpacked
[yarn]: https://classic.yarnpkg.com/
