class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the rear
    enqueue(element) {
        this.items.push(element);
        return element;
    }

    // Remove element from the front
    dequeue() {
        if (this.isEmpty()) return undefined;
        return this.items.shift();
    }

    // View front without removing it
    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get queue size
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }
}

const queue = new Queue();

$(document).ready(function () {

    // Display queue from front to rear
    function displayQueue() {
        $("#queue").empty();

        queue.items.forEach(function (item, index) {
            const color = index % 2 === 0
                ? "bg-primary"
                : "bg-success";

            const block = $("<div></div>")
                .addClass("row push text-white border border-light")
                .addClass(color)
                .text(item);

            $("#queue").append(block);
        });
    }

    // ENQUEUE BUTTON
    $("#enqueueBtn").click(function () {
        const value = String($("#dataInput").val() || "").trim();

        if (value === "") {
            $("#message").text("Please enter a value.");
            return;
        }

        queue.enqueue(value);
        displayQueue();

        $("#dataInput").val("");
        $("#message").text("Enqueued: " + value);
    });

    // DEQUEUE BUTTON
    $("#dequeueBtn").click(function () {
        if (queue.isEmpty()) {
            $("#message").text("Queue is empty!");
            return;
        }

        const removed = queue.dequeue();
        displayQueue();

        const block = $("<div></div>")
            .addClass("row pop text-bg-danger border border-light")
            .text(removed);

        $("#deletedQueue").append(block);
        $("#message").text("Dequeued: " + removed);
    });

    // PEEK BUTTON
    $("#peekBtn").click(function () {
        if (queue.isEmpty()) {
            $("#message").text("Queue is empty!");
            return;
        }

        displayQueue();

        $("#queue .push").first()
            .removeClass("bg-primary bg-success text-white")
            .addClass("bg-warning text-dark");

        $("#message").text("Front element: " + queue.peek());
    });

    // CLEAR BUTTON
    $("#clearBtn").click(function () {
        queue.clear();

        $("#queue").empty();
        $("#deletedQueue").empty();
        $("#dataInput").val("");
        $("#message").text("Queue cleared!");
    });

});