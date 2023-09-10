var btnToiCoId = document.getElementById("btn_toi_co_id");
btnToiCoId.style.color = "#fff";
console.log(btnToiCoId.style.color);

/// 1. function -> namespace
function onBtnToiCoIdClick() {
  console.log("Duy")
}
///  2.anonymous function

///  3. arrow function 
let guiDataLenSaoHoa = (au_co, lac_long_quan) => {
  console.log(":))")
}

btnToiCoId.addEventListener("click", function () {
  onBtnToiCoIdClick()
  onBtnToiCoIdClick()
});


document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form submit
  console.log("login")
  let email = document.getElementsByName("email")[0].value
  let pass = document.getElementsByName("password")[0].value
  console.log(email, pass)
});
