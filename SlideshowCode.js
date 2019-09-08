(function(){
alert("we are in");
var styles = `
.slides {
    position: absolute;
    left:10%;
    top:70%;
    height: 300px;
    padding: 0px;
    margin: 0px;
}
.slide {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
    -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
}

.showing {
    opacity: 1;
    z-index: 2;
}

`;

var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);




var urls = ["https://ibb.co/7yzbVNJ"];
var lis = document.createElement("DIV");
lis.classList.add("slides");
for(let i = 0; i<urls.length;i++){
	var li = document.createElement("img");
	li.setAttribute("href",urls[i]);
	lis.appendChild(li);
}
document.body.appendChild(lis);
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,10000);

function nextSlide() {
    lis.childNodes[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    lis.childNodes[currentSlide].className = 'slide showing';
}
})();
