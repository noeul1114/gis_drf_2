function initialize(pk) {
    axios.get('/accounts/' + pk)
        .then(function (response) {
            // handle success
            console.log(response);

            document.getElementById('nickname').innerHTML = response.data['profile']['nickname'];
            document.getElementById('message').innerHTML = response.data['profile']['message'];

            document.getElementById('image').src = response.data['profile']['image'];

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
