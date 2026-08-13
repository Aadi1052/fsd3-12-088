// import { readFile } from "fs";
import { writeFile,readFile } from "fs/promises";

await writeFile("hello.txt", "js is easy to learn❤️❤️");
const content = await readFile("hello.txt","utf-8");
console.log(content);
