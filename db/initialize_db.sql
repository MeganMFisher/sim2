-- CREATE DATABASE properties;

-- Connect to the properties database before running the next command.
-- \c properties;

CREATE TABLE IF NOT EXISTS Users ( UserId SERIAL PRIMARY KEY, Username TEXT UNIQUE, Password TEXT );

INSERT INTO Users ( Username, Password ) VALUES ( 'test', 'test' );

CREATE TABLE IF NOT EXISTS Properties (
  PropertyId SERIAL PRIMARY KEY,
  UserId INT,
  Name TEXT,
  Description TEXT,
  Address TEXT,
  City TEXT,
  State TEXT,
  Zip TEXT,
  Image TEXT,
  Loan DECIMAL,
  MonthlyMortgage DECIMAL,
  DesiredRent DECIMAL,
  RecommendedRent DECIMAL,
  FOREIGN KEY ( UserId ) REFERENCES Users(UserId)
);


