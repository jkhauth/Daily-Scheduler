var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var hourBlock = document.getElementById("hour-block")
var dayBlock = document.getElementById("dayBlock")
var t = new Date();



let events = document.querySelectorAll(".date")
events.forEach( event =>{
    let date = dayjs(event.dataset.date).format("MMM ddd h:mA YY")
    event.innerHTML = date;
    console.log(date)
});

let dayBlockTime = document.querySelectorAll(".timeBlock")
    dayBlockTime.forEach( event =>{
    let date = dayjs(event.dataset.date).format("hA");
    event.innerHTML = date;
    console.log(date)
    if (time.includes(dayBlock.innerHTML) === true){
        dayBlock.classList.add("present")
    }
});

console.log(time.includes(dayBlock.innerHTML))

