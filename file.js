function consolelog(){
  console.log("Hello, World!");
}
/*var p=document.getElementById("helloconsole");s
p.inner HTML = "Hello, World!"
*/
function poplog(){
  alert("Hello, World!");
}
function browserlog() {
  var p=document.getElementById("hellobrowser");
  p.innerHTML = "Hello, World!"

}
function strangerlog() {
 var name = prompt("What is your name?");
 var p = document.getElementById("hi")
 p.innerHTML = "Hello, " + name + "!";

}
