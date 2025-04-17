var today = new Date()
var month = today.getMonth()


switch(month)
{
    case 1: 
        month = (" january 31 days");
        break;
    case 2: 
        month = (" February 28/29 days");
        break;
    case 3: 
        month = (" march 31 days");
        break;
    case 4: 
        month = ("April 30 days");
        break;
    case 5: 
        month = ("May 31 days");
        break;
    case 6: 
        month = ("Jun 30 days");
        break;
    case 7: 
        month = ("Julay 31 days");
        break;
    case 8: 
        month = ("Agusht 31 days");
        break;
    case 9: 
        month = ("Septembor 30 days");
        break;
    case 10: 
        month = ("Actobor 31 days");
        break;
    case 11: 
        month = ("Novembor 30 days");
        break;
    case 12: 
        month = ("Desembor 31 days");
        break;
    default: 
        month = ("Invalid input! Please enter month number between 1-12");

}
document.getElementById("month").innerHTML = month