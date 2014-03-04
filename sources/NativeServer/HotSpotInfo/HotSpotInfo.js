/**
 * @classdesc
 * HotSpotInfo
 * 
 * @class HotSpotInfo
 * @this {KatrinTankViewer.HotSpotInfo}
 * @author sogimu@nxt.ru Aleksandr Lizin aka sogimu
 * @version 0.1
 *
 */

(function(namespace) {
    var HotSpotInfo = function(O) {

        var me = {};

        // raw data from server
        me._hotSpotList = [];

        me._listById = [];
        me._listByName = [];
        me._listByPos = [];

        me._setHotSpotsList = function(hotSpotList) {

        };

        me.GetPosByName = function(name) {

        };

        me.GetIDByName = function(name) {

        };

        me.GetNameByID = function(id) {

        };

        me.GetPosByID = function(id) {

        };

        me.GetNameByPos = function(pos) {

        };

        me.GetIdByPos = function(pos) {

        };

        // iterators
        me.GetIteratorById = function() {

        }

        me.GetIteratorByName = function() {

        }

        me.GetIteratorByPos = function() {

        };

        me._initListById = function(rawData) {

        };

        me._initListByName = function(rawData) {

        };

        me._initListByPos = function(rawData) {

        };
        
        /**
        @param {array} initFlug
        byId, byName, byPos, *
        */
        me.Init = function(initFlug) {

        };

        /**
        * Constructor
        *
        * @method HotSpotInfo.Constructor
        * @this {KatrinTankViewer.HotSpotInfo}
        * @param {Object} O
        * @param {string} O.hotSpotList
        * @param {array}  O.initFlug
        */
        me.Constructor = function(O) {
            gizmo.Filter(O.hotSpotsList, "Array");

            this._setHotSpotsList(O.hotSpotList)

            // some stuff with O.initFlug 
        };

        me.Constructor(O);

        return me;

    };
    
    namespace.HotSpotInfo = HotSpotInfo;

})(window.KatrinTankViewer);