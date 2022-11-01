// const { response } = require('express');
const express = require('express')
// const { fstat } = require('fs')
const app = express()
// var fs = require('fs');
// var qs = required('querystring');
// var sanitizeHtml = required('sanitize-html');
// var template = reuqire('./lib/template.js');
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.get('/create', function(request, response){
//     fs.readdir('./data', function(error, filelist){
//       var title = 'WEB - create';
//       var list = template.list(filelist);
//       var html = template.HTML(title, list, `
//         <form action="/create_process" method="post">
//           <p><input type="text" name="title" placeholder="title"></p>
//           <p>
//             <textarea name="description" placeholder="description"></textarea>
//           </p>
//           <p>
//             <input type="submit">
//           </p>
//         </form>
//       `, '');
//       response.send(html);
//     });
//   });
   
//   app.post('/create_process', function(request, response){
//     var body = '';
//     request.on('data', function(data){
//         body = body + data;
//     });
//     request.on('end', function(){
//         var post = qs.parse(body);
//         var title = post.title;
//         var description = post.description;
//         fs.writeFile(`data/${title}`, description, 'utf8', function(err){
//           response.writeHead(302, {Location: `/?id=${title}`});
//           response.end();
//         })
//     });
//   });



/*
var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
      var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;
      response.end(template);
    })
 
 
});
app.listen(3001);
*/