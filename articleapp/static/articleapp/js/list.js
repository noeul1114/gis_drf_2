function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function initialize() {
    axios({
        method: 'get',
        url: '/articles/list/',
        headers: {
            Authorization: decodeURIComponent(getCookie('drf_token')),
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);

            for (let i=0; i < response.data['results'].length; i++) {
                document.getElementById('article_list').innerHTML
                    +=
                    "<div>" +
                    "<a href=\"/articles/retrieve_template/" + response.data['results'][i]['id'] + "\">" +
                    "<img style=\"width: 100%; border-radius: 1rem;\"" +
                    " src=\"" + response.data['results'][i]['image'] + "\"" +
                    " alt=\"\">" +
                    "</a>\"" +
                    "</div>";
            }

            // paginator 기반 page 객체 생성

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
