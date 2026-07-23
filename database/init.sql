CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO tasks (title, done)
SELECT 'Complete Assignment', FALSE
WHERE NOT EXISTS (SELECT 1 FROM tasks);

INSERT INTO tasks (title, done)
SELECT 'Buy Plush Toy', FALSE
WHERE NOT EXISTS (
    SELECT 1 FROM tasks WHERE title='Buy Plush Toy'
);

INSERT INTO tasks (title, done)
SELECT 'Watch Movie', FALSE
WHERE NOT EXISTS (
    SELECT 1 FROM tasks WHERE title='Watch Movie'
);