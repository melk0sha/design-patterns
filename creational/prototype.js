const car = {
    wheels: 4,

    init() {
        console.log(`I have ${this.wheels} wheels, my owner is ${this.owner}`);
    }
};

const carWithOwner = Object.create(car, {
    owner: {
        value: "John"
    }
});

carWithOwner.init(); // I have 4 wheels, my owner is John
