-- Create a table 'pet' in schema 'demopets'
CREATE TABLE IF NOT EXISTS demopets.pet (
    id Serial NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL,
    owner_id bigint NOT NULL);
