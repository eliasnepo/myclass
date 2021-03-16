INSERT INTO tb_user (name, email, password, university) VALUES ('Elias Nepomuceno', 'elias@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Universidade Federal de Goiás');
INSERT INTO tb_user (name, email, password, university) VALUES ('João Pedro', 'joao@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Universidade Federal de Goiás');
INSERT INTO tb_user (name, email, password, university) VALUES ('Andre Luiz', 'andre@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Universidade Federal de Goiás');
INSERT INTO tb_user (name, email, password, university) VALUES ('Carlos Galvão', 'galvao@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Universidade Federal de Goiás');

INSERT INTO tb_role (authority) VALUES ('ROLE_STUDENT');
INSERT INTO tb_role (authority) VALUES ('ROLE_INSTRUCTOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 3);

INSERT INTO tb_course (name, img_Uri, description, created_At) VALUES ('Cálculo 3A', 'https://cdn.pixabay.com/photo/2018/03/22/10/55/training-course-3250007_1280.jpg', 'Integrais de linha, integrais de superfícies, etc.', NOW());
INSERT INTO tb_course (name, img_Uri, description, created_At) VALUES ('Equações Diferenciais Ordinárias', 'https://cdn.pixabay.com/photo/2018/03/22/10/55/training-course-3250007_1280.jpg', 'Lorem ipsum blablabla', NOW());
INSERT INTO tb_course (name, img_Uri, description, created_At) VALUES ('Estruturas de Dados 1', 'https://cdn.pixabay.com/photo/2018/03/22/10/55/training-course-3250007_1280.jpg', 'Lorem ipsum blablabla', NOW());
INSERT INTO tb_course (name, img_Uri, description, created_At) VALUES ('Física 3', 'https://cdn.pixabay.com/photo/2018/03/22/10/55/training-course-3250007_1280.jpg', 'Lorem ipsum blablabla', NOW());
INSERT INTO tb_course (name, img_Uri, description, created_At) VALUES ('Matemática Discreta', 'https://cdn.pixabay.com/photo/2018/03/22/10/55/training-course-3250007_1280.jpg', 'Lorem ipsum blablabla', NOW());

INSERT INTO tb_user_course (user_id, course_id) VALUES (1, 1);
INSERT INTO tb_user_course (user_id, course_id) VALUES (1, 2);
INSERT INTO tb_user_course (user_id, course_id) VALUES (1, 3);
INSERT INTO tb_user_course (user_id, course_id) VALUES (1, 4);
INSERT INTO tb_user_course (user_id, course_id) VALUES (1, 5);
INSERT INTO tb_user_course (user_id, course_id) VALUES (2, 1);
INSERT INTO tb_user_course (user_id, course_id) VALUES (2, 2);
INSERT INTO tb_user_course (user_id, course_id) VALUES (2, 3);

INSERT INTO tb_lesson (title, subtitle, course_id) VALUES ('Aula 1 - Parametrização de curvas', 'Nesta aula você aprenderá a parametrizar curvas', 1);

INSERT INTO tb_deliver (uri, created_At, status, feedback, lesson_id, user_id, course_id) VALUES ('https://github.com/eliasnepo/myclass', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 0, null, 1, 1, 1);
INSERT INTO tb_deliver (uri, created_At, status, feedback, lesson_id, user_id, course_id) VALUES ('https://github.com/eliasnepo/myclass', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 0, null, 1, 1, 1);
INSERT INTO tb_deliver (uri, created_At, status, feedback, lesson_id, user_id, course_id) VALUES ('https://github.com/eliasnepo/myclass', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 0, null, 1, 1, 1);
INSERT INTO tb_deliver (uri, created_At, status, feedback, lesson_id, user_id, course_id) VALUES ('https://github.com/eliasnepo/myclass', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 0, null, 1, 1, 1);
INSERT INTO tb_deliver (uri, created_At, status, feedback, lesson_id, user_id, course_id) VALUES ('https://github.com/eliasnepo/myclass', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 0, null, 1, 1, 1);
INSERT INTO tb_deliver (uri, created_At, status, feedback, lesson_id, user_id, course_id) VALUES ('https://github.com/eliasnepo/myclass', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 0, null, 1, 2, 2);
