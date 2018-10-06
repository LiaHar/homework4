//1.STAR TRIANGLE REVERESED
const starConcut = function(height, spaceCountNumber) {
    let str = "";
    while(spaceCountNumber > 0) {
      str = str + height;
      spaceCountNumber = spaceCountNumber - 1;
    }
    return str;
  }
  
  const typeStr = function(spaceCount, starNumber){
    console.log( starConcut(" ", spaceCount) + starConcut("*", starNumber));
    
  }
  
  const makeTriangle = function(height) {
    let starNumber = (2 * height - 1);
    let spaceCount = 0;
    
    while(0 < height) {
      typeStr(spaceCount, starNumber);
      height = height -1;
      starNumber = starNumber -2;
      spaceCount = spaceCount + 1;
    }
  }
  makeTriangle(5);

//2.FIND MAX MIN
  const findMinMax = function findMinMax(arr, bool) {
    let maxmin = arr[0];
    let inx = 1;
     if(bool){
       
       
       while(inx < arr.length){
         if(maxmin < arr[inx]){
           maxmin = arr[inx];
         }
          inx = inx + 1;
       }
      return maxmin;  
     }
     else{
       while(inx < arr.length){
         if(maxmin > arr[inx]){
           maxmin = arr[inx];
         }
         inx = inx + 1;
         
       }
       return maxmin;
     }
   }
   
   console.log(findMinMax([4, 2, 66, -44, 8], true));
   console.log(findMinMax([4, 2, 66, -44, 8], false));

// 3.MULTITOSINGLE ONE ARRAY
  const multiToSingle = function(arr) {
    let i = 0;
    let newarr = [];
    while(i < arr.length){
      let k = 0;
      while(k < arr[i].length) {
        newarr[newarr.length] = arr[i][k];
        k = k + 1;
      }
      i = i + 1;
      
    }
    return newarr;
  }
  console.log(multiToSingle([[1, 2, 3], [4, 5, 6]]));
  
//4.FOREACH RIGHT VERSION
const forEach = function (arr, func){
      let i = 0;
      
      while(i < arr.length ){
        func(arr[i]);
        i = i + 1;
      }
      
    }
    
     forEach([4, 3, 2], function(val) {
    
    console.log(val);
    
    });
   
//5.SUM OF THE ARRAY CHARS.
    const sum = function sum(arr){
        let getSum = 0;
        let inx = 0;
        while(inx < arr.length){
          getSum = getSum + arr[inx];
          inx = inx + 1;
        }
        return getSum
      }
      
      console.log( sum([4, 3, 2]));

 //6. REVERSE STRING
      const reverse = function reverse(str){
        let inx= str.length - 1;
       let newStr = "";
       console.log(inx);
       while(inx >= 0){
         newStr = newStr + str[inx];
         inx = inx - 1;
       }
       return newStr;
       
     }
     console.log(reverse('abcd'));

//7.CHECKERBOARD RIGHT VERSION 
const func = function(a, count){
    let str = "*";
    while(count > 0){
      str = str + a + "*";
      count = count - 1;
    }
    return str;
  }
  const func1 = function(a, count) {
    let str = " ";
    while(count >= 0){
      str = str + a + " ";
      count = count - 1;
    }
    return str;
  }
  const func2 = function(s){
    console.log(func1("*", s));
  }
  const func3 = function(s){
    console.log(func(" ", s));
  }
  const func4 = function(s) {
    let r = s;
    while(r >= 0){
    if( r % 2 === 1) {
      func3(s);
    }
    else{
      func2(s);
    }
    r--
    ;}}
    func4(4);
 

 