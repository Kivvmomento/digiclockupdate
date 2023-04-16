function updateTime() {
    const now = new Date();
  
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
  
    const clock = document.getElementById('clock');
    clock.innerText = `${hours % 12 || 12}:${padNumber(minutes)}:${padNumber(seconds)} ${amPm}`;
  
    const dayNightIndicator = document.getElementById('day-night-indicator');
    const isDayTime = hours >= 6 && hours < 18;
    dayNightIndicator.innerText = isDayTime ? 'Daytime' : 'Nighttime';
    dayNightIndicator.style.color = isDayTime ? '#fff' : '#ffd700';
  
    const dateElement = document.getElementById('date');
    const dateString = `${getDayOfWeekString(now.getDay())}, ${getMonthString(now.getMonth())} ${now.getDate()}, ${now.getFullYear()}`;
    dateElement.innerText = dateString;
  }
  
  function padNumber(number) {
    return number.toString().padStart(2, '0');
  }
  
  function getDayOfWeekString(dayOfWeek) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayOfWeek];
  }
  
  function getMonthString(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
  }
  
  setInterval(updateTime, 1000);
  