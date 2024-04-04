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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` binary(16) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_done` bit(1) DEFAULT NULL,
  `max_amount` bigint DEFAULT NULL,
  `min_amount` bigint DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `payment_type` tinyint DEFAULT NULL,
  `product_type` tinyint DEFAULT NULL,
  `rate` double DEFAULT NULL,
  `bank_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpp8e5de1f71s8b3ens91et0t0` (`bank_id`),
  CONSTRAINT `FKpp8e5de1f71s8b3ens91et0t0` FOREIGN KEY (`bank_id`) REFERENCES `bank` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (_binary '&�&\'|�C��%5�w1_�','2024-04-04 00:15:01.493664',_binary '\0','2024-04-04 00:15:01.493664','은행 생성 시 자동 생성 되는 보통 예금',_binary '\0',100000000,0,'조아조아은행 보통 예금',0,0,1,_binary '�=xS\�\�J]�	�\\���'),(_binary '*�\�b\�D3��\�wy¹H','2024-04-03 18:58:42.757387',_binary '\0','2024-04-03 18:58:42.757387','은행 생성 시 자동 생성 되는 보통 예금',_binary '\0',100000000,0,'본승슈퍼은행 보통 예금',0,0,1,_binary 'X~KntO��D\�sn�\�'),(_binary '?\n\�0\�FZ�N��H7oS','2024-04-03 14:57:47.576882',_binary '\0','2024-04-03 14:57:47.576882','은행 생성 시 자동 생성 되는 보통 예금',_binary '\0',100000000,0,'조아은행 보통 예금',0,0,1,_binary '���Z�L&�\�!+�\�\�'),(_binary 'B�!�t�@%�R4k\��o','2024-04-03 18:59:16.905909',_binary '\0','2024-04-03 18:59:16.905909','이자가 슈퍼하다',_binary '\0',10000000,100,'슈퍼이자적금',0,2,14,_binary 'X~KntO��D\�sn�\�'),(_binary 's��U%\'L��0-\�F�>�','2024-04-03 19:07:05.349128',_binary '\0','2024-04-03 19:07:05.349128','은행 생성 시 자동 생성 되는 보통 예금',_binary '\0',100000000,0,'호정은행 보통 예금',0,0,1,_binary '��=ƷNI߈\��5\�+P�'),(_binary '���<$@\�M�	}\0&�','2024-04-03 13:55:20.927389',_binary '\0','2024-04-03 13:55:20.927389','파격적인 이자율을 자랑하는 인생 첫 목돈 만들기 도우미',_binary '\0',10000000,1000,'청년 희망 적금',0,2,10,_binary '\rb�s��H���H\�7=�'),(_binary '���^aFX���\nRM�','2024-04-03 15:55:41.100726',_binary '\0','2024-04-03 15:55:41.100726','단기간에 고수익을 노려보자',_binary '\0',10000000000,0,'한탕입출금 통장',0,0,12,_binary '\rb�s��H���H\�7=�'),(_binary '�\�\�\��\�M�@7��\�j','2024-04-03 13:53:06.806661',_binary '\0','2024-04-03 13:53:06.806661','은행 생성 시 자동 생성 되는 보통 예금',_binary '\0',100000000,0,'본승은행보통 예금',0,0,1,_binary '\rb�s��H���H\�7=�'),(_binary '��.nLG��KW\\{�<','2024-04-04 00:19:50.158422',_binary '\0','2024-04-04 00:19:50.158422','은행 생성 시 자동 생성 되는 보통 예금',_binary '\0',100000000,0,'조아은행 보통 예금',0,0,1,_binary 'A\� ܝ\�D��\�[W\�\�'),(_binary '\�\�\Z�\�NU�\�\n�ɿ�','2024-04-04 00:17:53.687562',_binary '\0','2024-04-04 00:17:53.687562','은행 생성 시 자동 생성 되는 보통 예금',_binary '\0',100000000,0,'조아은행 보통 예금',0,0,1,_binary '\�-\�\�\�HƐ�f�\�_'),(_binary '׈��PQB��R	\�1��','2024-04-03 19:18:28.066478',_binary '\0','2024-04-03 19:30:55.535572','싸피 교육지원금 매달 일정 금액 적금을 장려하는 상품',_binary '',500000,10000,'싸피조아적금',0,1,10,_binary '��=�M+��2�\"}�w'),(_binary '\�m�O\\\�A�\��\�_\'\�','2024-04-04 00:20:16.089148',_binary '\0','2024-04-04 00:20:16.089148','은행 생성 시 자동 생성 되는 보통 예금',_binary '\0',100000000,0,'조아은행 보통 예금',0,0,1,_binary '��+x\�CY�J4M|'),(_binary '�o\�d\��O\r�in�/�z','2024-04-03 19:12:20.913374',_binary '\0','2024-04-03 19:12:20.913374','은행 생성 시 자동 생성 되는 보통 예금',_binary '\0',100000000,0,'조은은행 보통 예금',0,0,1,_binary '��=�M+��2�\"}�w'),(_binary '�d\'\�0\�Iz�\�\�(ߙ+\�','2024-04-03 13:37:03.121443',_binary '\0','2024-04-03 13:37:03.121443','은행 생성 시 자동 생성 되는 보통 예금',_binary '\0',100000000,0,'본승외화은행보통 예금',0,0,1,_binary '\r��r{*A �$`\�\�0'),(_binary '��&v\�HB�Z&\�\�ק','2024-04-03 14:09:20.497427',_binary '\0','2024-04-03 14:09:20.497427','은행 생성 시 자동 생성 되는 보통 예금',_binary '\0',100000000,0,'본승더미은행보통 예금',0,0,1,_binary '\�1\�\�PDF\��h\�ϯC');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
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
