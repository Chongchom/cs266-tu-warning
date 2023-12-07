-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2023 at 02:17 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `person`
--

-- --------------------------------------------------------

--
-- Table structure for table `locationlist`
--

CREATE TABLE `locationlist` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT current_timestamp(),
  `name` varchar(255) NOT NULL,
  `detail` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `locationlist`
--

INSERT INTO `locationlist` (`id`, `date`, `name`, `detail`) VALUES
(1, '2023-11-21', 'ห้องน้ำบร.2', 'ชอบเจอเฉาก๊วยนอนหน้าห้องน้ำไม่กล้าเข้าเลยค่ะ'),
(2, '2023-11-21', 'ทางเชื่อมบร.2-บร.3', 'เดินตอนเย็นๆน่ากลัวมากค่ะทางมืดมากเกือบเดินตกคลอง'),
(3, '2023-11-21', 'ก้ำกึ่ง', 'ช่วงนี้ก้ำไม่ค่อยน่าเข้าค่ะมีมลพิษทางอากาศ'),
(4, '2023-11-22', 'ทางเดินบร.', 'ระวังน้องเหี้ยอาบแดดกันด้วยนะคะ'),
(5, '2023-11-22', 'สกายวิว', 'วิวสวย'),
(6, '2023-11-22', 'สกายวิว', 'ทางเดินมาหอมืดมาก'),
(15, '2023-11-22', 'เชียง1.5', 'เตี๋ยวหลอดอร่อยมาก'),
(19, '2023-11-23', 'บร.3', 'แอร์เย็นมาก'),
(25, '2023-11-23', 'พีพีพากเพียร', 'แอบขโมยเหรียญ10บนตู้เย็น'),
(26, '2023-11-23', 'สกายวิวตึก3', 'เห็นวิวชัดมาก'),
(27, '2023-11-23', 'บร.3', 'แอร์เย็นมาก'),
(28, '2023-11-23', 'มธ', 'ร้อนมาก'),
(36, '2023-11-24', 'บร.3', 'แอร์เย็นมาก'),
(37, '2023-12-02', 'คมเข้ม', 'ร้อนมาก'),
(38, '2023-12-05', 'บร.3', 'แอร์เย็นมาก'),
(39, '2023-12-05', 'บร.3', 'แอร์เย็นมาก');

-- --------------------------------------------------------

--
-- Table structure for table `personlist`
--

CREATE TABLE `personlist` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT current_timestamp(),
  `name` varchar(255) NOT NULL,
  `detail` text NOT NULL,
  `coverimage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `personlist`
--

INSERT INTO `personlist` (`id`, `date`, `name`, `detail`, `coverimage`) VALUES
(1, '2023-03-08', 'แพรว วิทคอม', 'ยัยแพรวสวยเกิน', 'https://www.melivecode.com/users/1.png'),
(2, '2023-11-21', 'แองจี้', 'หวานเกิ๊น', 'https://www.melivecode.com/users/2.png'),
(25, '2023-11-23', 'ชมพู่', 'แซงคิวซื้อยำยูป้า', 'pp'),
(26, '2023-11-23', 'แทมแทม', 'ร้องเพลงเพราะ', 'PP'),
(27, '2023-11-23', 'ชมพู่', 'แซงคิวซื้อยำยูป้า', 'pp'),
(29, '2023-11-23', 'คมเข้ม', 'แซงคิวซื้อยำยูป้า', 'PP'),
(34, '2023-11-23', 'ชมพู่', 'ร้อนมาก', 'PP'),
(37, '2023-11-24', 'ชมพู่', 'แซงคิวซื้อยำยูป้า', 'pp'),
(38, '2023-12-02', 'พีพีพากเพียร', 'แซงคิวซื้อยำยูป้า', 'PP'),
(39, '2023-12-02', 'พีพีพากเพียร', 'แซงคิวซื้อยำยูป้า', 'PP'),
(40, '2023-12-02', 'ชมพู่', 'แอบขโมยเหรียญ10บนตู้เย็น', 'PP'),
(41, '2023-12-02', 'ชมพู่', 'แอบขโมยเหรียญ10บนตู้เย็น', 'PP'),
(42, '2023-12-02', 'พีพีพากเพียร', 'แอบขโมยเหรียญ10บนตู้เย็น', 'PP'),
(43, '2023-12-02', 'พีพีพากเพียร', 'แอบขโมยเหรียญ10บนตู้เย็น', 'PP'),
(44, '2023-12-02', 'พีพีพากเพียร', 'แอบขโมยเหรียญ10บนตู้เย็น', 'PP'),
(45, '2023-12-02', 'พีพีพากเพียร', 'แซงคิวซื้อยำยูป้า', 'C:\\fakepath\\WIN_20220306_23_16_38_Pro.jpg'),
(46, '2023-12-02', 'พีพีพากเพียร', 'ร้อนมาก', ''),
(47, '2023-12-02', 'ชมพู่', 'แอบขโมยเหรียญ10บนตู้เย็น', ''),
(48, '2023-12-02', 'คมเข้ม', 'แซงคิวซื้อยำยูป้า', ''),
(49, '2023-12-05', 'ชมพู่', 'แซงคิวซื้อยำยูป้า', ''),
(50, '2023-12-05', 'ชมพู่', 'แซงคิวซื้อยำยูป้า', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `locationlist`
--
ALTER TABLE `locationlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personlist`
--
ALTER TABLE `personlist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `locationlist`
--
ALTER TABLE `locationlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `personlist`
--
ALTER TABLE `personlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
