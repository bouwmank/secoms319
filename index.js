fetch("./data.json")
.then(response => response.json())
.then(myBody => fillBody(myBody));
function fillBody(body){
    console.log(body.info.length)
    for (var i = 0; i < body.info.length; i++) {
        let mainContainer = document.getElementById(body.info[i].id);
        console.log(body.info[i].text.length)
        for (var j = 0; j < body.info[i].text.length; j++) {
            let tmp = document.createElement("p");
            tmp.innerHTML = `${body.info[i].text[j]}<br>`;
            mainContainer.appendChild(tmp);
        }
    }
}

function onLoad(){
    id = 0
    fetch("./data.json")
    .then(response => response.json())
    .then(myData => loadLands(myData, id));

    fetch("./data.json")
    .then(response => response.json())
    .then(myData => loadSpells(myData, id));
    function loadLands(myLands, idx) {
        var landimg = document.getElementById("lands"); 
        var landtxt = document.getElementById("txtland");
    
        idx = myLands.lands[idx].id;
        Thename =  myLands.lands[idx].name;
        url =  myLands.lands[idx].url;
        body =  myLands.lands[idx].body;
        lower =  myLands.lands[idx].lower;
    
        let imgL = document.createElement("div");
        imgL.innerHTML = `<img id="landcard" alt=${idx} src=${url} width="35%" height="35%"></img>`;
    
        let txtL = document.createElement("p");
        txtL.innerHTML = `<p class="card-txt"><strong>${Thename}</strong><br>${body}<br><i>${lower}</i></p>`
    
        landimg.appendChild(imgL);
        landtxt.appendChild(txtL);
    
    }
    function loadSpells(mySpells, idx) {
        var img = document.getElementById("spells"); 
        var txt = document.getElementById("txtspell");
    
        idx = mySpells.spell[idx].id;
        curName =  mySpells.spell[idx].name;
        url =  mySpells.spell[idx].url;
        curType =  mySpells.spell[idx].type;
        curColor =  mySpells.spell[idx].color;
        curBody = mySpells.spell[idx].body;
        curNote = mySpells.spell[idx].note;
    
        let imgL = document.createElement("div");
        imgL.innerHTML = `<img id="spellcard" alt=${idx} src=${url} width="35%" height="35%"></img>`;
    
        let txtL = document.createElement("p");
        txtL.innerHTML = `<p> <br>Card Name: <strong>${curName}</strong>
        <br>Card Type: ${curType}
        <br>Card's Color: ${curColor}
        <br>${curBody}
        <br><i>${curNote}</i></p>`
    
        img.appendChild(imgL);
        txt.appendChild(txtL);
    
    }

}

function getUpdatetValue(clickedid){
    fetch('./data.json')
    .then(response => response.json())
    .then(myLands => updateLands(myLands, clickedid));

    function updateLands(myLands, clickedid) {
        var landimg = document.getElementById("lands"); 
        var landtxt = document.getElementById("txtland");
        
        var idx =  document.getElementById("landcard").alt;
        idx = parseInt(idx)
        if (clickedid == 'previousButton') {
            idx = idx - 1;
            if (idx < 0){
                idx = 4
            };
        }
        else if (clickedid == 'nextButton'){
            idx = idx + 1;
            if (idx > 4){
                idx = 0
            };
        }

        while(landimg.firstChild){
            landimg.firstChild.remove()
        }
    
        while(landtxt.firstChild){
            landtxt.firstChild.remove()
        }

        idx = myLands.lands[idx].id;
        Thename =  myLands.lands[idx].name;
        url =  myLands.lands[idx].url;
        body =  myLands.lands[idx].body;
        lower =  myLands.lands[idx].lower;
    
        let imgL = document.createElement("div");
        imgL.innerHTML = `<img id="landcard" alt=${idx} src=${url} width="35%" height="35%"></img>`;
    
        let txtL = document.createElement("p");
        txtL.innerHTML = `<p class="card-txt"><strong>${Thename}</strong><br>${body}<br><i>${lower} </i></p>`

        landimg.appendChild(imgL);
        landtxt.appendChild(txtL);
    }

}

function getUpdatedSpell(clickedid){
    fetch('./data.json')
    .then(response => response.json())
    .then(myData => updateSpells(myData, clickedid));

    function updateSpells(mySpells, clickedid) {
        var img = document.getElementById("spells"); 
        var txt = document.getElementById("txtspell");
        
        var idx =  document.getElementById("spellcard").alt;
        idx = parseInt(idx)
        if (clickedid == 'previousButton') {
            idx = idx - 1;
            if (idx < 0){
                idx = mySpells.spell.length - 1;
            };
        }
        else if (clickedid == 'nextButton'){
            idx = idx + 1;
            if (idx > (mySpells.spell.length - 1)){
                idx = 0
            };
        }

        while(img.firstChild){
            img.firstChild.remove()
        }
    
        while(txt.firstChild){
            txt.firstChild.remove()
        }

        idx = mySpells.spell[idx].id;
        curName =  mySpells.spell[idx].name;
        url =  mySpells.spell[idx].url;
        curType =  mySpells.spell[idx].type;
        curColor =  mySpells.spell[idx].color;
        curBody = mySpells.spell[idx].body;
        curNote = mySpells.spell[idx].note;
    
        let imgL = document.createElement("div");
        imgL.innerHTML = `<img id="spellcard" alt=${idx} src=${url} width="35%" height="35%"></img>`;
    
        let txtL = document.createElement("p");
        txtL.innerHTML = `<p> <br>Card Name: <strong>${curName}</strong>
        <br>Card Type: ${curType}
        <br>Card's Color: ${curColor}
        <br>${curBody}
        <br><i>${curNote}</i></p>`
    
        img.appendChild(imgL);
        txt.appendChild(txtL);
    }

}