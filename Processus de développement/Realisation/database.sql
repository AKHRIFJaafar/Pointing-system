-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 16 juil. 2021 à 17:54
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
(12, 'Asmae', 'KB556677', '333', 'Paintre', '0677554433', 'Hakkama', NULL),
(13, 'Asmae', 'KB556677', '12', 'Paintre', '0677554433', 'Hakkama', NULL),
(14, 'Asmae', 'KB556677', '555', 'Maçon', '0677554433', 'Hakkama', NULL),
(16, 'Yassine Bouchlouch', 'KB556677', '5', 'Paintre', '0677554433', 'Hakkama', NULL),
(17, 'Yassine Bouchlouch', 'KB556677', '5', 'Paintre', '0677554433', 'Hakkama', NULL),
(18, 'Yassine Bouchlouch', 'KB556677', '5', 'Paintre', '0677554433', 'Hakkama', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `pointage`
--

CREATE TABLE `pointage` (
  `idPointage` int NOT NULL,
  `idOuvrier` int DEFAULT NULL,
  `idPointeur` int DEFAULT NULL,
  `heurePointage` varchar(30) DEFAULT NULL,
  `nombreHeure` varchar(10) DEFAULT NULL,
  `presence` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `pointage`
--

INSERT INTO `pointage` (`idPointage`, `idOuvrier`, `idPointeur`, `heurePointage`, `nombreHeure`, `presence`) VALUES
(1, 12, NULL, 'ertyu', 'ertyu', 1),
(2, 12, NULL, 'ERTT', 'tttttt', 0);

-- --------------------------------------------------------

--
-- Structure de la table `pointeur`
--

CREATE TABLE `pointeur` (
  `idPointeur` int NOT NULL,
  `nomPointeur` varchar(45) NOT NULL,
  `emailPointeur` varchar(45) NOT NULL,
  `motDePasse` varchar(45) NOT NULL,
  `motChantier` varchar(45) DEFAULT NULL,
  `photoPointeur` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  MODIFY `idOuvrier` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `pointage`
--
ALTER TABLE `pointage`
  MODIFY `idPointage` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `pointeur`
--
ALTER TABLE `pointeur`
  MODIFY `idPointeur` int NOT NULL AUTO_INCREMENT;

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
