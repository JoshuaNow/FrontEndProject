// JavaScript Document
// <!-- We got this guys! We are team -->
// JavaScript Document

//main.append(divElement);
//Uou4anPgDJHztfUSXGm7Ru1SiHzqpcv5
const ajax = (url, callback, method = 'GET') => {
	if (!url) return console.error('Request Required');
	if (!callback) return console.error('Callback Required');
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', (evt) => {
		let req = evt.target;
		if (req.readyState !== 4) return;
		if (req.status === 200) return callback(req.response);
		callback('');
	});
	request.open(method, url);
	request.send();
};

export default ajax;
