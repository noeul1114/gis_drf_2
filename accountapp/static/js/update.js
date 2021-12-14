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

function update_account(pk) {
    axios({
        method: 'patch',
        url: '/accounts/update/' + pk,
        data: {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
        },
        headers: {
            Authorization: decodeURIComponent(getCookie('drf_token')),
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);

            window.location.href = '/accounts/retrieve_template/' + pk;
        })
        .catch(function (error) {
            // handle error
            console.log(error);

            if (error.response.status === 401) {
                document.getElementById('alert_box').innerHTML
                    = "<div class='btn btn-danger rounded-pill px-5'>인증 정보가 없습니다.</div>"
            } else if (error.response.status === 403) {
                document.getElementById('alert_box').innerHTML
                    = "<div class='btn btn-danger rounded-pill px-5'>권한이 없습니다.</div>"
            } else {
                document.getElementById('alert_box').innerHTML
                    = "<div class='btn btn-danger rounded-pill px-5'>업데이트에 실패했습니다.</div>"
            }

        })
        .then(function () {
            // always executed
        });
}