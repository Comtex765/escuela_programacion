<<<<<<< HEAD
var numeros = 100;

for(var i = 1; i <= numeros; i++)
{
    if(esDivisible(i, 3))
    {
        document.write("Fizz ");
    }

    if(esDivisible(i, 5))
    {
        document.write("Buzz");
    }

    if(!esDivisible(i, 3) && !esDivisible(i, 5))
    {
        document.write(i);
    }
    
    document.write("<br />");
}

function esDivisible(num, divisor)
{
    if (num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
=======
var numeros = 100;

for(var i = 1; i <= numeros; i++)
{
    if(esDivisible(i, 3))
    {
        document.write("Fizz ");
    }

    if(esDivisible(i, 5))
    {
        document.write("Buzz");
    }

    if(!esDivisible(i, 3) && !esDivisible(i, 5))
    {
        document.write(i);
    }
    
    document.write("<br />");
}

function esDivisible(num, divisor)
{
    if (num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
}