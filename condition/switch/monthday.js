var today = new Date()
var month = today.getMonth()


switch(month)
{
    case 1: 
    case 2: 
    case 3: 
        month = ("this month is 1st  quater");
        break;
    case 4: 
    case 5:
    case 6: 
        month = ("this month is 2nd quater");
        break;
    default: 
        month = ("Invalid input! Please enter month number between 1-12");

}
document.getElementById("month").innerHTML = month