
function send_input() {

    var form = new FormData();
    form.append('title', document.getElementById('title').value);
    form.append('content', document.getElementById('content').value);
    form.append('image', document.getElementById('image').files[0]);

    axios({
        method: 'post',
        url: '/articles/',
        data: form,
        headers: {
            Authorization: decodeURIComponent(getCookie('drf_token'))
        }
    })
        .then(function (response) {
            // 성공했을 경우
            console.log(response);

            // 완성된 이후 해당 게시글 페이지로 돌아가기
            window.location.href = '/articles/retrieve_template/' + response.data['id'];
        })
        .catch(function (error) {
            // 실패했을 경우
            console.log(error);

            document.getElementById('alert_box').innerHTML
                = "<div class='btn btn-danger rounded-pill px-5'>게시글 작성에 실패했습니다</div>"
        });
}
