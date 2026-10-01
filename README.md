# Store Locator Web Application

A full-stack portfolio project demonstrating frontend development, JavaScript, PHP, MySQL, database design, manual software testing, debugging, and Git/GitHub workflow.

## Live Demo

[View the Store Locator](https://riya1338.github.io/store-locator-web-app/)

## Features

* Search stores by city or postcode
* Filter stores by store type
* Display store information dynamically using JavaScript
* Retrieve store data through a PHP API
* Store data in a MySQL database
* Use prepared SQL statements for database queries
* Responsive HTML/CSS interface
* Input validation and user-friendly error messaging
* Google Maps directions links for store locations

## Technology

* HTML5
* CSS3
* JavaScript
* PHP
* MySQL
* Git
* GitHub
* GitHub Pages

## Testing

Manual functional testing was performed using **17 test cases** covering:

* Website loading
* Store display
* City and postcode searches
* Store-type filtering
* Combined search and filtering
* Empty input
* Invalid postcode input
* Special characters
* Whitespace handling
* Long input
* Page refresh
* Repeated searches

### Test Results

**17/17 test cases passed**

Detailed test cases and results are available here:

[View Test Cases](testing/test-cases.md)

## Run Locally

This project uses PHP and MySQL and can be run using a local development environment such as XAMPP.

### 1. Install XAMPP

Install XAMPP and start:

* Apache
* MySQL

### 2. Copy the Project

Place the `store-locator` folder inside your XAMPP `htdocs` directory.

Example:

```text
C:/xampp/htdocs/store-locator
```

### 3. Create the Database

Open phpMyAdmin and import:

```text
database/store_locator.sql
```

The SQL script creates the `store_locator` database, the `stores` table, and sample store data.

### 4. Open the Application

Visit:

```text
http://localhost/store-locator/
```

## Project Structure

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
├── testing/
│   └── test-cases.md
├── screenshots/
└── README.md
```

## Future Improvements

* Add an administrator dashboard for CRUD operations
* Add browser geolocation
* Add distance calculation
* Add pagination
* Deploy the PHP/MySQL backend
* Add authentication for administrator functions
* Add automated UI and API testing

## Portfolio Purpose

This project was independently developed to demonstrate practical software development and quality assurance skills, including building a web application, working with databases and APIs, debugging, creating test cases, executing manual functional tests, and documenting test results.
