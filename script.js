function load_content(src){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			document.getElementById("pageContent").innerHTML=xhr.responseText;
			document.body.classList.remove("home");
		}
	};
	xhr.open("GET",src,true);
	xhr.send();
}

function goHome(){
	document.body.classList.add("home");
}