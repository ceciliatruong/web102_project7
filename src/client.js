import { createClient } from '@supabase/supabase-js'

const URL = 'https://tnaieitljuzzwjqvueiv.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuYWllaXRsanV6endqcXZ1ZWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NDgyMDAsImV4cCI6MjAxNDIyNDIwMH0.OJJBXPbYIz002zv2QDf2Xh6F_svKR51I8maaJWvqgPg'
export const supabase = createClient(URL, API_KEY)