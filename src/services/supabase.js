import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sljtdmxwfxnzoyuskigh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsanRkbXh3Znhuem95dXNraWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzMzA0MzIsImV4cCI6MjAyNTkwNjQzMn0.DSnFKn9c5QqE4_yGcRWYstXs4p6g34G5VuWReNsPbIU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
