module foo.bar {
    
    class MyClass {
        private _val: string;
        numTimesSet = 0;

        constructor(value: string) {
            this._val = value;
        }

        get value(): string { return this._val; }
        set value(newVal: string) { this._val = newVal; this.numTimesSet++; }
    }

    var instance = new MyClass('fe');
    console.log(instance.value); // fe
    console.log(instance.numTimesSet); // 0

    instance.value = 'fi';
    console.log(instance.value); // fi
    console.log(instance.numTimesSet); // 1

    instance.value = 'fo';
    console.log(instance.value); // fo
    console.log(instance.numTimesSet); // 2

    instance.value = 'fum';
    console.log(instance.value); // fum
    console.log(instance.numTimesSet); // 3
}