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
    <div class="task d-flex justify-content-between align-items-center mb-2">
        <span class="my-0">${elInput}</span>
        <button class="btn btn-danger">Delete</button>
    </div>
    `
}
