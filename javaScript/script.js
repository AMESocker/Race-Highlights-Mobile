document.getElementById('add').addEventListener('click', modalLabels);

//----Values----

let watchedValue;

function watched(){
    let wv = document.querySelector(this.dataset)
    console.log(raceEvent(this))
    for (let i = 0; i < saveData.length; i++) {
    // watchedValue = wv
        // console.log(watchedValue)
        console.log(saveData[this])
    }
}

document.getElementById('new').addEventListener('click', () => { newRow() });

function newRow() {
    buttonSeries()
}

function modalLabels() {
    let x = document.getElementById('addEvent')
    console.log(!x)
    a.setAttribute('style', 'display:contents')
}

//----Delete Event----
function deleteEvent(){
    console.log('Delete')
    console.log(this.id)
}
//----User Input Row----