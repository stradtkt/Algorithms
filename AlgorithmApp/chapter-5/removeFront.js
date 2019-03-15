/**
 * List: Remove Front
 * Ha! Rudy is getting what he deserves – kicked out of line. 
 * Given a pointer to the first node in a list, remove the head node and return the new list head node. 
 * If list is empty, return null .
 */

function Node(val){
    this.val = val;
    this.next = null;
}

function SLL(){
    this.head = null;

    this.addFront = function(val){
        var old = this.head;
        this.head = new Node(val);
        this.head.next = old;
        return this;
    }

    this.removeFront = function(){
        if (this.head == null) {
            console.log("There is nothing to remove.");
            return this;
        }

        this.head = this.head.next;
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

var List = new SLL();
List.removeFront();
List.addFront(3).addFront(2).addFront(1).addFront(0);
List.printAsArray();
List.removeFront();
List.printAsArray();