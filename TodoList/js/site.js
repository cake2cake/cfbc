let count = 0;

function addTask() {
    count++;

    let TaskTemplate = `<li class="item list-group-item">Task ${count} : Lorem ipsum dolor, sit amet elit!</li>`;
    

    let element = document.getElementById("list");
    element.innerHTML += TaskTemplate;
    console.log(`adding task ${count}`);
}
