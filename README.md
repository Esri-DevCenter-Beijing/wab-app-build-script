This script is used to build app that by WAB.
===================================================


Why do you need to build your app?
-----------------------------------
Generally speaking, you may have 2 reasons:
* To speed up your app's loading performance.
* You do not want to share your source code to the end user.


How to run?
-----------------------------------
* Clone this repository
* Make user you have `Node.js` and `JRE` installed.
* Copy your app into the root folder of this repo, the folder structure is like this: `wab-app-build-script/config.json`
* Open `cmd`, cd folder `buildScripts`, run `npm install`, then run `build.bat`.
* Waiting for the build process to complete. The build output will be available at `buildOutput/app` folder.
