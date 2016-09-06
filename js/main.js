var uri = 'api.omnismain.com'
var ssapi = new SSAPI(uri, connection_status);
var group = "56a9da969a0bf84c09c316be";
var client = 'testClientId';

function connection_status(err, isAuthorized){
    console.info("Connection status changed: \n error = ", err, " \n isAuthorized = ", isAuthorized);

    if(!err && isAuthorized) {
        //location.href = 'http://localhost/ssapi-admin/index.html';
    } else {
        console.error(err);
        //location.href = 'http://localhost/ssapi-admin/login.html';
    }
}

function login(email, password){

    if(!email) {
        email = $('#email').val();
    }

    if(!password){
        password = $('#password').val();
    }

    $('#errorLogin').hide();

    ssapi.auth(
        group,
        client,
        email,
        password,

        function (err, result) {
            if(err) {
                console.error(err.toString());
                $('#errorLogin').show();
            } else {
                location.href = 'http://localhost/ssapi-admin/index.html';
            }
        }
    );
}

function logout(){
    ssapi.logout();
}
