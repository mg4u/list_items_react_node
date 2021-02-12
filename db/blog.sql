-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2020 at 05:48 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

-- DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `description`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'Ipsa natus consectetur provident illo veritatis ipsam sint qui.', 'Reprehenderit aut optio dolorum quaerat. Commodi vel natus ut fugit. Et reprehenderit distinctio laudantium quia eum distinctio.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(2, 'Perferendis voluptas et a sunt perspiciatis voluptate.', 'Pariatur vel ut natus nemo cupiditate. Nulla explicabo atque non possimus illum debitis. Sed facilis sunt sit. Reprehenderit est quaerat excepturi totam sunt laborum.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(3, 'Ut aliquid fugiat enim ratione non autem.', 'Eos accusantium possimus cum exercitationem. Est nisi et et corrupti tempora quaerat adipisci. Est impedit ut illum nostrum et possimus excepturi.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(4, 'Odit ut nisi debitis eveniet.', 'Voluptatem ipsam eum rerum qui iusto. Pariatur explicabo laboriosam et provident eum adipisci. Dolorum et voluptas non pariatur nobis iste.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(5, 'Et iusto sunt sit molestiae incidunt ducimus et.', 'Tenetur maxime dolor quisquam sunt mollitia qui quis non. Enim in impedit aut in. Dignissimos id qui atque tempora. Libero enim asperiores molestiae et aliquid.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(6, 'Odit facilis corrupti eveniet hic exercitationem.', 'Nobis aut sit quaerat. Eos ut totam laudantium dolor expedita tempore. Occaecati voluptate qui tempora animi aut qui et sit.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(7, 'Eum a et quod esse.', 'Mollitia rem magnam autem tenetur id. Maiores quod repudiandae rem delectus. Quia enim doloribus omnis qui sit. Sequi voluptatibus quia eos veniam.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(8, 'Consequuntur fugit officia quos ullam occaecati.', 'Eius est ad est quisquam maxime sit sed. Illum laboriosam non porro iure amet eos. Nihil qui at et natus laborum enim. Assumenda atque et modi vel.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(9, 'Incidunt aut consectetur ex enim est.', 'Earum necessitatibus recusandae deserunt totam enim et doloremque. Maiores in optio omnis. Perspiciatis ratione autem aut architecto reprehenderit voluptas.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(10, 'Atque aliquam amet dolorum doloremque sunt libero est.', 'Quas qui doloribus assumenda vero quos sed. Eum quia maiores ex necessitatibus. Dolorem sequi rerum fugit et magni fuga sit. Deserunt omnis ipsum et nihil repellendus.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(11, 'Recusandae libero omnis consectetur qui voluptatibus.', 'Voluptate dolore ea necessitatibus maiores. Possimus ratione enim vel deleniti nulla. Doloremque autem alias consequatur facere ullam ea. Quasi tenetur in maxime porro est similique nisi.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(12, 'In rerum aut at earum.', 'Nostrum earum est ad provident dignissimos exercitationem praesentium. Animi facilis non deserunt eos enim. Non dicta quo reiciendis laborum aut quidem nesciunt.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(13, 'Repellendus vel et est ut in unde non.', 'Debitis iste consequuntur praesentium quis. Beatae sapiente quia voluptas voluptates tempora aliquid quia. Qui dolores possimus nam libero rerum. Cumque est ut aut harum qui quo.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(14, 'Maxime deleniti quaerat reiciendis et veritatis.', 'Veritatis debitis vel consectetur quis ducimus omnis quidem. Commodi esse distinctio sunt delectus perspiciatis et.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(15, 'Quas eum blanditiis omnis et nisi laboriosam accusantium.', 'Eius totam natus error voluptas maiores ut. Rerum nam veniam aliquam accusamus. Eum impedit id vitae similique iure est et.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(16, 'Quasi autem quos porro ipsum.', 'Est quidem voluptate reprehenderit sunt cupiditate eos eaque vitae. Rerum facere dolor enim exercitationem quaerat.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(17, 'Tenetur in aut quas eligendi.', 'Mollitia autem repellendus voluptatum qui iure. Similique eius sit placeat labore. Itaque et tempora sint quasi maiores porro.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(18, 'Omnis adipisci quia ut.', 'Optio eum dignissimos tempora ut dignissimos ea nam. Nihil aliquid atque corrupti vero quod omnis. Est veritatis quae error quae omnis occaecati provident ipsam. Vel repudiandae dignissimos dolores beatae ut.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(19, 'Vero perspiciatis aspernatur ea odit laborum dolor inventore saepe.', 'Quia quia eum illum numquam. Et ut rerum vel. Dolor qui quis dolor.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(20, 'Fuga debitis consequatur quis perspiciatis a voluptatem repellendus.', 'Quam ullam in autem enim perferendis sit quia. Qui officiis explicabo sed unde. Itaque quibusdam dolorem cupiditate dolore et. Illo ea quas ut reprehenderit.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(21, 'Commodi explicabo aliquid cum at.', 'Saepe nihil rerum commodi magnam ullam. Ut placeat cupiditate dolor et porro eius mollitia. Et ut esse sed sed aut nihil.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(22, 'Non quia qui quisquam quaerat ea consequatur sed.', 'Sit cumque officiis eligendi officia eos. Repellat non maxime adipisci. Dolor tempora omnis qui libero. Rerum voluptatem ex dolor sunt natus sequi est. Facilis quaerat quas accusamus mollitia autem ut.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(23, 'Consequatur minus consequatur et illo autem.', 'Necessitatibus autem voluptates voluptas natus et at in. Quaerat ut id ratione aut est quo. Possimus doloribus veritatis expedita eum voluptatibus ut.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(24, 'Nobis veniam deleniti sunt error impedit consequatur qui.', 'Cum magni nostrum optio nostrum quia quod nemo. Hic dolore harum ut ex.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(25, 'Excepturi dolorem sed odio et ut sit.', 'Natus quia ut corrupti laudantium perspiciatis occaecati. Aut sapiente illo et vitae magni velit sint. Repudiandae delectus quis sint distinctio vel et rerum. Rerum corporis et sit doloremque.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(26, 'Voluptatem ducimus sit libero quaerat adipisci explicabo.', 'Nam rerum numquam molestiae ullam qui consequatur sint. Molestiae natus aperiam rem a omnis. Culpa dignissimos nostrum beatae ullam error nam.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(27, 'Velit quia alias totam repellendus sint sunt quis.', 'Voluptatem neque vero blanditiis. Qui voluptate qui ullam. Omnis dolores molestias pariatur dolorem ab aut. Veritatis expedita voluptatibus expedita omnis adipisci exercitationem dolor.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(28, 'Consequuntur ut accusantium vitae ipsum est quo dolorum.', 'Et facilis atque pariatur repellat sit. Dolore architecto modi facere est magni. Alias vel pariatur officia consequuntur ut.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(29, 'Laudantium soluta vel tempore debitis.', 'Sed aut ipsum amet fugit. Nemo temporibus et earum omnis minus quia nam. Quas sint necessitatibus qui eos est autem fuga. Velit velit aperiam in eaque consequatur et. Quia ex perspiciatis provident ipsam illo eligendi rerum quia.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(30, 'Voluptatem natus ea vel veniam.', 'Dolores vitae velit atque excepturi incidunt illum architecto. Debitis corrupti eius quis deserunt. Rerum aut omnis nemo non error. Quo et reiciendis temporibus quibusdam.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(31, 'Doloribus non veniam incidunt eum laborum incidunt dolor.', 'Iste corrupti est quaerat voluptatem. Esse dolorem voluptatem dolorem. Ipsum aperiam quia asperiores laboriosam sequi.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(32, 'Quidem voluptate nulla aut in.', 'Aperiam inventore quidem officia omnis. Enim corporis autem voluptatum ea architecto nisi vel.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(33, 'Quibusdam est quos magni.', 'Id molestias qui fuga suscipit quis. Laudantium expedita ex eos earum. Fugiat dignissimos sunt eligendi. Omnis consequatur sunt ut et est dolores.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(34, 'Dolorum libero debitis eius molestiae.', 'Earum corrupti aut officia qui incidunt. Sapiente aut quod cupiditate illum voluptates. Quidem et dolores expedita sapiente dolor ab maxime.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(35, 'Nobis dolorem similique omnis quis sint.', 'Doloremque minima quia possimus non. Molestias quam aut officiis voluptas commodi atque suscipit. Et non et adipisci provident quia modi. Sit vitae est nihil accusamus eos eos possimus.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(36, 'Ipsa odit fugiat iste aliquam.', 'Qui totam consequatur deleniti fugit vel nemo aut expedita. Molestiae sed ut laudantium molestiae aut est et. Commodi optio tenetur temporibus vel est facere in. Est adipisci voluptatibus necessitatibus quasi cum.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(37, 'Qui ea cum enim est.', 'Aut nobis laborum odio id ut occaecati nihil. Voluptatibus error voluptate tenetur nisi similique magni quos. Doloremque est dolorem porro et. Assumenda et deserunt ab itaque sed.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(38, 'Sed labore labore dolorum nihil totam.', 'Itaque veniam et earum maxime. Aperiam aspernatur iste commodi animi et. Repellat labore esse blanditiis.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(39, 'Et soluta ratione earum expedita qui aperiam.', 'Perspiciatis voluptatem voluptas tempore soluta molestiae. Accusamus vero fugiat minima nisi at reprehenderit. Ad quas id ut sed eius hic id.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(40, 'Dolores molestias veniam voluptatem mollitia nostrum et et.', 'Repellendus quo voluptatem ut et facilis voluptatem sint occaecati. Sed sint quaerat rerum distinctio possimus fugit commodi. Sapiente facere quia aspernatur.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(41, 'Placeat nemo temporibus ea.', 'Error esse esse unde. Blanditiis libero architecto rerum voluptatem itaque. Qui laudantium rem et non mollitia ut placeat optio. Numquam nulla ad assumenda. Non ad aliquid ipsam atque officiis.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(42, 'Rem aut provident est molestiae molestias tempora eos et.', 'Vel rerum excepturi iste omnis quasi. Sit totam nisi iure. Et nobis atque fugiat aut laudantium esse.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(43, 'Voluptatem eaque itaque nobis.', 'Nihil eius quae a nihil. Et rem dolorum ab fugit enim recusandae beatae. Sint ut velit cumque cupiditate rerum. Quia reiciendis iste repellat ad consequatur aspernatur ut.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(44, 'Eum quo rerum aliquam eum accusantium eum dolores iste.', 'Sit deserunt et ipsa maiores neque aliquid. Est deserunt perferendis reiciendis vel harum.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(45, 'Eum iusto fugit doloremque distinctio sed.', 'Ea recusandae sapiente numquam. Repellat explicabo quia et porro. Iusto aliquid sint ad at vel et ipsam. Dolores voluptates velit eum rerum sit.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(46, 'Voluptatem nam maiores architecto autem quas.', 'Dolorem voluptas vero quod molestiae consectetur libero. Quod nostrum architecto nostrum ducimus et. Blanditiis qui ad ut qui. Sint molestias occaecati ex mollitia sed vel.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(47, 'Officia voluptate omnis exercitationem quidem non.', 'Corrupti minus est aut ut voluptatum. Est id deleniti beatae nihil amet et.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(48, 'Et deserunt vero ut maiores neque omnis.', 'Tempore et itaque dolores tempore praesentium voluptates dicta voluptatem. Vitae asperiores est sit repudiandae eum ut occaecati. Enim corporis soluta aspernatur amet id. Culpa autem quasi modi dolores vel nulla. Doloremque eum sit adipisci nihil et.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(49, 'Accusamus minus ipsa illum est ut.', 'Atque qui nulla ut nostrum et nam ab rerum. Quo tempora reiciendis error et accusantium. Voluptates eum dolorum quas nostrum repellendus doloremque non. Debitis non quas nesciunt earum modi quo ab. Et voluptatem ipsam eaque deleniti quia suscipit et enim.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(50, 'Itaque quod dolorum reiciendis delectus illo facere.', 'Dignissimos vero aspernatur voluptatem consequatur qui. Quam voluptates ut dolorum in quo. Doloremque quos dolorem cupiditate pariatur. Earum fugit distinctio aut consequatur.', '2018-03-28 06:46:22', '2018-03-28 06:46:22', NULL),
(64, 'why do we use it, with reasons ?', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '2020-04-16 17:17:04', '2020-04-16 17:17:30', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

-- DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `api_token` text COLLATE utf8mb4_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `status`, `password`, `remember_token`, `created_at`, `updated_at`, `api_token`) VALUES
(1, 'Administrator', 'test@test.com', NULL, 1, '$2b$12$w2PICmUvmgZIMnKdS7.Wxug0GHufNrYIc76VzLDj6JbTN2adIZ6JS', NULL, '2018-03-28 06:53:34', '2018-03-28 06:53:34', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInBob25lIjpudWxsLCJzdGF0dXMiOjEsImlhdCI6MTU4NzA1NzQ4M30.ybtChiMWoU7yT1y1QlidG75tHBvAdGrohdfNw_QxzjM'),
(2, 'Euna Brown', 'beatty.yvette@yahoo.com', NULL, 1, '$2y$10$X.MNySkv9KFT2gw.5Ja/tu3h.enuvf51BbdnCAE162kVs/ayKtu9G', NULL, '2018-03-28 06:53:34', '2018-03-28 06:53:34', NULL),
(3, 'Brisa Marvin', 'donnelly.emmitt@gmail.com', NULL, 1, '$2y$10$X.MNySkv9KFT2gw.5Ja/tu3h.enuvf51BbdnCAE162kVs/ayKtu9G', NULL, '2018-03-28 06:53:34', '2018-03-28 06:53:34', NULL),
(4, 'Anika Little', 'ratke.rhett@sauer.net', NULL, 1, '$2y$10$X.MNySkv9KFT2gw.5Ja/tu3h.enuvf51BbdnCAE162kVs/ayKtu9G', NULL, '2018-03-28 06:53:34', '2018-03-28 06:53:34', NULL),
(5, 'Juston Shields', 'rblock@halvorson.com', NULL, 1, '$2y$10$X.MNySkv9KFT2gw.5Ja/tu3h.enuvf51BbdnCAE162kVs/ayKtu9G', NULL, '2018-03-28 06:53:34', '2018-03-28 06:53:34', NULL),
(6, 'Hans Gislason', 'douglas.okey@yahoo.com', NULL, 1, '$2y$10$X.MNySkv9KFT2gw.5Ja/tu3h.enuvf51BbdnCAE162kVs/ayKtu9G', NULL, '2018-03-28 06:53:34', '2018-03-28 06:53:34', NULL),
(7, 'Dr. Naomie Boyer', 'alena.graham@gmail.com', NULL, 1, '$2y$10$X.MNySkv9KFT2gw.5Ja/tu3h.enuvf51BbdnCAE162kVs/ayKtu9G', NULL, '2018-03-28 06:53:34', '2018-03-28 06:53:34', NULL),
(8, 'Braxton Jerde', 'hweber@schimmel.biz', NULL, 1, '$2y$10$X.MNySkv9KFT2gw.5Ja/tu3h.enuvf51BbdnCAE162kVs/ayKtu9G', NULL, '2018-03-28 06:53:34', '2018-03-28 06:53:34', NULL),
(9, 'Prof. Johnnie Schneider', 'elliott.leuschke@schiller.com', NULL, 1, '$2y$10$X.MNySkv9KFT2gw.5Ja/tu3h.enuvf51BbdnCAE162kVs/ayKtu9G', NULL, '2018-03-28 06:53:34', '2018-03-28 06:53:34', NULL),
(10, 'Dr. Humberto Marvin', 'gschulist@schroeder.com', NULL, 1, '$2y$10$X.MNySkv9KFT2gw.5Ja/tu3h.enuvf51BbdnCAE162kVs/ayKtu9G', NULL, '2018-03-28 06:53:34', '2018-03-28 06:53:34', NULL),
(11, 'Asha Kihn', 'daphnee.schaden@yahoo.com', NULL, 1, '$2y$10$X.MNySkv9KFT2gw.5Ja/tu3h.enuvf51BbdnCAE162kVs/ayKtu9G', NULL, '2018-03-28 06:53:34', '2018-03-28 06:53:34', NULL),
(12, 'test', 'aaa@sss.vvv', NULL, 1, '$2y$10$LKZ0KeabxCcLDKy51E5W2eTx..mvniOt4XEelMgz/gHoUCn1f929.', NULL, '2018-03-28 11:57:43', '2018-03-28 11:57:43', 'Z72Mgfff3TzsbqlYsewySB0Ybxfn1RnrXLYC58DwRmebsh0gHPjz7XgR4cfq'),
(13, 'aaa', 'aaa@aaa.aaa', NULL, 1, '$2y$10$9zcco5bmtpfh3YEzNs7tCuL4ZpNhaXYRxlS5rvveaP7dPKg5nBi8u', NULL, '2018-03-29 15:56:15', '2018-03-29 15:56:15', 'mbrgzvsehjtIKgBxbVq7UK11GfaFebYI6rzIo5qVzWPgw8ShPiLo8sNcyvOZ'),
(14, 'Mahmoud', 'aaa@test.com', '+2012345678', 0, '$2b$12$4qk6UpVSiy6F05Yq/YxaNuk72RNe1nr7o16.AJnffDh3qEQoZjhgK', NULL, NULL, NULL, NULL),
(15, 'Mahmoud', 'aa1a@test.com', '+2012345678', 1, '$2b$12$z0.N/pOh3lPzW7Kbv98x2Ob1fTXykc2Gr7Hby7dQMTycZt/2T8wWe', NULL, NULL, NULL, NULL),
(16, 'Mahmoud', 'aada@test.com', '+2012345678', 1, '$2b$12$NL9jXRzpcKB60CZLMRje1uiuOCNdYf4JFv0cSmEecuczFUZTiI/Pe', NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFobW91ZCI');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
