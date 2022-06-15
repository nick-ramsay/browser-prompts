const renderName = (name) => {
    if (name === null || name === undefined) {
        document.getElementById("your-name").innerHTML = "&#128551 You haven't entered a name &#128551"
    } else {
        document.getElementById("your-name").innerHTML = "&#128515; Welcome, " + name + "! &#128515;"
    }
}

const checkLocalStorage = () => {
    console.log("called checkLocalStorage");
    let yourName = localStorage.getItem("your_name");

    console.log(yourName);

    if (yourName === null) {
        let yourName = localStorage.setItem("your_name",prompt("Please enter your preferred name"));
        renderName(yourName)
    } else {
        renderName(yourName)
    }

    
}

window.onload = (event) => { checkLocalStorage(); };