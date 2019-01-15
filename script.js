function load_content(src){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			document.getElementById("pageContent").innerHTML=xhr.responseText;
			document.body.classList.remove("home");
      currentPage=src;
		}
	};
	xhr.open("GET",src,true);
	xhr.send();
}

function goHome(){
	document.body.classList.add("home");
}


/* ----ARROW KEYS NAVIGATION---- */

function nomdelafonction(event) {
  console.log(event)
  if(event.keyCode==39) { //39=rightArrow
    goRight()
  }
   if(event.keyCode==37) { //37=lefttArrow
   goLeft()
  }
}

var projects=[
"works_content/Absolver.html",
"works_content/Chefbattle.html",
"works_content/RoH.html",
"works_content/Apoptosis.html",
"works_content/MLD.html"]
var currentPage

function goRightLeft(offset) {
  var index=projects.indexOf(currentPage)
  if (index >= 0) {
    index=index+offset
    if (index >= projects.length) {
      index=0
   }
   if (index <0) {
     index=projects.length-1
   }
    load_content(projects[index])
  }
}

function goRight() {
  goRightLeft(+1)
}

function goLeft() {
  goRightLeft(-1)
}