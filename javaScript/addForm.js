//----Dynamic Add Series----

const a = document.getElementById('addEvent');
const d = document.createElement('br');

//----Series Selection----
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
a.appendChild(document.createElement('br'));

//----add Event----
const eventForm = document.createElement('input');
a.appendChild(eventForm);
eventForm.setAttribute('type','text')
eventForm.setAttribute('id','rEvent')
eventForm.setAttribute('placeholder','Event')
a.appendChild(d)

//----add Session----
const sessionForm = document.createElement('input');
a.appendChild(sessionForm);
sessionForm.setAttribute('type','text')
sessionForm.setAttribute('id','rSession')
sessionForm.setAttribute('placeholder','Session')
a.appendChild(d)

//----add button----
const e = document.createElement('div');
a.appendChild(e)
e.setAttribute('class', 'btn')
e.setAttribute('id', 'new')
e.innerHTML = 'Add'