var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title: "Article One | Anuj Agarwal",
    heading: "Article One",
    date: "Aug 9, 2017",
    content: `  
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>`
},
    'article-two' : {
        title: "Article Two | Anuj Agarwal",
        heading: "Article Two",
        date: "Aug 9, 2017",
        content: `  
                <p>
                    This is the content for my second article. This is the content for my second article. This is the content for my second article.
                </p>`
    },
    'article-three' : {
        title: "Article Three | Anuj Agarwal",
        heading: "Article Three",
        date: "Aug 9, 2017",
        content: `  
                <p>
                    This is the content for my third article. This is the content for my third article. This is the content for my third article.
                </p>`
    }
};
function createTemplate(data){
        var title = data.title;
        var date = data.date;
        var heading = data.heading;
        var content = data.content;
        var htmlTemplate = `
        <!DOCTYPE html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" contect="width=device-width, initial-scale = 1" />
                  <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                <div>
                    <a href="/">Home</a>
                    <br/>
                    <h3>
                        ${heading}
                    </h3>
                </div>
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
