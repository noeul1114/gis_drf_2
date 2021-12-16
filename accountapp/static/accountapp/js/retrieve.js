function initialize(pk) {
    axios.get('/accounts/' + pk)
        .then(function (response) {
            // handle success
            console.log(response);

            document.getElementById('nickname').innerHTML = response.data['profile']['nickname'];
            document.getElementById('message').innerHTML = response.data['profile']['message'];

            if (response.data['profile']['thumb'] !== null) {
                document.getElementById('image').src = response.data['profile']['thumb'];
            } else if (response.data['profile']['image'] !== null) {
                document.getElementById('image').src = response.data['profile']['image'];
            } else {
                document.getElementById('image').style.display = 'none';
            }

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
