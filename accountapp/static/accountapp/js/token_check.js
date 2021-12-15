function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


var check = getCookie('drf_token');

if (check !== undefined) {
    document.getElementById('signup_button').innerHTML = "";
    document.getElementById('login_button').innerHTML =
        "<a href=\"/accounts/logout_template/\">\n" +
        "                Logout\n" +
        "            </a>";
}