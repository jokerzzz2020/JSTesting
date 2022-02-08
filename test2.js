var StackObj = {};


StackObj.StackNode = function(){
	this.item = null;
	this.next = null;
}

StackObj.LinkedStack = function(){
	var head = null;
	var size = null;
	
	/**
	 * Push function
	 */
	this.pushToStack = function(item){
		var node = new StackObj.StackNode();
		node.item = item;
		node.next = null;
		if(size < 1 && head === null){
			head = node;
			head.next = null;
			size = 1;
		}else{
			var current = head;
			while(current.next !== null){
				current = current.next;
			}
			current.next = node;
			size += 1;
		}
	}
	
	/**
	 * Pop Function
	 */
	this.popFromStack = function(){
		var current = head;
		if(size === 0){
			return;
		}
		if(size === 1){
			head = null;
			size = 0;
			return current;
		}
		var prev = current;  
		while(current.next !== null){
				prev = current;
				current = current.next;
		}
		prev.next = null;
		size -= 1;
		return current;
	}

    this.print = function () {
        console.log("head is: "+head.item);
        console.log("stack size: "+size);
    }
    
}

var stack = new StackObj.LinkedStack();
stack.pushToStack("obj1");
stack.pushToStack("obj2");
stack.pushToStack("obj3");
stack.print();

var popNode=stack.popFromStack();
console.log("Popped item is: " + popNode.item);//obj3