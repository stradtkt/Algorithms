function Node(val) {
    this.val = val;
    this.next = null;
}

function SLL() {
    this.head = null;

    this.addFront = function(val) {
        var old = this.head;
        this.head = new Node(val);
        this.head.next = old;
        return this;
    }

    this.printArray = function() {
        var runner = this.head;
        var arr = [];
        while(runner) {
            arr.push(runner.val);
            runner = runner.next;
        }
        console.log(arr);
        return this;
    }
}
var List = new SLL();
List.addFront(3).addFront(2).addFront(1);
console.log(List);
List.printArray();