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