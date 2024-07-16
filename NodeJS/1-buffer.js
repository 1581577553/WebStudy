// 1. alloc
let buf = Buffer.alloc(10);
// console.log(buf);

// 2. allocUnsafe
let buf_2 = Buffer.allocUnsafe(10);
// console.log(buf_2);

// 3. from
let buf_3 = Buffer.from("Hello World");
// console.log(buf_3);

let buf_4= Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x57, 0x6f, 0x72, 0x6c, 0x64]);
// console.log(buf_4.toString());

