function validasi()
{
    let txtFirstName = document.getElementById("first-name").value.trim();
    let txtLastName = document.getElementById("last-name").value.trim();
    let txtDOB = document.getElementById("birthdate").value.trim();
    if (txtFirstName.length < 3)
    {
        alert("First Name cant be less than three characters");
        return false;
    }
    if (txtLastName.length < 3)
    {
        alert("Last Name cant be less than 8 characters");
        return false;
    }   

    if(txtDOB.length == 0)
    {
        alert("Date of Birth cant be blank");
        return false;
    }

    localStorage.setItem("ls-firstname", txtFirstName);
    localStorage.setItem("ls-lastname", txtLastName);

    return true;
}