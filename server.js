var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles= {
    'article-one':{
        title: 'Abhilasha Singla|article-one',
        heading:'article one',
        date : '5 march,2017',
        content:`
        <P>
                    this is my first article.  this is my first article.  this is my first article.  this is my first article.  this is my first article.
                </P>
                 <P>
                    this is my first article.  this is my first article.  this is my first article.  this is my first article.  this is my first article.
                </P>
                 <P>
                    this is my first article.  this is my first article.  this is my first article.  this is my first article.  this is my first article.
                </P>
                `
        },
    'article-two':{
    title: 'Abhilasha Singla|article-one',
    heading:'article two',
    date : '6 march,2017',
    content:`
    <P>
                this is my second article.  
            `
},
    'article-three':{
    title: 'Abhilasha Singla|article-three',
    heading:'article three',
    date : '7 march,2017',
    content:`
    <P>     
    this is my third article.  
    </P>
            `
}
};

function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=  `
<html>
<head>
    <title>
       ${title}
    </title>
    <meta name="viewport" content="width-device-width,initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
        <div>
            <a href='/'>Home</a>
        </div>
        <hr>
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
app.get('/:articleName', function (req, res) {
    //articleName=article-one
    //articles(articleName)=={} content object for article one
    var articleName = req.params.articleName;
res.send(createTemplate(articles(articleName)));
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
