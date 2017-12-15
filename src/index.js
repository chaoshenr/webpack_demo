import _ from "lodash";
import './style.css';
import icon from "./image01.png";
import printMe from "./print.js";

function component() {
	var element = document.createElement("div");
	element.innerHTML = _.join(['Hello', "金超"], ' ');
	element.classList.add('hello');

	var image = new Image();
	image.src = icon;
	element.appendChild(image);

	var button = document.createElement("button");
	button.onclick = printMe;
	button.innerHTML = "printMe";
	element.appendChild(button);
	return element;
}
document.body.appendChild(component());