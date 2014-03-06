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
            this._hotSpotList = hotSpotList;
        };

        me._getHotSpotsList = function() {
            return this._hotSpotList;
        };

        me._setListById = function(listById) {
            this._listById = listById;
        };

        me._getListById = function() {
            return this._listById;
        };

        me._setListByName = function(listByName) {
            this._listByName = listByName;
        };

        me._getListByName = function() {
            return this._listByName;
        };

        me._setListByPos = function(listByPos) {
            this._listByPos = listByPos;
        };

        me._getListByPos = function() {
            return this._listByPos;
        };

        me.GetHotSpotByName = function(name) {
            return this._listByName[name];
        };

        me.GetHotSpotById = function(id) {
            return this._listById[id];
        };

        me.GetHotSpotByPos = function(pos) {
            return this._listByPos[pos];
        };

        // iterators
        me.GetIteratorById = function() {

        }

        me.GetIteratorByName = function() {

        }

        me.GetIteratorByPos = function() {

        };

        me._initListById = function(jSonData) {
            this._setListById(jSonData);
        };

        me._initListByName = function(jSonData) {
            var listByName = {};
            
            for(var i in jSonData) {
                var rightHotPoint = _.cloneDeep(jSonData[i]);
                listByName[jSonData[i]["name"]] = jSonData[i];
            }

            this._setListByName(listByName);

        };

        me._initListByPos = function(jSonData) {
            var listByName = {};
            
            for(var i in jSonData) {
                listByName[jSonData[i]["VRMLPoint"][0]+"," + jSonData[i]["VRMLPoint"][1]+"," + jSonData[i]["VRMLPoint"][2]] = jSonData[i];
            }

            this._setListByPos(listByName);

        };

        /**
        * Constructor
        *
        * @method HotSpotInfo.Constructor
        * @this {KatrinTankViewer.HotSpotInfo}
        * @param {Object} O
        * @param {string} O.hotSpotList  JSON data about hot spots
        * @param {array}  O.initFlug     ???
        */
        me.Constructor = function(O) {
            gizmo.Filter(O.hotSpotsList, "Object");

            this._setHotSpotsList(O.hotSpotsList)

            this._initListById(this._getHotSpotsList());
            this._initListByName(this._getHotSpotsList());
            this._initListByPos(this._getHotSpotsList());
        };

        me.Constructor(O);

        return me;

    };
    
    namespace.HotSpotInfo = HotSpotInfo;

})(window.KTV);