ALTER TABLE users
ADD isAdmin TINYINT NOT NULL;

UPDATE users
SET isAdmin = 1
WHERE email = 'bunny@me.com';