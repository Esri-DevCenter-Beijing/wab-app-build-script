profile = {

  // relative to this file
  basePath: "..",
  releaseDir: "./buildOutput",
  action: 'release',
  version: '1.0.0',
  releaseName: 'app-packages',
  optimize: 'closure', // requires Java 6 or later: http://code.google.com/p/closure-compiler/wiki/FAQ
  useSourceMaps: false,
  layerOptimize: 'closure',
  cssOptimize: 'comments',
  copyTests: false,
  internStrings: true,
  mini: true,

  localeList: "ar,cs,da,de,en,el,es,et,fi,fr,he,it,ja,ko,lt,lv,nb,nl,pl,pt-br,pt-pt,ro,ru,sv,th,tr,zh-cn,vi,zh-hk,zh-tw",

  selectorEngine: "acme",
  stripConsole: "none",

  packages: [{
    name: "dojo",
    location: "./arcgis-js-api/dojo"
  }, {
    name: "dijit",
    location: "./arcgis-js-api/dijit"
  }, {
    name: "dojox",
    location: "./arcgis-js-api/dojox"
  }, {
    name: "put-selector",
    location: "./arcgis-js-api/put-selector"
  }, {
    name: "xstyle",
    location: "./arcgis-js-api/xstyle"
  }, {
    name: "dgrid",
    location: "./arcgis-js-api/dgrid"
  }, {
    name: "esri",
    location: "./arcgis-js-api/esri"
  }, {
    name: "moment",
    location: "./arcgis-js-api/moment"
  },{
    name: "dgrid1",
    location: "./arcgis-js-api/dgrid1"
  }, {
    name: "dstore",
    location: "./arcgis-js-api/dstore"
  }, {
    name: "jimu",
    location: "./jimu.js"
  }, {
    name: "widgets",
    location: "./widgets"
  }, {
    name: "themes",
    location: "./themes"
  }, {
    name: "libs",
    location: "./libs"
  }, {
    name: "dynamic-modules",
    location: "./dynamic-modules"
  }],

  layers: {
    "dynamic-modules/preload": {
      include: []
    },
    "dynamic-modules/postload": {
      include: [],
      exclude: ['dynamic-modules/preload']
    },
    "jimu/main": {
      include: ["jimu/BaseWidget", "jimu/BaseWidgetFrame", "jimu/BaseWidgetPanel",
        "jimu/BaseWidgetSetting", "jimu/symbolUtils", "jimu/filterUtils", "jimu/utils",
        "jimu/portalUrlUtils", "jimu/portalUtils", "jimu/tokenUtils", "jimu/ConfigManager",
        "jimu/WidgetManager", "jimu/PanelManager", "jimu/DataManager", "jimu/LayoutManager",
        "jimu/PoolControllerMixin", "jimu/SpatialReference/utils",
        "jimu/LayerInfos/LayerInfos", "jimu/dijit-all", "jimu/OnScreenWidgetPanel",
        "jimu/LayerInfos/LayerInfoForCollection",
        "jimu/LayerInfos/LayerInfoForMapService",
        "jimu/LayerInfos/LayerInfoForKML",
        "jimu/LayerInfos/LayerInfoForGeoRSS",
        "jimu/LayerInfos/LayerInfoForDefault",
        "jimu/LayerInfos/LayerInfoForWMS",
        "jimu/LayerInfos/LayerInfoForGroup",
        "jimu/LayerInfos/LayerInfoForDefaultDynamic",
        "jimu/LayerInfos/LayerInfoForDefaultTile",
        "jimu/LayerInfos/LayerInfoForDefaultWMS",
        "jimu/LayerInfos/LayerInfoForDefaultTable",
        "jimu/LayerInfos/LayerInfoForDefaultImage",
        "jimu/LayerInfos/LayerInfoForDefaultStream",
        "jimu/BaseFeatureAction"
      ],

      exclude: ['libs/main', 'dojo/dojo', "libs/echarts/echarts"]
    },
    "jimu/dijit-all": {
      include: ['jimu/dijit/LoadingIndicator',
      'jimu/dijit/LoadingShelter', 'jimu/dijit/Message', 'jimu/dijit/Popup',
      'jimu/dijit/RadioBtn', "jimu/dijit/CheckBox", "jimu/dijit/SymbolChooser",
      'jimu/dijit/Search', 'jimu/dijit/ServiceURLInput',
      'jimu/dijit/SimpleTable', 'jimu/dijit/TabContainer', "jimu/dijit/ColorPicker",
      'jimu/dijit/TabContainer3', 'jimu/dijit/TileLayoutContainer', "jimu/dijit/DrawBox",
      'jimu/dijit/URLInput', 'jimu/dijit/ColorPalette'],
      exclude: ['libs/main', "libs/echarts/echarts"],
      discard: true
    },
    "libs/main": {},
    "dojo/dojo": {
      include: [ "dojo/dojo", "dojo/i18n", "dojo/domReady"],
      customBase: true,
      boot: true
    },
    "dgrid/main": {include: ['dgrid/OnDemandGrid', 'dgrid/List', 'dgrid/util/misc', 'dgrid/OnDemandList']},

    //xstyle include put-selector
    "xstyle/main": {include: ['xstyle/main']},

    "esri/layers/VectorTileLayerImpl": {},

    "jimu/layoutManagers/AbsolutePositionLayoutManager": {
      include: [],
      exclude: ['esri/main', 'libs/main', 'jimu/main']
    },

    "jimu/layoutManagers/GridLayoutManager": {
      include: [],
      exclude: ['esri/main', 'libs/main', 'jimu/main']
    }
  },

  // since this build it intended to be utilized with properly-expressed AMD modules;
  // don't insert absolute module ids into the modules
  insertAbsMids: 0,

  // these are all the has feature that affect the loader and/or the bootstrap
  // the settings below are optimized for the smallest AMD loader that is configurable
  // and include dom-ready support
  staticHasFeatures: {
    'config-dojo-loader-catches': 0,
    'config-tlmSiblingOfDojo': 0,
    'dojo-amd-factory-scan': 0,
    'dojo-combo-api': 0,
    'dojo-config-api': 1,
    'dojo-config-require': 0,
    'dojo-debug-messages': 0,
    'dojo-dom-ready-api': 1,
    'dojo-firebug': 0,
    'dojo-guarantee-console': 1,
    'dojo-has-api': 1,
    'dojo-inject-api': 1,
    'dojo-loader': 1,
    'dojo-log-api': 0,
    'dojo-modulePaths': 0,
    'dojo-moduleUrl': 0,
    'dojo-publish-privates': 0,
    'dojo-requirejs-api': 0,
    'dojo-sniff': 0,
    'dojo-sync-loader': 0,
    'dojo-test-sniff': 0,
    'dojo-timeout-api': 0,
    'dojo-trace-api': 0,
    //'dojo-undef-api': 0,
    'dojo-v1x-i18n-Api': 1, // we still need i18n.getLocalization
    'dojo-xhr-factory': 0,
    'dom': 1,
    'host-browser': 1,
    'extend-dojo': 1,
    'extend-esri': 0,
    'esri-svg': 1
  }

};