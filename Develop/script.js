
let events = document.querySelectorAll(".date")
events.forEach( event =>{
    let date = dayjs(event.dataset.date).format("MMM ddd h:mA YY")
    event.innerHTML = date;
    console.log(date)
});

let dayBlockTime = document.querySelectorAll(".dayBlock")
dayBlockTime.forEach( event =>{
    let date = dayjs(event.dataset.date).format("MMMM dddd DD")
    event.innerHTML = date;
    console.log(date)
});

console.log(dayjs());
console.log(events);

