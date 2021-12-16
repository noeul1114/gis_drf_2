function initialize(pk) {
    axios.get('/profiles/' + pk )
        .then(function (response) {
            // handle success
            console.log(response);

            document.getElementById('nickname').value = response.data['nickname'];
            document.getElementById('message').value = response.data['message'];

            // 이미지도 가져와야 함

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function update_profile(pk) {
    var form = new FormData()
    form.append('nickname', document.getElementById('nickname').value)
    form.append('message', document.getElementById('message').value)
    form.append('image', document.getElementById('image').files[0])

    axios({
        method: 'patch',
        url: '/profiles/' + pk,
        data: form,
        headers: {
            Authorization: decodeURIComponent(getCookie('drf_token')),
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);

            window.location.href = '/accounts/retrieve_template/' + response.data['owner_id'];
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