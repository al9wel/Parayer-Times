let date = document.getElementById("date");
let city = document.getElementById("city");
let fajar = document.querySelector(".fajar span");
let thahar = document.querySelector(".thahar span");
let asar = document.querySelector(".asar span");
let magrab = document.querySelector(".magrab span");
let esha = document.querySelector(".esha span");
let govButtons = [...document.getElementById("btns").children];
govButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        city.innerHTML = btn.innerHTML;
        getTimes(btn.getAttribute("ISO"));
    })
})
async function getTimes(c) {
    try {
        let response = await fetch(`https://api.aladhan.com/v1/calendarByCity?country=YE&city=${c}`);
        if (!response.ok) {
            console.log("Error");
            return;
        }
        let jsonData = await response.json();
        let today = new Date();
        let dayOfMonth = today.getDate();
        let todayDate = jsonData.data[dayOfMonth - 1].date.gregorian.date;
        date.innerHTML = todayDate;
        let f = jsonData.data[dayOfMonth - 1].timings["Fajr"];
        let t = jsonData.data[dayOfMonth - 1].timings["Dhuhr"];
        let a = jsonData.data[dayOfMonth - 1].timings["Asr"];
        let m = jsonData.data[dayOfMonth - 1].timings["Maghrib"];
        let e = jsonData.data[dayOfMonth - 1].timings["Isha"];
        fajar.innerHTML = convert24To12(f.slice(0, 5));
        thahar.innerHTML = convert24To12(t.slice(0, 5));
        asar.innerHTML = convert24To12(a.slice(0, 5));
        magrab.innerHTML = convert24To12(m.slice(0, 5));
        esha.innerHTML = convert24To12(e.slice(0, 5));
    }
    catch (error) {
        console.log(error);
    }
}
function convert24To12(time24) {
    let hours = time24.slice(0, 2);
    let hoursInt = parseInt(hours);
    let time12 = hoursInt % 12 === 0 ? 12 : hoursInt % 12;
    return time12 + time24.slice(2, 5);
}
getTimes(`Hadhramaut`)


