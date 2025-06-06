// SPDX-FileCopyrightText: 2025 msdn-delocalizer contributors <https://github.com/ForNeVeR/msdn-delocalizer>
//
// SPDX-License-Identifier: MIT

// Generated by wxt
interface ImportMetaEnv {
  readonly MANIFEST_VERSION: 2 | 3;
  readonly BROWSER: string;
  readonly CHROME: boolean;
  readonly FIREFOX: boolean;
  readonly SAFARI: boolean;
  readonly EDGE: boolean;
  readonly OPERA: boolean;
  readonly COMMAND: "build" | "serve";
  readonly ENTRYPOINT: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
