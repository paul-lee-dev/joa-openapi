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
-- Table structure for table `bank`
--

DROP TABLE IF EXISTS `bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bank` (
  `id` binary(16) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `admin_id` binary(16) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `uri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank`
--

LOCK TABLES `bank` WRITE;
/*!40000 ALTER TABLE `bank` DISABLE KEYS */;
INSERT INTO `bank` VALUES (_binary '\rb�s��H���H\�7=�','2024-04-03 13:53:06.803802',_binary '\0','2024-04-03 18:08:28.631330',_binary '�dJ1�SA���K�','결제 서비스가 들어간 프로젝트 구현을 위해 만든 가상 은행','본승은행','https://cdn-icons-png.flaticon.com/512/10268/10268261.png'),(_binary '\r��r{*A �$`\�\�0','2024-04-03 13:37:03.112687',_binary '\0','2024-04-03 13:37:03.112687',_binary '	�\0�&A��^G�#a�','핀테크 프로젝트를 위한 가상은행','조아은행','https://cdn3d.iconscout.com/3d/premium/thumb/piggy-bank-3856442-3212607.png'),(_binary 'A\� ܝ\�D��\�[W\�\�','2024-04-04 00:19:50.155153',_binary '\0','2024-04-04 00:19:50.155153',_binary '\��vʿJj�Cn\n92\�','샘플 은행 생성 테스트','조아은행','logo.png'),(_binary 'X~KntO��D\�sn�\�','2024-04-03 18:58:42.749343',_binary '\0','2024-04-03 18:58:42.749343',_binary '�dJ1�SA���K�','슈퍼은행','본승슈퍼은행',''),(_binary '��+x\�CY�J4M|','2024-04-04 00:20:16.086382',_binary '\0','2024-04-04 00:20:16.086382',_binary '\��vʿJj�Cn\n92\�','은행 생성 테스트','조아은행','logo.png'),(_binary '�=xS\�\�J]�	�\\���','2024-04-04 00:15:01.485353',_binary '\0','2024-04-04 00:15:01.485353',_binary '\��vʿJj�Cn\n92\�','은행 생성 테스트','조아조아은행','logo.png'),(_binary '���Z�L&�\�!+�\�\�','2024-04-03 14:57:47.570647',_binary '\0','2024-04-03 18:03:02.133153',_binary '�dJ1�SA���K�','프로젝트에서 외화를 관리하는 은행','본승외화은행','https://icones.pro/wp-content/uploads/2021/10/icone-de-banque-jaune.png'),(_binary '��=�M+��2�\"}�w','2024-04-03 19:12:20.911514',_binary '\0','2024-04-03 21:02:03.989615',_binary '\��vʿJj�Cn\n92\�','JOA OPEN API 테스트베드를 위한 샘플 은행','조은은행','https://imgur.com/4FO9toe'),(_binary '��=ƷNI߈\��5\�+P�','2024-04-03 19:07:05.346957',_binary '\0','2024-04-03 19:07:05.346957',_binary '���tH�OߎZD%���','가계부 앱 프로젝트를 위한 은행','호정은행',''),(_binary '\�-\�\�\�HƐ�f�\�_','2024-04-04 00:17:53.683876',_binary '\0','2024-04-04 00:17:53.683876',_binary '\��vʿJj�Cn\n92\�','은행 생성 테스트','조아은행','logo.png'),(_binary '\�1\�\�PDF\��h\�ϯC','2024-04-03 14:09:20.494777',_binary '\0','2024-04-03 18:02:17.481973',_binary '�dJ1�SA���K�','많은 거래내역을 분석해보려 하지만 데이터 넣기가 귀찮아 더미데이터를 넣어보기 위한 은행','본승더미은행','https://iconape.com/wp-content/png_logo_vector/bon-o-bon.png');
/*!40000 ALTER TABLE `bank` ENABLE KEYS */;
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
