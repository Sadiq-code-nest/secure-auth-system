//using do-while loop print the number from 1 to 5 who are divisable by 3,5

var i=1;
var sum=0;
do
{
if (i%3==0 && i%5==0) 
    {
        console.log(i);
        sum=sum+i;
    }   
i++;
} while(i<=50)
console.log(`sum is ${sum}`);