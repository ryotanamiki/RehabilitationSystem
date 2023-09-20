-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: rehabilitation_db
-- ------------------------------------------------------
-- Server version	5.7.41-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `birthdate` varchar(255) NOT NULL,
  `rehabilitationStartDate` varchar(255) NOT NULL,
  `careInsuranceExpiration` varchar(255) NOT NULL,
  `specificDiseaseExpiration` varchar(255) NOT NULL,
  `severePhysicalDisabilityExpiration` varchar(255) NOT NULL,
  `careManagerOffice` varchar(255) NOT NULL,
  `careManagerName` varchar(255) NOT NULL,
  `careNeedsLevel` int(11) NOT NULL,
  `welfareAssistance` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'山田太郎','1990年5月15日','2022年9月1日','2030年12月31日','2025年6月30日','2027年3月31日','ABCケアマネージメント','佐藤花子',2,0),(2,'鈴木真理子','1985年11月28日','2023年3月15日','2028年9月30日','2024年12月31日','2026年6月30日','XYZケアサービス','高橋健太',4,1),(3,'佐藤雅子','1972年7月10日','2021年8月3日','2032年5月31日','2027年12月31日','2030年6月30日','DEFケアプランニング','木村直樹',3,0),(4,'田中美智子','1988年2月22日','2023年1月10日','2029年7月31日','2026年3月31日','2028年12月31日','GHIケアプランニング','伊藤直子',1,0),(5,'中村健太','1975年9月3日','2024年6月18日','2031年11月30日','2027年9月30日','2029年6月30日','JKLケアマネージメント','山本理恵子',2,1),(6,'小林裕子','1993年12月5日','2022年11月22日','2032年3月31日','2028年6月30日','2030年12月31日','MNOケアサービス','加藤直美',3,0),(7,'渡辺健二','1978年6月8日','2023年7月5日','2027年12月31日','2026年3月31日','2029年6月30日','PQRケアプランニング','佐々木直人',4,1),(8,'松本美晴','1982年4月18日','2023年8月20日','2031年2月28日','2026年9月30日','2028年12月31日','STUケアサポート','佐々木真子',2,0),(9,'高橋健一','1979年11月6日','2022年12月12日','2033年1月31日','2028年6月30日','2030年9月30日','VWXケアマネージメント','中島真弓',3,0),(10,'斉藤雅子','1991年7月25日','2023年5月3日','2029年10月31日','2026年12月31日','2028年9月30日','YZAケアプランニング','加藤直樹',4,1);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-14 16:18:43

CREATE TABLE `userDetails` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `name_kana` VARCHAR(255) NOT NULL,
  `disease` VARCHAR(255) NOT NULL,
  `medical_history` VARCHAR(400) NOT NULL,
  `goals` VARCHAR(400) NOT NULL,
  `family_composition` VARCHAR(400) NOT NULL,
  `other` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`id`));