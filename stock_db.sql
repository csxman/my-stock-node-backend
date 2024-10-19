-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 19, 2024 at 06:26 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stock_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Accounts`
--

CREATE TABLE `Accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `role` varchar(25) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Accounts`
--

INSERT INTO `Accounts` (`id`, `username`, `password`, `role`, `created_at`, `updated_at`) VALUES
(1, 'wittaya', '$2a$08$3vKiWyI3FwyK9A5bijgFc.MW5jRxI2NSTnQl9bcQefWnh.e2kj0Ea', 'ADMIN', '2024-10-19 00:35:07', '2024-10-19 00:35:07'),
(2, 'user1', '$2a$08$3vKiWyI3FwyK9A5bijgFc.MW5jRxI2NSTnQl9bcQefWnh.e2kj0Ea', 'MEMBER', '2024-10-19 00:35:07', '2024-10-19 00:35:07');

-- --------------------------------------------------------

--
-- Table structure for table `Carts`
--

CREATE TABLE `Carts` (
  `id` int(11) NOT NULL,
  `order_running_no` varchar(25) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `cart_status` char(1) NOT NULL DEFAULT 'C' COMMENT 'C=Cart,O=Order ,S=Success',
  `user_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `id` int(11) NOT NULL,
  `order_running_no` varchar(25) NOT NULL,
  `ord_user_id` int(11) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_running`
--

CREATE TABLE `order_running` (
  `id` int(11) NOT NULL,
  `module` varchar(10) NOT NULL,
  `id_prefix` varchar(25) NOT NULL,
  `running_year` int(11) NOT NULL,
  `running_len` int(11) NOT NULL,
  `running_next` int(11) NOT NULL,
  `status` char(1) NOT NULL DEFAULT 'A',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order_running`
--

INSERT INTO `order_running` (`id`, `module`, `id_prefix`, `running_year`, `running_len`, `running_next`, `status`, `created_at`, `updated_at`) VALUES
(1, 'OD', 'OD', 24, 5, 3, 'A', '2024-10-19 05:05:06', '2024-10-19 03:45:54');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `name`, `image`, `price`, `stock`, `created_at`, `updated_at`) VALUES
(5, 'Part01', 'image-1729299369909.png', 100, 50, '2024-10-19 00:56:09', '2024-10-19 00:56:09'),
(6, 'Part02', 'image-1729299393487.jpeg', 100, 49, '2024-10-19 00:56:33', '2024-10-19 03:39:31'),
(7, 'Part_0278', 'image-1729299830259.jpeg', 120, 142, '2024-10-19 00:57:07', '2024-10-19 03:39:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Accounts`
--
ALTER TABLE `Accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Carts`
--
ALTER TABLE `Carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_running`
--
ALTER TABLE `order_running`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Accounts`
--
ALTER TABLE `Accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Carts`
--
ALTER TABLE `Carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_running`
--
ALTER TABLE `order_running`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
