var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = { 
    'article-one': {
  title: 'Article One | Shafeeq',
  heading: 'Article One',
  date: 'December 10',
  content: `
            <p>
                This is the content for my first articles.
            </p>
            <p>
                This is the content for my first article.
            </p>
            <p>
                This is the content for my first article.
            </p>`
},
    'article-two': {
         title: 'Article Two | Shafeeq',
  heading: 'Article Two',
  date: 'December 10',
  content: `
            <p>
                This is the content for my second articles.
            </p>
            <p>
                This is the content for my second article.
            </p>
            <p>
                This is the content for my second article.
            </p>`
    },
    'article-three': {
         title: 'Article Three | Shafeeq',
  heading: 'Article Three',
  date: 'December 10',
  content: `
            <p>
                This is the content for my third articles.
            </p>
            <p>
                This is the content for my third article.
            </p>
            <p>
                This is the content for my third article.
            </p>`
    },
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate = 
`<html>
    <head>
        <title>
            $[title]
        </title>
        <meta name="viewport" content="width-device-width, initial scale=1">  
        <link href="/ui/style.css" rel="stylesheet" />
    </head>    
        <body>
            <div class='container'>
              <div>
                <a href='/'>Home</a>
            </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
        </body>
</html>
`;
return htmlTemplate;
}







app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName= article-one
    // article[articleName]= {} content object for article one //
    var articleName = req.params.articleName; // to access the articleName parameter//
    res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) { res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) { res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
