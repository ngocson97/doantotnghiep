const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');

// connect
const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '03101997',
   database: 'shopcart'
});

// Initialize the app
const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyparser.json());

// select all product
app.get("/product", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_PRODUCTS = `SELECT * FROM tb_product`;
   connection.query(SELECT_PRODUCTS, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});

app.get("/find/:find", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_PRODUCTS = `SELECT *FROM tb_product where tb_product.productName like '%${req.params.find}%'`;
   connection.query(SELECT_PRODUCTS, req.params.find, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});
//get all category
app.get("/category", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_CATEGORIES = `SELECT * FROM tb_category`;
   connection.query(SELECT_CATEGORIES, function (error, results) {
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


// get category id 

app.get("/category/:id", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_CATEGORIES = `SELECT * FROM tb_category WHERE idCate = ?`;
   connection.query(SELECT_CATEGORIES, req.params.id, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});


// select random 
app.get("/productrandom", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_CATEGORIES = `select * from tb_product  order by rand() limit 3`;
   connection.query(SELECT_CATEGORIES, req.params.id, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});

// add new category

app.post("/category", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const INSERT_CATEGORY = "INSERT INTO `tb_category` (`cateName`,`created_at`,`updated_at`) VALUES(?,?,?)";

   connection.query(INSERT_CATEGORY, [req.body.cateName, req.body.created_at, req.body.updated_at], function (error, results) {
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

// delete product

app.delete("/product/:id", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });
   const DELETE_PRODUCT = 'DELETE FROM tb_product WHERE idProduct = ?';
   connection.query(DELETE_PRODUCT, [req.params.id], function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("delete cuccess");
         return res.send(results);
      }
   });

});
// insert product
app.post("/product", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });
   const INSERT_PRODUCT = "INSERT INTO `tb_product` (`productName`,`price`,`quantity`,`image`,`keywords`,`description`,`idCate`,`created_at`,`updated_at`,`pricenew`,`new`) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
   connection.query(INSERT_PRODUCT, [req.body.productName, req.body.price, req.body.quantity, req.body.image, req.body.keywords, req.body.description, req.body.idCate, req.body.created_at, req.body.updated_at, req.body.pricenew, req.body.neww], function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("insert complete");
         return res.send(JSON.stringify(results));
      }
   });
});


// update category

app.put("/category/:id", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });
   const UPDATE_CATEGORY = 'UPDATE tb_category SET `cateName` = ?,`updated_at` =? WHERE `idCate` = ?';
   connection.query(UPDATE_CATEGORY, [req.body.cateName, req.body.updated_at, req.params.id], function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("update cuccess");
         return res.send(results);
      }
   });

});

app.put("/order/:id", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });
   const UPDATE_ORDER = 'UPDATE tb_order SET `status` = ?,`update_at` =? WHERE `idOrder` = ?';
   connection.query(UPDATE_ORDER, [req.body.status, req.body.updated_at, req.params.id], function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("update cuccess");
         return res.send(results);
      }
   });

});

//
app.put("/productt/:id", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });
   const UPDATE_CATEGORY = 'UPDATE tb_product SET `quantity` = ? WHERE `idProduct` = ?';
   connection.query(UPDATE_CATEGORY, [req.body.quantity, req.params.id], function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("update cuccess");
         return res.send(results);
      }
   });
});

app.put("/product/:id", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });
   const UPDATE_CATEGORY = 'UPDATE tb_product SET `productName` =? ,`price`=?,`quantity`=?,`image`=?,`keywords`=?,`description`=?,`idCate`=?,`updated_at`=?,`pricenew`=?,`new`=? WHERE `idProduct` = ?';
   connection.query(UPDATE_CATEGORY, [req.body.productName, req.body.price, req.body.quantity, req.body.image, req.body.keywords, req.body.description, req.body.idCate, req.body.updated_at, req.body.pricenew, req.body.neww, req.params.id], function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("update cuccess");
         return res.send(results);
      }
   });
});


// get product idcate
app.get("/productcate/:id", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });
   const idCate = req.params.id;
   const SELECT_PRODUCTS = `SELECT * FROM tb_product WHERE idCate = ?`
   connection.query(SELECT_PRODUCTS, [idCate], function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("success");
         return res.send(results);
      }
   });
});

// get product id
app.get("/product/:id", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });
   const id = req.params.id;
   const SELECT_PRODUCTS_WHERE_ID = `SELECT * FROM tb_product WHERE idProduct= ?`
   connection.query(SELECT_PRODUCTS_WHERE_ID, [id], function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});
// Start the server

// insert into user 
app.post("/users", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const INSERT_USER = "INSERT INTO `user` (`username`,`fullname`,`password`,`email`,`phoneNumber`,`gender`,`permission`,`created_at`,`updated_at`) VALUES(?,?,?,?,?,?,?,?,?)";

   connection.query(INSERT_USER, [req.body.userName, req.body.fullname, req.body.password, req.body.email, req.body.phoneNumber, req.body.gender, req.body.permision, req.body.created_at, req.body.updated_at], function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("insert complete");


         return res.send(JSON.stringify(results));
      }
   });
});

// sản phẩm bán chạy 

app.get("/sanphambanchay", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_PRODUCTS = `SELECT tb_product.image,tb_product.price, tb_product.new,tb_product.pricenew ,tb_orderdetail.idProduct,tb_product.productName, sum(tb_orderdetail.quantity) as soluongban FROM tb_orderdetail inner join tb_order on tb_orderdetail.idOrder = tb_order.idOrder inner join tb_product on tb_orderdetail.idProduct = tb_product.idProduct WHERE  (tb_order.status = 2 or tb_order.status= 1 ) group by tb_orderdetail.idProduct order by soluongban desc limit 3`;
   connection.query(SELECT_PRODUCTS, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});
// new product 


app.get("/newProduct", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_PRODUCTS = `SELECT *FROM tb_product order by dayofyear(tb_product.created_at) desc limit 4`;
   connection.query(SELECT_PRODUCTS, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});

// get all users 

app.get("/users", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_PRODUCTS = `SELECT * FROM user`;
   connection.query(SELECT_PRODUCTS, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});

// get all order 

app.get("/order", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_PRODUCTS = `SELECT * FROM tb_order`;
   connection.query(SELECT_PRODUCTS, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});
// get order by id 

app.get("/order/:id", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_ORDER = `SELECT * FROM tb_order WHERE idOrder = ?`;
   connection.query(SELECT_ORDER, req.params.id, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});

// tong ngay 
app.get("/totald/:d", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_ORDER = `select sum(totalMoney) as tongtien from tb_order where (tb_order.status = 2 or tb_order.status= 1 ) and dayofyear(tb_order.update_at) =?`;
   connection.query(SELECT_ORDER, req.params.d, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});

// tong thang 
app.get("/totalm/:m", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_ORDER = `select sum(totalMoney) as tongtien from tb_order  where (tb_order.status = 2 or tb_order.status= 1 ) and month(tb_order.update_at) =?`;
   connection.query(SELECT_ORDER, req.params.m, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});
// tong tuan 
app.get("/totalw/:m", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_ORDER = `select sum(totalMoney) as tongtien from tb_order  where (tb_order.status = 2 or tb_order.status= 1 ) and week(tb_order.update_at) =?`;
   connection.query(SELECT_ORDER, req.params.m, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});

// get orby theo ngày

app.get("/orderdetaild/:date", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_ORDER = `SELECT tb_product.price,tb_product.price*sum(tb_orderdetail.quantity) as thanhtien ,tb_orderdetail.idProduct,tb_product.productName, sum(tb_orderdetail.quantity) as soluongban  FROM tb_orderdetail inner join tb_order on tb_orderdetail.idOrder = tb_order.idOrder inner join tb_product on tb_orderdetail.idProduct = tb_product.idProduct WHERE  (tb_order.status = 2 or tb_order.status= 1 ) and dayofyear(tb_order.update_at) =? group by tb_orderdetail.idProduct order by soluongban desc`;
   connection.query(SELECT_ORDER, req.params.date, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});

// theo tuan 

app.get("/orderdetailw/:week", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_ORDER = `SELECT tb_product.price,tb_product.price*sum(tb_orderdetail.quantity) as thanhtien ,tb_orderdetail.idProduct,tb_product.productName, sum(tb_orderdetail.quantity) as soluongban FROM tb_orderdetail inner join tb_order on tb_orderdetail.idOrder = tb_order.idOrder inner join tb_product on tb_orderdetail.idProduct = tb_product.idProduct WHERE  (tb_order.status = 2 or tb_order.status= 1 ) and week(tb_order.update_at) =?  group by tb_orderdetail.idProduct order by soluongban desc`;
   connection.query(SELECT_ORDER, req.params.week, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});

//theo thang 

app.get("/orderdetailm/:m", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_ORDER = `SELECT tb_product.price,tb_product.price*sum(tb_orderdetail.quantity) as thanhtien ,tb_orderdetail.idProduct,tb_product.productName, sum(tb_orderdetail.quantity) as soluongban FROM tb_orderdetail inner join tb_order on tb_orderdetail.idOrder = tb_order.idOrder inner join tb_product on tb_orderdetail.idProduct = tb_product.idProduct WHERE  (tb_order.status = 2 or tb_order.status= 1 ) and month(tb_order.update_at) =? group by tb_orderdetail.idProduct order by soluongban desc`;
   connection.query(SELECT_ORDER, req.params.m, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});

// get order detail 
app.get("/orderdetail/:id", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const SELECT_CATEGORIES = `SELECT tb_orderdetail.quantity,tb_orderdetail.idProduct,tb_orderdetail.totalMoney,tb_product.productName,tb_product.price FROM tb_orderdetail inner join tb_product on tb_orderdetail.idProduct = tb_product.idProduct  WHERE idOrder = ?`;
   connection.query(SELECT_CATEGORIES, req.params.id, function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("sucess");
         return res.send(results);
      }
   });
});

// add order 
app.post("/order", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const INSERT_ORDER = "INSERT INTO `tb_order` (`idOrder`,`customerFullName`,`customerAddress`,`customerEmail`,`customerPhone`,`totalMoney`,`created_at`,`update_at`) VALUES(?,?,?,?,?,?,?,?)";

   connection.query(INSERT_ORDER, [req.body.idOrder, req.body.fullname, req.body.address, req.body.email, req.body.phoneNumber, req.body.totalMoney, req.body.created_at, req.body.updated_at], function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("insert complete");
         return res.send(JSON.stringify(results));
      }
   });
});

// add Order details

app.post("/orderdetail", function (req, res) {
   connection.connect(function (err) {
      if (err) {
         return err;
      }
      else {
         console.log("connect complete");
      }
   });

   const INSERT_ORDERDETAIL = "INSERT INTO `tb_orderdetail` (`idProduct`,`quantity`,`totalmoney`,`idOrder`) VALUES(?,?,?,?)";

   connection.query(INSERT_ORDERDETAIL, [req.body.idProduct, req.body.quantity, req.body.totalmoney, req.body.idOrder], function (error, results) {
      if (error) {
         console.log(error);
         return res.send(error)
      }
      else {
         console.log("insert complete");
         return res.send(JSON.stringify(results));
      }
   });
});
// send mail

app.post('/mail', function (req, res) {
   nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
         host: 'smtp.gmail.com',
         port: 587,
         auth: {
            user: 'test08011997@gmail.com', // generated ethereal user
            pass: 'Test12345678' // generated ethereal password
         }
      });
      const carts = req.body.cart;
      const Email = req.body.email;
      const idOrder = req.body.idOrder;
      const info = req.body.Info;
      console.log(Email);
      var html = "";
      var text = "";
      var totalMoney = 0;
      if (carts != null) {
         text = 'Đơn hàng bạn đã đặt là: ';
         html = `
         <h2>Mã đơn hàng của bạn là : ${idOrder} </h2>
         <table>
         <tr>
          <th>STT</th>
          <th>Tên sản phẩm</th>
          <th>Số lượng</th>
          <th>Đơn giá</th>
          <th>Thành tiền</th>
         </tr>
        `

         for (var i = 0; i < carts.length; i++) {
            totalMoney = totalMoney + carts[i].quantity * carts[i].product.price;
            html = html +
               `<tr>
          <td>${i + 1}</td>
          <td>${carts[i].product.productName}</td>
          <td>${carts[i].quantity}</td>
          <td>${carts[i].product.price}</td>
          <td>${carts[i].quantity * carts[i].product.price}</td>
         </tr>`;
         }
         html += `</table>
         <br />
         <h4>Tổng tiền cho hóa đơn của bạn là: </h4> <h3>${totalMoney} VNĐ </h3>
      `
      }
      else {
         html = `
         <h4>Đơn hàng : ${idOrder} của bạn đã được xác nhận và đang được chuyển đến </h4>
         <br />
         ${info}
         <br />
         <button><a href="http://localhost:2222/chi-tiet-hoa-don?ma-hoa-don=${idOrder}&permis=khachhang">Đã nhận được hàng</a></button>
         `

      }

      // setup email data with unicode symbols
      let mailOptions = {

         from: '"Đơn hàng" <test08011997@gmail.com>',
         to: Email,
         subject: 'Đơn đặt hàng',
         html: html
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
            return console.log(error);
         }
         console.log('Message sent: %s', info.messageId);
         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
   });


});



app.listen(3000, () => {
   console.log('Go to http://localhost:3000/ to connect server');
});

