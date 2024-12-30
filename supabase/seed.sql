-- Insert test users
INSERT INTO public.users (id, email, name)
VALUES
  ('d0d8c19c-1b7b-4b11-b1b1-1234567890ab', 'test1@example.com', 'Test User 1'),
  ('d0d8c19c-1b7b-4b11-b1b1-1234567890ac', 'test2@example.com', 'Test User 2')
ON CONFLICT (email) DO NOTHING;

-- Insert test profiles
INSERT INTO public.profiles (user_id, bio, website)
VALUES
  ('d0d8c19c-1b7b-4b11-b1b1-1234567890ab', 'Test bio 1', 'https://example1.com'),
  ('d0d8c19c-1b7b-4b11-b1b1-1234567890ac', 'Test bio 2', 'https://example2.com')
ON CONFLICT (user_id) DO NOTHING;
