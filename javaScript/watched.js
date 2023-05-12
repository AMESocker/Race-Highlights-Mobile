// function watched(){
//     for (let i = 0; i < jsonDataG.length; i++) {
//        console.log('info')
//         console.log(jsonDataG[i])
//     }

//     // console.log(jsonDataG)
// }
function watched(){
    const l = document.getElementsByClassName('checkbox');
    //     let thisRow = saveData.splice(this.id, 1);
    //     // console.log(saveData.split('-'))
    for (let i = 0; i < jsonDataG.length; i++) {
        jsonDataG[i].watched = l[i].checked
        eWatched[i] = l[i].checked
        // console.log(eWatched)
        // console.log(jsonDataG[i].watched)
        // console.log(l[i].checked)
        
        // saveData = saveData[i]+ '-' +eWatched[i];
    }    
    console.table(JSON.stringify(jsonDataG))
    saveData = JSON.stringify(jsonDataG)
    console.log(saveData)
    localStorage.setItem("JSON Race Event", saveData)
}
