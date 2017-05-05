function app () {
	document.querySelector('body').onclick = appendText
}

function appendText () {
	var spanHTML = document.querySelector('span')
	var windowWidth = window.innerWidth
	var spanWidth = spanHTML.offsetWidth
	console.log(windowWidth)
	console.log(spanHTML)
	console.log(spanWidth)
	spanHTML.innerHTML += 'blabla'
	if (spanWidth < windowWidth) {
		spanHTML.innerHTML += 'blabla'
	} 
	else {
		spanHTML.innerHTML += '\r\nblabla'
	}
}	
