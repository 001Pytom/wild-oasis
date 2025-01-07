import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wpjiumiedyvgksleanzy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwaml1bWllZHl2Z2tzbGVhbnp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMzcwOTksImV4cCI6MjAzMjkxMzA5OX0.CWL4xc0BZAy7sVlrqG72yyoz_NuCi9AzchFsizZ3jVU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://lxafabeslamsmqrtktii.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)                                     