
function formData(){
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value

  return {
    name, 
    email
  }
}

let btn = document.getElementById("btn-send")
btn.addEventListener('click', submit)

function submit(event) {
  event.preventDefault()

  if (formData().email == "" && formData().name == "") {
    alert("data tidak boleh kosong")
  } else {
    console.log("ini dari btn");
    console.log(formData());
  }

}

// 1. tombol di klik
// 2. cek inputan kosong atau tidak
// 3. kalau kosong, munculin alert
