var app;
(function (app) {
    (function (section2) {
        function doSomethingWithMyInterface(param) {
            console.log(param.subObject.x, param.subObject.y);

            param.aMethod(42);
        }
        section2.doSomethingWithMyInterface = doSomethingWithMyInterface;

        var mustMatchInterface = {};
    })(app.section2 || (app.section2 = {}));
    var section2 = app.section2;
})(app || (app = {}));

var app;
(function (app) {
    (function (section2) {
        

        var sum;

        sum = function (nums) {
            var total = 0;
            for (var i = 0; i < nums.length; i++) {
                total += nums[i];
            }
            return total;
        };

        var x = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        console.assert(x === 55);
    })(app.section2 || (app.section2 = {}));
    var section2 = app.section2;
})(app || (app = {}));
//# sourceMappingURL=2-interfaces.js.map
