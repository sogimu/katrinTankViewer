/**
 * @classdesc
 * ChanellValues
 * 
 * @class ChanellValues
 * @this {KatrinTankViewer.ChanellValues}
 * @author sogimu@nxt.ru Aleksandr Lizin aka sogimu
 * @version 0.1
 *
 */

(function(namespace) {
    var ChanellValues = function(O) {

        var me = {};
        me._scvDataString = "";
        me._chanellList = [];
        me._timeDimension = -1;
        me._numberOfMeasurements = -1;
        me._beginTime = -1;
        me._endTime = -1;

        me._setCSVData = function(csvDataString) {
            gizmo.Filter(csvDataString, "String");
            this._scvDataString = csvDataString;
            this._processCSVData(csvDataString);
        };

        me._setChanellList = function(chanellList) {
            gizmo.Filter(chanellList, "Array");
            this._chanellList = chanellList;
        };

        me._processCSVData = function(csvDataString) {

        };

        /**
         * Get list of chanells by time in UNIX-stamp. You can choose what chanells you need.
         *
         * @method ChanellValues.GetChanellValuesByTime
         * @param {array} chanells
         * @param {time}  number
         */
        me.GetChanellValuesByTime = function(chanells, time) {

        };

        /**
         * Get iterator for list of measurements. You can choose what chanells you need.
         *
         * @method ChanellValues.GetIterator
         * @param {array} chanells
         */
        me.GetIterator = function(chanells) {

        }

        /**
        * Constructor
        *
        * @method ChanellValues.Constructor
        * @this {KatrinTankViewer.ChanellValues}
        * @param {Object} O
        * @param {string} O.csvDataString
        */
        me.Constructor = function(O) {
            gizmo.Filter(O.csvDataString, "String");

            this._setCSVData(O.csvDataString);

        };

        me.Constructor(O);

        return me;

    };
    
    namespace.ChanellValues = ChanellValues;

})(window.KTV);