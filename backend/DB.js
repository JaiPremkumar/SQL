//SQL DATABASE

//CREATE DATABASE ecommerce-store
//USE ecommerce-store

/*CREATE TABLE customers( id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
address TEXT NOT NULL
)*/

/*CREATE TABLE orders( id INT AUTO_INCREMENT PRIMARY KEY,
customer_id NOT NULL,
order_date NOT NULL,
total_amount DECIMAL(10, 2) NOT NULL,
FOREIGN KEY (customer_id)
REFERENCES customer(id)
)*/ 

/*CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
description TEXT
)*/


/*INSERT INTO customers(name ,email, address)
VALUES ('vijay', vijay@gmail.com, 7th street),  ('surya', surya@gmail.com, 9th street) 
*/

/*INSERT INTO products(name ,price, description)
VALUES ('T-shirt', 80.00 ,cotton clothes), ('shoes', 700.00 , first Quality leather)
*/

/*INSERT INTO oderss(customer_id, order_date, total_amount)
VALUES (_id ,'2024-12-30',950.00)
*/

/*SELECT DISTINCT c.*
FROM customers c JOIN orders o ON c.id = o.customer_id 
WHERE o.order_date >= DATE_SUB(CURDATE(),INTERVAL 30 DAY)
 */

/*SELECT C.name, SUM(o.total_amount) AS total_spent 
FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.id, c.name;
 */

/*UPDATE products SET price = 450.00 WHERE name = 'silk saree' */

//ALTER TABLE products ADD COLUMN discount DECIMAL(5, 2) DEFAULT 0.00


// SELECT *  FROM products ORDER BY price DESC LIMIT 3:

/*SELECT DISTINCT c.name 
FROM customers c JOIN orders o ON c.id = o.customer_id 
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id WHERE p.name = 'dosti'
 */

//SELECT c.name AS customer_name,o.order_date FROM orders o JOIN customers c ON o.customer_id = c.id

//SELECT * FROM orders WHERE total_amount > 550.00