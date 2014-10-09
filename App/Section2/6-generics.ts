/// <reference path="/scripts/typings/some-lib/some-lib.d.ts"/>

module app.foo {
    // Function generics
    export class Utils {
        static coalesce<T>(value: T, defaultValue: T): T {
            return value === null || typeof value === 'undefined' ? defaultValue : value;
        }
    }

    console.log(Utils.coalesce(null, false)); // false
    console.log(Utils.coalesce(0, 42)); // 0
    console.log(Utils.coalesce(undefined, 'foo')); // 0


    
    // Class generics
    export class Grid<TModel> {
        model: TModel;

        constructor(model: TModel) {
            this.model = model;
        }

        setModel(model: TModel): void {
            this.model = model;
        }
    }

    var grid = new Grid([1, 2, 3]);
    grid.setModel('foo'); // Nope



    // Constraints
    export interface ITask {
        run();
    }

    export class TaskRunner {
        static runTask<TTask extends ITask>(task: TTask) {
            task.run();
        }
    }

    var task = {
        run: () => console.log('ran')
    }
    TaskRunner.runTask(task); // Yes
    TaskRunner.runTask({}); // No
}