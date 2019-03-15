/**
 * SList: Split on Value
 * Create splitOnVal(list,num) that, given number , splits a list in two. 
 * The latter half of the list should be returned, starting with node containing num . 
 * E.g.: splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3), and the return value will be (5=>2=>4).
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
    this.splitOnValue = function(value){
        var runner = this.head;
        var valNode;
        var newList = new SLL();

        while (runner.next){
            if (runner.next.val === value){
                valNode = runner.next;
                break;
            }
            runner = runner.next;
        }
        runner.next = null;
        newList.head = valNode;
        return newList;

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
var sList2 = sList.splitOnValue(3);
sList.printAsArray();
sList2.printAsArray();