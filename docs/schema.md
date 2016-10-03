# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## events
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
author_id       | integer   | not null, foreign key (references users), indexed
type_id         | integer   | not null, foreign key (references types), indexed
category_id     | integer   | not null, foreign key (references categories), indexed
subcategory_id  | integer   | not null, foreign key (references subcategories), indexed
start_date      | date      | not null
start_time      | time      | not null
end_date        | date      | not null
end_time        | time      | not null
location        | string    |
address         | string    | not null
address2        | string    |
city            | string    | not null
state           | string    | not null
zip             | integer   |
country         | string    | not null
description     | text      |
image_url       | string    | default: "#"

## tickets
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
event_id        | integer   | not null, foreign key (references events), indexed
name            | string    | not null
quantity        | integer   | not null
price           | float     | not null

## bookmarks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
event_id        | integer   | not null, foreign key (references events), indexed

## types
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null

## categories
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null

## subcategories
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
