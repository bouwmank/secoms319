function onLoad(){
    fetch("./data.json")
    .then(response => response.json())
    .then(myQuestion => loadQuestion(myQuestion));
    function loadQuestion(myQuestion) {
        var mainContainer = document.getElementById("questionBody"); 
    
        let i = Math.floor(Math.random() * myQuestion.quiz.length);

        let h = document.createElement("h2");
        h.id = "current";
        h.innerHTML = `Question ${myQuestion.quiz[i].qid}`;
        mainContainer.appendChild(h);

        let div = document.createElement("div");
        div.innerHTML = `${myQuestion.quiz[i].qbody} <br> 
        <img src=${myQuestion.quiz[i].url} width="20%" height="20%" alt="..."></img>`;
        mainContainer.appendChild(div);
        
        document.getElementById("a").innerHTML = myQuestion.quiz[i].a
        document.getElementById("b").innerHTML = myQuestion.quiz[i].b
        document.getElementById("c").innerHTML = myQuestion.quiz[i].c
        document.getElementById("d").innerHTML = myQuestion.quiz[i].d

        var lst = ["a", "b", "c", "d"]
        for (var j = 0; j < lst.length; j++) {
            document.getElementById(lst[j]).name = 0
        }

        document.getElementById(myQuestion.quiz[i].Correct).name = 1
    }
}

function Check(val){
    fetch("./data.json")
    .then(response => response.json())
    .then(check => showResponse(check, val));
    if(document.getElementById("response") != null){
        var parent = document.getElementById("response").parentNode;
        parent.firstChild.remove()
    }
    function showResponse(check, val){
        if (document.getElementById(val).name == 0){
            let div = document.createElement("div");
            div.innerHTML = `<img id="response" src=${check.quizRemarks[1].url} width="5%" height="5%" alt="..."></img>`;
            document.getElementById(val).appendChild(div);
        }
        if (document.getElementById(val).name == 1){
            let div = document.createElement("div");
            div.innerHTML = `<img id="response" src=${check.quizRemarks[0].url} width="5%" height="5%" alt="..."></img>`;
            document.getElementById(val).appendChild(div);
        }
    }
}

function getNext(){
    console.log("getNext")
    fetch("./data.json")
    .then(response => response.json())
    .then(myQuestion => newQuestion(myQuestion));
    function newQuestion(myQuestion) {
        console.log("in update")
        var mainContainer = document.getElementById("questionBody");
        
        let cur = document.getElementById("current").name;

        while(mainContainer.firstChild){
            mainContainer.firstChild.remove()
        }
    
        let i = Math.floor(Math.random() * myQuestion.quiz.length);
        
        while(i == cur){
            let i = Math.floor(Math.random() * myQuestion.quiz.length);
        }

        let h = document.createElement("h2");
        h.id = "current";
        h.innerHTML = `Question ${myQuestion.quiz[i].qid}`;
        mainContainer.appendChild(h);

        let div = document.createElement("div");
        div.innerHTML = `${myQuestion.quiz[i].qbody} <br> 
        <img src=${myQuestion.quiz[i].url} width="20%" height="20%" alt="..."></img>`;
        mainContainer.appendChild(div);
        
        document.getElementById("a").innerHTML = myQuestion.quiz[i].a
        document.getElementById("b").innerHTML = myQuestion.quiz[i].b
        document.getElementById("c").innerHTML = myQuestion.quiz[i].c
        document.getElementById("d").innerHTML = myQuestion.quiz[i].d

        var lst = ["a", "b", "c", "d"]
        for (var j = 0; j < lst.length; j++) {
            document.getElementById(lst[j]).name = 0
        }

        document.getElementById(myQuestion.quiz[i].Correct).name = 1
    }
}