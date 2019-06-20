-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: shopcart
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fullname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phoneNumber` int(20) NOT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `created_at` text COLLATE utf8_unicode_ci,
  `updated_at` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`) USING BTREE,
  UNIQUE KEY `email` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (3,'customer3','Trần Văn C','123456','customer3@mail.com',123456788,1,'1','2'),(4,'customer4','Trần Văn D','123456','customer4@mail.com',123456787,0,'2','6'),(5,'customer5','Trần Văn E','123456','customer5@mail.com',123456786,1,'3','4'),(6,'customer6','Trần Văn F','123456','customer6@mail.com',123456785,1,'4','3'),(7,'customer7','Trần Văn G','123456','customer7@mail.com',123456784,0,'5','6'),(8,'ngocson','Đỗ Ngọc Linh','03101997','ngocson031097@gmail.com',1652124225,0,NULL,NULL);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `help`
--

DROP TABLE IF EXISTS `help`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `help` (
  `idhelp` int(11) NOT NULL AUTO_INCREMENT,
  `ask` text NOT NULL,
  `answer` text NOT NULL,
  PRIMARY KEY (`idhelp`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `help`
--

LOCK TABLES `help` WRITE;
/*!40000 ALTER TABLE `help` DISABLE KEYS */;
INSERT INTO `help` VALUES (4,'Tôi sinh tháng 1 thì nên dùng loại đá quý màu gì?','Bạn nên mua đá Garnet (Ngọc hồng lựu)'),(5,'Tôi sinh tháng 2 thì nên dùng loại đá quý màu gì?','Bạn nên mua đá Amethyst (Thạch anh tím)'),(6,'Tôi sinh tháng 3 thì nên dùng loại đá quý màu gì?','Bạn nên mua đá Aquamarine (Ngọc xanh biển)'),(7,'Tôi sinh tháng 4 thì nên dùng loại đá quý màu gì?','Bạn nên mua trang sức gắn đá Diamond (Kim cương). '),(8,'Tôi sinh tháng 5 thì nên dùng loại đá quý màu gì?','Bạn nên mua  trang sức gắn đá Emerald (Ngọc bích)'),(9,'Tôi sinh tháng 6 thì nên dùng loại đá quý màu gì?','Bạn nên mua  trang sức gắn đá Pearl (Ngọc trai)'),(10,'Tôi sinh tháng 7 thì nên dùng loại đá quý màu gì?','Bạn nên mua  trang sức gắn Ruby (Hồng ngọc)'),(11,'Tôi sinh tháng 8 thì nên dùng loại đá quý màu gì?','Bạn nên mua  trang sức gắn đá Saphier'),(12,'Tôi có tóc màu thì nên dùng loại trang sức gì?','Hãy dùng màu đá quý hợp với màu tóc của bạn'),(13,'Tôi có mệnh mộc nên dùng loại trang sức nào?','Nhạy cảm, hoà nhã và sáng tạo là những đặc điểm nổi bật của người mệnh Mộc'),(14,'Tôi có mệnh kim nên dùng loại trang sức nào?','Thêm nữa, vì Thuỷ chế khắc được Hoả nên người mệnh Thuỷ có thể đeo trang sức gắn đá quý tượng trưng cho mệnh Hoả là màu đỏ, hồng hay tím'),(15,'Tôi có mệnh thủy nên dùng loại trang sức nào?','Tương sinh: đá màu Xanh lá cây.'),(16,'Tôi có mệnh hỏa nên dùng loại trang sức nào?','Tương sinh: màu đỏ, hồng, tím'),(17,'Tôi có mệnh thổ nên dùng loại trang sức nào?','Tương sinh: đá vàng sậm, nâu đất, mắt hổ'),(18,'câu hỏi là gì vậy','đó là câu trả lời'),(19,'tôi sinh tháng 12','bạn nên sống đúng ý nghĩa');
/*!40000 ALTER TABLE `help` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_category`
--

DROP TABLE IF EXISTS `tb_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_category` (
  `idCate` int(11) NOT NULL AUTO_INCREMENT,
  `cateName` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `keywords` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` text COLLATE utf8_unicode_ci,
  `updated_at` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`idCate`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_category`
--

LOCK TABLES `tb_category` WRITE;
/*!40000 ALTER TABLE `tb_category` DISABLE KEYS */;
INSERT INTO `tb_category` VALUES (1,'Điện thoại','Điện thoại','Điện thoại cũ giá rẻ','5','Fri May 11 14:30:45 ICT 2018'),(2,'Máy tính','Máy tính','Máy tính','10','Sat May 05 15:27:59 ICT 2018'),(3,'Thiết bị âm thanh','Thiết bị âm thanh','Thiết bị âm thanh','15','Sat May 05 15:28:03 ICT 2018'),(4,'Đồng hồ','Đồng hồ','Các sản phẩm đồng hồ','8','2019-04-18T08:54:53.918Z'),(14,'phụ kiện ',NULL,NULL,'2019-04-18T08:00:45.081Z','2019-04-18T09:07:00.397Z'),(15,'máy ảnh',NULL,NULL,'2019-05-10T07:09:13.104Z','2019-05-10T07:09:13.104Z'),(16,'Shin chó',NULL,NULL,'2019-05-13T14:05:05.388Z','2019-05-13T14:05:05.388Z');
/*!40000 ALTER TABLE `tb_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_contact`
--

DROP TABLE IF EXISTS `tb_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_contact` (
  `id_contact` int(11) NOT NULL,
  `full_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `messenger` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT '1',
  `created_at` text COLLATE utf8_unicode_ci,
  `updated_at` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id_contact`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_contact`
--

LOCK TABLES `tb_contact` WRITE;
/*!40000 ALTER TABLE `tb_contact` DISABLE KEYS */;
INSERT INTO `tb_contact` VALUES (1,'Nguyễn Văn A','nguyenvana@mail.com','Mua hàng','Good',1,'1','2'),(2,'Nguyễn Văn B','nguyenvanb@mail.com','Chất lượng kém','Bad',0,'1','1'),(3,'Nguyễn Văn C','nguyenvanc@mail.com','Đã nhận hàng','Tốt',1,'1','2'),(4,'Nguyễn Văn D','nguyenvand@mail.com','Hàng giao chậm','Kém chất lượng',1,'1','2'),(5,'Nguyễn Văn E','nguyenvane@mail.com','Phục vụ tốt','Tốt',1,'1','2');
/*!40000 ALTER TABLE `tb_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_order`
--

DROP TABLE IF EXISTS `tb_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_order` (
  `idOrder` bigint(20) NOT NULL,
  `customerFullName` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `customerAddress` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `customerPhone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `customerEmail` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `totalMoney` float DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `created_at` text COLLATE utf8_unicode_ci NOT NULL,
  `update_at` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`idOrder`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_order`
--

LOCK TABLES `tb_order` WRITE;
/*!40000 ALTER TABLE `tb_order` DISABLE KEYS */;
INSERT INTO `tb_order` VALUES (1556912250408,'Đỗ Ngọc Linh','Tiền Hải Thái Binh','1234321','ngocson031097@gmail.com',16000000,2,'2019-05-03T19:37:30.408Z','2019-05-03T19:48:15.118Z'),(1556912345645,'Đỗ Ngọc Linh','Tiền Hải Thái Binh','0961889097','ngocson031097@gmail.com',1060000,2,'2019-05-03T19:39:05.645Z','2019-05-03T20:33:24.183Z'),(1556952057292,'Đỗ Ngọc Linh','Tiền Hải Thái Binh','0961889097','ngocson031097@gmail.com',29240000,2,'2019-05-04T06:40:57.292Z','2019-05-04T06:41:47.488Z'),(1556983890452,'Đỗ Ngọc Linh','Tiền Hải Thái Binh','0352124225','ngocson031097@gmail.com',16000000,2,'2019-05-04T15:31:30.452Z','2019-05-04T17:43:40.550Z'),(1556997479905,'Đỗ Ngọc Linh','Thái Bình','1234321','ngocson031097@gmail.com',42462500,2,'2019-05-04T19:17:59.905Z','2019-05-04T19:17:59.905Z'),(1557063474655,'Đỗ Ngọc Linh','Tiền Hải Thái Binh','0961889097','ngocson031097@gmail.com',4000000,3,'2019-05-05T13:37:54.655Z','2019-05-11T08:44:06.161Z'),(1557125197294,'Nguyễn Thị Huyền','Cát Quế - Hà Nội','0982630397','huyennguyenn031997@gmail.com',16000000,1,'2019-05-06T06:46:37.294Z','2019-05-09T13:39:09.698Z'),(1557144221036,'Đỗ Ngọc Linh','Tiền Hải Thái Binh','0352124225','ngocson031097@gmail.com',4030000,2,'2019-05-06T12:03:41.036Z','2019-05-09T17:35:35.904Z'),(1557474274173,'Nguyễn Thúy Hường','Số nhà 53 Ngõ 126 Nguyễn Đổng Chi Từ Liêm Hà Nội','0348985259','thuyhuong031099@gmail.com',3000000,1,'2019-05-10T07:44:34.173Z','2019-05-10T15:38:40.501Z'),(1557474429748,'Đỗ Ngọc Linh','Số nhà 53 Ngõ 126 Nguyễn Đổng Chi Từ Liêm Hà Nội','0961889097','ngocson031097@gmail.com',3000000,3,'2019-05-10T07:47:09.748Z','2019-05-10T15:39:23.093Z'),(1557475481996,'Đỗ Ngọc Linh','Tiền Hải Thái Binh','1234321','ngocson031097@gmail.com',12,3,'2019-05-10T08:04:41.996Z','2019-05-11T03:05:36.429Z'),(1557475648115,'Đỗ Ngọc Linh','Tiền Hải Thái Binh','1234321','thuyhuong031099@gmail.com',4060000,3,'2019-05-10T08:07:28.115Z','2019-05-10T15:36:16.368Z'),(1557565968458,'Đỗ Ngọc Linh','Tiền Hải Thái Binh','0961889097','ngocson031097@gmail.com',2000000,3,'2019-05-11T09:12:48.458Z','2019-05-11T09:13:45.423Z'),(1557572869560,'Đỗ Ngọc Linh','Tiền Hải Thái Binh','0961889097','ngocson031097@gmail.com',10000000,0,'2019-05-11T11:07:49.560Z','2019-05-11T11:07:49.560Z'),(1557573049365,'Đỗ Ngọc Linh','Tiền Hải Thái Binh','0961889097','ngocson031097@gmail.com',20060000,3,'2019-05-11T11:10:49.365Z','2019-05-11T11:11:31.111Z'),(1557573272629,'a','b','0961889097','c@gmail.com',500,3,'2019-05-11T11:14:32.629Z','2019-05-11T11:19:50.504Z');
/*!40000 ALTER TABLE `tb_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_orderdetail`
--

DROP TABLE IF EXISTS `tb_orderdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_orderdetail` (
  `idOrderDetails` int(11) NOT NULL AUTO_INCREMENT,
  `idProduct` varchar(150) CHARACTER SET utf8 NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '0',
  `totalMoney` float DEFAULT NULL,
  `idOrder` longtext CHARACTER SET utf8,
  `create_at` text COLLATE utf8_unicode_ci,
  `update_at` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`idOrderDetails`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_orderdetail`
--

LOCK TABLES `tb_orderdetail` WRITE;
/*!40000 ALTER TABLE `tb_orderdetail` DISABLE KEYS */;
INSERT INTO `tb_orderdetail` VALUES (85,'5',2,8000000,'1556912250408',NULL,NULL),(86,'7',2,8000000,'1556912250408',NULL,NULL),(87,'12',1,1000000,'1556912345645',NULL,NULL),(88,'9',2,60000,'1556912345645',NULL,NULL),(89,'5',3,12000000,'1556952057292',NULL,NULL),(90,'7',2,8000000,'1556952057292',NULL,NULL),(91,'9',8,240000,'1556952057292',NULL,NULL),(92,'4',3,9000000,'1556952057292',NULL,NULL),(93,'5',1,4000000,'1556983890452',NULL,NULL),(94,'8',2,24,'1556983890452',NULL,NULL),(95,'7',3,12000000,'1556983890452',NULL,NULL),(96,'2',2,4000000,'1556996772966',NULL,NULL),(97,'3',1,2000000,'1556996772966',NULL,NULL),(98,'1',2,4246250,'1556997479905',NULL,NULL),(99,'3',1,2000000,'1557063474655',NULL,NULL),(100,'12',2,2000000,'1557063474655',NULL,NULL),(101,'13',1,4000000,'1557125197294',NULL,NULL),(102,'7',1,4000000,'1557125197294',NULL,NULL),(103,'5',2,8000000,'1557125197294',NULL,NULL),(104,'7',1,4000000,'1557144221036',NULL,NULL),(105,'9',1,30000,'1557144221036',NULL,NULL),(106,'4',1,3000000,'1557474274173',NULL,NULL),(107,'4',1,3000000,'1557474429748',NULL,NULL),(108,'8',1,12,'1557475481996',NULL,NULL),(109,'12',4,4000000,'1557475648115',NULL,NULL),(110,'9',2,60000,'1557475648115',NULL,NULL),(111,'3',1,2000000,'1557565968458',NULL,NULL),(112,'13',1,10000000,'1557572869560',NULL,NULL),(113,'9',2,60000,'1557573049365',NULL,NULL),(114,'13',2,20000000,'1557573049365',NULL,NULL),(115,'16',1,500,'1557573272629',NULL,NULL);
/*!40000 ALTER TABLE `tb_orderdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_product`
--

DROP TABLE IF EXISTS `tb_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_product` (
  `idProduct` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL DEFAULT '0',
  `quantity` int(11) DEFAULT '0',
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `keywords` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` smallint(6) NOT NULL DEFAULT '1',
  `idCate` int(11) NOT NULL,
  `created_at` text COLLATE utf8_unicode_ci NOT NULL,
  `updated_at` text COLLATE utf8_unicode_ci NOT NULL,
  `pricenew` int(11) DEFAULT NULL,
  `new` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProduct`),
  UNIQUE KEY `productName` (`productName`),
  KEY `index_CateProduct` (`idCate`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_product`
--

LOCK TABLES `tb_product` WRITE;
/*!40000 ALTER TABLE `tb_product` DISABLE KEYS */;
INSERT INTO `tb_product` VALUES (1,'Máy ảnh KTS Canon PowerShot SX410',2123123,2,'d.jpg','máy ảnh','Máy ảnh KTS Canon PowerShot SX410',1,15,'1','Sat May 05 15:22:50 ICT 2018',10000000,80),(2,'Điện thoại vivo 1606-Y53',2000000,0,'b.jpg','điện thoại','Điện thoại vivo 1606-Y53',1,1,'5','6',10000000,80),(3,'Loa Vi Tính 2.1 SOUNDMAX AW200',2000000,2,'i.jpg','thiết bị âm thanh','Loa vi tính',0,3,'1','2',10000000,70),(4,'Màn hình máy tinh apple ',3000000,2,'f.jpg','Màn hình máy tính apple','Màn hình máy tính apple',1,2,'2','2019-05-03T20:40:17.474Z',10000000,99),(5,'Laptop Dell 7559',4000000,4,'g.jpg','Laptop ','Nhẫn gắn đá quý',0,2,'3','4',10000000,80),(7,' Đồng hồ giá mới',4000000,2,'shopping-cart-template.PNG','Đồng hồ đẹp','ĐỒng hồ đẹp',1,4,'1','2019-05-03T08:58:41.049Z',10000000,60),(8,'đồng hồ đẹp',1200000,4,'shop-cart.PNG','Đồng hồ đẹp','ádfsadf',1,4,'2019-04-19T21:09:59.679Z','2019-04-19T21:09:59.679Z',10000000,NULL),(9,'ĐIện thoại j6',30000,0,'c.jpg','ĐIện thoại','ĐIiện thoại đẹp giá rẻ',1,1,'2019-04-19T21:24:15.814Z','2019-04-19T21:24:15.814Z',10000000,12),(12,'đồng hồ đẹp 121',1000000,4,'j.jpg','Đồng hồ đẹp','123123',1,4,'2019-04-19T21:28:00.770Z','2019-04-19T21:28:00.770Z',10000000,60);
/*!40000 ALTER TABLE `tb_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fullname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phoneNumber` int(20) NOT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `permission` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` smallint(6) DEFAULT '1',
  `created_at` text COLLATE utf8_unicode_ci,
  `updated_at` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=189 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin1','Trần Văn A','123456','admin1@mail.com',123456,0,'1',0,'1','2'),(2,'admin2','Trần Văn B','123456','admin2@mail.com',123455,1,'1',1,'4','2'),(11,'ngocson','Đỗ Ngọc Sơn','03101997','ngocson03101997@gmail.com',1652124225,0,'1',0,NULL,NULL),(32,'linhnhi','Nguyễn Linh Nhi','123456','linhnhi2508@gmail.com',1652124225,0,'0',0,NULL,NULL),(135,'ngocson112312','Đỗ Ngọc Linh','123','thuyhuong031099@gmail.com',1212123,NULL,'0',1,'2019-04-19T08:03:04.499Z','2019-04-19T08:03:04.499Z'),(153,'ngocson111','Đỗ Ngọc Linh','12345','thuyhuong111031099@gmail.com',1234321,NULL,'0',1,'2019-04-19T08:03:54.338Z','2019-04-19T08:03:54.338Z'),(188,'ngocson112312313','Đỗ Ngọc Linh','123','thuyhuong031123121099@gmail.com',1234321,NULL,'0',1,'2019-04-19T08:07:49.931Z','2019-04-19T08:07:49.931Z');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-20  8:13:51
