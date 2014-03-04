/**
 * @classdesc
 * AdeiServer
 * 
 * @class AdeiServer
 * @this {KatrinTankViewer.AdeiServer}
 * @author sogimu@nxt.ru Aleksandr Lizin aka sogimu
 * @version 0.1
 *
 */

(function(namespace) {
    var AdeiServer = function(O) {

        var me = {};

        me._pathToADEIServer = "";

        me.GetChanellValuesByTime = function(chanells, time) {

        };

        me._getDataFromServer = function(chanells, time) {

        };

        /**
        * Constructor
        *
        * @method AdeiServer.Constructor
        * @this {KatrinTankViewer.AdeiServer}
        * @param {Object} O
        * @param {string} O.pathToADEIServer
        */
        me.Constructor = function(O) {

        };

        me.Constructor(O);

        return me;

    };
    
    namespace.AdeiServer = AdeiServer;

})(window.KatrinTankViewer);