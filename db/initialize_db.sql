
CREATE TABLE IF NOT EXISTS Users ( UserId SERIAL PRIMARY KEY, Username TEXT);

-- Alter the users table here: 
ALTER TABLE Users 
ADD Password TEXT;

INSERT INTO Users ( Username, Password ) VALUES ( 'test', 'test' );


-- Add the properties table here: 
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


