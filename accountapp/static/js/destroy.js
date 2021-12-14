
function delete_account(pk) {
    axios({
        method: 'delete',
        url: '/accounts/delete/' + pk,
        headers: {
            Authorization: decodeURIComponent(getCookie('drf_token')),
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);

            window.location.href = '/accounts/logout/';
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
                    = "<div class='btn btn-danger rounded-pill px-5'>탈퇴에 실패했습니다.</div>"
            }

        })
        .then(function () {
            // always executed
        });
}