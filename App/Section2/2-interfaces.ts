module app.section2 {

    export interface IMyInterface {
        stringField: string;
        numField: number;

        optionalField?: boolean;

        aMethod(canBeHereToo?: any): void;

        subObject: {
            x: number;
            y: number;
        };
    }

    export function doSomethingWithMyInterface(param: IMyInterface): void {
        console.log(param.subObject.x, param.subObject.y);

        param.aMethod(42);
    }

    var mustMatchInterface: IMyInterface = {
    };
}

module app.section2 {

    export interface IMyInterface { // Same interface
        sneakyLittleObject?: Object;
        sneakyLittleFunction?: Function; // What if we make these not optional?
    }
}


module app.section2 {
    // Delegates!
    export interface IAmADelegate {
        (nums: number[]): number;
    }


    var sum: IAmADelegate;

    sum = function (nums: number[]): number {
        var total = 0;
        for (var i = 0; i < nums.length; i++) {
            total += nums[i];
        }
        return total;
    };

    var x = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.assert(x === 55);
}

