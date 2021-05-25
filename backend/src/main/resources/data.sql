INSERT INTO tb_user (name, email, password, university) VALUES ('Elias Nepomuceno', 'elias@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Universidade Federal de Goiás');
INSERT INTO tb_user (name, email, password, university) VALUES ('João Pedro', 'joao@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Universidade Federal de Goiás');
INSERT INTO tb_user (name, email, password, university) VALUES ('Andre Luiz', 'andre@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Universidade Federal de Goiás');
INSERT INTO tb_user (name, email, password, university) VALUES ('Carlos Galvão', 'galvao@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Universidade Federal de Goiás');

INSERT INTO tb_role (authority) VALUES ('ROLE_STUDENT');
INSERT INTO tb_role (authority) VALUES ('ROLE_INSTRUCTOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 3);

INSERT INTO tb_course (name, img_Uri, description, created_At) VALUES ('Cálculo 3A', 'https://ik.imagekit.io/yuapu0v8eof/imagem_cálculo_48paV4CjV.png', 'Integrais de linha, integrais de superfícies, etc.', NOW());
INSERT INTO tb_course (name, img_Uri, description, created_At) VALUES ('Equações Diferenciais Ordinárias', 'https://ik.imagekit.io/yuapu0v8eof/edo_imagem_SvV9BLr1c.png', 'Lorem ipsum blablabla', NOW());
INSERT INTO tb_course (name, img_Uri, description, created_At) VALUES ('Estruturas de Dados 1', 'https://ik.imagekit.io/yuapu0v8eof/imagem_estrutura_de_dados_3HO9vXi7t.png', 'Lorem ipsum blablabla', NOW());
INSERT INTO tb_course (name, img_Uri, description, created_At) VALUES ('Física 3', 'https://ik.imagekit.io/yuapu0v8eof/fisica-3_kdGz_6rc3.png', 'Lorem ipsum blablabla', NOW());
INSERT INTO tb_course (name, img_Uri, description, created_At) VALUES ('Circuitos Lógicos 1', 'https://ik.imagekit.io/yuapu0v8eof/circuitos_logicos_XTKzwuLtv.png', 'Lorem ipsum blablabla', NOW());

INSERT INTO tb_user_course (user_id, course_id) VALUES (1, 1);
INSERT INTO tb_user_course (user_id, course_id) VALUES (1, 2);
INSERT INTO tb_user_course (user_id, course_id) VALUES (1, 3);
INSERT INTO tb_user_course (user_id, course_id) VALUES (1, 4);
INSERT INTO tb_user_course (user_id, course_id) VALUES (1, 5);
INSERT INTO tb_user_course (user_id, course_id) VALUES (2, 1);
INSERT INTO tb_user_course (user_id, course_id) VALUES (2, 2);
INSERT INTO tb_user_course (user_id, course_id) VALUES (2, 3);
INSERT INTO tb_user_course (user_id, course_id) VALUES (3, 1);

INSERT INTO tb_lesson (title, subtitle, status, course_id) VALUES ('Aula 1 - Parametrização de curvas', 'Nesta aula você aprenderá a parametrizar curvas', 0, 1);
INSERT INTO tb_lesson (title, subtitle, status, course_id) VALUES ('Aula 2 - Integrais de linhas', 'Nesta aula você aprenderá a calcular integrais de linhas', 0, 1);
INSERT INTO tb_lesson (title, subtitle, status, course_id) VALUES ('Tarefa 1 - Lista sobre integrais de linhas', 'Resolva a lista sobre integrais de linhas', 1, 1);
INSERT INTO tb_lesson (title, subtitle, status, course_id) VALUES ('Tarefa 2 - Parametrização de superfícies', 'Nesta aula você aprenderá a parametrizar superfícies', 1, 1);
INSERT INTO tb_lesson (title, subtitle, status, course_id) VALUES ('Tarefa 3 - Parametrização de superfícies', 'Nesta aula você aprenderá a parametrizar superfícies', 1, 1);
INSERT INTO tb_lesson (title, subtitle, status, course_id) VALUES ('Tarefa 4 - Parametrização de superfícies', 'Nesta aula você aprenderá a parametrizar superfícies', 1, 1);
INSERT INTO tb_lesson (title, subtitle, status, course_id) VALUES ('Tarefa 5 - Parametrização de superfícies', 'Nesta aula você aprenderá a parametrizar superfícies', 1, 1);

INSERT INTO tb_deliver (uri, created_At, status, feedback, lesson_id, user_id, course_id) VALUES ('https://github.com/eliasnepo/myclass', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 0, null, 3, 1, 1);
INSERT INTO tb_deliver (uri, created_At, status, feedback, lesson_id, user_id, course_id) VALUES ('https://github.com/eliasnepo/myclass', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 0, null, 4, 1, 1);
INSERT INTO tb_deliver (uri, created_At, status, feedback, lesson_id, user_id, course_id) VALUES ('https://github.com/eliasnepo/myclass', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 1, 'Muito bom!', 5, 1, 1);
INSERT INTO tb_deliver (uri, created_At, status, feedback, lesson_id, user_id, course_id) VALUES ('https://github.com/eliasnepo/myclass', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 2, 'Muito ruim!', 6, 1, 1);
INSERT INTO tb_deliver (uri, created_At, status, feedback, lesson_id, user_id, course_id) VALUES ('https://github.com/eliasnepo/myclass', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 0, null, 4, 2, 2);
