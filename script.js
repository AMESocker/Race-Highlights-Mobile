let logo = [
    {
        series: 'Formula 1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/420px-F1.svg.png'
    }, {
        series: 'F2',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Formula_2_logo.svg/330px-Formula_2_logo.svg.png'
    }, {
        series: 'F3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/FIA_F3_Championship_logo.png/330px-FIA_F3_Championship_logo.png'
    }, {
        series: 'Formula-E',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Formula-e-logo-championship_2023.svg/390px-Formula-e-logo-championship_2023.svg.png'
    }, {
        series: 'IndyCar',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/IndyCar_Series_textlogo.svg/659px-IndyCar_Series_textlogo.svg.png?20210511055910'
    }, {
        series: 'WRC',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/WRC.svg/405px-WRC.svg.png'
    }, {
        series: 'IMSA',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/International_Motor_Sports_Association_logo_%282014-present%29.svg/300px-International_Motor_Sports_Association_logo_%282014-present%29.svg.png'
    }, {
        series: 'SuperCars',
        image: 'https://www.autoracing1.com/wp-content/uploads/logos/supercars2021.jpg'
    }, {
        series: 'W2RC',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d2/World_Rally-Raid_Championship_logo.png'
    }, {
        series: 'SuperMotoCross',
        image: 'https://www.supermotocross.com/wp-content/uploads/2023/01/SMX-League-Logo.png'
    }
]
//F1, F2, F3, Formula-E, Indycar, WRC, IMSA, Supercars, World Rally Raid Championship, SuperMotocross
//----Dark Mode----
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var a = document.getElementById('dark');
    // a.classList.toggle("dark-switch");
    if(a.innerHTML == 'Dark'){
        a.innerHTML = 'Light'
        a.setAttribute('style','color:white')
    }else{
        a.innerHTML = 'Dark'
        a.setAttribute('style','color:black;background-color: white');
        // a.setAttribute('style','background-color: white')
    }

  }
//--------ICS Import--------
/*
// import icsToJson from './icsToJson'
let icsRaceData = []
console.log(icsRaceData)
console.log(icsRaceData[0])

// Get ICS text however you like, example below
// Make sure you have the right CORS settings if needed

let cal = './MotorsportCalendar2023.0.ics'

const convert = async (fileLocation) => {
    const icsRes = await fetch(fileLocation)
    const icsData = await icsRes.text()
    // Convert
    const data = icsToJson(icsData);
    icsRaceData.push(...data)
    // console.log(data)

    return data
}
convert(cal)
console.log([...icsRaceData])
console.log(icsRaceData[0])
// console.log(convert(cal).Array)
*/
let saveData = []
console.log(saveData)
localStorage.getItem("Race Event",saveData)
console.log(localStorage)
// raceEvent(saveData.seriesNum, saveData.date )
//----Dynamic Add Row--------
function raceEvent(sx, ed) {
    let logoImage = logo[sx].image
    const a = document.getElementById('list');
    const b = document.createElement('tr');
    const c = document.createElement('td');
    const d = document.createElement('img')
    const e = document.createElement('td');
    const f = document.createElement('td');
    const g = document.createElement('td');
    const h = document.createElement('td');
    const i = document.createElement('input');
    a.appendChild(b);
    b.appendChild(c);
    c.appendChild(d);
    d.src = logoImage;
    b.appendChild(e);
    e.innerHTML = ed
    b.appendChild(f);
    f.innerHTML = "Event"
    b.appendChild(g);
    g.innerHTML = "Session"
    b.appendChild(h);
    h.appendChild(i);
    i.type = "checkbox"

};

//----Dynamic Add Series----

const a = document.getElementById('addEvent');
const d = document.createElement('br');
//----Series----
for (let i = 0; i < logo.length; i++) {
    const b = document.createElement('input');
    const c = document.createElement('label');
    const d = document.createElement('br');
    b.name = 'new'
    b.id = [i]
    b.type = 'radio'
    c.innerHTML = logo[i].series
    a.appendChild(b);
    a.appendChild(c);
    c.setAttribute('for', logo[i].series)
    a.appendChild(d);
}
a.appendChild(d);

//----add date----
const dateSelect = document.createElement('input');
a.appendChild(dateSelect);
dateSelect.setAttribute('type', 'date');
dateSelect.setAttribute('id', 'date');
dateSelect.setAttribute('min', '2023-01-01');
dateSelect.setAttribute('max', '2023-12-31');
a.appendChild(d);

//----add button----
const e = document.createElement('div');
a.appendChild(e)
e.setAttribute('class', 'btn')
e.setAttribute('id', 'new')
e.innerHTML = 'Add'

//----Date Value-----
let date;
function dateValue() {
    let v = document.getElementById('date');
    let vArr = v.value.split('-')
    date = vArr[1] + ' ' + vArr[2]
    console.log(date)
}

//----Radio Button Value----
function buttonSeries() {
    let value = document.getElementsByName('new');
    for (let i = 0; i < value.length; i++) {
        if (value[i].checked) {
            dateValue()
            let seriesNum = value[i].id;
            raceEvent(value[i].id, date)
            saveData.push({ seriesNum, date })
            console.log(saveData)
            localStorage.setItem("Race Event",saveData)
        }
    }
    a.setAttribute('style', 'display:none')
}

document.getElementById('new').addEventListener('click', () => { newRow() });

function newRow() {
    buttonSeries()

    console.log('click')

}
// }
// modalLabels()
function modalLabels() {
    a.setAttribute('style', 'display:contents')
    console.log('Test')
}

//----User Input Row----
document.getElementById('add').addEventListener('click', modalLabels);





