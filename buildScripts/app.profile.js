profile = {
  "basePath": "..",
  "releaseDir": "./buildOutput",
  "action": "release",
  "version": "1.0.0",
  "releaseName": "app-packages",
  "optimize": "closure",
  "useSourceMaps": false,
  "layerOptimize": "closure",
  "cssOptimize": "comments",
  "copyTests": false,
  "internStrings": true,
  "mini": true,
  "localeList": "ar,cs,da,de,en,el,es,et,fi,fr,he,it,ja,ko,lt,lv,nb,nl,pl,pt-br,pt-pt,ro,ru,sv,th,tr,zh-cn,vi,zh-hk,zh-tw",
  "selectorEngine": "acme",
  "stripConsole": "none",
  "packages": [
    {
      "name": "dojo",
      "location": "./arcgis-js-api/dojo"
    },
    {
      "name": "dijit",
      "location": "./arcgis-js-api/dijit"
    },
    {
      "name": "dojox",
      "location": "./arcgis-js-api/dojox"
    },
    {
      "name": "put-selector",
      "location": "./arcgis-js-api/put-selector"
    },
    {
      "name": "xstyle",
      "location": "./arcgis-js-api/xstyle"
    },
    {
      "name": "dgrid",
      "location": "./arcgis-js-api/dgrid"
    },
    {
      "name": "esri",
      "location": "./arcgis-js-api/esri"
    },
    {
      "name": "moment",
      "location": "./arcgis-js-api/moment"
    },
    {
      "name": "dgrid1",
      "location": "./arcgis-js-api/dgrid1"
    },
    {
      "name": "dstore",
      "location": "./arcgis-js-api/dstore"
    },
    {
      "name": "jimu",
      "location": "./jimu.js"
    },
    {
      "name": "widgets",
      "location": "./widgets"
    },
    {
      "name": "themes",
      "location": "./themes"
    },
    {
      "name": "libs",
      "location": "./libs"
    },
    {
      "name": "dynamic-modules",
      "location": "./dynamic-modules"
    }
  ],
  "layers": {
    "dynamic-modules/preload": {
      "include": [
        "themes/FoldableTheme/main",
        "themes/FoldableTheme/widgets/HeaderController/Widget",
        "widgets/Scalebar/Widget",
        "widgets/Search/Widget",
        "widgets/Coordinate/Widget",
        "widgets/OverviewMap/Widget",
        "widgets/HomeButton/Widget",
        "widgets/MyLocation/Widget",
        "widgets/AttributeTable/Widget",
        "widgets/ZoomSlider/Widget"
      ]
    },
    "dynamic-modules/postload": {
      "include": [
        "widgets/BasemapGallery/Widget",
        "widgets/Measurement/Widget",
        "widgets/Query/Widget",
        "widgets/Bookmark/Widget",
        "widgets/Legend/Widget",
        "widgets/LayerList/Widget",
        "widgets/Edit/Widget",
        "widgets/Draw/Widget",
        "widgets/Print/Widget",
        "widgets/Chart/Widget",
        "widgets/Directions/Widget",
        "widgets/Geoprocessing/Widget",
        "widgets/Share/Widget"
      ],
      "exclude": [
        "dynamic-modules/preload"
      ]
    },
    "jimu/main": {
      "include": [
        "jimu/BaseWidget",
        "jimu/BaseWidgetFrame",
        "jimu/BaseWidgetPanel",
        "jimu/BaseWidgetSetting",
        "jimu/symbolUtils",
        "jimu/filterUtils",
        "jimu/utils",
        "jimu/portalUrlUtils",
        "jimu/portalUtils",
        "jimu/tokenUtils",
        "jimu/ConfigManager",
        "jimu/WidgetManager",
        "jimu/PanelManager",
        "jimu/DataManager",
        "jimu/LayoutManager",
        "jimu/PoolControllerMixin",
        "jimu/SpatialReference/utils",
        "jimu/LayerInfos/LayerInfos",
        "jimu/dijit-all",
        "jimu/OnScreenWidgetPanel",
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
      "exclude": [
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "jimu/dijit-all": {
      "include": [
        "jimu/dijit/LoadingIndicator",
        "jimu/dijit/LoadingShelter",
        "jimu/dijit/Message",
        "jimu/dijit/Popup",
        "jimu/dijit/RadioBtn",
        "jimu/dijit/CheckBox",
        "jimu/dijit/SymbolChooser",
        "jimu/dijit/Search",
        "jimu/dijit/ServiceURLInput",
        "jimu/dijit/SimpleTable",
        "jimu/dijit/TabContainer",
        "jimu/dijit/ColorPicker",
        "jimu/dijit/TabContainer3",
        "jimu/dijit/TileLayoutContainer",
        "jimu/dijit/DrawBox",
        "jimu/dijit/URLInput",
        "jimu/dijit/ColorPalette"
      ],
      "exclude": [
        "libs/main",
        "libs/echarts/echarts"
      ],
      "discard": true
    },
    "libs/main": {},
    "dojo/dojo": {
      "include": [
        "dojo/dojo",
        "dojo/i18n",
        "dojo/domReady"
      ],
      "customBase": true,
      "boot": true
    },
    "dgrid/main": {
      "include": [
        "dgrid/OnDemandGrid",
        "dgrid/List",
        "dgrid/util/misc",
        "dgrid/OnDemandList"
      ]
    },
    "xstyle/main": {
      "include": [
        "xstyle/main"
      ]
    },
    "esri/layers/VectorTileLayerImpl": {},
    "jimu/layoutManagers/AbsolutePositionLayoutManager": {
      "include": [],
      "exclude": [
        "esri/main",
        "libs/main",
        "jimu/main"
      ]
    },
    "jimu/layoutManagers/GridLayoutManager": {
      "include": [],
      "exclude": [
        "esri/main",
        "libs/main",
        "jimu/main"
      ]
    },
    "themes/FoldableTheme/widgets/HeaderController/Widget": {
      "include": [
        "themes/FoldableTheme/widgets/HeaderController/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Scalebar/Widget": {
      "include": [
        "widgets/Scalebar/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Search/Widget": {
      "include": [
        "widgets/Search/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Coordinate/Widget": {
      "include": [
        "widgets/Coordinate/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/BasemapGallery/Widget": {
      "include": [
        "widgets/BasemapGallery/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Measurement/Widget": {
      "include": [
        "widgets/Measurement/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Query/Widget": {
      "include": [
        "widgets/Query/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/OverviewMap/Widget": {
      "include": [
        "widgets/OverviewMap/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/HomeButton/Widget": {
      "include": [
        "widgets/HomeButton/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/MyLocation/Widget": {
      "include": [
        "widgets/MyLocation/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/AttributeTable/Widget": {
      "include": [
        "widgets/AttributeTable/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/ZoomSlider/Widget": {
      "include": [
        "widgets/ZoomSlider/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Bookmark/Widget": {
      "include": [
        "widgets/Bookmark/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Legend/Widget": {
      "include": [
        "widgets/Legend/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/LayerList/Widget": {
      "include": [
        "widgets/LayerList/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Edit/Widget": {
      "include": [
        "widgets/Edit/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Draw/Widget": {
      "include": [
        "widgets/Draw/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Print/Widget": {
      "include": [
        "widgets/Print/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Chart/Widget": {
      "include": [
        "widgets/Chart/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Directions/Widget": {
      "include": [
        "widgets/Directions/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Geoprocessing/Widget": {
      "include": [
        "widgets/Geoprocessing/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "widgets/Share/Widget": {
      "include": [
        "widgets/Share/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    },
    "themes/FoldableTheme/main": {
      "include": [
        "themes/FoldableTheme/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "dojo/dojo",
        "libs/echarts/echarts"
      ]
    }
  },
  "insertAbsMids": 0,
  "staticHasFeatures": {
    "config-dojo-loader-catches": 0,
    "config-tlmSiblingOfDojo": 0,
    "dojo-amd-factory-scan": 0,
    "dojo-combo-api": 0,
    "dojo-config-api": 1,
    "dojo-config-require": 0,
    "dojo-debug-messages": 0,
    "dojo-dom-ready-api": 1,
    "dojo-firebug": 0,
    "dojo-guarantee-console": 1,
    "dojo-has-api": 1,
    "dojo-inject-api": 1,
    "dojo-loader": 1,
    "dojo-log-api": 0,
    "dojo-modulePaths": 0,
    "dojo-moduleUrl": 0,
    "dojo-publish-privates": 0,
    "dojo-requirejs-api": 0,
    "dojo-sniff": 0,
    "dojo-sync-loader": 0,
    "dojo-test-sniff": 0,
    "dojo-timeout-api": 0,
    "dojo-trace-api": 0,
    "dojo-v1x-i18n-Api": 1,
    "dojo-xhr-factory": 0,
    "dom": 1,
    "host-browser": 1,
    "extend-dojo": 1,
    "extend-esri": 0,
    "esri-svg": 1
  },
  "files": [
    [
      "./widgets/_build-generate_widgets-manifest.json",
      "./widgets/widgets-manifest.json"
    ],
    [
      "./_build-generate_config.json",
      "./config.json"
    ]
  ]
};