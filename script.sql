USE [master]
GO
/****** Object:  Database [ProjetFinalECommerce]    Script Date: 1/29/2024 4:22:03 PM ******/
CREATE DATABASE [ProjetFinalECommerce]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ProjetFinalECommerce', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\ProjetFinalECommerce.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ProjetFinalECommerce_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\ProjetFinalECommerce_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ProjetFinalECommerce] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ProjetFinalECommerce].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ProjetFinalECommerce] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET ARITHABORT OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ProjetFinalECommerce] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ProjetFinalECommerce] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ProjetFinalECommerce] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ProjetFinalECommerce] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET RECOVERY FULL 
GO
ALTER DATABASE [ProjetFinalECommerce] SET  MULTI_USER 
GO
ALTER DATABASE [ProjetFinalECommerce] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ProjetFinalECommerce] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ProjetFinalECommerce] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ProjetFinalECommerce] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ProjetFinalECommerce] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'ProjetFinalECommerce', N'ON'
GO
ALTER DATABASE [ProjetFinalECommerce] SET QUERY_STORE = OFF
GO
USE [ProjetFinalECommerce]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [ProjetFinalECommerce]
GO
/****** Object:  Table [dbo].[Articles]    Script Date: 1/29/2024 4:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Articles](
	[idArticle] [int] NOT NULL,
	[nom] [nvarchar](50) NULL,
	[description] [nvarchar](max) NULL,
	[categorie] [nvarchar](50) NULL,
	[prix] [float] NULL,
	[image] [nvarchar](50) NULL,
 CONSTRAINT [PK_Articles] PRIMARY KEY CLUSTERED 
(
	[idArticle] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Commande]    Script Date: 1/29/2024 4:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Commande](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idClient] [int] NULL,
	[date] [datetime] NULL,
	[prixTotal] [float] NULL,
	[infos] [nvarchar](50) NULL,
 CONSTRAINT [PK_Commande] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ligneCommande]    Script Date: 1/29/2024 4:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ligneCommande](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[quantite] [int] NULL,
	[prix] [float] NULL,
	[idCommande] [int] NULL,
	[idArticle] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Utilisateurs]    Script Date: 1/29/2024 4:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Utilisateurs](
	[login] [nvarchar](50) NOT NULL,
	[password] [nvarchar](50) NULL,
	[nom] [nvarchar](50) NULL,
	[prenom] [nvarchar](50) NULL,
	[adresse] [nvarchar](50) NULL,
	[date_naissance] [datetime] NULL,
	[isAdmin] [bit] NULL,
	[e_mail] [nvarchar](50) NULL,
 CONSTRAINT [PK_Utilisateurs] PRIMARY KEY CLUSTERED 
(
	[login] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Articles] ([idArticle], [nom], [description], [categorie], [prix], [image]) VALUES (1, N'Hoodie', N'sweat-shirt a capuche', N'Hommes', 60, N'blackhoodie.jpg')
INSERT [dbo].[Articles] ([idArticle], [nom], [description], [categorie], [prix], [image]) VALUES (2, N'Pantalon', N'pantalon de survêtement marron', N'Hommes', 50, N'sweatpant.jpg')
INSERT [dbo].[Articles] ([idArticle], [nom], [description], [categorie], [prix], [image]) VALUES (3, N'Chaussure', N'chaussures noires', N'Hommes', 30, N'shoes.jpg')
INSERT [dbo].[Articles] ([idArticle], [nom], [description], [categorie], [prix], [image]) VALUES (4, N'Sweatshirt à capuche', N'conçu en molleton de coton doux et confortable ', N'Femmes', 45, N'sweater.jpg')
INSERT [dbo].[Articles] ([idArticle], [nom], [description], [categorie], [prix], [image]) VALUES (5, N'Pantalon de survêtement  ', N'Sa coupe  décontractée t offre un maximum de confort pour te détendre ou te déplacer. ', N'Femmes', 55, N'pantalons.jpg')
INSERT [dbo].[Articles] ([idArticle], [nom], [description], [categorie], [prix], [image]) VALUES (6, N'Chaussure Boost', N' La chaussure Boost est conçu pour les runs de moyenne et longue distance', N'Femmes', 75, N'chaussuresfemmes.jpg')
INSERT [dbo].[Articles] ([idArticle], [nom], [description], [categorie], [prix], [image]) VALUES (7, N'capuche', N'capuche', N'hommes', 30, N'')
GO
SET IDENTITY_INSERT [dbo].[Commande] ON 

INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (2, 1, NULL, 40, N'commande cree')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (3, NULL, NULL, NULL, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (4, NULL, NULL, NULL, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (5, NULL, NULL, NULL, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (6, NULL, NULL, NULL, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (7, 1, CAST(N'2024-01-28T16:16:30.457' AS DateTime), 20, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (8, 1, CAST(N'2024-01-28T16:17:21.807' AS DateTime), 20, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (9, 1, CAST(N'2024-01-28T16:17:35.063' AS DateTime), 20, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (10, 1, CAST(N'2024-01-28T16:18:56.567' AS DateTime), 20, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (11, 1, CAST(N'2024-01-28T16:25:28.783' AS DateTime), 20, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (12, 1, CAST(N'2024-01-28T16:36:40.030' AS DateTime), 50, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (13, 1, CAST(N'2024-01-28T16:36:55.087' AS DateTime), 110, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (14, 1, CAST(N'2024-01-28T17:31:49.607' AS DateTime), 110, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (15, 1, CAST(N'2024-01-28T18:07:21.173' AS DateTime), 60, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (16, 1, NULL, 40, N'commande cree')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (17, 1, NULL, 40, N'commande cree')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (23, 1, NULL, 40, N'commande cree')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (24, 1, CAST(N'2024-01-28T19:39:51.110' AS DateTime), 110, NULL)
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (26, 1, CAST(N'2024-01-28T21:18:51.360' AS DateTime), 110, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (27, 1, CAST(N'2024-01-28T21:20:54.697' AS DateTime), 110, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (28, 1, CAST(N'2024-01-28T21:26:54.090' AS DateTime), 110, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (30, 1, NULL, 90, N'commande cree')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (31, 1, CAST(N'2024-01-28T21:30:02.393' AS DateTime), 110, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (46, NULL, NULL, 90, N'commande cree')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (51, NULL, NULL, 90, N'commande cree')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (52, 1, NULL, 90, N'commande cree')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (54, 1, NULL, 90, N'commande cree')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (55, 1, CAST(N'2024-01-28T22:47:47.710' AS DateTime), 140, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (56, 1, CAST(N'2024-01-28T22:58:33.233' AS DateTime), 90, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (57, 1, CAST(N'2024-01-29T08:46:43.323' AS DateTime), 140, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (58, 1, CAST(N'2024-01-29T09:02:25.930' AS DateTime), 120, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (59, 1, CAST(N'2024-01-29T09:10:54.353' AS DateTime), 60, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (60, 1, CAST(N'2024-01-29T09:27:51.267' AS DateTime), 60, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (61, 1, CAST(N'2024-01-29T09:28:52.153' AS DateTime), 120, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (62, 1, CAST(N'2024-01-29T09:29:24.970' AS DateTime), 80, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (63, 1, CAST(N'2024-01-29T09:30:54.043' AS DateTime), 120, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (64, 1, CAST(N'2024-01-29T10:02:51.443' AS DateTime), 140, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (65, 1, CAST(N'2024-01-29T10:13:26.853' AS DateTime), 220, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (66, 1, CAST(N'2024-01-29T12:19:01.973' AS DateTime), 220, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (67, 1, CAST(N'2024-01-29T12:20:37.257' AS DateTime), 160, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (68, 1, CAST(N'2024-01-29T13:05:26.650' AS DateTime), 110, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (69, 1, CAST(N'2024-01-29T13:24:58.517' AS DateTime), 220, N'done')
INSERT [dbo].[Commande] ([id], [idClient], [date], [prixTotal], [infos]) VALUES (70, 1, CAST(N'2024-01-29T13:30:43.610' AS DateTime), 300, N'done')
SET IDENTITY_INSERT [dbo].[Commande] OFF
GO
SET IDENTITY_INSERT [dbo].[ligneCommande] ON 

INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (1, 2, 50, 54, 2)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (2, 1, 60, 55, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (3, 1, 50, 55, 2)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (4, 1, 30, 55, 3)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (5, 1, 60, 56, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (6, 1, 30, 56, 3)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (7, NULL, 60, 57, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (8, NULL, 50, 57, 2)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (9, NULL, 30, 57, 3)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (10, 1, 60, 58, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (11, 1, 60, 58, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (12, 2, 60, 59, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (13, 1, 60, 60, NULL)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (14, 1, 60, 61, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (15, 1, 60, 61, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (16, 1, 30, 62, 3)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (17, 1, 50, 62, 2)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (18, 1, 60, 63, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (19, 1, 60, 63, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (20, 3, 60, 64, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (21, 3, 50, 64, 2)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (22, 3, 30, 64, 3)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (23, 2, 60, 65, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (24, 2, 50, 65, 2)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (25, 2, 60, 66, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (26, 2, 50, 66, 2)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (27, 1, 60, 67, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (28, 2, 50, 67, 2)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (29, 1, 60, 68, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (30, 1, 50, 68, 2)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (31, 2, 50, 69, 2)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (32, 2, 60, 69, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (33, 3, 50, 70, 2)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (34, 2, 60, 70, 1)
INSERT [dbo].[ligneCommande] ([id], [quantite], [prix], [idCommande], [idArticle]) VALUES (35, 1, 30, 70, 3)
SET IDENTITY_INSERT [dbo].[ligneCommande] OFF
GO
INSERT [dbo].[Utilisateurs] ([login], [password], [nom], [prenom], [adresse], [date_naissance], [isAdmin], [e_mail]) VALUES (N'1', N'123', N'toto', N'titi', N'rue chaussee', CAST(N'1900-01-01T00:00:00.000' AS DateTime), 1, N'toto@titi.com')
GO
ALTER TABLE [dbo].[ligneCommande]  WITH CHECK ADD FOREIGN KEY([idArticle])
REFERENCES [dbo].[Articles] ([idArticle])
GO
ALTER TABLE [dbo].[ligneCommande]  WITH CHECK ADD FOREIGN KEY([idCommande])
REFERENCES [dbo].[Commande] ([id])
GO
USE [master]
GO
ALTER DATABASE [ProjetFinalECommerce] SET  READ_WRITE 
GO
