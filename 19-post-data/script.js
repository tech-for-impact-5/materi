let btnSend = document.getElementById("btn-send");

btnSend.addEventListener("click", () => {
  let newUser = {
    name: "Auzan",
    avatar: "",
    email: "auzan@gmail.com",
    password: "123",
  };

  fetch("https://643e1624c72fda4a0bed5b7f.mockapi.io/user", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  }).then((res) => {
    console.log(res);
  });
});
