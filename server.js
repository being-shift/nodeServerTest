// 기본문법
const express = require("express");
const app = express();

app.listen(8080, function(){
	console.log("listening on 8080");
});

// Controller Mapping
app.get('/pet', function(req,res){
	//res.send('펫 용품을 구매할 수 있는 사이트 입니다.');
	res.sendFile(__dirname + '/index.html');
	console.log('어쩌구 저쩌구');
});

// static directory 등록
// app.use(express.static(__dirname + '폴더경로'));
