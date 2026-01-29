window.onload = function () {

}
const d = document.getElementById("Se");
let t = function(){
  let time = new Date().toLocaleTimeString("en-US", {
    timeZone : d.value,
    hour12: true
  });
  return time;
}
let p = document.getElementById("pop");
document.getElementById("but").addEventListener("click", function() {
  p.innerHTML = `<p class="pop">This website is made by Adarsh Mishra</p>`
});

let co = document.getElementById("pop");
document.getElementById("con").addEventListener("click", function() {
  co.innerHTML = `<p class="pop">
    Contact:
    <a class="link" href="https://www.instagram.com/adarsh_mishra_032?igsh=MmZpczhvcTZhZjdv" target="blank">Instagram</a>
    <a class="link" href="https://github.com/adarshindians3270-byte" target="blank">GitHub</a>
  </p>`;
})

d.addEventListener("change", function() {
    document.getElementById("clock").innerText = t();
      setInterval(function() {
        document.getElementById("clock").innerText = t();
      }, 1000);
});



