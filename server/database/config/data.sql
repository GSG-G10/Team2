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
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users(id),
    product_id  integer  REFERENCES product(id),
    quantity integer
);

INSERT INTO category (name,description,imgUrl) VALUES
('Lights','Tall on style, our lamps offer convenient lighting for any space, large or small. They’re easy to move, so you can make anywhere a little cozier. And our floor lamps or standing lamps with flexible arc heads make reading more comfortable, because you can direct the light straight onto your book or magazine.','https://www.ikea.com/us/en/images/products/hektar-floor-lamp-w-3-spots-and-led-bulbs-dark-gray__0879891_pe676995_s5.jpg?f=l');

INSERT INTO product (name,price,description,rate,category_id,material) VALUES
('reading lamp with LED bulb',14,'This floor lamp in aluminum is perfect to have by the sofa or your favorite armchair. You can easily direct the lamp arm so you get the light exactly where you want it when sitting down to read.',5,1,''),
('Wall lamp with LED bulb',14.9,'Metal,rugged constructions and timeless design – enjoy the SKURUP lamp series for a long time. Simple adjustments and different types of lamps make the series practical and flexible throughout the home.',5,1,''),
('LED wall/clamp spotlight',17.55,'In the NÄVLINGE series there are lamps for most needs. These are neat lamps with a design that blends into the room and they are easy to use anywhere in the home – and provide good, glare-free light.',4,1,''),
('Wall lamp with LED bulb',20,'With its timeless shape, this wall lamp spreads a pleasant light both upwards and downwards – and a subtle light between the three metal shades. A decorative combination that creates a cozy atmosphere.',3,1,''),
('LED ceiling/wall lamp',7,'Add lighting to your bathroom without emptying your wallet. This stylish ceiling lamp spreads an even light that illuminates the whole room. Just what you need when getting ready for the day or bed.',5,1,''),
('Wall up/downlight',14.9,'Brilliant and timeless design. NYMÅNE lamps have attitude and blend in with most decors. Why not combine several different lamps for a uniform style at home?',5,1,''),
('Wall lamp with LED bulb',25,' Like small jewels in shiny brass and gray clear glass, the lamps in the SOLKLINT series spread a soft mood light that creates exciting shadows on walls and ceilings – wherever you choose to place them.',5,1,''),
('Wall lamp with LED bulb',49.9,'You can easily direct the light where you want it because the lamp arms are adjustable.',5,1,''),
('Wall lamp with LED bulb',12.9,'Metal, rugged constructions and timeless design – enjoy the SKURUP lamp series for a long time. Simple adjustments and different types of lamps make the series practical and flexible throughout the home.amp arms are adjustab',3,1,''),
('Table lamp with light bulb',24.9,'A stylish glass and chrome lamp from the SIMRISHAMN series. Modern lighting for an entire home that creates a nice atmosphere. Use it as a standalone eye-catcher or mix it with other lamps in the series.',4,1,''),
('LED wall lamp',13,' A small fold on the round white shade gives this small LED wall lamp a playful expression that suits all styles. Perfect to have by a mirror in the bathroom.',5,1,''),
('Ceiling lamp, clear glass',49.9,' The glass shade provides balanced general lighting throughout the room.',5,1,''),
('LED ceiling lamp, wireless dimmable',39.9,'Dim wirelessly and switch between three white tones to create the right mood and look at home.',5,1,'');

INSERT INTO item (product_id ,imgUrl,color) VALUES
(1,'https://www.ikea.com/us/en/images/products/lersta-floor-reading-lamp-with-led-bulb-aluminum__0879517_pe611365_s5.jpg?f=l',''),
(2,'https://www.ikea.com/us/en/images/products/skurup-wall-lamp-with-led-bulb-black__0879155_pe721999_s5.jpg?f=l',''),
(3,'https://www.ikea.com/us/en/images/products/naevlinge-led-wall-clamp-spotlight-black__0734554_pe739502_s5.jpg?f=l',''),
(4,'https://www.ikea.com/us/en/images/products/groenplym-wall-lamp-with-led-bulb-white__0993038_pe820393_s5.jpg?f=l',''),
(5,'https://www.ikea.com/us/en/images/products/barlast-led-ceiling-wall-lamp-white__0772863_pe756187_s5.jpg?f=l',''),
(6,'https://www.ikea.com/us/en/images/products/nymane-wall-up-downlight-white__0879222_pe660486_s5.jpg?f=l',''),
(7,'https://www.ikea.com/us/en/images/products/solklint-wall-lamp-with-led-bulb-brass-gray-clear-glass__0842284_pe778931_s5.jpg?f=l',''),
(8,'https://www.ikea.com/us/en/images/products/halkip-wall-lamp-with-swing-arm-led-bulb-gray__0879593_pe713183_s5.jpg?f=l',''),
(9,'https://www.ikea.com/us/en/images/products/skurup-wall-lamp-black__0879155_pe721999_s5.jpg?f=l',''),
(10,'https://www.ikea.com/us/en/images/products/simrishamn-table-wall-lamp-with-light-bulb-chrome-plated-opal-glass__0806249_pe769873_s5.jpg?f=l',''),
(11,'https://www.ikea.com/us/en/images/products/svallis-led-wall-lamp-white__0881452_pe664772_s5.jpg?f=l',''),
(12,'https://www.ikea.com/us/en/images/products/atersken-ceiling-lamp-clear-glass__0880141_pe728312_s5.jpg?f=l',''),
(13,'https://www.ikea.com/us/en/images/products/osvalla-led-ceiling-lamp-wireless-dimmable-gray__0822378_pe775600_s5.jpg?f=l','');
COMMIT;