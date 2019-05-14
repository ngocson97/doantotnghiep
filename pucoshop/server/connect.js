const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyparser = require('body-parser');


// connect
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '03101997',
  database: 'cinema'
});

// Initialize the app
const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyparser.json());

app.get("/film", function (req, res) {
  connection.connect(function (err) {
    if (err) {
      return err;
    }
    else {
      console.log("connect complete");
    }
  });

  const INSERT_CATEGORY = "SELECT * FROM film";

  connection.query(INSERT_CATEGORY, function (error, results) {
    if (error) {
      console.log(error);
      return res.send(error)
    }
    else {
      console.log(results);
      return res.json({ data: results });
    }
  });
});
app.get("/category", function (req, res) {
  connection.connect(function (err) {
    if (err) {
      return err;
    }
    else {
      console.log("connect complete");
    }
  });

  const INSERT_CATEGORY = "SELECT * FROM category";


  connection.query(INSERT_CATEGORY, function (error, results) {
    if (error) {
      console.log(error);
      return res.send(error)
    }
    else {
      console.log(results);
      return res.json({ data: results });
    }
  });
});
app.get("/country", function (req, res) {
  connection.connect(function (err) {
    if (err) {
      return err;
    }
    else {
      console.log("connect complete");
    }
  });

  const INSERT_CATEGORY = "SELECT * FROM country";

  connection.query(INSERT_CATEGORY, function (error, results) {
    if (error) {
      console.log(error);
      return res.send(error)
    }
    else {
      console.log(results);
      return res.json({ data: results });
    }
  });
});


app.get("/listfilm", function (req, res) {
  connection.connect(function (err) {
    if (err) {
      return err;
    }
    else {
      console.log("connect complete");
    }
  });
  var { id, link } = req.query;
  const INSERT_LINK = "INSERT INTO `episode` (`film_id`,`url`) VALUES('" + id + "','" + link + "')";

  connection.query(INSERT_LINK, function (error, results) {
    if (error) {
      console.log(error);
      return res.send(error)
    }
    else {
      console.log("sucess");
      return res.send(JSON.stringify(results));
    }
  });
});


app.post("/insertcate", function (req, res) {
  connection.connect(function (err) {
    if (err) {
      return err;
    }
    else {
      console.log("connect complete");
    }
  });
  const INSERT_LINK = 'INSERT INTO `category` (`title`) VALUES("?")';

  connection.query(INSERT_LINK, req.body.title, function (error, results) {
    if (error) {
      console.log(error);
      return res.send(error)
    }
    else {
      console.log("sucess");
      return res.send(JSON.stringify(results));
    }
  });
});
app.get("/insertcountry", function (req, res) {
  connection.connect(function (err) {
    if (err) {
      return err;
    }
    else {
      console.log("connect complete");
    }
  });
  var { countryname } = req.query;
  const INSERT_LINK = "INSERT INTO `country` (`country_name`) VALUES('" + countryname + "')";

  connection.query(INSERT_LINK, function (error, results) {
    if (error) {
      console.log(error);
      return res.send(error)
    }
    else {
      console.log("sucess");
      return res.send(JSON.stringify(results));
    }
  });
});
app.get("/insertfilm", function (req, res) {
  connection.connect(function (err) {
    if (err) {
      return err;
    }
    else {
      console.log("connect complete");
    }
  });
  var { avatar, description, director, title, total_time, total_view, year } = req.query;
  console.log(avatar);

  const INSERT_CATEGORY = "INSERT INTO `film` (`avatar`,`film_description`,`film_director`,`film_title`,`total_time`,`total_view`,`year`) VALUES('" + avatar + "','" + description + "','" + director + "','" + title + "','" + total_time + "','" + total_view + "','" + year + "')";

  connection.query(INSERT_CATEGORY, function (error, results) {
    if (error) {
      console.log(error);
      return res.send(error)
    }
    else {
      console.log("sucess");
      return res.send(JSON.stringify(results));
    }
  });
});
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/ to connect server');
});

