#!/usr/bin/env node
/**
 * Creates the profiles table in Supabase.
 * 
 * Prerequisites:
 * 1. Create a Personal Access Token: https://supabase.com/dashboard/account/tokens
 * 2. Run: set SUPABASE_ACCESS_TOKEN=your_token  (Windows)
 *        or: export SUPABASE_ACCESS_TOKEN=your_token  (Mac/Linux)
 * 3. Run: node run-profiles-migration.js
 */

const PROJECT_REF = 'zgacroerwmjnkgjtlzfd';

const SQL = `
-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  username TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);
`.trim();

async function run() {
  const token = process.env.SUPABASE_ACCESS_TOKEN;
  if (!token) {
    console.error(`
Missing SUPABASE_ACCESS_TOKEN!

1. Go to: https://supabase.com/dashboard/account/tokens
2. Create a token (select database scope)
3. Run: set SUPABASE_ACCESS_TOKEN=your_token
4. Run: node run-profiles-migration.js
`);
    process.exit(1);
  }

  const url = `https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: SQL }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Migration failed:', res.status, err);
    process.exit(1);
  }

  console.log('Profiles table created successfully!');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
