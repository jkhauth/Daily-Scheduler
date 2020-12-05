var time = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var hourBlock = document.getElementById("hour-block")
var hourTime = hourBlock.innerHTML
var dayBlock = document.getElementById("dayBlock")
var container = document.getElementById("container")
var description = document.getElementById("description")
var workHours = 2
var t = new Date();
var i = 0
console.log(time[i])

for (let index = 0; index < time.length; index++) {
$(hourBlock).text(time[i++])
$(dayBlock).attr('id', hourBlock.innerHTML);
$(dayBlock).clone(true).appendTo(container);
$(dayBlock).clone().attr('class', 'hide')

}





let events = document.querySelectorAll(".date")
events.forEach( event =>{
    let date = dayjs(event.dataset.date).format("MMM ddd h:mA YY")
    event.innerHTML = date;
});

// let dayBlockTime = document.querySelectorAll(".timeBlock")
//     dayBlockTime.forEach( event =>{
//     let date = dayjs(event.dataset.date).format("hA");
//     event.innerHTML = date;
//     console.log(date)
//     if (time.includes(dayBlock.innerHTML) === true){
//         dayBlock.classList.add("present")
//     }
// });


