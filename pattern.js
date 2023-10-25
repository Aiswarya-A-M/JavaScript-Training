function pattern(num){
    for(let i=1;i<=num;i+=2){
       let str='';
       let space=(num-i)/2
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
       let space=(num-i)/2
       for (let j=1;j<=space;j++){
          str+=" ";
       }
       for (let j=1;j<=i;j++){
            str+="*";
       }
             console.log(str)
    }
    
 }
 let f=pattern(11)