import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rcqtfjcdqkezbjkhyxqg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjcXRmamNkcWtlemJqa2h5eHFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1NDQwMDAsImV4cCI6MjAxMDEyMDAwMH0.g8aPOcKuHXlfPdY1gF3cTHN4oJ7WAiNZcoXuEC4GLSg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
