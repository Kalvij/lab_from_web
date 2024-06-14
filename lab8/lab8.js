function showDate(){
    let out1 = document.getElementById('current-date1');
    let out2 = document.getElementById('current-date2');
    let out3 = document.getElementById('current-date3');
    let out4 = document.getElementById('current-date4');
    let out5 = document.getElementById('current-date5');
    let out6 = document.getElementById('current-date6');
    
    let today = new Date();
    out1.innerHTML = 'Дата и время для локали России: ' + today.toLocaleString('ru-RU');
    out2.innerHTML = 'Дата и время для локали Японии: ' + today.toLocaleString('ja-JP');
    out3.innerHTML = 'Дата и время для локали Индии: ' + today.toLocaleString('hi-IN');
    out4.innerHTML = 'Дата и время для локали Канады: ' + today.toLocaleString('en-CA');
    out5.innerHTML = 'Дата и время для локали Италии: ' + today.toLocaleString('it-IT');
    out6.innerHTML = 'Дата и время для локали Автралии: ' + today.toLocaleString('en-AU');
}
function showDateTime() {
    let currentDate = new Date();
    let dateTime = document.getElementById('date-time');
    let year = document.getElementById('year');
    let month = document.getElementById('month');
    let date = document.getElementById('date');
    let dayOfWeek = document.getElementById('day-of-week');

    dateTime.textContent = currentDate.toLocaleString();
    year.textContent = currentDate.getFullYear();
    month.textContent = currentDate.getMonth() + 1; 
    date.textContent = currentDate.getDate();
    dayOfWeek.textContent = DayOfWeekName(currentDate.getDay());
}
function DayOfWeekName(dayIndex) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return daysOfWeek[dayIndex];
}