//using while loop print the number from 1 to 5 who are divisable by 3,5

var i=1;
while(i<=100)
{
if (i%3==0 && i%5==0) 
    {
        console.log(`${i} FizzBuzz`);
    }   

else if (i%3==0) 
        {
            console.log(`${i} Fizz`);
        }  
else if (i%5==0) 
            {
                console.log(`${i} Buzz`);
            }
else  {console.log(`${i}\n`)};
i++;
}