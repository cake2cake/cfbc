let count = 0;

function addTask() {
    count++;

    let TaskTemplate = `<li class="item list-group-item">Task ${count}</li>`;
    let element = document.getElementById("list");
    element.innerHTML += TaskTemplate;
    console.log(`adding task ${count}`);
}
