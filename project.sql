-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 04 jan. 2023 à 12:59
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `project`
--

-- --------------------------------------------------------

--
-- Structure de la table `pc&laptops`
--

CREATE TABLE `pc&laptops` (
  `label` varchar(500) NOT NULL,
  `price` double NOT NULL,
  `cpu` varchar(200) NOT NULL,
  `gpu` varchar(200) NOT NULL,
  `id` int(11) NOT NULL,
  `ram` int(11) NOT NULL,
  `keyboard&mouse` tinyint(1) NOT NULL,
  `category` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `pc&laptops`
--

INSERT INTO `pc&laptops` (`label`, `price`, `cpu`, `gpu`, `id`, `ram`, `keyboard&mouse`, `category`) VALUES
('Asuss ROG 5871', 899.99, 'I5 12600K 4.3Hz', 'RTX 3080 Ti', 1, 16, 1, 'pc&laptops'),
('Hp Omen ZR 485', 1299.99, 'I9 9900K 4.9Hz', 'RTX 4080', 2, 32, 1, 'pc&laptops'),
('My Updated Product', 899.99, 'I5 12600K 4.3Hz', 'RTX 3070 Ti', 12, 12, 0, 'pc&laptops'),
('Products Number 21', 899.99, 'I5 12600K 4.3Hz', 'Gtx 5875', 13, 26, 0, 'pc&laptops');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `ProId` int(11) NOT NULL,
  `label` varchar(120) NOT NULL,
  `Price` double NOT NULL,
  `added_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`ProId`, `label`, `Price`, `added_at`) VALUES
(1, 'Product Number 1', 0.99, '2022-12-09'),
(25165, 'Product Number 2', 14.99, '2022-12-09'),
(25166, 'Product Number 3', 19.99, '2022-12-09'),
(25168, 'Product Number 4', 49.99, '2022-12-09'),
(25169, 'Product Number 5', 24.99, '2022-12-18'),
(25173, 'Product Number 6 REUPDATED!', 14.99, '2022-12-16'),
(25176, 'Product Number 7', 14.99, '2022-12-24');

-- --------------------------------------------------------

--
-- Structure de la table `smartphones`
--

CREATE TABLE `smartphones` (
  `id` int(11) NOT NULL,
  `label` varchar(500) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `screensize` double NOT NULL,
  `voiceAssistant` tinyint(1) DEFAULT NULL,
  `memory` int(11) NOT NULL,
  `ram` int(11) NOT NULL,
  `builtInvoiceAssistant` varchar(75) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `smartphones`
--

INSERT INTO `smartphones` (`id`, `label`, `price`, `screensize`, `voiceAssistant`, `memory`, `ram`, `builtInvoiceAssistant`, `category`) VALUES
(1, 'Iphone 14 Pro Max', '8000.00', 7, 1, 128, 8, 'Google Assistant', 'smartphones'),
(2, 'Sumsang S9', '219.00', 7.2, 1, 64, 8, 'Google Assistant', 'smartphones'),
(6, 'Iphone 14 ', '699.99', 17, 1, 512, 8, 'Alexa', 'smartphones');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `pc&laptops`
--
ALTER TABLE `pc&laptops`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProId`);

--
-- Index pour la table `smartphones`
--
ALTER TABLE `smartphones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `pc&laptops`
--
ALTER TABLE `pc&laptops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `ProId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25177;

--
-- AUTO_INCREMENT pour la table `smartphones`
--
ALTER TABLE `smartphones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
