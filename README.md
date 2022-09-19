# Microfrontends using Next.js and Module Federation

Microfrontends using Next.js and Module Federation


#### https://www.npmjs.com/package/@module-federation/nextjs-mf


## Micro Front end 01

```javascript
const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");
module.exports = {
  future: { webpack5: true },
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "app2",
      library: {
        type: config.output.libraryTarget,
        name: "app2",
      },
      filename: "static/runtime/app2remoteEntry.js",
      remotes: {
      },
      exposes: {
        "./mario": "./components/mario",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },
  ```

## Micro Front end 02

```javascript
const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");
module.exports = {
  future: { webpack5: true },
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "app1",
      library: {
        type: config.output.libraryTarget,
        name: "app1",
      },
      filename: "static/runtime/app1RemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./luigi": "./components/luigi",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },
  ```

  ## Shell Main Micro Front end 

  ```javascript
  const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");

module.exports = {
  future: { webpack5: true },
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack: (config, options) => {
    const mfConf = {
      name: "shell",
      library: {
        type: config.output.libraryTarget,
        name: "shell",
      },
      remotes: {
        app1: "app1",
        app2: "app2",
      },
      exposes: {
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },
  ```

  ### How to Test setup 

```sh
cd micro-front-end-activate
npm install 
nbpm run build
npm run dev


cd micro-front-end-main
npm install
npm run build
npm run dev


cd micro-front-end-shell
npm install 
npm run build 
npm run dev 

```

## Testing setup

- localhost:3000/maruo will render mario component from app2
- localhost:3000/luigi will render luigi component from app1 

