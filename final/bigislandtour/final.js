document.getElementById('final').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form Submitted");

    const category = document.getElementById('category').value;
    const occasion = document.getElementById('occasion').value;
    const comments = document.getElementById('comments').value;

    if (category === "0") {
        alert("You need to choose the type of food.");
        return;
    }

    if (occasion === "0") {
        alert("You need to choose your interests.");
        return;
    }

    if (!comments) {
        alert("Please write comments about your experience.");
        return;
    }

    const formData = {
        category: category,
        occasion: occasion,
        comments: comments,
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "final.json", true);
    xhr.setRequestHeader("Consent-Type", "application/json;charset=UTF-8") ;
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("final").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);

});