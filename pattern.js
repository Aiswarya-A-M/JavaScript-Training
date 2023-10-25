/* if input is 5 we have to print above pattern
  *
 ***
*****
 ***
  *  
*/
function pattern(num){
   for(let i=1;i<=num;i+=2){
      let str='';
      const space=(num-i)/2
      for (let j=1;j<=space;j++){
         str+=" ";
      }
      for (let j=1;j<=i;j++){
         str+="*";
      }
      console.log(str)
   }
   for(let i=num-2;i>0;i-=2){
      let str='';
      const space=(num-i)/2
      for (let j=1;j<=space;j++){
         str+=" ";
      }
      for (let j=1;j<=i;j++){
         str+="*";
      }
      console.log(str)
   }
}
pattern(11)