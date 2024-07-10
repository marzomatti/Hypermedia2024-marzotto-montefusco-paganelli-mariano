import { createClient } from '@supabase/supabase-js';
const config = useRuntimeConfig();

const supabaseUrl = config.public.supabaseUrl;
const supabaseKey = config.public.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineEventHandler(async (event) => {
  const { data, error } = await supabase.from('testimonials').select('*');
  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch testimonnials',
    });
  }
  return data;
});