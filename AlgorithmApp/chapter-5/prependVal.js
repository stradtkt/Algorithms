/**
 * SList: Prepend Val
 * Create prependVal(ListNode,val,before) to insert a new ListNode with val immediately 
 * before the node containing before (or at end, if no node contains before ). 
 * Return the new list.
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

    this.prependVal = function(val, before){
        var runner = this.head;
        var newNode = new Node(val);

        while(runner.next){
            if (runner.next.val == before){
                var beforeNode = runner.next;
                var justBeforeNode = runner;
            }
            runner = runner.next;
        }

        if (!beforeNode){
            runner.next = newNode;
            return this;
        }
        else {
            justBeforeNode.next = newNode;
            newNode.next = beforeNode;
            return this;
        }
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
sList.prependVal(100,3);
sList.printAsArray();