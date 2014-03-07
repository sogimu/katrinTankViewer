/**
 * @classdesc
 * AdeiServer
 * 
 * @class AdeiServer
 * @this {KatrinTankViewer.AdeiServer}
 * @author sogimu@nxt.ru Aleksandr Lizin aka sogimu
 * @version 0.1
 *
 * @requires KatrinTankViewer.js
 * @requires AdeiServer/ChanellValues/ChanellValues.js
 */

(function(namespace) {
    var AdeiServer = function(O) {

        var me = {};

        me._pathToADEIServer = "";

        /**
        * Method for taking data from ADEI
        *
        * @method AdeiServer._getDataFromServer
        * @param {Object} O
        * @param {array} O.chanells       array with chanell numbers
        * @param {object} O.time          
        * @param {number} O.time.begin    begin time
        * @param {number} O.time.end      end time
        * @param {Function} O.callback    callback which runs when data coming from server
        */
        me.GetChanellValuesByTime = function(chanells, time, callback) {
            gizmo.Filter(chanells, "Array");
            gizmo.Filter(time, "Object");
            gizmo.Filter(time.begin, "Number");
            gizmo.Filter(time.end, "Number");
            gizmo.Filter(callback, "Function");
            
            this._sendRequestToServer(chanells, time, callback);
        };

        /**
        * Method for taking data from ADEI
        *
        * @method AdeiServer._sendRequestToServer
        * @param {Object} O
        * @param {array} O.chanells       array with chanell numbers
        * @param {object} O.time          
        * @param {number} O.time.begin    begin time
        * @param {number} O.time.end      end time
        * @param {Function} O.callback    callback which runs when data coming from server
        */
        me._sendRequestToServer = function(chanells, time, callback) {
            gizmo.Filter(chanells, "Array");
            gizmo.Filter(time, "Object");
            gizmo.Filter(time.begin, "Number");
            gizmo.Filter(time.end, "Number");
            gizmo.Filter(callback, "Function");
            
            var data = [];
            DataCacher.getData("db_server", "db_name", "db_group", chanells,toString(), time.begin + "-" + time.end, function(data) {
                data.push(data);
            });

            callback(data);

        };

        /**
        * Constructor
        *
        * @method AdeiServer.Constructor
        * @param {Object} O
        * @param {string} O.pathToADEIServer
        */
        me.Constructor = function(O) {
            if(O) {
                switch(O) {
                    case O.pathToADEIServer : {
                        gizmo.Filter(O.serverURL, "string");
                        this._setServerURL(O.serverURL);
                    };break;

                };    
            };
        };

        me.Constructor(O);

        return me;

    };
    
    namespace.AdeiServer = AdeiServer;

})(window.KTV);