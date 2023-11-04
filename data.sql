-- Create the table
CREATE TABLE profiles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  phone VARCHAR(20),
  age INT,
  profile_picture VARCHAR(255),
  interests VARCHAR(255)
);

-- Insert user data into the table
INSERT INTO profiles (name, phone, age, profile_picture, interests)
VALUES ('John Doe', '1234567890', 25, 'profile.jpg', 'sports, funny');