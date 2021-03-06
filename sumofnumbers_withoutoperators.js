/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.
*/

var getSum = function(a, b) {
    while(true) {
      var sum = (a^b);
      var carry = (a&b)<<1; 
      if(b==0){
          return a;
      }
        a = sum;
        b = carry;
    }
};
