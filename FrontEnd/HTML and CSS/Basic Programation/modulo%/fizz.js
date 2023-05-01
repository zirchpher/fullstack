var numbers = 100;
for (var num = 1; num <= numbers; num++)
{
    if (esDivisible(num,3))
    {
        document.write("Fizz");
    }

    if (esDivisible(num, 5))
    {
        document.write("Buzz");
    }

    if (!esDivisible(num, 3) && !esDivisible(num, 5))
    {
        document.write(num);
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
}