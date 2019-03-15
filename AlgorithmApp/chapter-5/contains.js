/**
 * List: Contains
 * Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. 
 * Given a ListNode pointer and a val, return whether val is found in any node in the list.
 */

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

    this.contains = function(data) {
        if(this.head == null) {
            return false;
        }
        runner = this.head;
        while(runner) {
            if(runner.val == data) {
                return true;
            }
            runner = runner.next;
        }
        return false;
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
List.printArray();
console.log(List.contains(0));
List.addFront(3).addFront(2).addFront(1).addFront(0);
List.printArray();
console.log(List.contains(3));
console.log(List.contains(4));