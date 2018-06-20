'use strict';
const memory = require ('./memory');

const Memory = new memory();

class Array {
  constructor(){
    //creates and array
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
    //allocate sets aside a block of Memory with the 'size' of 'this.length'
  }

  push(value){
    //pushes in a value
    if (this.length >= this._capacity){
      this._resize((this.length + 1) * Array.SIZE_RATIO);
      //increase the size of the allocated space at the end of the array
      //create extra byt SIZE_RATIO space to increate compacity
    }
    Memory.set(this.ptr + this.length, value);
    //sets value at certain Memory address
    //will hit the Memory address @ptr, 
    //then 
    //then adds the value by targeting 'this.ptr + this.length'

    this.length++;
  }

  _resize(size){
    const oldPtr = this.ptr;

    //sets the old pointer to a variable
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error ('Out of Memory');
      //then sets this pointer to the newly allocated space with size of 'size'
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    //copies backwards from the new ptr index to the old ptr index
    Memory.free(oldPtr);
    this._capacity = size;
  }

  get(index){
    if(index < 0 || index >= this.length){
      throw new Error('Index error');
      //if index is less than 0 or beyond the length, throw an error
    }
    console.log(Memory.get(this.ptr + index));
    //console.log(this.element);
    //get the element at pointer index
  }

  pop(){
    if (this.length === 0){
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length -1);
    //get the last element of the array
    this.length--;
    //cute off one element of the length
    return value;
    //returns an array that is one element shorter
  }

  insert(index, value){
    if (index < 0 || index >= this.length) {
      throw new Error('index error');
      //if index is less than 0 or beyond the length, throw an error

    }
    if (this.length >= this._capacity){
      this._resize((this.lgenth+1) * Array.SIZE_RATIO);
      //if insert size if greater than the remaining capacity copy everything

    }
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    //if there is room it copies everything into the specified space
    Memory.set(this.ptr + index, value);
    //sets the Memory address to the input value
    this.length++;
    //increases the length of array by one
  }
  remove(index){
    if (index <0 || index >= this.length){
      throw new Error('Index error');
      //if index is less than 0 or beyond the length, throw an error

    }
    Memory.copy(this.ptr + index, this.ptr + index + 1, this.length -index -1);
    //copies everything at the index 
    this.length--;
    //then removes the length
  }
}

function main () {
  Array.SIZE_RATIO = 3;
  let myArr = new Array();

  myArr.push(3);
  //length: 1 capacity: 3 address: 0
  myArr.push(5);
  myArr.push(15);
  myArr.push(19);
  myArr.push(45);
  myArr.push(10);
  //length: 6  capcity: 12 address: 3
  //Once the array's capacity is reached (@push(19)), the '_resize' function will be called
  //'_resize' will increase the length of the array by 1 then multiply it by three
  //'_resize' will call memory.allocate and increase the size of the arry according the input 'size'
  //then it will copy the elements starting from the next box over from location of old pointer
  //'_resize' will also call 'Memory.free' to empty the memory of the old array
  //then push will call 'Memory.set' to set the ptr at the beginning of the copied array
  myArr.pop();
  myArr.pop();
  myArr.pop();
  //length: 3 capacity: 12 address:3
  //it will go to the end of the list of elements and return the second to less value
  //it will remove the last elements by cutting off the length by 1
  console.log(myArr);
  myArr.get(0);
  myArr.pop();
  myArr.pop();
  myArr.pop();
  myArr.push('tauhida');
  myArr.get(0);


}

main();


//previous ptr + capacity