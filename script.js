function login() {
    var pin = document.querySelector('input[type="password"]').value;
    if (pin === "1017") {
        // Show the "You are Broke" page
        document.getElementById('coverPage').style.display = 'none';
        document.getElementById('brokePage').style.display = 'block';
    } else {
        // Invalid PIN, do something (maybe show an error message)
        alert("Invalid PIN!");
    }
}
