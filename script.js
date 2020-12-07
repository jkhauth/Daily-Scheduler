var time = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "GO TO TOP"]

var hourBlock = document.getElementById("hour-block")
var hourTime = hourBlock.innerHTML
var dayBlock = document.getElementById("dayBlock")
var container = document.getElementById("container")
var description = document.getElementById("description") //FORM
var taskForm = document.querySelector('form')
var taskInfo = document.querySelector('textarea')
var taskButton = document.querySelector('input') //INPUT BUTTON

var workHours = 8
var t = new Date();
var i = 0

//CLONING HOUR BLOCKS
for (let index = 0; index < time.length; index++) {
$(hourBlock).text(time[i++])
$(hourBlock).attr('id', 'text' + hourBlock.innerHTML)
$(dayBlock).attr('id', 'hour' + hourBlock.innerHTML);
$(taskInfo).attr('id', 'task' + hourBlock.innerHTML);
$(taskInfo).attr('form', hourBlock.innerHTML)
$(taskForm).attr('id', hourBlock.innerHTML);
$(taskInfo).attr('name', hourBlock.innerHTML);
$(taskButton).attr('id', 'button' + hourBlock.innerHTML);
$(dayBlock).clone(true, true).appendTo(container);
}

var lastBlock = document.getElementById("description")

$(dayBlock).attr('class', 'hide')
$(lastBlock).attr('class', 'hide')

//BUTTONS AND TASKS ARE ASSIGNED TO VARIABLES
var button9AM = document.getElementById("button9AM")
var task9AM = document.getElementById("task9AM")
var button10AM = document.getElementById("button10AM")
var task10AM = document.getElementById("task10AM")
var button11AM = document.getElementById("button11AM")
var task11AM = document.getElementById("task11AM")
var button12PM = document.getElementById("button12PM")
var task12PM = document.getElementById("task12PM")
var button1PM = document.getElementById("button1PM")
var task1PM = document.getElementById("task1PM")
var button2PM = document.getElementById("button2PM")
var task2PM = document.getElementById("task2PM")
var button3PM = document.getElementById("button3PM")
var task3PM = document.getElementById("task3PM")
var button4PM = document.getElementById("button4PM")
var task4PM = document.getElementById("task4PM")
var button5PM = document.getElementById("button5PM")
var task5PM = document.getElementById("task5PM")
var task6PM = document.getElementById("task6PM")


//SETTING ITEM WITH CORROSPONDING TEXT AREA
$(button9AM).click(function (e) { 
    e.preventDefault();
    localStorage.setItem($(this).attr('id'),task9AM.value.trim())
    console.log(task9AM.value.trim())
});
$(button10AM).click(function (e) { 
    e.preventDefault();
    localStorage.setItem($(this).attr('id'),task10AM.value.trim())
    console.log(task10AM.value.trim())
});
$(button11AM).click(function (e) { 
    e.preventDefault();
    localStorage.setItem($(this).attr('id'),task11AM.value.trim())
    console.log(task11AM.value.trim())
});
$(button12PM).click(function (e) { 
    e.preventDefault();
    localStorage.setItem($(this).attr('id'),task12PM.value.trim())
    console.log(task12PM.value.trim())
});
$(button1PM).click(function (e) { 
    e.preventDefault();
    localStorage.setItem($(this).attr('id'),task1PM.value.trim())
    console.log(task1PM.value.trim())
});
$(button2PM).click(function (e) { 
    e.preventDefault();
    localStorage.setItem($(this).attr('id'),task2PM.value.trim())
    console.log(task2PM.value.trim())
});
$(button3PM).click(function (e) { 
    e.preventDefault();
    localStorage.setItem($(this).attr('id'),task3PM.value.trim())
    console.log(task3PM.value.trim())
});

$(button4PM).click(function (e) { 
    e.preventDefault();
    localStorage.setItem($(this).attr('id'),task4PM.value.trim())
    console.log(task4PM.value.trim())
});

$(button5PM).click(function (e) { 
e.preventDefault();
localStorage.setItem($(this).attr('id'),task5PM.value.trim())
console.log(task5PM.value.trim())
});


//IF THERE IS AN OLD TASK, IT IS LOADED
var old9AMtask = localStorage.getItem("button9AM")
var old10AMtask = localStorage.getItem("button10AM")
var old11AMtask = localStorage.getItem("button11AM")
var old12PMtask = localStorage.getItem("button12PM")
var old1PMtask = localStorage.getItem("button1PM")
var old2PMtask = localStorage.getItem("button2PM")
var old3PMtask = localStorage.getItem("button3PM")
var old4PMtask = localStorage.getItem("button4PM")
var old5PMtask = localStorage.getItem("button5PM")

if (localStorage.getItem("button9AM")){
    task9AM.value = old9AMtask
}
if (localStorage.getItem("button10AM")){
    task10AM.value = old10AMtask
}
if (localStorage.getItem("button11AM")){
    task11AM.value = old11AMtask
}
if (localStorage.getItem("button12PM")){
    task12PM.value = old12PMtask
}
if (localStorage.getItem("button1PM")){
    task1PM.value = old1PMtask
}
if (localStorage.getItem("button2PM")){
    task2PM.value = old2PMtask
}
if (localStorage.getItem("button3PM")){
    task3PM.value = old3PMtask
}
if (localStorage.getItem("button4PM")){
    task4PM.value = old4PMtask
}
if (localStorage.getItem("button5PM")){
    task5PM.value = old5PMtask
}

//TOP PAGE DATE AND HOUR
let events = document.querySelectorAll(".date")
events.forEach( event =>{
    let date = dayjs(event.dataset.date).format("MMM ddd h:mA YY")
    event.innerHTML = date;
});

// HOURS INSIDE HOUR BLOCK
let date = dayjs().format("HHA");

var text9AM = document.getElementById("text9AM")
var text10AM = document.getElementById("text10AM")
var text11AM = document.getElementById("text11AM")
var text2PM = document.getElementById("text2PM")
var text4PM = document.getElementById("text4PM")

console.log(date)
console.log(date < '09AM')
if (date === '09AM'){
task9AM.classList.add("present")
} else if (date < '09AM'){
task9AM.classList.add('future')
} else if (date > '09AM'){
task9AM.classList.add('past')
}
    
if (date === '10AM'){
task10AM.classList.add("present")
} else if (date < '10AM'){
task10AM.classList.add('future')
} else if (date > '10AM'){
task10AM.classList.add('past')
}
            
if (date === '11AM'){
task11AM.classList.add("present")
} else if (date < '11AM'){
task11AM.classList.add('future')
} else if (date > '11AM'){
task11AM.classList.add('past')
}

if (date === '12PM'){
task12PM.classList.add("present")
} else if (date < '12PM'){
task12PM.classList.add('future')
} else if (date > '12PM'){
task12PM.classList.add('past')
}


if (date === '13PM'){
task1PM.classList.add("present")
} else if (date < '13PM'){
task1PM.classList.add('future')
} else if (date > '13PM'){
task1PM.classList.add('past')
}

if (date === '14PM'){
task2PM.classList.add("present")
} else if (date < '14PM'){
task2PM.classList.add('future')
} else if (date > '14PM'){
task2PM.classList.add('past')
}

if (date === '15PM'){
task3PM.classList.add("present")
} else if (date < '15PM'){
task3PM.classList.add('future')
} else if (date > '15PM'){
task3PM.classList.add('past')
}

if (date === '16PM'){
task4PM.classList.add("present")
} else if (date < '16PM'){
task4PM.classList.add('future')
} else if (date > '16PM'){
task4PM.classList.add('past')
}

if (date === '16PM'){
task5PM.classList.add("present")
} else if (date < '16PM'){
task5PM.classList.add('future')
} else if (date > '16PM'){
task5PM.classList.add('past')
}
