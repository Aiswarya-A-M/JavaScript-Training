//1) sort this array using inbuilt functions
function sort(a){
    a.sort();
    console.log("sorted array using inbuilt function",a);


}
let array = [3, 0, 4, 2, 0, 5, 8, 5, 8, 9, 6, 6, 4, 0];
let a=sort(array);
//2)remove duplicates of the array using inbuilt functions
function removeDuplicates(b){
    let setOfB=new Set(b);
    let arrayOfB=Array.from(setOfB);
    console.log("removed duplicates from array using inbuilt function",arrayOfB)


}
let ar= [3, 0, 4, 2, 0, 5, 8, 5, 8, 9, 6, 6, 4, 0];
let b=removeDuplicates(ar);
//3) sort this array without inbuilt functions using basic loops and all.
function sorting(arr){
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
let c=[3, 0, 4, 2, 0, 5, 8, 5, 8, 9, 6, 6, 4, 0];
let sortedArray=sorting(c);
console.log("sorted array without inbuilt functions using basic loops and all.",sortedArray);

//4) remove duplicates of the array with normal loops



function duplicate(d){
    let newArray=[];
    for (let i=0;i<d.length;i++){
      if(newArray.indexOf(d[i])===-1){
             newArray.push(d[i]);
      }
   }
   return newArray;
}
let d=duplicate([3, 0, 4, 2, 0, 5, 8, 5, 8, 9, 6, 6, 4, 0]);




console.log("duplicates removed array with normal loops",d);
//5) Find the leader of the array


function leader(arr){
     const n= arr.length;
     let max=arr[n-1];
     const maxArray=[max];
     for (let i=n-2;i>0;i--){
         if(arr[i]>max){
            max=arr[i];
            maxArray.push(arr[i]);
         }
     
     }
   return maxArray;
}
let e=[16, 17, 4, 3, 5, 2];
console.log("leaders of given array",leader(e));


//6) Rearrange an array in maximum minimum form
function maxMin(arr) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
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

let maxMinArray = maxMin([1, 2, 3, 4, 5, 6]);
console.log("Rearranged an array in maximum-minimum form:", maxMinArray);

//7) In the above array move all zeroes to end of array

function zeroAtRight(arr){
  let left = 0;
  let right=arr.length-1;
  let temp;

  while (left<right){
     if(arr[left]===0){
         const temp=arr[left];
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
const arr = [3, 0, 4, 2, 0, 5, 8, 5, 8, 9, 6, 6, 4, 0];
const result = zeroAtRight(arr);
console.log("Array with zeroes moved to the end: ",result);

