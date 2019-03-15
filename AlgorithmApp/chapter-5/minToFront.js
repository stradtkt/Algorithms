/**
 * SList: Move Min to Front
 * Create a standalone function that locates the minimum value in a linked list, 
 * and moves that node to the front of the list. Return the new list, with all nodes still present, 
 * and all (except for the new head node) in their original order.
 */

function Node(val){
    this.val = val;
    this.next = null;
}

function SLL(){
    this.head = null;

    this.add = function(value) {
        var newNode = new Node(value);
        if(!this.head) {this.head = newNode;}
        else {
            var runner = this.head;
            while (runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return this;
    }

    this.moveMinToFront = function(){

        var runner = this.head;
        var minVal = this.head.val;
        var minNode;
        var beforeMinNode;

        while(runner.next){
            if (runner.next.val < minVal){
                minVal = runner.next.val;
                beforeMinNode = runner;
                minNode = runner.next;
            }
            runner = runner.next;
        }

        beforeMinNode.next = minNode.next;
        minNode.next = this.head;
        this.head = minNode;
        return this;

    }

    this.printAsArray = function(){
        var runner = this.head;
        var arr = [];
        while (runner){
            arr.push(runner.val);
            runner = runner.next;
        }
        console.log(arr);
        return this;
    }
}

var list = new SLL();
list.add(4).add(3).add(7).add(1).add(5)
list.printAsArray();
list.moveMinToFront();
list.printAsArray();