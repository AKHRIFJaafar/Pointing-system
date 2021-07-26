-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 26 juil. 2021 à 17:33
-- Version du serveur :  8.0.24
-- Version de PHP : 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `systeme-pointage`
--

-- --------------------------------------------------------

--
-- Structure de la table `ouvriers`
--

CREATE TABLE `ouvriers` (
  `idOuvrier` int NOT NULL,
  `nomOuvrier` varchar(45) NOT NULL,
  `numCIN` varchar(45) NOT NULL,
  `prixHeure` varchar(45) NOT NULL,
  `categorie` varchar(45) NOT NULL,
  `telephone` varchar(45) NOT NULL,
  `nomChantier` varchar(45) NOT NULL,
  `photoOuvrier` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `ouvriers`
--

INSERT INTO `ouvriers` (`idOuvrier`, `nomOuvrier`, `numCIN`, `prixHeure`, `categorie`, `telephone`, `nomChantier`, `photoOuvrier`) VALUES
(19, 'Asmae', 'KB556677', '30', 'Macon', '0677554433', 'Hakkama', NULL),
(20, 'Fatima', 'K34567', '15', 'Paintre', '0677554433', 'Bni Makada', NULL),
(21, 'Jaafar', 'L234567', '20', 'Carelageur', '0655554400', 'Tanja Balia', NULL),
(22, 'Yassine', 'T345678', '25', 'Tailleur', '0544332266', 'Gzenaya', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `pointage`
--

CREATE TABLE `pointage` (
  `idPointage` int NOT NULL,
  `idOuvrier` int DEFAULT NULL,
  `idPointeur` int DEFAULT NULL,
  `heurePointage` datetime DEFAULT CURRENT_TIMESTAMP,
  `nombreHeure` int DEFAULT NULL,
  `presence` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `pointage`
--

INSERT INTO `pointage` (`idPointage`, `idOuvrier`, `idPointeur`, `heurePointage`, `nombreHeure`, `presence`) VALUES
(4, 19, NULL, '2021-07-26 15:57:35', 0, 0),
(5, 21, NULL, '2021-07-26 15:57:31', 0, 0),
(6, 20, NULL, '2021-07-26 13:54:18', 8, 1),
(7, 22, NULL, '2021-07-26 15:57:33', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `pointeur`
--

CREATE TABLE `pointeur` (
  `idPointeur` int NOT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `motChantier` varchar(45) DEFAULT NULL,
  `photoPointeur` varchar(45) DEFAULT NULL,
  `created` timestamp(1) NULL DEFAULT NULL,
  `pointeurcol` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `pointeur`
--

INSERT INTO `pointeur` (`idPointeur`, `lastname`, `email`, `password`, `motChantier`, `photoPointeur`, `created`, `pointeurcol`) VALUES
(1, 'Jaafar', 'prototype@gmail.com', '12345', NULL, NULL, NULL, NULL),
(2, 'Ajendouz', 'no@gmail.com', 'YXplcnR5', NULL, NULL, '2021-07-26 14:15:50.0', NULL),
(4, 'Anas', 'akhrifjaafar7@gmail.com', 'YXplcnR5', NULL, NULL, '2021-07-26 14:17:53.0', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ouvriers`
--
ALTER TABLE `ouvriers`
  ADD PRIMARY KEY (`idOuvrier`);

--
-- Index pour la table `pointage`
--
ALTER TABLE `pointage`
  ADD PRIMARY KEY (`idPointage`),
  ADD KEY `FK_idOuvrier` (`idOuvrier`),
  ADD KEY `FK_idPointeur` (`idPointeur`);

--
-- Index pour la table `pointeur`
--
ALTER TABLE `pointeur`
  ADD PRIMARY KEY (`idPointeur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `ouvriers`
--
ALTER TABLE `ouvriers`
  MODIFY `idOuvrier` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `pointage`
--
ALTER TABLE `pointage`
  MODIFY `idPointage` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `pointeur`
--
ALTER TABLE `pointeur`
  MODIFY `idPointeur` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `pointage`
--
ALTER TABLE `pointage`
  ADD CONSTRAINT `FK_idOuvrier` FOREIGN KEY (`idOuvrier`) REFERENCES `ouvriers` (`idOuvrier`),
  ADD CONSTRAINT `FK_idPointeur` FOREIGN KEY (`idPointeur`) REFERENCES `pointeur` (`idPointeur`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
