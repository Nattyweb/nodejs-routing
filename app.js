// an app to render dynamic html pages

http = require('http')
path = require('path')
fs = require('fs')

//create server
server = http.createServer((req, res) =>{
	let filePath = "";

    //build a dynamic file path to determine the page to send to brouser

    if(req.url == '/' || '/home') {
    	filePath = path.join(__dirname, "index.html")
    }
	else if(req.url == "/about" || "/about-us") {
		filePath = path.join(__dirname, "/about.html")
	}
	else {
		filePath = path.join(__dirname, req.url)
	}
	//let filePath = path.join(
	//__dirname, req.url == '/' ||'/home' ? 'index.html' : '/about-us' ? '/about.html' : req.url);

//Read content of html page and  send to brouser
fs.readFile(filePath, "utf-8", (err, content) => {
	if(err){
		if(err.code === "ENOENT") {
			//page not found
			fs.readFile(path.join(__dirname, errorPage.html), (err, content) => {
				res.writeHead(404, {"Content-Type" : text/html})
				res.end(content, utf-8)
			})
		}
		else {
			//some server error
			res.writeHead(500);
			res.end(`server error: ${err.code}`)
		}
	}
	else {
		//success
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(content, "utf-8")
	}
})

})

PORT = 8000
server.listen(PORT, () => {
	console.log("server running....")
})
