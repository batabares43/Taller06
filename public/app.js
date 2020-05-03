var providerGoogle = new firebase.auth.GoogleAuthProvider();
var providerFAcebook = new firebase.auth.FacebookAuthProvider();
var providerTwitter = new firebase.auth.TwitterAuthProvider();


$('#loginGoogle').click(function() {
    firebase.auth()
        .signInWithPopup(providerGoogle)
        .then(function(result) {
            console.log(result.user);
            $('#loginGoogle').hide();
            guardarDatos(result.user);
            $('#root').append(result.user.displayName);
            $('#avatar').attr('src', result.user.photoURL)
        });
});

$('#loginFacebook').click(function() {
    firebase.auth()
        .signInWithPopup(providerFAcebook)
        .then(function(result) {
            console.log(result.user);
            $('#loginFacebook').hide();
            guardarDatos(result.user);
            $('#root').append(result.user.displayName);
            //$('#avatar').attr('src', result.user.photoURL)
            $('#root').append("<img src='" + result.user.photoURL + "'/>")
        });
});
$('#loginTwitter').click(function() {
    firebase.auth()
        .signInWithPopup(providerTwitter)
        .then(function(result) {
            console.log(result.user);
            $('#loginTwitter').hide();
            guardarDatos(result.user);
            $('#root').append(result.user.displayName);
            $('#avatar').attr('src', result.user.photoURL)
        });
});

function guardarDatos(user) {
    var usuario = {
        uid: user.uid,
        nombre: user.displayName,
        email: user.email,
        foto: user.photoURL
    }
    firebase.database().ref("Taller06/Usuarios/" + user.uid).set(usuario)
}