module foo.bar {
    // Simple action
    var action = () => console.log('called!');
    action();



    // With parameters
    var func = (foo: string, bar: number) => foo + ' world ' + bar;
    func('hello', 42); // Returns 'hello world 42'



    // As a parameter
    class Utils {
        static map(array: any[], func: (item: any) => any): any[] {
            var result = [];
            for (var i = 0; i < array.length; i++) {
                var current = array[i];
                var newItem = func(current);
                result.push(newItem);
            }

            return result;
        }
    }

    var arr = [1, 2, 3, 4, 5],
        arr2 = Utils.map(arr, (item: number) => item + 10);
    console.log(arr2); // Prints: [11, 12, 13, 14, 15]

    var div = (a: number, b: number) => a / b;
    div(10, 2);

    

    // Scope capture
    class SomeClass {
        items: number[] = [1,2,3,4,5];

        constructor(numbers: number[]) {
            numbers.forEach((num: number) => this.items.push(num));   
        }
    }

    var someClass = new SomeClass([6, 7, 8, 9, 10]);
    console.log(someClass.items); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}