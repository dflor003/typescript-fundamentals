var foo;
(function (_foo) {
    (function (_bar) {
        // Simple action
        var action = function () {
            return console.log('called!');
        };
        action();

        // With parameters
        var func = function (foo, bar) {
            return foo + ' world ' + bar;
        };
        func('hello', 42); // Returns 'hello world 42'

        // As a parameter
        var Utils = (function () {
            function Utils() {
            }
            Utils.map = function (array, func) {
                var result = [];
                for (var i = 0; i < array.length; i++) {
                    var current = array[i];
                    var newItem = func(current);
                    result.push(newItem);
                }

                return result;
            };
            return Utils;
        })();

        var arr = [1, 2, 3, 4, 5], arr2 = Utils.map(arr, function (item) {
            return item + 10;
        });
        console.log(arr2); // Prints: [11, 12, 13, 14, 15]

        var div = function (a, b) {
            return a / b;
        };
        div(10, 2);

        // Scope capture
        var SomeClass = (function () {
            function SomeClass(numbers) {
                var _this = this;
                this.items = [1, 2, 3, 4, 5];
                numbers.forEach(function (num) {
                    return _this.items.push(num);
                });
            }
            return SomeClass;
        })();

        var someClass = new SomeClass([6, 7, 8, 9, 10]);
        console.log(someClass.items); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    })(_foo.bar || (_foo.bar = {}));
    var bar = _foo.bar;
})(foo || (foo = {}));
//# sourceMappingURL=5-lambdas.js.map
