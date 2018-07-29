# NPM Package Starter
* <a href="#a1">How to develop a NPM package?</a>
* <a href="#a2">How to publish a NPM package?</a>
* <a href="#a3">How to use your published NPM package on your other projects?</a>

<a id="a1" name="a1"></a>
## How to develop a NPM package?

#### Clone this repo.
```
$ git clone https://github.com/crzweb/NPM-Package-Starter MY_PACKAGE
$ cd MY_PACKAGE
```

Tools we are using on this starter project:
* Webpack 4
* ES6
* Babel
* ESLint
* SASS
* Unit Test (Jest)
* E2E Test (Cypress)
* Lodash 4

#### Setup local environment.
```
$ npm install
```

#### Start to develop your package.
- In the 'package.json' file, you should update the following configs to your own.
```
{
  ...
  "name": "npm-package-starter",
  "version": "1.0.0",
  "description": "This is a NPM package starter project.",
  "main": "./src/app.js",
  "author": "Jay Chen",
  "keywords": [],
  "repository": {
    "type": "git",
    "url": ""
  },
  "homepage": "",
  "license": "MIT",
  ...
}
```

- In the 'src/app.d.ts' file, you should update the declare module to your own package name.
```
declare module 'MY-PACKAGE-NAME';
```

- Update the 'README.md' file.

- Example:

We create the greeting function as a library in the file 'src/lib/hello/greeting.js' like this:
```
"use strict";

/**
 * A greeting function.
 *
 * @param value
 * @returns {string}
 */
function greeting(value = 'World') {
  return 'Hello ' + value + '!';
}

module.exports = greeting;
```
The 'src/app.js' is the entry file, so we need to export all the library functions here.
```
module.exports = {
  greeting: require('./lib/hello/greeting'),
}
```

#### Run local dev server.
```
$ npm run dev
```

#### Run Unit Test.
```
$ npm run test:unit
```

#### Run E2E Test.
```
$ npm run test:e2e
```

<a id="a2" name="a2"></a>
## How to publish a NPM package?

#### Create an account on [https://www.npmjs.com].
You need the login credentials to publish your package.

#### Go to your package's directory.
```
$ cd MY_PACKAGE
```

#### Login to the npmjs.com.
```
$ npm login
```

#### Publish you package to npmjs.com.
```
$ npm publish
```

#### You can't unpublish your package after it was published. Instead, you should deprecate it.
```
$ npm deprecate
``` 

#### View your package.
After you published your package, you can see it via [https://www.npmjs.com/package/MY_PACKAGE].

<a id="a3" name="a3"></a>
## How to use your published NPM package on your other projects?

```
$ cd PATH_TO_MY_PROJECT
$ npm i -D MY_PACKAGE
```