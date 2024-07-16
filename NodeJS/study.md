# 入门注意事项
## Node.js中无法使用BOM和DOM的API
`BOM`和`DOM`相关的语法都会报错，`Node.js`中只支持`ECMAScript`语法
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
```javascript
console.log(global);  // ECMAScript
```
```
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
```
---
# Buffer（缓冲器）
`Buffer`是一个类似于数组的对象，本质上是一段内存空间，用于处理二进制数据。\
其大小固定且无法调整，说到底就是对计算机内存进行直接操作，每个元素大小为1字节（byte）。
### 操控`Buffer`的方式有三种：
1. `alloc`。生成一个内存数组，前面创建过但已经没用的数组会被覆盖，利用率高，但效率一般，因为要先清零。
```javascript
let buf = Buffer.alloc(10);
console.log(buf);
```
```
<Buffer 00 00 00 00 00 00 00 00 00 00>
```
2. `allocUnsafe`。生成一个不安全的内存数组，不会覆盖前面的数组，利用率较低，但效率高。
```javascript
let buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2);
```
```
<Buffer 00 00 00 00 00 00 00 00 00 00>
```
3. `from`。从提供的参数中生成一个内存数组。
```javascript
let buf_3 = Buffer.from("Hello World");
console.log(buf_3);
```
```
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>  # 对应ASCII码
```
以数字数组生成的`Buffer`可以通过ASCII码或Unicode码转为字符串。
```javascript
let buf_4= Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x57, 0x6f, 0x72, 0x6c, 0x64]);
console.log(buf_4.toString());
```
```
Hello World
```
