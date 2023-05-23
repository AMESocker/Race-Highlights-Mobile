document.getElementById('add').addEventListener('click', modalLabels);

//----Values----

let watchedValue;



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

document.getElementById('new').addEventListener('click', () => { newRow() });

function newRow() {
    buttonJsonSeries()
}

let show = 0
function modalLabels() {
    let x = document.getElementById('add')
    // console.log(x.style.display == 'contents')
//const a = document.getElementById('addEvent');
if(show == 0){
    a.setAttribute('style', 'display:contents')
    show = 1
    x.innerHTML = '&ndash;'
    console.log(show)
}else if (show == 1) {
    a.setAttribute('style', 'display:none')
    show = 0
    x.innerHTML = '+'
    console.log(show) 
}

}

//----Delete Event----
function deleteEvent(){
    console.log('Delete')
    console.log(this.dataset)
}
//----User Input Row----