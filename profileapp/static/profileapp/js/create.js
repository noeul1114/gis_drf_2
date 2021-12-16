
function send_input() {

    var form = new FormData();
    form.append('nickname', document.getElementById('nickname').value);
    form.append('message', document.getElementById('message').value);
    form.append('image', document.getElementById('image').files[0]);

    axios({
        method: 'post',
        url: '/profiles/',
        data: form,
        headers: {
            Authorization: decodeURIComponent(getCookie('drf_token'))
        }
    })
        .then(function (response) {
            // 성공했을 경우
            console.log(response);

            // 완성된 이후 해당 유저의 detail 페이지로 리다이렉트
            window.location.href = '/accounts/retrieve_template/' + response.data['owner_id'];

        })
        .catch(function (error) {
            // 실패했을 경우
            console.log(error);

            document.getElementById('alert_box').innerHTML
                = "<div class='btn btn-danger rounded-pill px-5'>프로필 생성에 실패했습니다</div>"
        });
}
