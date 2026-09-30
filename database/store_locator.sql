CREATE DATABASE IF NOT EXISTS store_locator;

USE store_locator;

DROP TABLE IF EXISTS stores;

CREATE TABLE stores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    phone VARCHAR(50),
    hours VARCHAR(100)
);

INSERT INTO stores (name, type, address, city, phone, hours) VALUES
('Central Grocery', 'Grocery', '125 Colombo Street', 'Christchurch', '03 555 0101', '8:00 AM - 9:00 PM'),
('Riverside Pharmacy', 'Pharmacy', '42 Hereford Street', 'Christchurch', '03 555 0102', '9:00 AM - 6:00 PM'),
('Tech Hub', 'Electronics', '88 Cashel Street', 'Christchurch', '03 555 0103', '9:00 AM - 7:00 PM'),
('City Fashion', 'Clothing', '17 High Street', 'Christchurch', '03 555 0104', '10:00 AM - 6:00 PM'),
('Northside Grocery', 'Grocery', '25 Main North Road', 'Christchurch', '03 555 0105', '7:30 AM - 8:30 PM'),
('Harbour Pharmacy', 'Pharmacy', '9 Ferry Road', 'Christchurch', '03 555 0106', '8:30 AM - 5:30 PM'),
('Southern Tech', 'Electronics', '61 Riccarton Road', 'Christchurch', '03 555 0107', '9:00 AM - 6:00 PM'),
('Everyday Clothing', 'Clothing', '14 Riccarton Road', 'Christchurch', '03 555 0108', '10:00 AM - 5:30 PM');
