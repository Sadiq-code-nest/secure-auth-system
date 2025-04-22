//using while loop print the number from 1 to 5 who are divisable by 3,5

var i=1;
var sum=0;
while(i<=50)
{
if (i%3==0 && i%5==0) 
    {
        console.log(i);
        sum=sum+i;
    }   
i++;
}
console.log(`sum is ${sum}`);