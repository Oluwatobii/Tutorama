
DROP TABLE IF EXISTS tutors CASCADE;
CREATE TABLE tutors (
  id SERIAL PRIMARY KEY NOT NULL REFERENCES users(id),
  education VARCHAR(255) NOT NULL,
  bio TEXT,
  rate_per_hour INTEGER  NOT NULL
);
