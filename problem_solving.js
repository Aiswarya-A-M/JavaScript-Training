//1) sort this array using inbuilt functions
function sort(array){                                          //function used for sorting given array.
  array.sort();
  console.log("sorted array using inbuilt function",array);
}
sort([3, 0, 4, 2, 0, 5, 8, 5, 8, 9, 6, 6, 4, 0]);

//2)remove duplicates from the array using inbuilt functions
function removeDuplicates(array){                                //function used for removing duplicates from given array using in-built functions. 
  const setOfArray=new Set(array);
  const arrayOfSet=Array.from(setOfArray);
  console.log("removed duplicates from array using inbuilt function",arrayOfSet)
}
removeDuplicates([3, 0, 4, 2, 0, 5, 8, 5, 8, 9, 6, 6, 4, 0]);

//3) sort this array without inbuilt functions using basic loops and all.
function sortAnArray(arr){                                 // funtion used for sort an array without using inbuilt functions.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("sorted array without inbuilt functions using basic loops and all.",sortAnArray([3, 0, 4, 2, 0, 5, 8, 5, 8, 9, 6, 6, 4, 0]));

//4) remove duplicates of the array with normal loops
function toRemoveDuplicate(arr){      //function used for removing duplicates from given array without using in-built functions.
  let newArray=[];
  for (let i=0;i<arr.length;i++){
    if(newArray.indexOf(arr[i])===-1){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log("duplicates removed array with normal loops",toRemoveDuplicate([3, 0, 4, 2, 0, 5, 8, 5, 8, 9, 6, 6, 4, 0]));

//5) Find the leader of the array
function leader(arr){                   //function used for getting array of leaders in a given array.
  const length= arr.length;
  let right=arr[length-1];
  const leadArray=[right];
  for (let i=length-2;i>0;i--){
    if(arr[i]>right){
      right=arr[i];
      leadArray.push(arr[i]);
    }  
  }
  return leadArray;
}
console.log("leaders of given array",leader([16, 17, 4, 3, 5, 2]));

//6) Rearrange an array in maximum minimum form
function maxMin(arr) {              // function is used for rearrange an array in maximum minimum form.Array should be in the format of [1,2,3,4,5,6] 
  const length = arr.length;
  let left = 0;
  let right = length - 1;
  let newArray = [];
  while (left <= right) {
    if (left === right) {
      newArray.push(arr[left]);
    } else {
      newArray.push(arr[right]);
      newArray.push(arr[left]);
    }
    left++;
    right--;
  }
  return newArray;
}
console.log("Rearranged an array in maximum-minimum form:",maxMin([1, 2, 3, 4, 5, 6]));

//7) In the above array move all zeroes to end of array
function zeroAtRight(arr){                // function to get an array with all zeroes placed at end
  let left = 0;
  let right=arr.length-1;
  let temp;
  while (left<right){
    if(arr[left]===0){
      temp=arr[left];
      arr[left]=arr[right];
      arr[right]=temp;
      right--;
    }   
    else{
      left++;
    }
  }
  return arr;
}
console.log("Array with zeroes moved to the end: ",zeroAtRight([3, 0, 4, 2, 0, 5, 8, 5, 8, 9, 6, 6, 4, 0]));