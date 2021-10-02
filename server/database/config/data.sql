BEGIN;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
     email VARCHAR(100) NOT NULL,
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
    category_id  integer REFERENCES category(id),
    material text
);
CREATE TABLE item (
    id SERIAL PRIMARY KEY,
      product_id  integer  REFERENCES product(id),
    imgUrl text,
    color text default('gray')
);
CREATE TABLE cart (
    user_id integer REFERENCES users(id),
      product_id  integer  REFERENCES product(id),
    quantity integer
);
COMMIT;