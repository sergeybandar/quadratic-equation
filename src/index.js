module.exports = function solveEquation(equation) {
  // your implementation
  var mas=[];
  var d, x1, x2;
  mas=equation.split(' ');
  if(mas[3]=='-')
  mas[4]=-mas[4];
  if(mas[7]=='-')
  mas[8]=-mas[8];
  d=mas[4]*mas[4]-4*mas[0]*mas[8];
  x1=Math.round(-mas[4]-Math.sqrt(d))/(2*mas[0]);
  x2=Math.round(-mas[4]+Math.sqrt(d))/(2*mas[0]);
  var x=[];
  if(x1<x2){
  	  x[0]=x1;
	  x[1]=x2;
  }
  else{
  x[0]=x2;
  x[1]=x1;
  }
  
  return x;

}
