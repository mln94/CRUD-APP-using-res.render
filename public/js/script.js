if(window.location.pathname === "/") {
    document.querySelectorAll(".delete").forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const id = this.getAttribute("data-id");
            fetch(`http://localhost:3000/delete/${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    console.log('Delete successful:', response);
                    window.location.replace('/');
                } else {
                    console.error('Delete failed:', response);
                }
            })
            .catch(error => console.error('Error:', error))
        });
    });
} else {
    document.getElementById("update_form").addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const id = formData.get('id');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const phoneNumber = formData.get('phoneNumber');
        const email = formData.get('email');
        const data = { id, firstName, lastName, phoneNumber, email };
        const url = `http://localhost:3000/update/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                console.log('Update successful:', response);
                window.location.replace('/');
            } else {
                console.error('Update failed:', response);
            }
        })
        .catch(error => console.error('Error:', error))
    });
}