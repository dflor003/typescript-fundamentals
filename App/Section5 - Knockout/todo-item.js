/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var app;
(function (app) {
    var TodoItem = (function () {
        function TodoItem(data) {
            data = data || {};
            this.isChecked = ko.observable(typeof data.isChecked === 'boolean' ? data.isChecked : false);
            this.text = ko.observable(data.text || '');
        }
        TodoItem.prototype.toggleItem = function () {
            this.isChecked(!this.isChecked());
        };

        TodoItem.prototype.toData = function () {
            return {
                isChecked: this.isChecked(),
                text: this.text()
            };
        };
        return TodoItem;
    })();
    app.TodoItem = TodoItem;
})(app || (app = {}));
//# sourceMappingURL=todo-item.js.map
