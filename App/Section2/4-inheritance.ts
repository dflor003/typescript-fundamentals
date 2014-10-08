class BaseClass {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    getValue(): string { return this.value; }
}

class DerivedClass extends BaseClass {
    constructor(value: string) {
        super(value);
    }

    getValue(): string {
        return super.getValue() + ' Extended';
    }
}