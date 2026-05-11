import { createClient } from '@supabase/supabase-js';

// .env file se keys uthakar Supabase client banayein
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Supabase requires valid URL & key - missing values cause "supabaseUrl is required" crash (white screen)
if (!supabaseUrl || !supabaseAnonKey || supabaseAnonKey === 'your-anon-key-here') {
  console.warn(
    '⚠️ Supabase credentials missing! Create fasal_sarthi_frontend/.env.local with:\n' +
    'VITE_SUPABASE_URL=https://your-project.supabase.co\n' +
    'VITE_SUPABASE_ANON_KEY=your-anon-key-from-supabase-dashboard\n\n' +
    'Get the anon key from: Supabase Dashboard → Project Settings → API'
  );
}

// Use fallbacks so app loads without white screen; auth needs real credentials in .env.local
const url = supabaseUrl || 'https://zgacroerwmjnkgjtlzfd.supabase.co';
const key = (supabaseAnonKey && supabaseAnonKey !== 'your-anon-key-here') 
  ? supabaseAnonKey 
  : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.placeholder';

export const supabaseClient = createClient(url, key);

// console.log("✅ Supabase client (anon) initialized from lib/supabaseClient.js");