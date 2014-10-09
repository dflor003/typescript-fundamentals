/// <reference path="/scripts/typings/some-lib/some-lib.d.ts"/>
var app;
(function (app) {
    (function (foo) {
        // Function generics
        var Utils = (function () {
            function Utils() {
            }
            Utils.coalesce = function (value, defaultValue) {
                return value === null || typeof value === 'undefined' ? defaultValue : value;
            };
            return Utils;
        })();
        foo.Utils = Utils;

        console.log(Utils.coalesce(null, false)); // false
        console.log(Utils.coalesce(0, 42)); // 0
        console.log(Utils.coalesce(undefined, 'foo')); // 0

        // Class generics
        var Grid = (function () {
            function Grid(model) {
                this.model = model;
            }
            Grid.prototype.setModel = function (model) {
                this.model = model;
            };
            return Grid;
        })();
        foo.Grid = Grid;

        var grid = new Grid([1, 2, 3]);
        grid.setModel('foo'); // Nope

        

        var TaskRunner = (function () {
            function TaskRunner() {
            }
            TaskRunner.runTask = function (task) {
                task.run();
            };
            return TaskRunner;
        })();
        foo.TaskRunner = TaskRunner;

        var task = {
            run: function () {
                return console.log('ran');
            }
        };
        TaskRunner.runTask(task); // Yes
        TaskRunner.runTask({}); // No
    })(app.foo || (app.foo = {}));
    var foo = app.foo;
})(app || (app = {}));
//# sourceMappingURL=6-generics.js.map
