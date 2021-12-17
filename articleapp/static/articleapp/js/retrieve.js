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
            Authorization: decodeURIComponent(getCookie('drf_token')),
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);

            document.getElementById('title').innerHTML = response.data['title'];
            document.getElementById('created_at').innerHTML = response.data['created_at'];
            document.getElementById('content').innerHTML = response.data['content'];

            if (response.data['image'] !== null) {
                document.getElementById('image').src = response.data['image'];
            } else {
                document.getElementById('image').style.display = 'none';
            }

            if (response.data['is_page_owner'] === "True") {
                document.getElementById('owner_section').innerHTML =
                    "<div>" +
                    "<a href='/articles/update_template/" + response.data['id'] + "'>Update Article</a>" +
                    "</div>" +
                    "<div>" +
                    "<a href='/articles/destroy_template/" + response.data['id'] + "'>Delete Article</a>" +
                    "</div>";
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
