class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from);
        } else {
            Object.keys(this.users).forEach((key) => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            });
        }
    }
}

const mark = new User("Mark");
const john = new User("John");
const bob = new User("Bob");

const room = new ChatRoom();

room.register(mark);
room.register(john);
room.register(bob);

mark.send("Hello!", john); // Mark => John: Hello!
john.send("Hello hello!", mark); // John => Mark: Hello hello!
bob.send("Hi everyone!");
// Bob => Mark: Hi everyone!
// Bob => John: Hi everyone!
