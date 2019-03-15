/**
 * SList: Move Max to Back
 * Create a standalone function that locates the maximum value in a linked list, 
 * and moves that node to the back of the list. Return the new list, with all nodes still present, 
 * and all in their original order except for the node you moved to the end of the singly linked list.
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

    this.moveMaxToBack = function(){

        var runner = this.head;
        var maxVal = this.head.val;
        var maxNode;
        var beforeMaxNode;

        while (runner.next){
            if (runner.next.val > maxVal){
                maxVal = runner.next.val;
                maxNode = runner.next;
                beforeMaxNode = runner;
            }
            runner = runner.next;
        }
        beforeMaxNode.next = maxNode.next;
        runner.next = maxNode;
        maxNode.next = null;
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
list.moveMaxToBack();
list.printAsArray();