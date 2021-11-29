function natsum()
{
var a = document.form.N.value;
var i;
var sum = 0;

var N= new Number(a);
for(i=1;i<=N;i++)
sum=sum+i;

alert("Sum of 1 to "+a+" natural numbers is "+sum+"");
}
