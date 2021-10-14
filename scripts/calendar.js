let nowDate = new Date(),
  nowDateNumber = nowDate.getDate(),
  nowMonth = nowDate.getMonth(),
  nowYear = nowDate.getFullYear(),
  container = document.getElementById('month-calendar'),
  monthContainer = container.getElementsByClassName('month-name')[0],
  yearContainer = container.getElementsByClassName('year-name')[0],
  daysContainer = container.getElementsByClassName('days')[0],
  prev = container.getElementsByClassName('prev')[0],
  next = container.getElementsByClassName('next')[0],
  monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/* current day */
let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
console.log(nowDate.getFullYear());
/* create calendar and today date */
function setMonthCalendar(year, month) {
  let monthDays = new Date(year, month + 1, 0).getDate(),
    monthPrefix = new Date(year, month, 0).getDay(),
    monthDaysText = '';

  monthContainer.textContent = monthName[month];
  yearContainer.textContent = year;
  daysContainer.innerHTML = '';

  if (monthPrefix > 0) {
    for (let i = 1; i <= monthPrefix; i++) {
      monthDaysText += '<li></li>';
    }
  }

  for (let i = 1; i <= monthDays; i++) {
    monthDaysText += '<li>' + i + '</li>';
  }

  daysContainer.innerHTML = monthDaysText;

  if (month == nowMonth && year == nowYear) {
    days = daysContainer.getElementsByTagName('li');
    days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
  }
}

setMonthCalendar(nowYear, nowMonth);
/* button click */
prev.onclick = function () {
  let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));

  curDate.setMonth(curDate.getMonth() - 1);

  let curYear = curDate.getFullYear(),
    curMonth = curDate.getMonth();

  setMonthCalendar(curYear, curMonth);
};

next.onclick = function () {
  let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));

  curDate.setMonth(curDate.getMonth() + 1);

  let curYear = curDate.getFullYear(),
    curMonth = curDate.getMonth();

  setMonthCalendar(curYear, curMonth);
};
/* trying to enter chosen date but not suceed in this */
const calend = document.getElementById('date');
// let dateChosen = calend.value;
// let dArr = dateChosen.split('-');
// const [chYear, chMon, chDat] = dArr;
// let chosenDate = new Date(chYear, chMon, chDat).getDate();
// let chosenMon = new Date(chYear, chMon, chDat).getMonth();
/*
let click = calend.addEventListener('change', () => {
    let dateChosen = calend.value;
    let dArr = dateChosen.split('-');
    const [chYear, chMon, chDat] = dArr;
    let chosenDate = new Date(chYear, chMon, chDat).getDate();
    let chosenMon = new Date(chYear, chMon, chDat).getMonth();
    let chosenY = new Date(chYear, chMon, chDat).getFullYear();

    days = daysContainer.getElementsByTagName('li');
    days[chosenDate + 3].classList.add('date-now');
  });
 */
