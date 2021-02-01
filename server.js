let express = require('express');
let app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/*',function (req,res){
  res.sendFile(__dirname + '/dist/index.html');
})

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Listening on ${server.address().port}`);
});
