CREATE USER 'javaservice' @'%' IDENTIFIED BY 'tmp-password-java';
GRANT ALL privileges ON *.* TO 'javaservice'@'%' with grant option;;

CREATE DATABASE app;
USE app;

CREATE TABLE `user` (
                      USER_ID BIGINT AUTO_INCREMENT PRIMARY KEY,
                      ENTITY_ID VARCHAR(255),
                      IS_ACTIVE TINYINT(1) NOT NULL DEFAULT 0
);

CREATE TABLE `posts` (
                       POST_ID BIGINT AUTO_INCREMENT PRIMARY KEY,
                       USER_ID BIGINT,
                       TITLE VARCHAR(255),
                       CONTENT TEXT
);
