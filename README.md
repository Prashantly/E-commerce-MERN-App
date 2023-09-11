# E-Commerce MERN Stack Application

![SMART](https://github.com/Prashantly/E-commerce-MERN-App/assets/99544800/446b3010-f681-4246-b59a-0feff551f235)

A full-stack e-commerce web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This project includes user authentication, product management, cart functionality, and an admin dashboard.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration and Login
- Forgot Password with Email Confirmation
- User Profile Management (Name, Address, Contact Info)
- Browse Products by Category
- Filter Products by Price Range
- Add Products to Cart (Requires Login)
- Checkout with Cart Items
- View Order History in User Dashboard
- Admin Dashboard for Product and Category Management
- Admin Access to User Orders and Status Updates

## Live Demo

You can try the live demo of this project [here](https://distinct-boa-fatigues.cyclic.app/)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- MongoDB database instance.
- Mail service provider credentials (for sending email confirmations).
- React.js development environment for the frontend.

## Installation

1. Clone the repository:

`https://github.com/Prashantly/E-commerce-MERN-App.git`

2. Navigate to the project directory:

`cd ecommerce-mern-stack`

3. Install server dependencies:

   `npm install`

4 Install client dependencies:

    * cd client
    * npm install

5. Create a .env file in the server directory and set environment variables, including MongoDB URI and email service credentials:

- PORT`: The port on which the server should run. Example:PORT=8000`
- JWT_SECRET`: A secret key for JSON Web Token (JWT) authentication.
- MONGO_URI`: The MongoDB connection URI for your database.`
- `SMTP_USER`: The SMTP email user for sending emails. Example: `SMTP_USER=youremail@gmail.com`
- `SMTP_PASS`: The SMTP email password. Example: `SMTP_PASS=hsjjshhshhshhsh`

6. Start the server:

`npm run server`

## License

This project is licensed under the MIT License.
