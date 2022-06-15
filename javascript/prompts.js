const renderName = (name) => {
    if (name === null || name === undefined || name === "" || name === "null") {
        document.getElementById("update-name-btn").style.display = "none";
        document.getElementById("enter-name-btn").style.display = "inline"
        document.getElementById("delete-name-btn").style.display = "none"
        document.getElementById("your-name").innerHTML = "&#128551 You haven't entered a name &#128551"
    } else {
        document.getElementById("update-name-btn").style.display = "inline";
        document.getElementById("delete-name-btn").style.display = "inline"
        document.getElementById("enter-name-btn").style.display = "none"
        
        document.getElementById("your-name").innerHTML = "&#128515; Welcome, " + name + "! &#128515;"
    }
}

const initialNameCheck = () => {
    document.getElementById("update-name-btn").style.display = "none";
        document.getElementById("enter-name-btn").style.display = "none"
        document.getElementById("delete-name-btn").style.display = "none"
    let yourName = localStorage.getItem("your_name");

    if (yourName === null || yourName === "" || yourName === "null") {
        localStorage.setItem("your_name",prompt("Please enter your preferred name"));
        renderName(localStorage.getItem("your_name"));
    } else {
        renderName(yourName)
    }

    
}

const deleteName = () => {
   localStorage.removeItem("your_name");
   renderName(localStorage.getItem("your_name"));
};

const updateName = () => {
    let currentName = localStorage.getItem("your_name");
    let revisedName = prompt("Edit your name below", currentName);
    localStorage.setItem("your_name", revisedName);
    renderName(localStorage.getItem("your_name"));
}

document.getElementById("delete-name-btn").addEventListener("click", deleteName);
document.getElementById("update-name-btn").addEventListener("click", updateName);
document.getElementById("enter-name-btn").addEventListener("click", initialNameCheck);

window.onload = (event) => { initialNameCheck(); };