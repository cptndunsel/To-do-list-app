document.querySelector('#todoform').addEventListener("submit", function (event) {
    event.preventDefault();
    var newEl = document.createElement("li");
    var comButton = document.createElement("button");
    var delButton = document.createElement("button");
    var container = document.createElement("div");

    if (textfield.value === '') {
        return;
    }

    newEl.textContent = textfield.value;
    textfield.value = ''; //resets the input to blank

    comButton.textContent = "Complete";
    delButton.textContent = "Delete";

    container.appendChild(newEl);
    container.appendChild(comButton);
    container.appendChild(delButton);

    container.style.display = "inline-flex";

    
    newEl.style.marginRight = "10px";
    comButton.style.marginRight = "10px";
    delButton.style.marginRight = "10px";

    document.body.appendChild(container);

    comButton.addEventListener("click", function(event) {
        event.preventDefault();
        newEl.textContent = "Complete"
    });

    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        container.remove();
    });
})