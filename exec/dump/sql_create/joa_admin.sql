-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: j10a503.p.ssafy.io    Database: joa
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `admin_id` binary(16) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (_binary '	�\0�&A��^G�#a�','2024-04-03 13:31:10.263432',_binary '\0','2024-04-03 13:31:10.263432','eurohand@naver.com','이유로','$2a$10$qyEnXna.3cRFkQ042M8EyeAkyCbsCICQ9SHh3vk9Q3UWWWh5iyyNe','01099306272'),(_binary '���tH�OߎZD%���','2024-04-03 17:01:27.742079',_binary '\0','2024-04-03 17:01:27.742079','cebu13@naver.com','이정호','$2a$10$DzbbZjii3n15dvu4MSJf3.qMUPfiJ4ULUlZX7fWEcxUdsNNnJQFj.','01090247939'),(_binary '�m%YX\�J��}HT_�.�','2024-04-03 14:56:07.707480',_binary '\0','2024-04-03 14:56:07.707480','rnqhstmd3103@naver.com','구본승','$2a$10$8sMZYi3ddZ7ACAn3YkeOXeFGmDJh/lFnEP1XdQgDrCPt60wF29DOe','01094010285'),(_binary '�dJ1�SA���K�','2024-04-03 13:33:38.009454',_binary '\0','2024-04-03 13:33:38.009454','rnqhstmd0219@gmail.com','구본승','$2a$10$/oQahr1mw6UsH2931t8lOuRr1G2JCITtzJVZtcJ1qoPseu4kWyct.','01094010286'),(_binary '\��vʿJj�Cn\n92\�','2024-04-03 19:06:21.742107',_binary '\0','2024-04-03 19:06:21.742107','joatestbed@ssafy.com','테스트','$2a$10$09E1iuvpYsh2fJtQvqbi6uOg6dP2iXpTO740W.7fjnukn1B.N0NN6','01077778888'),(_binary '\�\�,\�E��\�^�b\�f\�','2024-04-03 21:58:13.911251',_binary '\0','2024-04-03 21:58:13.911251','eurohandd@naver.com','사유로','$2a$10$EpxS/Iky1FvLvmaOk4qN2.7l0UWvU6sDtXyKG6qtAjJRnGHd//f6e','01099306277'),(_binary '�D�\�\�E��\��Q,���','2024-04-03 13:56:34.609921',_binary '\0','2024-04-03 15:11:54.109600','eurohand0@gmail.com','삼유로','$2a$10$WfrHjvihgrIed0tAi9oqLOo0yihQ3.ATSGgjHrjeXANbRJXEZJ1Xu','01099306273');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-04  9:24:51
