function initialize(pk) {
    axios.get('/accounts/retrieve/' + pk )
        .then(function (response) {
            // handle success
            console.log(response);

            document.getElementById('username').innerHTML = response.data['username'];
            document.getElementById('date_joined').innerHTML = response.data['date_joined'];

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
