"use strict";
function getHttpRequest(urls) {
	var urlsObj = {};
	var ulen = urls.length;
	// amount of simultanious request
	var limit = 3;
	var res = [];
	var count = 0;
	var position = 0;
	var endFlag = false;
	
	function getReq(url){
		var promise = fetch(url);
		count++;
		promise.then(function (response) {
			return response.json();
		})
		.then(function (res) {
			urlsObj[url].result.push(res);
			count--;
		});
	}
	
	function getReqUrls() {
		if (endFlag) return;
		if (position == ulen && !count && !endFlag) {
			endFlag = true;
			returnResult();
			return res;
		}
		
		if (count >= limit) {
			setTimeout(getReqUrls, 50);
			return;
		} 
		
		for (var i = position; i < ulen; i++) {
			if (count < limit) {
				if (!urlsObj[urls[i]].isCall) {
					getReq(urls[i]);
					urlsObj[urls[i]].isCall = true;
				}
				position = i + 1;
				if (position == ulen) {
					setTimeout(getReqUrls, 50);
					return;
				}
			} else {
				setTimeout(getReqUrls, 50);
				return;
			}
		}
	}
	
	function returnResult() {
		for (var i = 0; i < ulen; i++) {
			if (typeof urlsObj[urls[i]] != 'undefined') {
				res.push(urlsObj[urls[i]].result[0]);
			}
		}
	}
	
	for (var i = 0; i < ulen; i++) {
		if (typeof urlsObj[urls[i]] == 'undefined') {
			urlsObj[urls[i]] = {
				result : [],
				isCall : false
			};
		}
	}
	getReqUrls();
}

var urlsArr = [
	'urls/1.json',
	'urls/2.json',
	'urls/3.json',
	'urls/4.json',
	'urls/5.json',
	'urls/6.json',
	'urls/1.json',
	'urls/2.json',
	'urls/3.json',
	'urls/1.json',
	'urls/5.json',
	'urls/6.json'
];
getHttpRequest(urlsArr);