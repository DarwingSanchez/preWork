var  express = require('express')
var app = express()
 
app = app.get('/', inicio) 
function inicio(request, result){
    result.send("HOLA COMO ESTA: "); 
}
 
app.listen(8989)