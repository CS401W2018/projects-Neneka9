document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // alert("Form Submitted");

    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const age = document.getElementById('age').value;

    if (!firstname) {
        alart("You need to enter your name.");
        return;
    }

    if (!age || age<18) {
        alart("You need to be 18");
        return;
    }

    const formData = {
        firstname: firstname,
        email: email,
        password: pass,
        state: document.getElementById('state').value,
    };

    console.log(formData);
    const shr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Constent-Type", "application/json;charaset-UTF-8");
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            alert('Form submitted successfully.');
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    

    };

});