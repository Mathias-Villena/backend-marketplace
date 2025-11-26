INSERT INTO products (nombre, precio, descripcion)
VALUES
('Xiaomi Mi Band 8', 169.90, 'Pulsera inteligente con monitoreo de salud'),
('Laptop Lenovo IdeaPad 3', 2299.00, 'Laptop ideal para clases y oficina'),
('Audífonos JBL Tune', 179.90, 'Audífonos inalámbricos con buen sonido');
-- Tabla roles
CREATE TABLE IF NOT EXISTS roles
(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) UNIQUE NOT NULL
);

-- Insertar roles por defecto
INSERT IGNORE INTO roles (id, name) VALUES
(1, 'CUSTOMER'),
(2, 'ADMIN');

-- Tabla usuarios
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  roleId INT NOT NULL DEFAULT 1,
  FOREIGN KEY (roleId) REFERENCES roles(id)
);
-- Tabla categories
CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Insertar categorías por defecto (puedes cambiar los nombres si quieres)
INSERT IGNORE INTO categories (id, name) VALUES
(1, 'Tecnología'),
(2, 'Hogar'),
(3, 'Gaming'),
(4, 'Audio');
ALTER TABLE products 
ADD COLUMN imageUrl VARCHAR(255);

ALTER TABLE products 
ADD COLUMN categoryId INT;

-- 3. Crear la relación Foreign Key
ALTER TABLE products 
ADD CONSTRAINT fk_products_category 
FOREIGN KEY (categoryId) REFERENCES categories(id)
ON DELETE SET NULL
ON UPDATE CASCADE;