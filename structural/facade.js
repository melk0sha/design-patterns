class Complaints {
    constructor() {
        this.complaints = [];
    }

    reply(complaint) {}

    add(complaint) {
        this.complaints.push(complaint);

        return this.reply(complaint);
    }
}

class ProductComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Product: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;

        if (type === "service") {
            complaint = new ServiceComplaints();
        } else {
            complaint = new ProductComplaints();
        }

        return complaint.add({ id, customer, details });
    }
}

const registry = new ComplaintRegistry();
console.log(registry.register("Mark", "service", "not available"));
// Service: 1579515621509: Mark (not available)

console.log(registry.register("Ted", "product", "error"));
// Product: 1579515621577: Ted (error)
