var mysql = require('mysql');

var connection = mysql.createConnection({
    host        : 'ec2-15-164-99-13.ap-northeast-2.compute.amazonaws.com',
    user        : 'root',
    password    : '!Poyou11388@@mysql',
    database    : 'test'
});

connection.connect();

connection.query('SELECT * FROM user', function (error, results, fields){
    if (error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();