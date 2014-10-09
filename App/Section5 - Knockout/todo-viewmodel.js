/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/jstorage/jstorage.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var app;
(function (app) {
    var TodoItem = app.TodoItem;

    var TodoViewModel = (function () {
        function TodoViewModel() {
            this.itemsKey = 'todo-items';
            this.todoItems = ko.observableArray([]);
        }
        TodoViewModel.prototype.loadItems = function () {
            var items = $.jStorage.get(this.itemsKey, []);
            var todos = ko.utils.arrayMap(items, function (item) {
                return new TodoItem(item);
            });
            this.todoItems(todos);
        };

        TodoViewModel.prototype.addTodo = function () {
            this.todoItems.push(new TodoItem());
        };

        TodoViewModel.prototype.saveTodos = function () {
            var todos = ko.utils.arrayMap(this.todoItems(), function (item) {
                return item.toData();
            });
            $.jStorage.set(this.itemsKey, todos);
        };
        return TodoViewModel;
    })();
    app.TodoViewModel = TodoViewModel;
})(app || (app = {}));
//# sourceMappingURL=todo-viewmodel.js.map
