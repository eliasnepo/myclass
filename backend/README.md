## API Reference

### UML class diagram

<img src="https://ik.imagekit.io/b2twgpcgqmc/MyClass/Classe_UML_MyClass_H9eDpeUwd.png" alt="Class diagram" />

### Endpoints

#### Login

```http
  POST /login
```

| Body         | Type     | Description                        |
| :----------- | :------- | :--------------------------------- |
| `username`   | `string` | **Required**. User's username      |
| `password`   | `string` | **Required**. User's password      |
| `grant_type` | `string` | **Required**. Default - "password" |

#### Register

```http
  POST /register
```

| Body    | Type     | Description                                                  |
| :----------- | :------- | :----------------------------------------------------------- |
| `name`       | `string` | **Required**. User's name                                    |
| `email`      | `string` | **Required** - **Valid**. User's email                       |
| `university` | `string` | **Required**. User's university                              |
| `password`   | `string` | **Required**. New password                                   |
| `courses`    | `Object` | Ids of the courses that the user is enrolled                 |
| `roles`      | `Object` | **Required**. Ids of the roles for the user (Student, instructor, admin...) |

#### Get list of user's enrolled courses

```http
  GET /courses
```

| Authentication | Description                   |
| :------------- | :---------------------------- |
| `Bearer Token` | **Required**. Valid JWT token |

Takes the authenticated user and return it's courses.

#### Get a course by id

```http
  GET /courses/{id}
```

| Parameters | Type | Authentication | Description                   |
|:------------- |:-------------| :------------- | :---------------------------- |
|`Id`| `Long` | `Bearer Token` | **Required**. Valid JWT token |

Return a course by id.

#### Insert new course

```http
  POST /courses
```

| Body | Type | Authentication | Description                   |
| :------------- | :------------- | :------------- | :---------------------------- |
| `name` | `string` | `Bearer Token` | **Required**. Course name |
| `description` | `string` | `Bearer Token` | **Required**. Course description |
| `imgUri` | `string` | `Bearer Token` | Uri of the course icon |

Insert new course if the user is an Admin or Instructor.

#### Get all courses that the user can enroll

```http
  GET /enroll
```

| Authentication | Description                   |
| :------------- | :---------------------------- |
| `Bearer Token` | **Required**. Valid JWT token |

Returns all the courses that an user (Student or Instructor) can enroll, excluding courses that they are already enrolled.

#### Enroll an user to a course

```http
  POST /enroll
```

| Body | Type | Authentication | Description                   |
| :------------- | :------------- | :------------- | :---------------------------- |
| `course` | `Object` | `Bearer Token` | **Required**. Id of the course that the user will enroll|

Enrolls an user to a course (Student or Instructor).

#### Insert new Lesson to a course

```http
  POST /lessons
```

| Body | Type | Authentication | Description                   |
| :------------- | :------------- | :------------- | :---------------------------- |
| `title` | `string` | `Bearer Token` | **Required**. Title of the lesson |
| `subtitle` | `string` | `Bearer Token` | **Required**. Description of the lesson |
| `status` | `Enum` | `Bearer Token` | **Required**. Enum (Lesson or Task) to define the type of the lesson |
| `course` | `Object` | `Bearer Token` | **Required**. Id of the course to insert the lesson |

If the user is an instructor and is enrolled to the course it can add lessons to this course.

#### Get deliveries of a course

```http
  GET /deliveries/{id}
```

| Authentication | Description                   |
| :------------- | :---------------------------- |
| `Bearer Token` | **Required**. Valid JWT token |

If the user is an instructor and is enrolled to the course it can see the task deliveries of the students.

#### Get deliveries of an authenticated user

```http
  GET /deliveries/person/gets
```
| Authentication     | Description                |
| :-------- | :------------------------- |
| `Bearer Token` | **Required**. Valid JWT Token |

Get all the deliveries related to an authenticated user.

#### Insert new Lesson to a course

```http
  POST /deliveries
```

| Body | Type | Authentication | Description                   |
| :------------- | :------------- | :------------- | :---------------------------- |
| `uri` | `string` | `Bearer Token` | **Required**. The uri to the task resolution |
| `user` | `Object` | `Bearer Token` | **Required**. Id of the user that is sending the resolution |
| `task` | `Object` | `Bearer Token` | **Required**. Id of the task |
| `course` | `Object` | `Bearer Token` | **Required**. Id of the course |

The application does not support sending files, so the Student needs to upload 
the file somewhere and send the link to the instructor. 
Furthermore, this endpoint takes the user, task and course ids to 
insert the deliver of a task.

#### Save revision to a delivery

```http
  PUT /deliveries/{id}
```

| Body | Type     | Authentication     | Description                |
| :-------- | :------- | :------- | :------------------------- |
| `status` | `Enum` | `Bearer Token` | **Required**. Enum (accepted, rejected or pending) to define the status of the delivery |
| `feedback` | `string` | `Bearer Token` | **Required**. The instructor's feedback of the delivery |

Only user with role instructor can save a revision. Deliveries status are pending by default.

#### Get info of an authenticated user

```http
  GET /user
```
| Authentication     | Description                |
| :-------- | :------------------------- |
| `Bearer Token` | **Required**. Valid JWT Token |

Get info of the authenticated user.