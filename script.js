document.querySelector("#push").onclick = function () {
    let elInput = document.getElementById("todo-input").value;
    if (elInput == "") {
        alert ("ajoute une tâche")
    } else if (elInput.length < 3) {
        alert ("la tâche est trop courte")
    } else if (elInput.length > 35){
        alert ("la tache est trop longue")
    } else {
        console.log("tout est ok pour envoyer");
    }
    document.querySelector("#tasks").innerHTML += `
    <div class="task d-flex justify-content-between align-items-center mb-2 border-bottom py-3">
        <span class="my-0 taskname">${elInput}</span>
        <button class="btn btn-danger delete">Delete</button>
    </div>
    `

    let actionSupprimer = document.querySelectorAll(".delete")
    for (let i = 0; i < actionSupprimer.length; i++) {
        actionSupprimer[i].onclick = function () {
        this.parentNode.remove()
        }
    }

    let taskdone = document.querySelectorAll(".taskname")
    for (let o = 0; o < taskdone.length; o++) {
        taskdone[o].onclick = function () {
        this.classList.toggle("completed")
        }
    }

    document.querySelector("#todo-input").value = ""
}
