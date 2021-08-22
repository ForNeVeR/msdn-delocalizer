Maintainership Instructions
===========================

Releasing a New Version
-----------------------

1. Update the copyright year in [the license][license], if required.
2. Choose the new version according to [Semantic Versioning][semver]. It should consist of three numbers (i.e. `1.0.0`).
3. Update the `version` property in the `package.json` file.
4. Make sure there's a properly formed version entry in [the changelog][changelog].
5. Merge the changes via a pull request.
6. Push a tag named `v<VERSION>` to GitHub.
7. Get the packed extension from GitHub and upload it to the [Chrome Web Store Developer portal][chrome-web-store-developer].
8. Get the packed extension from GitHub and upload it to the [Add-ons for Firefox portal][add-ons-for-firefox].
9. Make a GitHub release out of tagged commit, add the changelog.

[add-ons-for-firefox]: https://addons.mozilla.org/en-US/developers/addon/msdn-delocalizer/edit
[changelog]: ./CHANGELOG.md
[chrome-web-store-developer]: https://chrome.google.com/webstore/developer/dashboard
[license]: ./LICENSE.md
[semver]: https://semver.org/spec/v2.0.0.html
