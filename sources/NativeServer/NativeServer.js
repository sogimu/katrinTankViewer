/**
 * @classdesc
 * NativeServer
 * 
 * @class NativeServer
 * @this {KatrinTankViewer.NativeServer}
 * @author sogimu@nxt.ru Aleksandr Lizin aka sogimu
 * @version 0.1
 *
 * @requires KatrinTankViewer.js
 * @requires NativeServer/HotSpotInfo/HotSpotInfo.js
 * @requires NativeServer/Model/Model.js
 */

(function(namespace) {
    var NativeServer = function(O) {

        var me = {};

        me._serverURL = "";
        me._pathToModel = "../data/MS.js";
        me._pathToHotSpotsInfo = "../data/hotSpotsInfo.json";

        me._hotSpotsInfo = {};
        me._model = {};

        me._setServerURL = function(url) {
            gizmo.Filter(url, "string");
            this._serverURL = url;
        };

        me._getServerURL = function() {
            return this._serverURL;
        };

        me._setPathToModel = function(path) {
            gizmo.Filter(path, "string");
            this._pathToModel = path;
        };

        me._getPathToModel = function() {
            return this._pathToModel;
        };
        
        me._setPathToHotSpotsInfo = function(path) {
            gizmo.Filter(path, "string");
            this._pathToHotSpotsInfo = path;
        };

        me._getPathToHotSpotsInfo = function() {
            return this._pathToHotSpotsInfo;
        };

        me._setHotSpotsInfo = function(hotSpotsInfo) {
            gizmo.Filter(hotSpotsInfo, "Object");
            this._hotSpotsInfo = hotSpotsInfo;
        };

        me._getHotSpotsInfo = function() {
            return this._hotSpotsInfo;
        };

        me._setModel = function(model) {
            gizmo.Filter(model, "Object");
            this._model = model;
        };

        me._getModel = function() {
            return this._model;
        };

        me._sendRequestToServer = function(pathToFile, callback) {
            $.getJSON(this._serverURL + pathToFile, callback)
        };

        /**
         * Get object with information about number hot spots: name of chanell, position on model, ID of VRML point
         *
         * @method NativeServer.GetHotSpotsInfo
         * @param {boolean}   needUpdate   if true - information about hot spots in this class will be update
         * @param {Function}  callback     function which start when data had been get
         */
        me.GetHotSpotsInfo = function(needUpdate, callback) {
            if(needUpdate) {
                var self = this;
                this._sendRequestToServer(this._pathToHotSpotsInfo, function(data) {
                    var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: data});    
                    self._setHotSpotsInfo(hotSpotInfo);
                    callback(hotSpotInfo);
                });

            } else {
                callback(this._getHotSpotsInfo());
            }

        };

        /**
         * Get model
         *
         * @method NativeServer.GetModel
         * @param {boolean}   needUpdate   if true - information about hot spots in this class will be update
         * @param {Function}  callback     function which start when data had been get
         */
        me.GetModel = function(needUpdate, callback) {
            if(needUpdate) {
                var self = this;
                this._sendRequestToServer(this._pathToModel, function(data) {
                    var model = new KTV.Model({model: data});
                    self._setModel(model);
                    callback(model);
                });

            } else {
                callback(this._getModel());
            }
        };

        /**
        * Constructor
        *
        * @method NativeServer.Constructor
        * @this {KatrinTankViewer.NativeServer}
        * @param {Object} O
        * @param {string} O.serverURL           URL to the server, for example http://localhost/develop/katrinTankViewer/
        * @param {string} O.pathToModel         path to model, for example data/MS.js
        * @param {string} O.pathToHotSpotsInfo  path to hot spot's information, for example data/hotSpots.json
        */
        me.Constructor = function(O) {
            if(O) {
                switch(O) {
                    case O.serverURL : {
                        gizmo.Filter(O.serverURL, "string");
                        this._setServerURL(O.serverURL);
                    };break;

                    case O.pathToModel : {
                        gizmo.Filter(O.pathToModel, "string");
                        this._setPathToModel(O.pathToModel);
                    };break;

                    case O.pathToHotSpotsInfo : {
                        gizmo.Filter(O.pathToHotSpotsInfo, "string");
                        this._setPathToHotSpotsInfo(O.pathToHotSpotsInfo);
                    };break;
                };    
            };

        };

        me.Constructor(O);

        return me;

    };
    
    namespace.NativeServer = NativeServer;

})(window.KTV);