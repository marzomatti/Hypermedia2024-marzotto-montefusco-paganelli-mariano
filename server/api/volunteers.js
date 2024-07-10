import { createClient } from '@supabase/supabase-js';
const config = useRuntimeConfig();

const supabaseUrl = config.public.supabaseUrl;
const supabaseKey = config.public.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineEventHandler(async (event) => {
  const { data, error } = await supabase.from('team').select('*').gt("id", 12).order('id', { ascending: true });
  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch volunteers',
    });
  }
  return data;
});