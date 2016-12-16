console.log('Loaded!');

//counter code
var button = document.getElementById('counter');

button.onclick = function(){
  
  var request = new XMLhttpRequest();
  
  request.onreadystatechange = function(){
    if(request.readystate === XMLhttpRequest.DONE){
        if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }  
  };
  
  request.open('GET','http://shafeeq-rahman.imad.hausra-app.io/counter',true);
  request.send(null);
};