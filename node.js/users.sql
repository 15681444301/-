-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2021-07-31 13:39:39
-- 服务器版本： 10.4.20-MariaDB
-- PHP 版本： 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `login`
--

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `password` text NOT NULL,
  `created` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `created`) VALUES
(1, 'q724110787', 'as8078796', '2021-07-31 06:09:14'),
(3, 'q724110787', '$2a$10$J4H/iheFfUiame.QN/3H0.Q4HKMkotsevLlPoOtJ8WU6c9MtWf6BK', '2021-07-31 06:17:26'),
(4, 'q724110787', '$2a$10$zp4i6P8mrXx7A8Kz58UWdu2EO65JC5J0zai4YbFyvM/ZJtGF3cHuS', '2021-07-31 06:28:22'),
(5, 'qqq724110787', 'as8078796', '2021-07-31 06:57:46'),
(6, '18084906857', '123456', '2021-07-31 09:30:12'),
(7, 'q724110787a', 'as8078796', '2021-07-31 10:45:26'),
(8, '18084906851', 'as8078796', '2021-07-31 10:55:22'),
(9, '', '', '2021-07-31 11:00:00'),
(10, '111111', '111111', '2021-07-31 11:28:20');

--
-- 转储表的索引
--

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
