//----Load Saved Data----
let saveData = []
let jsonDataG = [];
// /*
let savedData = localStorage.getItem("Race Event",saveData)
if(savedData){
    console.log('Data')
    saveData = savedData
}else{
    console.log('no data')
}
// console.log(saveData)
// console.log(savedData)
let jDGS = [...jsonDataG]
console.log(jsonDataG);
if (savedData) {
    let splitSavedData = savedData.split(',');
    saveData = splitSavedData
    // console.log(splitSavedData)
    for (let i = 0; i < splitSavedData.length; i++) {
        let f = splitSavedData[i].split('-');
        // console.log(f)
        // console.log(splitSavedData[i])
        let jsonData =
        {
            series:f[0],
            date:f[1],
            location:f[2],
            session:f[3],
            id:i,
            watched:false
        }
        jsonDataG.push( jsonData)
        // console.log(jsonData)
        // raceEvent(f[0], f[1],f[2],f[3])
    }
console.log(jDGS);

}
// */
//----Load JSON Saved Data----
let savedJSONData = localStorage.getItem("JSON Race Event",saveData);
if (savedJSONData){
    let pSJData = JSON.parse(savedJSONData)
    for (let i = 0; i < pSJData.length; i++) {
        console.log(pSJData[i].series)
        
        raceEvent(pSJData[i].series,pSJData[i].date,pSJData[i].location,pSJData[i].session,pSJData[i].watched)
    }
}