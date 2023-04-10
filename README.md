# Using .NET with WebAssembly

Examples of using .NET compiled to WebAssembly in a browser application and calling a Rust-based WebAssembly code from .NET.

Prerequisites:

- [Node JS](https://nodejs.org/)

- [Rust](https://www.rust-lang.org/)

- [.NET SDK v7+](https://dotnet.microsoft.com/en-us/download/visual-studio-sdks)

- Ensure the [WebAssembly build tools](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-7.0&pivots=windows#net-webassembly-build-tools) are installed.

  `dotnet workload install wasm-tools`

- Ensure the .NET [serve](https://github.com/natemcmaster/dotnet-serve#dotnet-serve) tool is installed.

  `dotnet tool install --global dotnet-serve`

## TestLib

This is a library that will be compiled into WebAssembly and then loaded into a browser page. It exposes an API, a simple math calculation and a function that encodes text into a [QR Code](https://github.com/codebude/QRCoder).

(This code was inspired by this project: https://github.com/maraf/dotnet-wasm-react)

To Run:

- Navigate to the `TestLib` path.

- Build the component.

  `dotnet build -c Release`

## webapp

This is a simple React-based web application that will load and use the generated .NET WebAssembly code.

To Run:

- Navigate to the `webapp` path.

- Install the dependencies.

  `npm install`

- Serve the build output from `TestLib` at http://localhost:4201/ (files from the build directory will be served under the `/dn/` path).

  `npm run dn`

- Run the web application at http://localhost:4200/

  `npm run dev`
