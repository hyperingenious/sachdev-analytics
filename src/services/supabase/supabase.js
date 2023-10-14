import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ponabshoyhmolnldvket.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvbmFic2hveWhtb2xubGR2a2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5ODc0NjAsImV4cCI6MjAxMDU2MzQ2MH0.i52cggJTVpe_YNKnWNH72-nkS15uww7vcTq0BH_65os";

export const supabase = createClient(supabaseUrl, supabaseKey);
