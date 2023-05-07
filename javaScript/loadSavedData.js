//----Load Saved Data----
let saveData = []
let savedData = localStorage.getItem("Race Event",saveData)
if(savedData){
    console.log('Data')
    saveData = savedData
}else{
    console.log('no data')
}
console.log(saveData)
console.log(savedData)

if (savedData) {
    let splitSavedData = savedData.split(',');
    saveData = splitSavedData
    console.log(splitSavedData)
    for (let i = 0; i < splitSavedData.length; i++) {
        let f = splitSavedData[i].split('-');
        console.log(f)
        raceEvent(f[0], f[1],f[2],f[3])
    }
}