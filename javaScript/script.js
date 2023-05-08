document.getElementById('add').addEventListener('click', modalLabels);

//----Values----

let watchedValue;

function watched(){
    // let thisRow = saveData.splice(this.id, 1);
    // console.log(saveData.split('-'))
    console.log(saveData)

    // let tabVal = document.querySelector('table');
    // let cv = tabVal.getElementsByTagName('input')
    // for (var i = 0; i < cv.length; i++) {
    //     cv[i].onclick = function () {
    //         for (var i = 0; i < cv.length; i++) {
    //             console.log(this)
    //             // if (cv[i] != this && this.checked) {
    //             //     cv[i].checked = false;
    //             // }
    //         }
    //     };
    // }
    // for (let i = 0; i < tabVal.length; i++) {
    // // watchedValue = tabVal
    //     console.log(tabVal)
    //     console.log(tabVal[i])
    // }
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
    console.log(this.dataset)
}
//----User Input Row----