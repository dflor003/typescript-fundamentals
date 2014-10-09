/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/jstorage/jstorage.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />

module app {
    import TodoItem = app.TodoItem;
    import ITodoData = app.ITodoData;
    
    export class TodoViewModel {
        private itemsKey = 'todo-items';
        todoItems: KnockoutObservableArray<TodoItem>;

        constructor() {
            this.todoItems = ko.observableArray<TodoItem>([]);
        }

        loadItems(): void {
            var items = $.jStorage.get(this.itemsKey, []);
            var todos = ko.utils.arrayMap(items, (item: ITodoData) => new TodoItem(item));
            this.todoItems(todos);
        }

        addTodo(): void {
            this.todoItems.push(new TodoItem());
        }

        saveTodos(): void {
            var todos = ko.utils.arrayMap(this.todoItems(), (item: TodoItem) => item.toData());
            $.jStorage.set(this.itemsKey, todos);
        }
    }
}