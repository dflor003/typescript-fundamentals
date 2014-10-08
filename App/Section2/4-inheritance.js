var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BaseClass = (function () {
    function BaseClass(value) {
        this.value = value;
    }
    BaseClass.prototype.getValue = function () {
        return this.value;
    };
    return BaseClass;
})();

var DerivedClass = (function (_super) {
    __extends(DerivedClass, _super);
    function DerivedClass(value) {
        _super.call(this, value);
    }
    DerivedClass.prototype.getValue = function () {
        return _super.prototype.getValue.call(this) + ' Extended';
    };
    return DerivedClass;
})(BaseClass);
//# sourceMappingURL=4-inheritance.js.map
