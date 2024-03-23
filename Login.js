function validasi()
{
    let txtUsername = document.getElementById("username").value.trim();
    console.log(txtUsername)
    let txtPassword = document.getElementById("password").value;
    if (txtUsername.length == 0)
    {
        alert("Username cant be blank");
        return false;
    }
    if (txtPassword.length < 7)
    {
        alert("Password cant be less than 8 characters");
        return false;
    }   

    localStorage.setItem("ls-username", txtUsername);

    return true;
}