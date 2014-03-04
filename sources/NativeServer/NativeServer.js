/**
 * @classdesc
 * NativeServer
 * 
 * @class NativeServer
 * @this {KatrinTankViewer.NativeServer}
 * @author sogimu@nxt.ru Aleksandr Lizin aka sogimu
 * @version 0.1
 *
 */

(function(namespace) {
    var NativeServer = function(O) {

        var me = {};

        me._serverURL = "";
        me._pathToModel = "";
        me._pathToHotSpotsInfo = "";

        /**
         * Get list of chanells by time in UNIX-stamp. You can choose what chanells you need.
         *
         * @method ChanellValues.GetChanellValuesByTime
         * @param {array} chanells
         * @param {time}  number
         */
        me._sendRequestToServer = function(callback) {

        };

        me.GetHotSpotsInfo = function(needUpdate, callback) {

        };

        me.GetModel = function(needUpdate, callback) {

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

        };

        me.Constructor(O);

        return me;

    };
    
    namespace.NativeServer = NativeServer;

})(window.KatrinTankViewer);