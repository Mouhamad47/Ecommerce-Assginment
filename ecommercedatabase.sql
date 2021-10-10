-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2021 at 06:46 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommercedatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Electronics'),
(2, 'Pets'),
(3, 'Watches'),
(4, 'Toys');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `date_of_creation` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `category_id`, `date_of_creation`) VALUES
(11, 'Lenovo Gaming Keyboard', 'The first is size. You’ve probably already noticed', 100, 1, '2021-09-08'),
(12, 'Blendjet Mixer', 'Interface: Capacitive Touchscreen Blend Cycles: 6 ', 50, 1, '2021-09-08'),
(13, 'Smart Watch', 'User Friendly it measure the heart rate', 150, 3, '2021-09-08'),
(14, 'Constrution Toys', 'Suitable for your kids', 20, 4, '2021-09-08'),
(15, 'German Shephered', 'German shepherds can be very gentle companions and', 120, 2, '2021-09-08'),
(16, 'Apple watch', 'Used 2 months', 130, 3, '2021-09-08');

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`user_id`, `product_id`) VALUES
(45, 2),
(49, 1),
(49, 3),
(50, 1),
(50, 2),
(50, 3),
(50, 6),
(51, 11),
(51, 13),
(52, 12),
(52, 15),
(52, 16);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `password` text NOT NULL,
  `role` tinyint(4) NOT NULL,
  `date_of_creation` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `phone_number`, `password`, `role`, `date_of_creation`) VALUES
(51, 'Mouhamad', 'Assaad', 'mimz22@gmail.com', '+961707070', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 0, '2021-09-08'),
(52, 'Charbel', 'Daoud', 'charbel22@gmail.com', '+961030303', 'a320480f534776bddb5cdb54b1e93d210a3c7d199e80a23c1b2178497b184c76', 0, '2021-09-08'),
(53, 'Elias', 'Chamooun', 'elias31@gmail.com', '+961020202', '0ffe1abd1a08215353c233d6e009613e95eec4253832a761af28ff37ac5a150c', 0, '2021-09-08'),
(54, 'Elie', 'Kozah', 'elie44@gmail.com', '+961211221', 'edee29f882543b956620b26d0ee0e7e950399b1c4222f5de05e06425b4c995e9', 1, '2021-09-08'),
(55, 'Haidar', 'Ali', 'haidar231@gmail.com', '+961021023', '0ffe1abd1a08215353c233d6e009613e95eec4253832a761af28ff37ac5a150c', 0, '2021-09-08'),
(56, 'Obada', 'Ali', 'obada12@gmail.com', '+961211222', '0ffe1abd1a08215353c233d6e009613e95eec4253832a761af28ff37ac5a150c', 0, '2021-09-08');

-- --------------------------------------------------------

--
-- Table structure for table `users_has_products`
--

CREATE TABLE `users_has_products` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_has_products`
--

INSERT INTO `users_has_products` (`user_id`, `product_id`) VALUES
(54, 15),
(54, 16);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD KEY `purchase_ibfk_1` (`user_id`),
  ADD KEY `purchase_ibfk_2` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `users_has_products`
--
ALTER TABLE `users_has_products`
  ADD KEY `users_has_products_ibfk_1` (`user_id`),
  ADD KEY `users_has_products_ibfk_2` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `users_has_products`
--
ALTER TABLE `users_has_products`
  ADD CONSTRAINT `users_has_products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_has_products_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
