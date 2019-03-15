/**
 * SList: Partition
 * Create partition(ListNode,value) that locates the first node with that value, 
 * and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later. 
 * Otherwise, original order need not be perfectly preserved. Return the new head ListNode .
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

    this.addNode = function(node){
        if (!this.head) {this.head = node;}
        else {
            var runner = this.head;
            while (runner.next){
                runner = runner.next;
            }
            runner.next = node;
        }
        return this;
    }

    this.concat = function(list){

        var runner = this.head;

        while (runner.next){
            runner = runner.next;
        }
        runner.next = list.head;
        return this;
    }
    this.partition = function(value){
        var lessThan = new SLL();
        var greaterThan = new SLL();
        var runner = this.head;
        var valNode;
        var lesser;
        var greater;

        while (runner.next){
            if (runner.next.val == value){
                valNode = runner.next;
                break;
            }
            runner = runner.next;
        }

        runner = this.head;

        while (runner.next){

            if (runner === valNode){
                break;
            }
            else if (runner.val < value){
                this.head = runner.next;
                lesser = runner;
                lesser.next = null;
                lessThan.addNode(lesser);
                runner = this.head;
            }
            else if (runner.val > value){
                this.head = runner.next;
                greater = runner;
                greater.next = null;
                greaterThan.addNode(greater);
                runner = this.head;
            }

        }
        lessThan.concat(this).concat(greaterThan);
        this.head = lessThan.head;
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
sList.add(1).add(22).add(73).add(4).add(56).add(15).add(31).add(98).add(42);
sList.printAsArray();
sList.partition(31);
sList.printAsArray();