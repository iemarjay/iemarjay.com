-- Blog posts. A NULL published_at means the post is a draft.
-- Dates are ISO 8601 strings in UTC.
CREATE TABLE posts (
  id              TEXT PRIMARY KEY,
  title           TEXT NOT NULL,
  slug            TEXT NOT NULL UNIQUE,
  content         TEXT NOT NULL,
  excerpt         TEXT NOT NULL,
  cover_image_url TEXT,
  cover_video_url TEXT,
  author          TEXT NOT NULL DEFAULT 'Joseph Emmanuel (iemarjay)',
  published_at    TEXT,
  created_at      TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at      TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

CREATE INDEX posts_published_at ON posts (published_at);

-- Keep updated_at current when a post is edited by hand.
CREATE TRIGGER posts_set_updated_at
AFTER UPDATE ON posts
FOR EACH ROW
WHEN NEW.updated_at = OLD.updated_at
BEGIN
  UPDATE posts SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now') WHERE id = NEW.id;
END;
