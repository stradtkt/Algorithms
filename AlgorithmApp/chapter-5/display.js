/**
 * SList: Display
 * Create display(node) for debugging that returns a string containing all list values. 
 * Build what you wish console.log(myList) did!
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


    this.display = function(){
        var runner = this.head;
        var displayStr = "";
        while (runner){
            displayStr += runner.val + " -> ";
            runner = runner.next;
        }
        displayStr += "null";
        console.log(displayStr);
        return this;
    }
}

var sList = new SLL();
sList.display();
sList.add(1).add(2).add(3).add(4).add(5);
sList.display();