(function(){
alert("hi kayla");
var styles = `
.slides {
    position: fixed;
    left:70%;
    top:70%;
    width: 30%;
    height: 30%;
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




var urls = ["https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://i.pinimg.com/originals/1b/1b/84/1b1b84916d0700010167ad12ebd3c635.jpg","https://i.pinimg.com/originals/2c/17/7a/2c177afdba4e7abec95ebecec6df06d3.jpg","https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/fa/95/3e/fa953e86-b94b-a501-93d5-c4fb76aa20b7/source/256x256bb.jpg"];
var lis = document.createElement("DIV");
lis.classList.add("slides");
for(let i = 0; i<urls.length;i++){
	var li = document.createElement("img");
	li.setAttribute("src",urls[i]);
	li.className = 'slide';
	lis.appendChild(li);
}
document.body.appendChild(lis);
var currentSlide = urls.length-1;
nextSlide();
var slideInterval = setInterval(nextSlide,10000);

function nextSlide() {
    lis.childNodes[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%urls.length;
    lis.childNodes[currentSlide].className = 'slide showing';
}
})();
