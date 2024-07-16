# 入门注意事项
## 1. Node.js中无法使用BOM和DOM的API
```javascript
console.log(window);  // BOM
```
```
ReferenceError: window is not defined
    at Object.<anonymous> (D:\BaiduSyncdisk\Programs\WebStudy\NodeJS\test\useless.js:1:13)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49
```
```javascript
console.log(document);  // DOM
```
```
ReferenceError: document is not defined
    at Object.<anonymous> (D:\BaiduSyncdisk\Programs\WebStudy\NodeJS\test\useless.js:1:13)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49
```