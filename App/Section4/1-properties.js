var foo;
(function (foo) {
    (function (bar) {
        var MyClass = (function () {
            function MyClass(value) {
                this.numTimesSet = 0;
                this._val = value;
            }
            Object.defineProperty(MyClass.prototype, "value", {
                get: function () {
                    return this._val;
                },
                set: function (newVal) {
                    this._val = newVal;
                    this.numTimesSet++;
                },
                enumerable: true,
                configurable: true
            });
            return MyClass;
        })();

        var instance = new MyClass('fe');
        console.log(instance.value); // fe
        console.log(instance.numTimesSet); // 0

        instance.value = 'fi';
        console.log(instance.value); // fi
        console.log(instance.numTimesSet); // 1

        instance.value = 'fo';
        console.log(instance.value); // fo
        console.log(instance.numTimesSet); // 2

        instance.value = 'fum';
        console.log(instance.value); // fum
        console.log(instance.numTimesSet); // 3
    })(foo.bar || (foo.bar = {}));
    var bar = foo.bar;
})(foo || (foo = {}));
//# sourceMappingURL=1-properties.js.map
