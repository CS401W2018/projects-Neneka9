document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form Submitted");

    const first = document.getElementById('firstname').value;
    const last = document.getElementById('lastname').value;
    const interests = document.getElementById('interests').value;
    const age = document.getElementById('age').value;

    if (!first || !last) {
        alert("You need to enter your full name.");
        return;
    }

    if (interests === "blank") {
        alert("You need to choose your interests.");
        return;
    }

    if (!age || age<18) {
        alert("You need to be 18");
        return;
    }

    const formData = {
        firstname: firstname,
        lastname: lastname,
        interests: interests,
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "formprocessing.json", true);
    xhr.setRequestHeader("Constent-Type", "application/json;charset=UTF-8") ;
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("form").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData)

});