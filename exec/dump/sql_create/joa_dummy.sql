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
-- Table structure for table `dummy`
--

DROP TABLE IF EXISTS `dummy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dummy` (
  `id` binary(16) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `account_count` int DEFAULT NULL,
  `admin_id` binary(16) DEFAULT NULL,
  `member_count` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `transaction_count` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dummy`
--

LOCK TABLES `dummy` WRITE;
/*!40000 ALTER TABLE `dummy` DISABLE KEYS */;
INSERT INTO `dummy` VALUES (_binary 'k�\�\�@�E`��X�','2024-04-03 19:08:19.445524',_binary '\0','2024-04-03 19:08:19.445524',NULL,_binary '���tH�OߎZD%���',NULL,'호정은행',15),(_binary '�w�@����f���','2024-04-03 19:28:55.669106',_binary '\0','2024-04-03 19:28:55.669106',NULL,_binary '\��vʿJj�Cn\n92\�',NULL,'거래내역3개 만들기',3),(_binary '���Y@ܗM�\�\'a','2024-04-03 14:25:49.885853',_binary '\0','2024-04-03 14:25:49.885853',NULL,_binary '�dJ1�SA���K�',NULL,'1일전 더미',72),(_binary '3\�\�\ZB��\����','2024-04-03 14:11:09.313687',_binary '\0','2024-04-03 14:11:09.313687',NULL,_binary '�dJ1�SA���K�',NULL,'더미 멤버의 거래내역 생성',50),(_binary '<\�+OC\�\�s���','2024-04-03 19:02:15.505090',_binary '\0','2024-04-03 19:02:15.505090',NULL,_binary '�dJ1�SA���K�',NULL,'더미 거래내역 만들기',39),(_binary 'P\�@�H�1A#w8%','2024-04-03 19:27:21.592116',_binary '\0','2024-04-03 19:27:21.592116',NULL,_binary '\��vʿJj�Cn\n92\�',3,'멤버3명 만들기',NULL),(_binary 'T�Ʈ�KG�_IQ$\�v','2024-04-03 14:25:22.980330',_binary '\0','2024-04-03 14:25:22.980330',NULL,_binary '�dJ1�SA���K�',NULL,'3일전 더미',88),(_binary '�i\�:�FR�\�f�GIh','2024-04-03 19:28:41.398575',_binary '\0','2024-04-03 19:35:19.514324',3,_binary '\��vʿJj�Cn\n92\�',NULL,'수정테스트',NULL),(_binary '�Y\�\�Mf�\�˃��y','2024-04-03 14:25:36.955937',_binary '\0','2024-04-03 14:25:36.955937',NULL,_binary '�dJ1�SA���K�',NULL,'2일전 더미',60),(_binary '�j��\�dC<���b\0','2024-04-03 14:24:50.455153',_binary '\0','2024-04-03 14:24:50.455153',NULL,_binary '�dJ1�SA���K�',NULL,'5일전 더미',33),(_binary '\�v��IH����O2r','2024-04-03 19:07:51.076652',_binary '\0','2024-04-03 19:07:51.076652',4,_binary '���tH�OߎZD%���',NULL,'계좌4개 만들기',NULL),(_binary '�\�\�v�Fi���\�q2�v','2024-04-03 19:07:27.335056',_binary '\0','2024-04-03 19:07:27.335056',NULL,_binary '���tH�OߎZD%���',20,'호정은행',NULL),(_binary '�e\'���II��]?A�ȝ','2024-04-03 14:25:08.965990',_binary '\0','2024-04-03 14:25:08.965990',NULL,_binary '�dJ1�SA���K�',NULL,'4일전 더미',28),(_binary '�D��K��GT�ɵI','2024-04-03 14:10:04.833612',_binary '\0','2024-04-03 14:10:04.833612',NULL,_binary '�dJ1�SA���K�',25,'더미멤버생성',NULL);
/*!40000 ALTER TABLE `dummy` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-04  9:24:54
