function stringReverse() 
{
    let inputStr = document.getElementById("inputStr").value;
    let revStr = "";

    for (i=0; i<inputStr.length; i++) 
        {
            revStr = revStr + inputStr[inputStr.length-(i+1)]
        }

    document.getElementById("outputRevStr").innerText = "The reverse of " + inputStr + " is " + revStr;
}

function palindromeCheck()
{
    let inputNumber=document.getElementById("inputNumber").value;
    let palStatus="";
    for(i=0; i<inputNumber.length;i++)
    {
        if(inputNumber[i]===inputNumber[inputNumber.length-(i+1)])
            palStatus="Palindrome!";
        else 
            palStatus="Not a Palindrome";
    }
    document.getElementById("outputPalindrome").innerText="The number " + inputNumber + " is " + palStatus;
}

function tipCalc()
{
    let subtotalBill=parseFloat(document.getElementById("inputBill").value);
    let tipPerc=parseFloat(document.getElementById("inputTip").value);
    let totalAmt=subtotalBill+subtotalBill*(tipPerc/100);
    document.getElementById("totalBill").innerText="The total bill amount to pay is: " + totalAmt;
}
