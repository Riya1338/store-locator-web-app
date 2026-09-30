# Store Locator Web Application

An independent portfolio project demonstrating frontend development, JavaScript, PHP, MySQL, database design, debugging and Git/GitHub workflow.

## Features

- Search stores by city or postcode/address text
- Filter stores by store type
- Retrieve store data from a MySQL database
- PHP API using prepared SQL statements
- Responsive HTML/CSS interface
- Client-side rendering with JavaScript
- Basic input/output handling and error messaging

## Technology

- HTML5
- CSS3
- JavaScript
- PHP
- MySQL
- Git / GitHub

## Run locally

This project uses PHP and MySQL, so it should be run through a local server such as XAMPP.

### 1. Install XAMPP

Install XAMPP and start:

- Apache
- MySQL

### 2. Copy the project

Place the `store-locator` folder inside your XAMPP `htdocs` directory.

Example:

`C:/xampp/htdocs/store-locator`

### 3. Create the database

Open phpMyAdmin and import:

`database/store_locator.sql`

The script creates the `store_locator` database, the `stores` table and sample data.

### 4. Open the application

Visit:

`http://localhost/store-locator/`

## Project structure

```text
store-locator/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── api/
│   ├── db.php
│   └── stores.php
├── database/
│   └── store_locator.sql
├── screenshots/
└── README.md
```

## Planned improvements

- Add an admin dashboard for CRUD operations
- Add browser geolocation
- Add distance calculation
- Add pagination
- Add automated tests
- Deploy the frontend and backend
- Add authentication for administrator functions

## Portfolio purpose

This project was built independently to demonstrate practical software development skills after completing software engineering simulations and returning to software development.
