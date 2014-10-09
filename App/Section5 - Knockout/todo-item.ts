/// <reference path="../scripts/typings/knockout/knockout.d.ts" />

module app {

    export interface ITodoData {
        isChecked?: boolean;
        text?: string;
    }
    
    export class TodoItem {
        isChecked: KnockoutObservable<boolean>;
        text: KnockoutObservable<string>;

        constructor(data?: ITodoData) {
            data = data || {};
            this.isChecked = ko.observable(typeof data.isChecked === 'boolean' ? data.isChecked : false);
            this.text = ko.observable(data.text || '');
        }

        toggleItem(): void {
            this.isChecked(!this.isChecked());
        }

        toData(): ITodoData {
            return {
                isChecked: this.isChecked(),
                text: this.text()
            };
        }
    }
}