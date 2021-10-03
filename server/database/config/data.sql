BEGIN;
DROP TABLE IF EXISTS users, category, product, item, cart CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    isAdmin BOOLEAN,
    imgUrl text
);
CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description text NOT NULL,
    imgUrl text
);
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price integer,
    description text NOT NULL,
    rate integer,
    category_id integer REFERENCES category(id),
    material text
);
CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    product_id integer REFERENCES product(id),
    imgUrl text,
    color text 
);
CREATE TABLE cart (
    user_id integer PRIMARY KEY REFERENCES users(id),
    product_id  integer  REFERENCES product(id),
    quantity integer
);
COMMIT;