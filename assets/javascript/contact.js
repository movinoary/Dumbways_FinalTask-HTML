function showData() {
  // DOM
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // VALIDATION
  if (name == "") {
    return alert("Name input must not be empty");
  }

  let emailReceiver = "mohvinoary@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, ${subject}, ${message}`;
  a.click();
}
