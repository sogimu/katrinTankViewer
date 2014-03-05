/**
 * @classdesc
 * NativeServer
 * 
 * @class NativeServer
 * @this {KatrinTankViewer.NativeServer}
 * @author sogimu@nxt.ru Aleksandr Lizin aka sogimu
 * @version 0.1
 *
 * @requires katrineTankViewer.js
 * @requires Sys/Sys.js
 */

(function(namespace) {
    var NativeServer = function(O) {

        var me = {};

        me._serverURL = "http://localhost/develop/katrinTankViewer/";
        me._pathToModel = "data/MS.js";
        me._pathToHotSpotsInfo = "data/hotSpots.json";

        me._hotSpotsInfo = {};
        me._model = {};
        /**
         * Get list of chanells by time in UNIX-stamp. You can choose what chanells you need.
         *
         * @method ChanellValues.GetChanellValuesByTime
         * @param {array} chanells
         * @param {time}  number
         */
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
            $.getJSON(this._serverURL + "/" + pathToFile, callback)
        };

        me.GetHotSpotsInfo = function(needUpdate, callback) {
            if(needUpdate) {
                var hotSpotsInfo = {};
                this._sendRequestToServer(this._pathToHotSpotsInfo, function(data) {
                    hotSpotsInfo = data;
                    callback(data);
                });
                this._setHotSpotsInfo(hotSpotsInfo);

            } else {
                callback(this._getHotSpotsInfo());
            }

        };

        me.GetModel = function(needUpdate, callback) {
            if(needUpdate) {
                var model = {};
                this._sendRequestToServer(this._pathToModel, function(data) {
                    model = data;
                    callback(data);
                });
                this._setModel(model);

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
        * @param {string} O.serverURL
        * @param {string} O.pathToModel
        * @param {string} O.pathToHotSpotsInfo
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

            this.GetHotSpotsInfo(true, function(data) {
                console.log(data);});
            this.GetModel(true, function(data) {
                console.log(data);});
            
        };

        me.Constructor(O);

        return me;

    };
    
    namespace.NativeServer = NativeServer;

})(window.KTV);