```json
{
  //导入文件时是否携带文件的扩展名
  "path-autocomplete.extensionOnImport": true,
  // 配置@路径提示
  "path-autocomplete.pathMappings": {
    "@": "${folder}/src"
  },
  "liveServer.settings.CustomBrowser": "microsoft-edge",
  "files.associations": {
    "*.vue": "vue"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.donotVerifyTags": true,
  "background.style": {
    "content": "''",
    "pointer-events": "none",
    "position": "absolute",
    "z-index": "99999",
    "width": "100%",
    "height": "100%",
    "background-position": "100% 100%",
    "background-repeat": "no-repeat",
    "opacity": 1
  },
  "background.enabled": false,
  "editor.wordWrap": "on",
  "git.autofetch": true,
  "liveServer.settings.AdvanceCustomBrowserCmdLine": "",
  "previewServer.port": 80,
  "liveServer.settings.ChromeDebuggingAttachment": false,
  "liveServer.settings.mount": [],
  "cssrem.rootFontSize": 80,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.suggest.snippetsPreventQuickSuggestions": false,
  "liveServer.settings.ignoreFiles": [
    ".vscode/**",
    "**/*.scss",
    "**/*.sass",
    "**/*.ts"
  ],
  "liveServer.settings.port": 80,
  // "liveServer.settings.root": "",
  "editor.minimap.showSlider": "always",
  "github.copilot.advanced": {},
  "fiveServer.port": 80,
  "fiveServer.browser": [],
  "editor.unicodeHighlight.invisibleCharacters": false,
  "editor.unicodeHighlight.allowedCharacters": {
    " ": true
  },
  "editor.accessibilitySupport": "off",
  "workbench.colorTheme": "Default Light+",
  "path-autocomplete.excludedItems": {},
  "path-autocomplete.ignoredPrefixes": [],
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "tabnine.experimentalAutoImports": true,
  "workbench.editor.enablePreview": false,
  "editor.minimap.enabled": false,
  "editor.formatOnPaste": true,
  "chatgpt.gpt3.apiKey": "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",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.singleAttributePerLine": true,
  "editor.inlineSuggest.enabled": false,
  "emmet.triggerExpansionOnTab": true,
  "editor.bracketPairColorization.independentColorPoolPerBracketType": true,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "code-runner.executorMap": {
    "javascript": "node",
    "java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
    "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "zig": "zig run",
    "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "objective-c": "cd $dir && gcc -framework Cocoa $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "php": "php",
    "python": "python -u",
    "perl": "perl",
    "perl6": "perl6",
    "ruby": "ruby",
    "go": "go run",
    "lua": "lua",
    "groovy": "groovy",
    "powershell": "powershell -ExecutionPolicy ByPass -File",
    "bat": "cmd /c",
    "shellscript": "bash",
    "fsharp": "fsi",
    "csharp": "scriptcs",
    "vbscript": "cscript //Nologo",
    "typescript": "npx ts-node",
    "coffeescript": "coffee",
    "scala": "scala",
    "swift": "swift",
    "julia": "julia",
    "crystal": "crystal",
    "ocaml": "ocaml",
    "r": "Rscript",
    "applescript": "osascript",
    "clojure": "lein exec",
    "haxe": "haxe --cwd $dirWithoutTrailingSlash --run $fileNameWithoutExt",
    "rust": "cd $dir && rustc $fileName && $dir$fileNameWithoutExt",
    "racket": "racket",
    "scheme": "csi -script",
    "ahk": "autohotkey",
    "autoit": "autoit3",
    "dart": "dart",
    "pascal": "cd $dir && fpc $fileName && $dir$fileNameWithoutExt",
    "d": "cd $dir && dmd $fileName && $dir$fileNameWithoutExt",
    "haskell": "runghc",
    "nim": "nim compile --verbosity:0 --hints:off --run",
    "lisp": "sbcl --script",
    "kit": "kitc --run",
    "v": "v run",
    "sass": "sass --style expanded",
    "scss": "scss --style expanded",
    "less": "cd $dir && lessc $fileName $fileNameWithoutExt.css",
    "FortranFreeForm": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "fortran-modern": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "fortran_fixed-form": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "fortran": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "sml": "cd $dir && sml $fileName"
  },
  "code-runner.runInTerminal": true,
  "npm.packageManager": "npm",
  "powermode.shake.intensity": 0,
  "powermode.enabled": true,
  "powermode.combo.counterEnabled": "hide",
  "powermode.combo.timerEnabled": "hide",
  "files.autoSave": "afterDelay"
}
```
目前用的是这一套
vscode需要安装一个插件
1. 安装vsCode prettier插件 
2.  修改配置文件 setting.json 
```json
{
  "git.enableSmartCommit": true,
  // 修改注释颜色
  "editor.tokenColorCustomizations": {
    "comments": {
      "fontStyle": "bold",
      "foreground": "#82e0aa"
    }
  },
  // 配置文件类型识别
  "files.associations": {
    "*.js": "javascript",
    "*.json": "jsonc",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "extensions.ignoreRecommendations": false,
  "files.exclude": {
    "**/.DS_Store": true,
    "**/.git": true,
    "**/.hg": true,
    "**/.svn": true,
    "**/CVS": true,
    "**/node_modules": false,
    "**/tmp": true
  },
  // "javascript.implicitProjectConfig.experimentalDecorators": true,
  "explorer.confirmDragAndDrop": false,
  "typescript.updateImportsOnFileMove.enabled": "prompt",
  "git.confirmSync": false,
  "editor.tabSize": 2,
  "editor.fontWeight": "500",
  "[json]": {},
  "editor.tabCompletion": "on",
  "vsicons.projectDetection.autoReload": true,
  "editor.fontFamily": "Monaco, 'Courier New', monospace, Meslo LG M for Powerline",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "editor.fontSize": 16,
  "debug.console.fontSize": 14,
  "vsicons.dontShowNewVersionMessage": true,
  "editor.minimap.enabled": true,
  "emmet.extensionsPath": [
    ""
  ],
  // vue eslint start 保存时自动格式化代码
  "editor.formatOnSave": true,
  // eslint配置项，保存时自动修复错误
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "vetur.ignoreProjectWarning": true,
  // 让vetur使用vs自带的js格式化工具
  // uni-app和vue 项目使用
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "javascript.format.semicolons": "remove",
  // // 指定 *.vue 文件的格式化工具为vetur
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  // // 指定 *.js 文件的格式化工具为vscode自带
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  // // 默认使用prettier格式化支持的文件
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.jsxBracketSameLine": true,
  // 函数前面加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "prettier.singleQuote": true,
  "prettier.semi": false,
  // eslint end
  // react
  // 当按tab键的时候，会自动提示
  "emmet.triggerExpansionOnTab": true,
  "emmet.showAbbreviationSuggestions": true,
  "emmet.includeLanguages": {
    // jsx的提示
    "javascript": "javascriptreact",
    "vue-html": "html",
    "vue": "html",
    "wxml": "html"
  },
  // end
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // @路径提示
  "path-intellisense.mappings": {
    "@": "${workspaceRoot}/src"
  },
  "security.workspace.trust.untrustedFiles": "open",
  "git.ignoreMissingGitWarning": true,
  "window.zoomLevel": 1
}
```