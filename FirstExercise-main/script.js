document.getElementById("actionButton").addEventListener("click", function() {
    displayText();
});


// Function to hide/unhide the text
function displayText() {
    let text = document.getElementById("hiddenText");
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


const d = new Date();
let year = d.getFullYear(); // Displays the current year

document.getElementById("year").innerHTML = year; // Assign year to HTML

