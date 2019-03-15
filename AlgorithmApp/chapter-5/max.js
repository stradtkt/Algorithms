/**
 * SList: Max
 * American Idol seems to air singers that are the best , 
 * and a few that seem like the worst ! Create function max(node) to return list’s largest val.
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

    this.max = function(){
        var runner = this.head;
        var maxVal = this.head.val;

        while (runner){
            if (runner.val > maxVal){
                maxVal = runner.val;
            }
            runner = runner.next;
        }

        console.log(`maxVal is ${maxVal}`);
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
sList.add(1).add(2).add(3).add(4).add(5);
sList.display();
sList.max();