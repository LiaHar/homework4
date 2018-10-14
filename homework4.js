//1.STAR TRIANGLE REVERESED
const starConcut = function(starSpace, spaceStarCountNumber) {
    let str = "";
    while(spaceStarCountNumber > 0) {
      str = str + starSpace;
      spaceStarCountNumber = spaceStarCountNumber - 1;
    }
    return str;
  }
  
  const typeStr = function(spaceCount, starCount){
    console.log( starConcut(" ", spaceCount) + starConcut("*", starCount));
    
  }
  
  const makeTriangle = function(height) {
    let starNumber = (2 * height - 1);
    let spaceNumber = 0;
    
    while(0 < height) {
      typeStr(spaceNumber, starNumber);
      height = height - 1;
      starNumber = starNumber - 2;
      spaceNumber = spaceNumber + 1;
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
        let index= str.length - 1;
       let newStr = "";
       while(index >= 0){
         newStr = newStr + str[index];
         index = index - 1;
       }
       return newStr;
       
     }
     console.log(reverse('abcd'));

//7.CHECKERBOARD
const startingStar = function(symbol, count){
    let str = "*";
    while(count > 1){
      str = str + symbol + "*";
      count = count - 1;
    }
    return str;
  }
  const startingSpace = function(symbol, count) {
    let str = " ";
    while(count > 0){
      str = str + symbol + " ";
      count = count - 1;
    }
    return str;
  }
  const typeStartingSpace = function(height){
    console.log(startingSpace("*", height));
  }
  const typeStartingStar = function(height){
    console.log(startingStar(" ", height));
  }
  const starSpacetype= function(height) {
    let heightChange = height;
    while(heightChange >= 0){
     if( heightChange % 2 === 1) {
      typeStartingStar(height);
     }
     else{
      typeStartingSpace(height);
     }
    heightChange = heightChange - 1;
    
    }
  }
    starSpacetype(5);





 