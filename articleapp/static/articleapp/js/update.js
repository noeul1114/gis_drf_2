function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function initialize(pk) {
    axios({
        method: 'get',
        url: '/articles/' + pk,
        headers: {
            Authorization: decodeURIComponent(getCookie('drf_token'))
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);

            document.getElementById('title').value = response.data['title'];
            document.getElementById('content').value = response.data['content'];

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function update_article(pk) {
    var form = new FormData()
    form.append('title', document.getElementById('title').value)
    form.append('content', document.getElementById('content').value)
    form.append('image', document.getElementById('image').files[0])

    axios({
        method: 'patch',
        url: '/articles/' + pk,
        data: form,
        headers: {
            Authorization: decodeURIComponent(getCookie('drf_token')),
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);

            window.location.href = '/articles/retrieve_template/' + response.data['id'];
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