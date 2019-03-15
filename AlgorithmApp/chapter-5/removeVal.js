/**
 * SList: Remove Val
 * Create removeVal(ListNode,val) . 
 * Given a pointer to the head ListNode , remove the node with the given val . 
 * Return the new list. What will you do if val is not found?
 */

function Node(value){
    this.val = value;
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
    this.removeVal = function(value){
        var runner = this.head;

        while(runner.next){
            if (runner.next.val == value){
                var beforeValNode = runner;
            }
            runner = runner.next;
        }

        if (!beforeValNode){
            console.log(`${value} was not found in list`);
        }
        else {
            beforeValNode.next = beforeValNode.next.next;
        }
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

var sList = new SLL();
sList.add(1).add(2).add(3).add(4).add(5);
sList.printAsArray();
sList.removeVal(50);
sList.printAsArray();