//DATE & TIME
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
    case 0: 
        day = 'Sunday';
        break; 
}


//CLOCK FUNCTION
clockUpdate();
setInterval(clockUpdate, 1000);

  
  function clockUpdate() {
    var date = new Date(); 
    var hour = addZero(twelveHour(date.getHours()));
    var min = addZero(date.getMinutes());
    var secs = addZero(date.getSeconds());
    function addZero(x) {
      if (x < 10) {
        return x = '0' + x;
      } else {
        return x;
      }
    }
  
    function twelveHour(x) {
      if (x > 12) {
        return x = x - 12;
      } else if (x == 0) {
        return x = 12;
      } else {
        return x;
      }
    }





//Display date and time
return $('#currentTime').text(hour + ':' + min + ':' + secs);
  }

$('#currentDay').text(day + ', ' + month + ' ' + today + ', ' + year);
var currentTime = clockUpdate(); 
console.log(currentTime); 


//GET USER HOURS
var schedule = [];
var times = ["12 AM", "1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM",
    "12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM"]; 
var timeDropdown = $('#start-time'); 

    //Create dropdown
    $(times).each(function(index){
        var option = $('<option>');     
        option.val(index);
        option.text(times[index]); 
        timeDropdown.append(option);

    })





 console.log(times); 
$('#update-schedule').click(function(event){
    // event.preventDefault();
   
    var selectedTime = timeDropdown.val(); 
    console.log(selectedTime);  
    var hoursToWork = $('#hours-to-work').val(); 
    var temp = parseInt(hoursToWork); 
    console.log(temp); 
    if (temp == 'undefined' || isNaN(temp) == true){
        alert('You must enter a number in hours to work. '); 
        hoursToWork.val('');
     } else if (selectedTime == 'Start Time') {
         alert('You must pick a start time');
     } else {   
       $('.container').empty();
        function createObject(obj){
             schedule = []; 
            for(var i = 0; i < temp; i++){ 
                var obj = {}; 
                obj['time'] = times[selectedTime]; 
                obj['task'] = [];
                
                 if (schedule.includes(times[selectedTime]) === false){ 
                    schedule.push(obj); 
                    console.log(schedule); 
                } else {
                    continue; 
                }
          
                if (selectedTime >= 23){
                    selectedTime = 0;
                    continue; 
                }
                selectedTime++; 
        }
    }
        createObject(); 
        console.log(schedule); 
       
        
    }
    
    createSchedule(); 

}); 



var taskHolder = ''; 
//RENDER DISPLAY
function createSchedule(){
    
    $(schedule).each(function(index){
        var temp = schedule[index]; 
        var times = temp.time; 
        var tasks = temp.task;
        console.log(tasks);
        console.log(taskHolder); 
        var row = $('<div class="row mx-auto" style="position:relative; height: auto;" id="task-rows">');
        row.attr('value', schedule[index]); 
        $('#schedule-container').append(row); 
        


       
        var timeCol = $('<div class="col-1  border-left-0 border-secondary rounded-left p-2 shadow">');
        var taskField = $('<input type="text" class="col-10 badge-secondary p-0 pl-2 mx-auto border-0 task-field">'); 
        var taskCol = $('<div class="col-10 badge-secondary  pl-2 pb-4 mx-auto border " id="task-col">');
        taskCol.append(taskField);
        var btnCol = $('<div class="col-1 border-right-0 border-secondary badge-info rounded-right p-2 shadow">'); 
        var saveBtn = $('<button class="border-0 p-0 m-0 badge-secondary">');
        var svg = $('<svg class="bi bi-plus-square-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
        svg.html('<path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z" clip-rule="evenodd"/>')
        saveBtn.append(svg); 
        btnCol.append(saveBtn); 
        timeCol.text(times); 
        taskField.text(tasks); 
      


        var d = new Date();
        var hour = d.getHours(); 
        console.log(hour); 
        console.log(row.val());
        

        row.append(timeCol)
        row.append(taskCol); 
        row.append(btnCol);
            $(saveBtn).click(function(event){
                event.preventDefault(); 
                tasks.push(taskField.val());
                localStorage.setItem('savedTask', JSON.stringify(schedule[index]));
                renderTasks(tasks); 
                taskField.val(''); 
                })
        
        renderTasks(tasks); 
});

    
    console.log(taskHolder);
}

function renderTasks(task){
    
   var li = $('<li class="text-white badge-secondary p-0 pt-1 pl-2 border-0" style:"position:relative;">');
    console.log(task);
    $(task).each(function(index){ 
        
        var eachTask = task[index];    
        var deleteBtn = $('<button class="border-0 p-3 m-3 d-inline badge-danger del-btn">');
        
        deleteBtn.text('Delete Task')
        console.log(eachTask); 
        li.text(eachTask);
        li.append(deleteBtn); 
        $('#task-col').append(li);  
        
    });
     $('.del-btn').click(function(){
                li.remove(); 
                localStorage.removeItem('savedTask', JSON.stringify(schedule.task.indexOf(this)));  
               
        })
        if (schedule == null){
            displaySchedule = false;
        }
       
    }

function renderSavedTasks(){
   var savedTasks =[]; 
   savedTasks.push(JSON.parse(localStorage.getItem('savedTask')));
    if(savedTasks !== 'undefined'){ 
        schedule = savedTasks; 
        console.log(schedule); 
        createSchedule(schedule); 
        displaySchedule = true;
        
    } else {
        createSchedule(schedule); 
        displaySchedule = true;
        
}   
if (schedule.length == 1 || schedule.length == null){
    $('#schedule-container').empty(); 
    $('#schedule-container').html('<h1 class="mx-auto text-center">Hello! Please select the hours you will be working above.</h1>')
} 
}

renderSavedTasks(); 
