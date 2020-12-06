var time = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var hourBlock = document.getElementById("hour-block")
var hourTime = hourBlock.innerHTML
var dayBlock = document.getElementById("dayBlock")
var container = document.getElementById("container")
var description = document.getElementById("description") //FORM
var taskInfo = document.querySelectorAll('textarea')
var taskButton = document.getElementById("saveBtn") //INPUT BUTTON

var workHours = 8
var t = new Date();
var i = 0

const form = document.querySelector('form');
const textarea = document.querySelector('textarea')
const button = document.querySelector('button')
const input = document.getElementById('')

// localStorage.clear()
console.log(localStorage)

//CLONING HOUR BLOCKS
for (let index = 0; index < time.length; index++) {

$(hourBlock).text(time[i++])
$(dayBlock).attr('id', hourBlock.innerHTML);
$(taskInfo).attr('id', hourBlock.innerHTML);
$(dayBlock).clone().appendTo(container);


}





//TOP PAGE DATE AND HOUR
let events = document.querySelectorAll(".date")
events.forEach( event =>{
    let date = dayjs(event.dataset.date).format("MMM ddd h:mA YY")
    event.innerHTML = date;
});

//HOURS INSIDE HOUR BLOCK
// let dayBlockTime = document.querySelectorAll(".timeBlock")
//     dayBlockTime.forEach( event =>{
//     let date = dayjs(event.dataset.date).format("hA");
//     event.innerHTML = date;
//     console.log(date)
//     if (time.includes(dayBlock.innerHTML) === true){
//         dayBlock.classList.add("present")
//     }
// });








