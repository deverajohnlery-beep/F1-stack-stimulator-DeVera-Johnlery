class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to top of stack
    push(element) {
        this.items.push(element);
        this.count = this.items.length;
        return element;
    }

    // Remove top element
    pop() {
        if (this.count === 0) {
            return undefined;
        }

        const removed = this.items.pop();
        this.count = this.items.length;
        return removed;
    }

    // View top element without removing it
    peek() {
        if (this.count === 0) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.count === 0;
    }

    // Get number of elements
    size() {
        return this.count;
    }

    // Print stack elements
    print() {
        return this.items.join(" ");
    }

    // Clear all elements
    clear() {
        this.items = [];
        this.count = 0;
        return this.items;
    }
}

const stack = new Stack();

$(document).ready(function () {

    // Display stack elements
    function displayStack() {
        $("#stack").empty();

        stack.items.forEach(function (item, index) {
            const color = index % 2 === 0
                ? "bg-primary"
                : "bg-success";

            const block = $("<div></div>")
                .addClass("row push text-white border border-light")
                .addClass(color)
                .text(item);

            $("#stack").prepend(block);
        });
    }

    // PUSH BUTTON
    $("#pushBtn").click(function () {
        const value = $("#dataInput").val().trim();

        if (value === "") {
            $("#message").text("Please enter a value.");
            return;
        }

        stack.push(value);
        displayStack();

        $("#dataInput").val("");
        $("#message").text("Pushed: " + value);
    });

    // POP BUTTON
    $("#popBtn").click(function () {
        if (stack.isEmpty()) {
            $("#message").text("Stack is empty!");
            return;
        }

        const removed = stack.pop();
        displayStack();

        const block = $("<div></div>")
            .addClass("row pop text-bg-danger border border-light")
            .text(removed);

        $("#deletedStack").append(block);
        $("#message").text("Popped: " + removed);
    });

    // PEEK BUTTON
    $("#peekBtn").click(function () {
        if (stack.isEmpty()) {
            $("#message").text("Stack is empty!");
            return;
        }

        displayStack();

        $("#stack .push").first()
            .removeClass("bg-primary bg-success")
            .addClass("bg-warning text-dark");

        $("#message").text("Top element: " + stack.peek());
    });

    // CLEAR BUTTON
    $("#clearBtn").click(function () {
        stack.clear();

        $("#stack").empty();
        $("#deletedStack").empty();
        $("#dataInput").val("");
        $("#message").text("Stack cleared!");
    });

});
