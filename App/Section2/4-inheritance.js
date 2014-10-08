var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var foo;
(function (foo) {
    (function (bar) {
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
                this.appendValue = 'Extended';
            }
            DerivedClass.prototype.getValue = function () {
                return _super.prototype.getValue.call(this) + ' ' + this.appendValue;
            };
            return DerivedClass;
        })(BaseClass);

        // Polymorphism
        var baseClasses = [
            new BaseClass('foo'),
            new BaseClass('bar'),
            new DerivedClass('baz')
        ];

        console.log(baseClasses[0].getValue()); // Works
        console.log(baseClasses[2].appendedValue); // Nope

        for (var i = 0; i < baseClasses.length; i++) {
            console.log(baseClasses[i].getValue());
        }
    })(foo.bar || (foo.bar = {}));
    var bar = foo.bar;
})(foo || (foo = {}));
//# sourceMappingURL=4-inheritance.js.map
