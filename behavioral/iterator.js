class MyIterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    };
                } else {
                    this.index = 0;
                    return {
                        done: true,
                        value: void 0
                    };
                }
            }
        };
    }
}

function* MyGenerator(collection) {
    let index = 0;

    while (index < collection.length) {
        yield collection[index++];
    }
}

const iterator = new MyIterator(["This", "is", "iterator"]);

for (const val of iterator) {
    console.log("Value: ", val);
}
// Value:  This
// Value:  is
// Value:  iterator

const generator1 = MyGenerator(["This", "is", "generator"]);

for (const val of generator1) {
    console.log("Value: ", val);
}
// Value:  This
// Value:  is
// Value:  generator

const generator2 = MyGenerator(["This", "is", "generator"]);

console.log(generator2.next().value); // This
console.log(generator2.next().value); // is
console.log(generator2.next().value); // genetator
