//----Radio Button Value----
let date;
let rEvent;
let sEvent;
let eWatched = false;
let jsonData;
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
            let strSav = serStr + '-' + datStr + '-' + rEvent + '-' + sEvent + '-' + eWatched;

            //save data
            saveData.push(strSav)
            localStorage.setItem("Race Event", saveData)
        }
    }
    a.setAttribute('style', 'display:none')
    // console.log(saveData)
    // console.log(localStorage)
}

function buttonJsonSeries() {
    let value = document.getElementsByName('new');
    console.log(value)
    for (let i = 0; i < value.length; i++) {
        if (value[i].checked) {
            //----Date Value-----
            let v = document.getElementById('date').value;
            let vArr = v.split('-');
            let monthWord = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let m = vArr[1] - 1;
            date = monthWord[m] + ' ' + vArr[2]

            //----Event Value----
            let ev = document.getElementById('rEvent')
            rEvent = ev.value

            //----Session Value----
            let sv = document.getElementById('rSession');
            sEvent = sv.value
            raceEvent(value[i].id, date, rEvent, sEvent)
            console.log(jsonDataG.length)
            if (jsonDataG.length != 0) {

                for (let j = 0; j < jsonDataG.length; j++) {
                    console.log(jsonDataG[j])

                    jsonData = {
                        series: value[i].id,
                        date: date,
                        location: rEvent,
                        session: sEvent,
                        id: j + 1,
                        watched: false
                    }
                    // console.log(jsonData)
                }
            } else {
                jsonData = {
                    series: value[i].id,
                    date: date,
                    location: rEvent,
                    session: sEvent,
                    id: 0,
                    watched: false
                }
                console.log(jsonData)
            }
        }
    }
    jsonDataG.push(jsonData)

    console.log(jsonDataG)
    saveData = JSON.stringify(jsonDataG)
    localStorage.setItem("JSON Race Event", saveData)
    a.setAttribute('style', 'display:none')
}