//----Radio Button Value----
let date;
let rEvent;
let sEvent;
let eWatched = false;
function buttonSeries() {
    let value = document.getElementsByName('new');
    for (let i = 0; i < value.length; i++) {
        if (value[i].checked) {
            //----Date Value-----
            let v = document.getElementById('date');
            let vArr = v.value.split('-')
            date = vArr[1] + ' ' + vArr[2]

            //----Event Value----
            let ev = document.getElementById('rEvent')
            rEvent = ev.value

            //----Session Value----
            let sv = document.getElementById('rSession');
            sEvent = sv.value

            raceEvent(value[i].id, date, rEvent, sEvent)

            //value of radio box
            let seriesNum = value[i].id;

            //change values to a string
            let serStr = seriesNum.toString()
            let datStr = date.toString()

            //combine data
            let strSav = serStr + '-' + datStr + '-' + rEvent + '-' + sEvent+ '-' +eWatched;

            //save data
            saveData.push(strSav)
            localStorage.setItem("Race Event", saveData)
        }
    }
    a.setAttribute('style', 'display:none')
    // console.log(saveData)
    // console.log(localStorage)
}