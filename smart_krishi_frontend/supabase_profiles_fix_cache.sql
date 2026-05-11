-- Run ONLY this in Supabase SQL Editor if profiles table exists but you get "schema cache" error
-- https://supabase.com/dashboard/project/zgacroerwmjnkgjtlzfd/sql

GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.profiles TO anon, authenticated, service_role;
NOTIFY pgrst, 'reload schema';
