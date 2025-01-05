# POP Game - Python Learning Platform

A hybrid educational game platform designed to teach Python programming concepts through interactive quizzes and lessons, complementing a physical game component.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Database Setup &amp; Seeding](#database-setup--seeding)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Features

### For Students

- Interactive quiz taking with immediate feedback
- Progress tracking and performance metrics
- Access to structured Python lessons
- Class leaderboard participation
- Real-time scoring and achievements

### For Teachers

- Quiz creation and management
- Lesson authoring with Markdown support
- Class management and student tracking
- Assignment scheduling with deadlines
- Performance statistics and analytics

## Technology Stack

- **Frontend**: HTML5, JavaScript (ES6+), TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure

```
pop-game/
├── public/
│   ├── css/
│   ├── js/
│   │   ├── components/
│   │   ├── services/
│   │   └── layout.js
│   ├── pages/
│   └── index.html
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
└── server.js
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pop-game.git
cd pop-game
```

2. Install dependencies:

```bash
yarn install
```

3. Set up your environment variables (see [Environment Variables](#environment-variables))
4. Set up the database (see [Database Setup &amp; Seeding](#database-setup--seeding))
5. Start the development server:

```bash
yarn dev
```

## Database Setup & Seeding

### Initial Setup

1. Create your PostgreSQL database:

```sql
CREATE DATABASE pop_game_dev;
```

2. Configure your database connection in `src/config/config.json`:

```json
{
  "development": {
    "username": "postgres",
    "password": "your_password",
    "database": "pop_game_dev",
    "host": "127.0.0.1",
    "port": 5433,
    "dialect": "postgres"
  }
}
```

### Running Migrations

Run all pending migrations:

```bash
yarn migrate
```

Undo the last migration:

```bash
yarn migrate:undo
```

### Seeding Data

The seed data includes:

- Users (2 teachers, 1 student)
- Classes
- Lessons
- Quizzes with questions
- Quiz assignments
- Sample quiz attempts

Run all seeds:

```bash
yarn seed
```

Undo all seeds:

```bash
yarn seed:undo
```

### Default Test Accounts

After seeding, you can log in with these test accounts:

**Teacher Account:**

- Email: teacher@example.com
- Password: password123

**Student Account:**

- Email: student@example.com
- Password: password123

### Database Reset

To completely reset the database:

```bash
yarn migrate:undo
yarn migrate
yarn seed
```

## Available Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "migrate": "cd src && npx sequelize-cli db:migrate",
    "migrate:undo": "cd src && npx sequelize-cli db:migrate:undo",
    "seed": "cd src && npx sequelize-cli db:seed:all",
    "seed:undo": "cd src && npx sequelize-cli db:seed:undo:all"
  }
}
```

## Authentication

The platform uses JWT (JSON Web Tokens) for authentication:

- Tokens are generated on login/registration
- Required for all protected API endpoints
- Managed through localStorage in the frontend
- Token expiration: 24 hours

Protected routes require the JWT token in the Authorization header:

```javascript
Authorization: Bearer <token>
```

## Contributing

1. Fork the repository
2. Create your feature branch:

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes:

```bash
git commit -m 'Add some AmazingFeature'
```

4. Push to the branch:

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

For more information or support, please open an issue in the repository.
