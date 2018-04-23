function load_svg(img,src){
	console.log(src);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200
		&& img && img.parentNode){
			console.log("loaded "+src);
			var tmp = document.createElement('div');
			tmp.innerHTML = xhr.responseText;
			var att = img.attributes;
			for(var j=0;j<img.attributes.length;j++) // Copy img attributes to svg
				tmp.firstChild.setAttribute(att[j].nodeName,att[j].value);
			img.parentNode.replaceChild(tmp.firstChild,img);
		}
	};
	xhr.open("GET",src,true);
	xhr.send();
}
function inline_svgs(){
	var svg_regexp = new RegExp(".*\\.svg$");
	var imgs = document.images;
	for(var i=0;i<imgs.length;i++){
		var img = imgs[i];
		var src = img.getAttribute('src');
		if(svg_regexp.test(src))
			load_svg(img,src);
	}
}

window.addEventListener("load", inline_svgs);
