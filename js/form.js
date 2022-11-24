function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    if (name == "ironhack") {
      alert("You cannot be Ironhack, because I am Ironhack.");
      return false;
    } else {
      alert("The form is submitted correctly");

    }
  }