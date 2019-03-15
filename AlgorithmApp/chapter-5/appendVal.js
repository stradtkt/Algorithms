/**
 * SList: Append Val
 * Create appendVal(list,val,after) that inserts a new ListNode containing given val 
 * immediately after the node containing after (or at end, if after not found). 
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
    this.appendVal = function(val, after){
        var runner = this.head;
        var newNode = new Node(val);

        while(runner.next){
            if (runner.val == after){
                var afterNode = runner;
            }
            runner = runner.next;
        }

        if (!afterNode){
            runner.next = newNode;
        }
        else {
            newNode.next = afterNode.next;
            afterNode.next = newNode;
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
sList.appendVal(100,2);
sList.printAsArray();