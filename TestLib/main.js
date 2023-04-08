import { dotnet } from "./dotnet.js";

const { getAssemblyExports, getConfig } = await dotnet.create();

let exports = await getAssemblyExports(getConfig().mainAssemblyName);

await dotnet.run();

console.log("Main loaded.");

const value = 123;
const doubled = exports.TestLib.SomeAPI.DoubleIt(value);
console.log(`Value ${value} doubled is ${doubled}`);
