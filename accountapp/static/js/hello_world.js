function send_input() {
    axios.post('/accounts/hello_world/', {
        input_data: document.getElementById('input_data').value,
    })
        .then(function (response) {
            // POST 요청이 성공했을 경우 어떤 javascript 가 구동되어야 하는지
            console.log(response);

            document.getElementById('text').innerHTML = response.data['text'];
            document.getElementById('new_model_created_at').innerHTML
                = response.data['created_at'];

            document.getElementById('new_model_list').innerHTML
                += "<h5>" + response.data['text'] + "</h5>"
            document.getElementById('new_model_list').innerHTML
                += "<p>" + response.data['created_at'] + "</p>"

        })
        .catch(function (error) {
            console.log(error);
        });
}


<!--  서버 호출  -->
axios.get('/accounts/hello_world/')
    .then(function (response) {
        // handle success
        console.log(response);

        // 성공했을 경우 어떤 javascript 작업을 할지
        for (let i=0; i < response.data.length; i++ ) {
            document.getElementById('new_model_list').innerHTML
                    += "<h5>" + response.data[i]['text'] + "</h5>"
            document.getElementById('new_model_list').innerHTML
                    += "<p>" + response.data[i]['created_at'] + "</p>"
        }

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });