CREATE USER 'vaultservice' @'%' IDENTIFIED BY 'tmp-password-vault';
GRANT ALL privileges ON *.* TO 'vaultservice'@'%' with grant option;

CREATE USER 'javaservice' @'%' IDENTIFIED BY 'tmp-password-java';
GRANT ALL privileges ON *.* TO 'javaservice'@'%' with grant option;

CREATE USER '' @'%' IDENTIFIED BY 'tmp-password-vault';
GRANT ALL privileges ON *.* TO 'vaultservice'@'%' with grant option;

CREATE DATABASE app;
USE app

CREATE TABLE USER (
    USER_ID BIGINT AUTO_INCREMENT PRIMARY KEY,
    USERNAME VARCHAR(255) NOT NULL,
    PASSWORD VARCHAR(255) NOT NULL,
    IS_ACTIVE BOOLEAN,
    ACCOUNT_TYPE VARCHAR(50)
);

INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (1, 'testuser', 'testpassword', TRUE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (2, 'gizzklsd', '2&Yq3ArAH0Z+', FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (3, 'ynufkuvb', 'Kk+C&FYpi0mR', TRUE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (4, 'zhtvtzjx', 'gNJW%1h1M&Sa', FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (5, 'unkabsyp', 'eJ=t6n!Nl?46', TRUE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (6, 'uicqjstn', '{f0{<QN.T_e"', FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (7, 'tmjhkjoa', "#-H47'$f2Em$", TRUE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (8, 'czikuddj', "iq6tKC;'&1`~", FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (9, 'rvwhytwq', 'IS4sO"B5b#', FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (10, 'cuvqbrft', 'Sp4;NnT:!2=S', FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (11, 'ltrpzvcn', '##,x7S4_f@nS', FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (12, 'kknkstck', 'e1-fz.-cX]f0', TRUE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (13, 'tiulnqjt', 'Z-aA7yDN^5\\5', FALSE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (14, 'oyswzhvf', 'L,1O7Kq<k2Xf', TRUE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (15, 'fthdmmqu', "}|({ZWh<J{#", FALSE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (16, 'nkvdmisc', '*=<*.z_Bq:S,', FALSE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (17, 'smgzwlul', '4}OkmwLw*Lv', FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (18, 'fcroupwv', 'Srd:$"Z,e9=~', TRUE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (19, 'uckeqkjk', 'K%MyA`2~i+*4', TRUE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (20, 'avgqdqfm', '_*Di+1d/VYd!', FALSE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (21, 'oadacnsw', '9BhU@mU3J=U[', TRUE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (22, 'qqnretel', '.(N:A&Ar|1y.', TRUE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (23, 'lrtadboq', 'Ch"wDezB/ORK', TRUE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (24, 'maflcmyd', 's~DB^fY..2R$', FALSE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (25, 'tjzcxzqo', 'F-]M`z,xZn:x', FALSE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (26, 'qshvjxgq', "N=|Yb(X'K}<<", FALSE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (27, 'axrgdqjl', 'LBcNr-Gf*[:e', TRUE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (28, 'bjwbanmc', 'df[k=E)+Df9I', FALSE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (29, 'qctshfrt', "rqpc{}t;'5Lc", FALSE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (30, 'vmaifojs', '!i$s+sN\"C*xP', TRUE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (31, 'plxpkmst', '<Cp^%Vw3B4\\&', TRUE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (32, 'xpdynvjj', 'tnhWM|1k%{cA', TRUE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (33, 'xeldjjja', '%\\(S3nd\\xX.j', FALSE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (34, 'qikcjony', 'DU33!EmV`3T+', FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (35, 'kjxkpoqw', '!NaNv~kYGH/}', TRUE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (36, 'rsboqiew', '<TJ2Im@}*/X?', TRUE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (37, 'qlatvdjo', ',P0w#1/e#&x*', TRUE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (38, 'xlxaabmo', 'bQ:Zybu~9m+.', TRUE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (39, 'uasseawr', 'wYSsd}g;|hJc', TRUE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (40, 'vkmegaiv', 'hu<"1BjCFZ~<', FALSE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (41, 'kswwcrji', "{->X*21zDp^", TRUE, 'ADMIN');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (42, 'hmlckeks', '"qjRj)`|Gsw+', FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (43, 'hiavipmt', 'O1&U=+>Vqzl.', TRUE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (44, 'ivutsaqw', 'Y{Lh#}uJ_z^u', TRUE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (45, 'tavfjcnl', '"dj98sr|8f$S', TRUE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (46, 'dwhxrjca', '$?iFFmo{k>do', FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (47, 'txomtowu', '@}\\KZJGTXA?_', FALSE, 'USER');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (48, 'fllhkuyz', 'P]tA_39j%?5P', TRUE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (49, 'wbazexsy', ']G`;B.q~vbbA', FALSE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (50, 'blqsagsu', 'U5!*RuS>!uR:', TRUE, 'GUEST');
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, IS_ACTIVE, ACCOUNT_TYPE) VALUES (51, 'vbkgtdtn', 'o04d7aHmKy', FALSE, 'USER');
