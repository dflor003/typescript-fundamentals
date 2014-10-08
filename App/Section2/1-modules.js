var app;
(function (app) {
    (function (moduleA) {
        var secret = '101010';

        moduleA.exposed = 42;
    })(app.moduleA || (app.moduleA = {}));
    var moduleA = app.moduleA;
})(app || (app = {}));

var app;
(function (app) {
    (function (moduleB) {
        var secret = Math.PI;

        function add(a, b) {
            return a + b;
        }
        moduleB.add = add;
    })(app.moduleB || (app.moduleB = {}));
    var moduleB = app.moduleB;
})(app || (app = {}));

var app;
(function (app) {
    (function (moduleC) {
        var first = app.moduleA.secret;
        var second = app.moduleB.secret;

        var myAdd = app.moduleB.add;
        var exposed = app.moduleA.exposed;

        console.assert(exposed === 42);

        console.assert(myAdd(1, 1) === 2);
        console.assert(app.moduleB.add(1, 1) === 2);
    })(app.moduleC || (app.moduleC = {}));
    var moduleC = app.moduleC;
})(app || (app = {}));
//# sourceMappingURL=1-modules.js.map
