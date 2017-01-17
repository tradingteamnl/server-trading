-- MySQL dump 10.13  Distrib 5.7.12, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: cryptoData
-- ------------------------------------------------------
-- Server version	5.7.16

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
-- Table structure for table `bittrexmarktdata`
--

DROP TABLE IF EXISTS `bittrexmarktdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bittrexmarktdata` (
  `Number` int(11) NOT NULL AUTO_INCREMENT,
  `Markt` varchar(45) NOT NULL,
  `High` double NOT NULL,
  `Low` double NOT NULL,
  `Volume` double NOT NULL,
  `Bid` double NOT NULL,
  `Ask` double NOT NULL,
  `OpenBuyOrders` double NOT NULL,
  `OpenSellOrders` double NOT NULL,
  `Datum` varchar(45) DEFAULT NULL,
  `Time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Number`)
) ENGINE=InnoDB AUTO_INCREMENT=389 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bittrexmarktdata`
--

LOCK TABLES `bittrexmarktdata` WRITE;
/*!40000 ALTER TABLE `bittrexmarktdata` DISABLE KEYS */;
INSERT INTO `bittrexmarktdata` VALUES (195,'BTC-2GIVE',0.00000049,0.0000004,1395328.03091201,0.00000042,0.00000048,63,391,'2017-01-17','01:29:41'),(196,'BTC-8BIT',0.00002194,0.00001846,18706.62431677,0.0000195,0.00002137,69,405,'2017-01-17','01:29:41'),(197,'BTC-ABY',0.00000021,0.00000016,4960588.2572485,0.00000018,0.0000002,87,512,'2017-01-17','01:29:41'),(198,'BTC-AEON',0.000142,0.00012855,30451.50936671,0.00013053,0.00013935,111,581,'2017-01-17','01:29:41'),(199,'BTC-AGRS',0.00012746,0.00010664,3199.04615288,0.00010152,0.0001199,135,276,'2017-01-17','01:29:41'),(200,'BTC-AMP',0.00006665,0.00006256,32364.96626971,0.00006278,0.00006361,82,538,'2017-01-17','01:29:41'),(201,'BTC-ANS',0.00015214,0.00014321,36888.39740849,0.00014351,0.00014798,91,344,'2017-01-17','01:29:41'),(202,'BTC-ARB',0.00000253,0.0000025,456.03307937,0.0000025,0.00000256,93,606,'2017-01-17','01:29:41'),(203,'BTC-ARCH',0.00000203,0.000002,15000,0.000002,0.00000209,74,739,'2017-01-17','01:29:41'),(204,'BTC-ARDR',0.00002027,0.00001421,1764572.88536398,0.00001512,0.00001552,95,558,'2017-01-17','01:29:41'),(205,'BTC-AUR',0.00014384,0.00013417,18517.9834301,0.00013417,0.000139,164,547,'2017-01-17','01:29:41'),(206,'BTC-BAY',0.0000012,0.00000115,4329912.26976665,0.00000116,0.00000117,124,296,'2017-01-17','01:29:41'),(207,'BTC-BBR',0.00010165,0.00008783,1203.50334015,0.00008899,0.00009903,67,262,'2017-01-17','01:29:41'),(208,'BTC-BCY',0.00013969,0.00011711,2213.00647111,0.00012911,0.00013874,54,195,'2017-01-17','01:29:41'),(209,'BTC-BITB',0.00000006,0.00000003,18206673.55376861,0.00000004,0.00000005,73,671,'2017-01-17','01:29:41'),(210,'BTC-BITS',0.00000703,0.00000571,5444.24117652,0.00000662,0.00000706,62,99,'2017-01-17','01:29:41'),(211,'BTC-BLC',0.00000412,0.00000369,3758.24088827,0.00000376,0.00000392,71,301,'2017-01-17','01:29:41'),(212,'BTC-BLITZ',0.00001999,0.000017,26937.60930216,0.00001724,0.0000191,30,397,'2017-01-17','01:29:41'),(213,'BTC-BLK',0.0000347,0.00003259,15955.75946027,0.00003352,0.00003453,201,810,'2017-01-17','01:29:41'),(214,'BTC-BLOCK',0.00010549,0.00009857,1798.44974603,0.00010054,0.00010424,69,329,'2017-01-17','01:29:41'),(215,'BTC-BRK',0.000044,0.0000242,109635.24545498,0.00002754,0.000038,76,433,'2017-01-17','01:29:41'),(216,'BTC-BRX',0.0001815,0.0001335,1503.45845032,0.0001335,0.00013351,111,176,'2017-01-17','01:29:41'),(217,'BTC-BSD',0.0000077,0.0000052,608483.66764727,0.0000075,0.00000766,62,267,'2017-01-17','01:29:41'),(218,'BTC-BSTY',0.0000029,0.00000252,7170.47576676,0.00000268,0.00000282,54,399,'2017-01-17','01:29:41'),(219,'BTC-BTA',0.00001025,0.00000999,13633.89384032,0.00001025,0.00001043,35,312,'2017-01-17','01:29:41'),(220,'BTC-BTCD',0.00448866,0.00392,1510.38867153,0.00405877,0.004478,72,117,'2017-01-17','01:29:41'),(221,'BTC-BTS',0.0000048,0.0000046,179531.02186145,0.00000472,0.00000477,55,584,'2017-01-17','01:29:41'),(222,'BTC-BURST',0.00000075,0.00000066,1801677.22044816,0.00000068,0.0000007,150,511,'2017-01-17','01:29:41'),(223,'BTC-BYC',0.00007792,0.00007773,1415.09144778,0.00007773,0.00007776,224,613,'2017-01-17','01:29:41'),(224,'BTC-CANN',0.000003,0.00000257,254044.43580739,0.00000266,0.0000027,176,2094,'2017-01-17','01:29:41'),(225,'BTC-CCN',0.0000132,0.00001172,58188.19653851,0.000012,0.00001263,67,356,'2017-01-17','01:29:41'),(226,'BTC-CLAM',0.00116326,0.00100166,692.96662181,0.00105174,0.00116863,122,210,'2017-01-17','01:29:41'),(227,'BTC-CLOAK',0.0002,0.00019233,15792.48303528,0.00019571,0.0002,146,450,'2017-01-17','01:29:41'),(228,'BTC-CLUB',0.000487,0.00046017,163208.56738747,0.000475,0.00048235,150,861,'2017-01-17','01:29:41'),(229,'BTC-COVAL',0.0000012,0.00000098,6547276.94938848,0.00000099,0.000001,152,902,'2017-01-17','01:29:41'),(230,'BTC-CPC',0.00019084,0.000171,39072.05923249,0.00018309,0.00018608,98,563,'2017-01-17','01:29:41'),(231,'BTC-CURE',0.00004149,0.00003845,5558.74146213,0.00003861,0.00004054,48,325,'2017-01-17','01:29:41'),(232,'BTC-DAR',0.00009238,0.00004105,1671627.91342527,0.00006101,0.00006491,137,220,'2017-01-17','01:29:41'),(233,'BTC-DASH',0.01569604,0.01467507,1009.72079685,0.0153698,0.01564258,274,478,'2017-01-17','01:29:41'),(234,'BTC-DCR',0.00120295,0.00100649,20733.87719202,0.00111208,0.00114669,116,860,'2017-01-17','01:29:41'),(235,'BTC-DES',0.00000583,0.00000583,0,0.00000566,0.00000613,38,332,'2017-01-17','01:29:41'),(236,'BTC-DGB',0.00000035,0.00000031,9106097.46187507,0.00000032,0.00000033,217,1985,'2017-01-17','01:29:41'),(237,'BTC-DGC',0.00000891,0.00000788,9504.20906837,0.00000789,0.00000841,30,386,'2017-01-17','01:29:41'),(238,'BTC-DGD',0.01146746,0.01049304,604.49711663,0.0107782,0.0111977,83,335,'2017-01-17','01:29:41'),(239,'BTC-DMD',0.00030409,0.00025002,6592.00793413,0.00027444,0.00028596,142,546,'2017-01-17','01:29:41'),(240,'BTC-DNET',0.000017,0.00001415,162783.33275108,0.00001612,0.00001694,144,484,'2017-01-17','01:29:41'),(241,'BTC-DOGE',0.00000026,0.00000024,29987606.47546683,0.00000024,0.00000025,215,2162,'2017-01-17','01:29:41'),(242,'BTC-DOPE',0.00000047,0.00000043,420767.09864714,0.00000043,0.00000045,84,481,'2017-01-17','01:29:41'),(243,'BTC-DRACO',0.00000065,0.00000025,5030952.73169542,0.00000053,0.00000059,116,860,'2017-01-17','01:29:41'),(244,'BTC-EBST',0.0000076,0.0000049,85528.85310607,0.00000532,0.00000565,59,369,'2017-01-17','01:29:41'),(245,'BTC-EFL',0.00001815,0.00001714,34174.45251314,0.00001714,0.0000176,72,526,'2017-01-17','01:29:41'),(246,'BTC-EGC',0.00001589,0.0000138,37076.40112828,0.0000138,0.00001382,118,1055,'2017-01-17','01:29:41'),(247,'BTC-EMC',0.00024299,0.00021878,5535.49086405,0.00021474,0.00022501,61,352,'2017-01-17','01:29:41'),(248,'BTC-EMC2',0.00000127,0.00000116,190421.07480995,0.00000123,0.00000127,50,244,'2017-01-17','01:29:41'),(249,'BTC-ENRG',0.00000546,0.0000048,56949.1896783,0.00000436,0.00000492,77,239,'2017-01-17','01:29:41'),(250,'BTC-ERC',0.00005185,0.00003907,18827.04426856,0.00003961,0.00004,97,459,'2017-01-17','01:29:41'),(251,'BTC-ETC',0.00144545,0.00141145,5129.96371455,0.00141148,0.00141908,182,1067,'2017-01-17','01:29:41'),(252,'BTC-ETH',0.01186448,0.01144999,3099.181707,0.01150999,0.01158588,458,2611,'2017-01-17','01:29:41'),(253,'BTC-EXCL',0.00000391,0.00000316,23951.39190827,0.00000341,0.00000374,54,265,'2017-01-17','01:29:41'),(254,'BTC-EXP',0.00035046,0.00025766,30622.49892402,0.00026016,0.00026877,73,492,'2017-01-17','01:29:41'),(255,'BTC-FAIR',0.0000235,0.00002346,23669.52693448,0.00002329,0.00002346,60,545,'2017-01-17','01:29:41'),(256,'BTC-FC2',0.00000919,0.0000078,134143.73178001,0.00000844,0.00000865,87,363,'2017-01-17','01:29:41'),(257,'BTC-FCT',0.00371675,0.0034386,2977.84533691,0.00359594,0.00362763,178,351,'2017-01-17','01:29:41'),(258,'BTC-FLDC',0.00000174,0.00000125,1577123.63553866,0.00000154,0.00000159,172,304,'2017-01-17','01:29:41'),(259,'BTC-FLO',0.00000431,0.00000382,78252.51670729,0.00000386,0.000004,67,208,'2017-01-17','01:29:41'),(260,'BTC-FRK',0.00002109,0.00001875,1176.41227263,0.0000175,0.00002145,39,357,'2017-01-17','01:29:41'),(261,'BTC-FTC',0.000008,0.00000664,709077.81378193,0.00000777,0.000008,195,3033,'2017-01-17','01:29:41'),(262,'BTC-GAM',0.00040544,0.0003002,1257.48911513,0.00033383,0.00040346,80,182,'2017-01-17','01:29:41'),(263,'BTC-GAME',0.00021166,0.00019725,19968.96391052,0.00019846,0.00020647,68,199,'2017-01-17','01:29:41'),(264,'BTC-GCR',0.00002797,0.00002609,43516.4907889,0.00002671,0.00002699,45,490,'2017-01-17','01:29:41'),(265,'BTC-GEMZ',0.0000033,0.00000296,112599.67236006,0.00000325,0.00000336,82,466,'2017-01-17','01:29:41'),(266,'BTC-GEO',0.00003787,0.00003119,1690.31414291,0.00003145,0.00003414,49,347,'2017-01-17','01:29:41'),(267,'BTC-GHC',0.00000448,0.00000387,2476.69895264,0.00000397,0.00000457,45,346,'2017-01-17','01:29:41'),(268,'BTC-GLD',0.00001815,0.00001575,37715.32690769,0.00001597,0.00001648,23,158,'2017-01-17','01:29:41'),(269,'BTC-GP',0.00003637,0.00003637,17.33629502,0.00003593,0.00003756,56,218,'2017-01-17','01:29:41'),(270,'BTC-GRC',0.00000801,0.00000631,284054.77241268,0.00000745,0.00000783,49,465,'2017-01-17','01:29:41'),(271,'BTC-GRS',0.00000227,0.00000157,17647.89811034,0.00000162,0.00000163,54,357,'2017-01-17','01:29:41'),(272,'BTC-GRT',0.00000065,0.0000006,997101.62967332,0.00000059,0.00000065,83,335,'2017-01-17','01:29:41'),(273,'BTC-HYPER',0.00000708,0.0000064,37441.39599465,0.00000686,0.000007,60,384,'2017-01-17','01:29:41'),(274,'BTC-HZ',0.00000028,0.00000026,36516.19704042,0.00000026,0.00000028,73,359,'2017-01-17','01:29:41'),(275,'BTC-INFX',0.00002202,0.00002,4504.05989713,0.00002065,0.00002098,61,389,'2017-01-17','01:29:41'),(276,'BTC-IOC',0.00037698,0.000332,646.46453912,0.00034716,0.00037278,80,110,'2017-01-17','01:29:41'),(277,'BTC-IOP',0.00363699,0.00360001,792.91219314,0.00360002,0.00365713,33,41,'2017-01-17','01:29:41'),(278,'BTC-J',0.000173,0.00016697,878.6680604,0.00016697,0.000173,38,137,'2017-01-17','01:29:41'),(279,'BTC-JBS',0.00010213,0.00008734,23666.14249151,0.00009652,0.00010068,87,213,'2017-01-17','01:29:41'),(280,'BTC-JWL',0.00001004,0.00000748,145242.43131498,0.00000807,0.00000814,46,226,'2017-01-17','01:29:41'),(281,'BTC-KORE',0.00003113,0.00002852,102.04446727,0.000029,0.00003048,41,171,'2017-01-17','01:29:41'),(282,'BTC-KR',0.000024,0.0000091,114134.40409709,0.00001854,0.00001973,42,312,'2017-01-17','01:29:41'),(283,'BTC-LBC',0.0000342,0.00002601,1024145.41564102,0.00002799,0.00002854,127,1121,'2017-01-17','01:29:41'),(284,'BTC-LSK',0.00019635,0.00018182,72112.24880457,0.00018492,0.00018857,120,852,'2017-01-17','01:29:41'),(285,'BTC-LTC',0.00478548,0.00465,3856.24689471,0.00465133,0.00467122,178,776,'2017-01-17','01:29:41'),(286,'BTC-LXC',0.00001301,0.000011,15800.83660991,0.00001161,0.000013,29,111,'2017-01-17','01:29:41'),(287,'BTC-MAID',0.0001383,0.00012349,92441.67994023,0.00013483,0.00013667,146,759,'2017-01-17','01:29:41'),(288,'BTC-MEC',0.00001691,0.00001601,13670.92290994,0.00001623,0.00001687,43,231,'2017-01-17','01:29:41'),(289,'BTC-MEME',0.00000252,0.0000025,6816.01880049,0.00000242,0.00000252,81,362,'2017-01-17','01:29:41'),(290,'BTC-METAL',0.00000029,0.00000026,7601.54276153,0.00000027,0.00000029,31,188,'2017-01-17','01:29:41'),(291,'BTC-MONA',0.00003176,0.00002859,25053.81135267,0.00003007,0.00003053,51,543,'2017-01-17','01:29:41'),(292,'BTC-MTR',0.00000122,0.00000088,51050.60140628,0.00000095,0.00000119,59,838,'2017-01-17','01:29:41'),(293,'BTC-MUE',0.00000088,0.00000087,54779.13575278,0.00000088,0.00000089,76,421,'2017-01-17','01:29:41'),(294,'BTC-MYR',0.00000027,0.00000021,1952034.65022855,0.00000024,0.00000026,85,450,'2017-01-17','01:29:41'),(295,'BTC-MZC',0.00000024,0.0000002,1942885.72516947,0.00000023,0.00000024,140,960,'2017-01-17','01:29:41'),(296,'BTC-NAUT',0.000055,0.00004497,5963.31557836,0.00005038,0.00005281,108,622,'2017-01-17','01:29:41'),(297,'BTC-NAV',0.000051,0.00004688,136329.17277688,0.00004792,0.00004944,117,556,'2017-01-17','01:29:41'),(298,'BTC-NBT',0.00121525,0.00119456,4629.36012882,0.00119837,0.00120557,27,81,'2017-01-17','01:29:41'),(299,'BTC-NEOS',0.00009491,0.00007043,3708.91823765,0.00007443,0.0000772,64,256,'2017-01-17','01:29:41'),(300,'BTC-NET',0.00000013,0.0000001,781103.49797915,0.0000001,0.00000012,81,675,'2017-01-17','01:29:41'),(301,'BTC-NEU',0.00000002,0.00000002,23110385.604585,0.00000002,0.00000003,62,992,'2017-01-17','01:29:41'),(302,'BTC-NLG',0.00002845,0.0000245,1003529.84120545,0.00002582,0.00002588,318,1022,'2017-01-17','01:29:41'),(303,'BTC-NTRN',0.00000083,0.00000081,5194.71756519,0.00000083,0.00000099,51,442,'2017-01-17','01:29:41'),(304,'BTC-NXS',0.0001124,0.00009,584681.07283138,0.00009865,0.00010987,187,255,'2017-01-17','01:29:41'),(305,'BTC-NXT',0.00000739,0.00000689,916109.43185121,0.00000706,0.00000707,95,896,'2017-01-17','01:29:41'),(306,'BTC-OK',0.00000699,0.0000057,33535.90928763,0.0000063,0.00000652,92,228,'2017-01-17','01:29:41'),(307,'BTC-OMNI',0.00290003,0.00213,231.08919001,0.00270704,0.00290003,30,114,'2017-01-17','01:29:41'),(308,'BTC-ORB',0.000072,0.0000681,550.4483555,0.00006811,0.0000697,45,278,'2017-01-17','01:29:41'),(309,'BTC-PDC',0.0000085,0.00000605,648107.8452855,0.00000669,0.00000673,104,399,'2017-01-17','01:29:41'),(310,'BTC-PINK',0.0000006,0.00000057,181506.20024542,0.00000057,0.00000062,90,205,'2017-01-17','01:29:41'),(311,'BTC-PKB',0.00000599,0.00000485,46301.45135091,0.00000515,0.00000571,61,260,'2017-01-17','01:29:41'),(312,'BTC-POT',0.00002395,0.00002115,110099.94698093,0.00002137,0.000022,224,524,'2017-01-17','01:29:41'),(313,'BTC-PPC',0.00035,0.00029961,9035.67022844,0.00033906,0.00034899,59,305,'2017-01-17','01:29:41'),(314,'BTC-PTC',0.00000039,0.00000038,18437.47785486,0.00000038,0.0000004,63,510,'2017-01-17','01:29:41'),(315,'BTC-PXI',0.00000094,0.00000071,131842.27483846,0.00000072,0.00000088,49,214,'2017-01-17','01:29:41'),(316,'BTC-QTL',0.00001545,0.00001444,1775.76115869,0.00001483,0.00001543,62,293,'2017-01-17','01:29:41'),(317,'BTC-RADS',0.00048672,0.00042054,6464.98354197,0.00047435,0.00049335,53,237,'2017-01-17','01:29:41'),(318,'BTC-RBY',0.0002445,0.00024076,7665.70972083,0.0002407,0.0002445,507,439,'2017-01-17','01:29:41'),(319,'BTC-RDD',0.00000003,0.00000002,18406231.23278718,0.00000002,0.00000003,161,1240,'2017-01-17','01:29:41'),(320,'BTC-REP',0.005,0.0048588,544.42199167,0.00473148,0.0048588,56,118,'2017-01-17','01:29:41'),(321,'BTC-RISE',0.00000597,0.0000049,169785.18168659,0.00000513,0.00000536,86,988,'2017-01-17','01:29:41'),(322,'BTC-SAR',0.00002999,0.000025,26989.86433335,0.00002647,0.00002928,62,285,'2017-01-17','01:29:41'),(323,'BTC-SBD',0.001377,0.00119,5330.85140711,0.0011931,0.00122885,32,95,'2017-01-17','01:29:41'),(324,'BTC-SCOT',0.00000199,0.0000016,352754.48586523,0.00000172,0.00000188,82,581,'2017-01-17','01:29:41'),(325,'BTC-SCRT',0.0000042,0.00000322,32168.92841493,0.00000351,0.00000369,37,371,'2017-01-17','01:29:41'),(326,'BTC-SDC',0.00214436,0.0019,12351.73295716,0.00191918,0.00195753,158,309,'2017-01-17','01:29:41'),(327,'BTC-SEC',0.00000026,0.00000025,415712.97645161,0.00000025,0.00000027,86,812,'2017-01-17','01:29:41'),(328,'BTC-SHIFT',0.00001355,0.00001069,36437.15805547,0.00001239,0.00001263,83,391,'2017-01-17','01:29:41'),(329,'BTC-SJCX',0.0001545,0.00014663,9781.02158004,0.00015051,0.00015457,154,303,'2017-01-17','01:29:41'),(330,'BTC-SLG',0.00001189,0.0000118,132.33940211,0.00001151,0.00001286,30,177,'2017-01-17','01:29:41'),(331,'BTC-SLING',0.00002493,0.00002375,23905.71261343,0.00002363,0.00002457,57,217,'2017-01-17','01:29:41'),(332,'BTC-SLK',0.00000551,0.00000519,155665.11728683,0.00000518,0.00000538,51,343,'2017-01-17','01:29:41'),(333,'BTC-SLR',0.00007492,0.00007112,733.04868239,0.00007112,0.00007314,104,421,'2017-01-17','01:29:41'),(334,'BTC-SLS',0.00062558,0.00048215,224.56379187,0.00047369,0.00055953,51,92,'2017-01-17','01:29:41'),(335,'BTC-SNGLS',0.00001449,0.00001121,944930.39220284,0.00001298,0.0000138,102,394,'2017-01-17','01:29:41'),(336,'BTC-SNRG',0.00007199,0.00007199,9349.98808383,0.00007168,0.00007198,51,152,'2017-01-17','01:29:41'),(337,'BTC-SOIL',0.00000294,0.0000023,6770.32131719,0.00000291,0.00000299,46,574,'2017-01-17','01:29:41'),(338,'BTC-SPHR',0.0000225,0.00001515,60799.07318177,0.00002175,0.0000225,78,325,'2017-01-17','01:29:41'),(339,'BTC-SPR',0.0000205,0.00001803,1391.18500538,0.00001805,0.0000205,53,421,'2017-01-17','01:29:41'),(340,'BTC-START',0.000013,0.0000101,446191.02629858,0.000012,0.00001222,292,4188,'2017-01-17','01:29:41'),(341,'BTC-STEEM',0.00023574,0.00017241,265937.53296977,0.00021722,0.00021995,243,1078,'2017-01-17','01:29:41'),(342,'BTC-STRAT',0.0000725,0.0000621,456636.24399029,0.00007107,0.00007215,112,559,'2017-01-17','01:29:41'),(343,'BTC-STV',0.0000029,0.00000269,20587.92954253,0.00000275,0.00000289,51,354,'2017-01-17','01:29:41'),(344,'BTC-SWIFT',0.00002696,0.0000252,11197.16829147,0.00002561,0.00002691,200,267,'2017-01-17','01:29:41'),(345,'BTC-SWING',0.00008155,0.000075,21445.58389042,0.0000776,0.00007848,96,173,'2017-01-17','01:29:41'),(346,'BTC-SYNX',0.00000894,0.00000711,95108.11208115,0.00000755,0.00000802,53,455,'2017-01-17','01:29:41'),(347,'BTC-SYS',0.00001291,0.00000915,971476.02335191,0.00000994,0.00001015,137,706,'2017-01-17','01:29:41'),(348,'BTC-TES',0.00000125,0.00000102,303967.62089849,0.00000102,0.00000116,71,605,'2017-01-17','01:29:41'),(349,'BTC-THC',0.00000042,0.00000036,155507.28212311,0.00000038,0.00000042,87,523,'2017-01-17','01:29:41'),(350,'BTC-TRIG',0.00000658,0.00000542,4512.03001053,0.00000569,0.00000634,28,404,'2017-01-17','01:29:41'),(351,'BTC-TRK',0.00000046,0.00000041,1181265.82817286,0.00000043,0.00000045,32,380,'2017-01-17','01:29:41'),(352,'BTC-TRUST',0.00000149,0.0000014,361267.9873475,0.00000129,0.00000148,36,281,'2017-01-17','01:29:41'),(353,'BTC-TX',0.00000516,0.00000466,16206.21073089,0.00000466,0.00000481,102,352,'2017-01-17','01:29:41'),(354,'BTC-U',0.00000426,0.00000426,0,0.00000433,0.00000497,74,148,'2017-01-17','01:29:41'),(355,'BTC-UNB',0.000008,0.0000068,13779.56519273,0.00000687,0.00000749,32,239,'2017-01-17','01:29:41'),(356,'BTC-UNIQ',0.0000014,0.0000012,333563.50307558,0.00000124,0.00000136,62,281,'2017-01-17','01:29:41'),(357,'BTC-UNIT',0.00000389,0.0000033,371660.17903388,0.00000346,0.00000357,85,336,'2017-01-17','01:29:41'),(358,'BTC-UNO',0.00156997,0.00138975,166.48268196,0.00140001,0.00145205,131,806,'2017-01-17','01:29:41'),(359,'BTC-UTC',0.00000388,0.00000312,21514.98406997,0.00000315,0.00000328,66,356,'2017-01-17','01:29:41'),(360,'BTC-VIA',0.000039,0.00003661,4747.36316539,0.0000368,0.00003785,147,579,'2017-01-17','01:29:41'),(361,'BTC-VIRAL',0.00000193,0.00000154,24943.47923135,0.00000156,0.00000186,42,432,'2017-01-17','01:29:41'),(362,'BTC-VOX',0.00001375,0.00001039,586970.7832462,0.00001105,0.00001108,72,1901,'2017-01-17','01:29:41'),(363,'BTC-VPN',0.00000327,0.0000032,518.60509651,0.00000322,0.00000328,33,214,'2017-01-17','01:29:41'),(364,'BTC-VRC',0.00003081,0.00002653,12112.15289612,0.00002753,0.00002848,52,880,'2017-01-17','01:29:41'),(365,'BTC-VRM',0.0001295,0.00009336,1070.64809037,0.00009535,0.00012094,73,296,'2017-01-17','01:29:41'),(366,'BTC-VTC',0.00004143,0.000038,29376.64574126,0.00004001,0.00004114,100,944,'2017-01-17','01:29:41'),(367,'BTC-VTR',0.00004099,0.000035,39872.02144452,0.00003571,0.0000372,174,165,'2017-01-17','01:29:41'),(368,'BTC-WARP',0.00000772,0.00000772,0,0.00000723,0.00000765,54,271,'2017-01-17','01:29:41'),(369,'BTC-WAVES',0.000326,0.00027155,205133.65352935,0.000283,0.00028477,377,1548,'2017-01-17','01:29:41'),(370,'BTC-WBB',0.0001294,0.00012051,2298.83341948,0.00012059,0.00012359,57,479,'2017-01-17','01:29:41'),(371,'BTC-XAUR',0.00011199,0.00010502,76124.1175848,0.00010952,0.00011196,78,142,'2017-01-17','01:29:41'),(372,'BTC-XC',0.00004421,0.00003494,354.0127157,0.00003674,0.00004337,88,404,'2017-01-17','01:29:41'),(373,'BTC-XCO',0.00000118,0.00000113,15603.31984122,0.00000117,0.00000118,53,220,'2017-01-17','01:29:41'),(374,'BTC-XCP',0.00256021,0.00236896,154.94806918,0.00236986,0.00255612,131,295,'2017-01-17','01:29:41'),(375,'BTC-XDN',0.00000016,0.00000013,4272277.43510594,0.00000013,0.00000014,97,746,'2017-01-17','01:29:41'),(376,'BTC-XEM',0.00000464,0.0000044,385680.97103012,0.00000442,0.0000045,73,495,'2017-01-17','01:29:41'),(377,'BTC-XLM',0.00000312,0.00000283,100238.95516559,0.00000283,0.0000029,65,233,'2017-01-17','01:29:41'),(378,'BTC-XMG',0.00002691,0.00002211,3814.26027102,0.00002288,0.00002479,60,318,'2017-01-17','01:29:41'),(379,'BTC-XMR',0.01315,0.01236312,4696.63006671,0.01278068,0.0128883,504,785,'2017-01-17','01:29:41'),(380,'BTC-XQN',0.00000116,0.0000011,1149.62911752,0.00000112,0.00000122,53,241,'2017-01-17','01:29:41'),(381,'BTC-XRP',0.00000836,0.00000811,1621962.52138427,0.00000817,0.00000828,199,1085,'2017-01-17','01:29:41'),(382,'BTC-XST',0.00000408,0.0000035,207023.21719831,0.00000353,0.00000373,41,381,'2017-01-17','01:29:41'),(383,'BTC-XVC',0.0000568,0.000051,7767.1696263,0.000051,0.00005228,241,283,'2017-01-17','01:29:41'),(384,'BTC-XVG',0.00000003,0.00000002,16930970.71166038,0.00000002,0.00000003,90,1848,'2017-01-17','01:29:41'),(385,'BTC-XWC',0.00000036,0.00000027,2768046.47792281,0.00000031,0.00000036,79,719,'2017-01-17','01:29:41'),(386,'BTC-XZC',0.00139492,0.00111,29933.0075972,0.00117906,0.00120509,178,689,'2017-01-17','01:29:41'),(387,'BTC-ZCL',0.00097003,0.00086155,10608.06496474,0.00090177,0.00092464,151,623,'2017-01-17','01:29:41'),(388,'BTC-ZEC',0.0545,0.05201002,257.15438576,0.0521,0.05231934,480,1995,'2017-01-17','01:29:41');
/*!40000 ALTER TABLE `bittrexmarktdata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-01-18  0:11:57
