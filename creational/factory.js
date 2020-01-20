class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    };

    create(name, type = "simple") {
        const Membership =
            MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);

        member.type = type;
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        };

        return member;
    }
}

const factory = new MemberFactory();

const members = [
    factory.create("Joe", "simple"),
    factory.create("Bob", "premium"),
    factory.create("Kamilla", "standard"),
    factory.create("Sharon", "premium"),
    factory.create("Mark")
];

members.forEach((member) => {
    member.define();
});

// Joe (simple): 50
// Bob (premium): 500
// Kamilla (standard): 150
// Sharon (premium): 500
// Mark (simple): 50
