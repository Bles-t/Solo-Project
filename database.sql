
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "gametitle" (
    "id" SERIAL PRIMARY KEY,
    "gamename" VARCHAR(80) NOT NULL
);


CREATE TABLE "matches" (
    "id" SERIAL PRIMARY KEY,
    "winner" VARCHAR(80) NOT NULL,
    "loser" VARCHAR(80) NOT NULL,
    "p1wincount" INTEGER ,
    "p2wincount" INTEGER,
    "matchtitle" VARCHAR(80) ,
    "gameid" INTEGER NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "userid" VARCHAR(100) NOT NULL,
    FOREIGN KEY ("gameid") REFERENCES "gametitle"("id")
);
