//----Dynamic Add Row--------
function raceEvent(sx, ed, rv, rs) {
    let logoImage = logo[sx].image
    const edNs = ed.replace(' ','')
    // console.log(edNs)
    const j = sx+edNs+rv+rs;
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
    d.dataset = j
    d.addEventListener("click",deleteEvent)
    b.appendChild(e);
    e.innerHTML = ed
    b.appendChild(f);
    f.innerHTML = rv
    b.appendChild(g);
    g.innerHTML = rs
    b.appendChild(h);
    h.appendChild(i);
    i.type = "checkbox"
    i.setAttribute('id',j)
    i.setAttribute('onclick','watched()')

};