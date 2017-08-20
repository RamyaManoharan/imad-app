var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articleTwo={
    title :'Article Two',
    heading:'Article Two',
    date: 'Sept 5,2017',
    content :` <p>
                    I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.
                </p>
                  <p>
                    I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.
                </p>
                  <p>
                    I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.I am creating my article.Gonna copy paste it.
                </p>`
};
function createTemplate(data)
{
var title=data.title;    
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate = `

    <html>
    <head>
        <title>
            ${title}
        </title>
         <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
 <link href = "/ui/style.css" rel= "stylesheet"/>
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">HOME</a>
            </div>
            <hr/>
            <div>
                <h3>
                    ${heading}
                </h3>
            </div>
            <div>
                ${date}
            </div>
            $({content}
            </div>
        </div>
    </body>
</html>`;

return htmlTemplate;
}

app.get('/aro', function (req, res) {
  res.send(createTemplate(articleTwo));
});

app.get('/art', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'art.html'));
});

app.get('/arth', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'arth.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(__dirname,'ui','main.js'));
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
