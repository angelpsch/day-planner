//Get Date
var currentDate = new Date(); 
var today = currentDate.getDate();
var day = currentDate.getDay(); 
var month = currentDate.getMonth(); 
var year = currentDate.getFullYear(); 

//Change months from number to string
switch(month){
    case 0: 
        month = 'January';
        break;
    case 1: 
        month = 'February';
        break; 
    case 2: 
        month = 'March';
        break;
    case 3: 
        month = 'April';
        break; 
    case 4: 
        month = 'May';
        break;
    case 5: 
        month = 'June';
        break;
    case 6: 
        month = 'July';
        break; 
    case 7: 
        month = 'August';
        break; 
    case 8: 
        month = 'September';
        break;
    case 9:
        month = 'October';
        break;
    case 10: 
         month = 'November';
        break;
    case 11: 
        month = 'December';
        break;
}
// Change day from number to string
switch(day){
    case 1:
        day = 'Monday';
        break;
    case 2: 
        day = 'Tuesday';
        break;
    case 3: 
        day = 'Wednesday';
        break;
    case 4:
         day = 'Thursday';
        break; 
    case 5: 
        day = 'Friday'; 
        break; 
    case 6: 
        day = 'Saturday';
        break;
    case 7 || 0: 
        day = 'Sunday';
        break; 
}




$('#currentDay').text(day + ', ' + month + ' ' + today + ', ' + year);

// Get all of the fields for times


function createTask(){

}