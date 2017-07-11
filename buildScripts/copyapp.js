var fs = require('fs');
var path = require('path');
var fse = require('fs-extra');
var utilscripts = require('./utilscripts');

/*global __dirname */
var basePath = path.join(__dirname, '..');
var appPackagePath, appOutputPath;
var options = {};

exports.copy = function(pathInfo, _options){
  setPath(pathInfo);
  options = _options || {};
  if(fs.existsSync(appOutputPath)){
    console.log('remove', appOutputPath);
    fse.removeSync(appOutputPath);
  }

  if(!options.keepsource){
    utilscripts.cleanUncompressedSource(appPackagePath);
  }

  fse.mkdirsSync(appOutputPath);
  fs.mkdirSync(path.join(appOutputPath, 'jimu.js'));
  fs.mkdirSync(path.join(appOutputPath, 'arcgis-js-api'));

  utilscripts.copyPartAppSrc(basePath, appOutputPath);

  utilscripts.copyAppBuildPackages(appPackagePath, appOutputPath, options);

  utilscripts.docopy(path.join(appPackagePath, 'build-report.txt'),
    path.join(appOutputPath, 'build-report.txt'));

  copyPartAPI();
};

function setPath(pathInfo){
  if(pathInfo.appPackagePath){
    appPackagePath = pathInfo.appPackagePath;
  }else{
    appPackagePath = path.join(basePath, 'buildOutput/app-packages');
  }

  if(pathInfo.appOutputPath){
    appOutputPath = pathInfo.appOutputPath;
  }else{
    appOutputPath = path.join(basePath, 'buildOutput/app');
  }
}

function copyPartAPI(){
  utilscripts.docopy(path.join(appPackagePath, 'dojo'), path.join(appOutputPath, 'arcgis-js-api/dojo'));
  utilscripts.docopy(path.join(appPackagePath, 'dijit'), path.join(appOutputPath, 'arcgis-js-api/dijit'));
  utilscripts.docopy(path.join(appPackagePath, 'dojox'), path.join(appOutputPath, 'arcgis-js-api/dojox'));
  utilscripts.docopy(path.join(appPackagePath, 'dgrid'), path.join(appOutputPath, 'arcgis-js-api/dgrid'));
  utilscripts.docopy(path.join(appPackagePath, 'esri'), path.join(appOutputPath, 'arcgis-js-api/esri'));
  utilscripts.docopy(path.join(appPackagePath, 'put-selector'), path.join(appOutputPath, 'arcgis-js-api/put-selector'));
  utilscripts.docopy(path.join(appPackagePath, 'xstyle'), path.join(appOutputPath, 'arcgis-js-api/xstyle'));
  utilscripts.docopy(path.join(appPackagePath, 'moment'), path.join(appOutputPath, 'arcgis-js-api/moment'));

  utilscripts.docopy(path.join(basePath, 'arcgis-js-api/moment/locale'), path.join(appOutputPath, 'arcgis-js-api/moment/locale'));
}

