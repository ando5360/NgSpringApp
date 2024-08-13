CREATE USER 'service' @'%' IDENTIFIED BY 'default';
GRANT ALL privileges ON *.* TO 'service'@'%' with grant option;

CREATE DATABASE app;