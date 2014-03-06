/**
 * @classdesc
 * Model
 * 
 * @class Model
 * @this {KatrinTankViewer.Model}
 * @author sogimu@nxt.ru Aleksandr Lizin aka sogimu
 * @version 0.1
 *
 */

(function(namespace) {
    var Model = function(O) {

        var me = {};

        // raw data from server
        me._model = [];

        me._setModel = function(model) {
            this._model = model;
        };

        me._getModel = function() {
            return this._model;
        };

        me.GetModel = function() {
            return this._model;
        };

        /**
        * Constructor
        *
        * @method Model.Constructor
        * @this {KatrinTankViewer.Model}
        * @param {Object} O
        * @param {object} O.model  3d model in the form of JSON data
        */
        me.Constructor = function(O) {
            gizmo.Filter(O.model, "Object");

            this._setModel(O.model)
            
        };

        me.Constructor(O);

        return me;

    };
    
    namespace.Model = Model;

})(window.KTV);