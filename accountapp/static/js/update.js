function initialize(pk) {
    axios.get('/accounts/retrieve/' + pk )
        .then(function (response) {
            // handle success
            console.log(response);

            document.getElementById('username').value = response.data['username'];
            document.getElementById('email').value = response.data['email'];

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
