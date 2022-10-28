const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request,response) => {
let filePath= path.join(__dirname, 'public', request.url === '/' ? 'Home.html' : request.url)
let contentType =getContentType(filePath) || 'text/html'
let emptyPagePath = path.join(__dirname, 'public', '404.html')
fs.readFile(filePath, 'utf8',(err, content) => {

    if(err) {
        if (err.code === 'ENOENT') {
            fs.readFile(emptyPagePath, 'utf8', (err, content) => {
                response.writeHead(200, {'Content-Type' : contentType})
               response.end(content)
            })
        } else {
         response.writeHead(500)
         response.end("A server error has occurred")
        }
    }
    if (!err) {
        response.writeHead(200, {'Content-Type' : contentType})
        response.end(content)
    }
})


})
 
//  




const getContentType = (filePath) => {
    let extname =path.extname(filePath)
    if (extname === '.js') {
        return 'text/javascript'
    }
    if (extname === '.css') {
        return 'text/css'
    }
    if (extname === '.jpg') {
        return 'image/jpg'
    }
    if (extname === '.png') {
        return 'image/png'
    }
}



server.listen(3000, () => {
    console.log("server is listening on port 3000");
}
)

// response.writeHead(200, {'Content-Type' : 'text/html'})
//    response.end('<h1>Hello great people, how do you do today?</h1>')


// if (request.url=== '/') {
//     let filePath =path.join(__dirname, 'public', 'index.html')
//     fs.readFile(filePath, 'utf8', (err, data) =>{
//         response.writeHead(200, {'Content-Type' : 'text/html'})
//         response.end(data)
//     })
    

//   }
//   if (request.url=== '/grid.html') {
//     let filePath =path.join(__dirname, 'public', 'grid.html')
//     fs.readFile(filePath, 'utf8', (err, data) =>{
//         response.writeHead(200, {'Content-Type' : 'text/html'})
//         response.end(data)
//     })
    

//   }

// let filePath =path.join(__dirname,'public', request.url === '/' ? 'index.html' : request.url)
//    let contentType = getContentType(filePath) || 'text/html'
//    let emptyPagePath=path.join(__dirname, 'public', '404.html')
//    fs.readFile(filePath, 'utf8', (err, content) =>
//    { if (err)  {
//     if (err.code === 'ENOENT') {
//     fs.readFile(emptyPagePath, 'utf8', (err, content) =>{
//     response.writeHead(200, {'Content-Type': contentType })
//     response.end(content)
//     } )
//    } else {
//      response.writeHead(500)
//      response.end('A server error has occurred')
//    }
   
//    }
//     if (!err) {
//         response.writeHead(200, {'Content-Type': contentType})
//     }
//    }
   
//    )
//  }
// )