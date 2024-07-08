import { createClient } from '@supabase/supabase-js';
const config = useRuntimeConfig();

const supabaseUrl = config.public.supabaseUrl;
const supabaseKey = config.public.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineEventHandler(async (event) => {
  const { data, error } = await supabase.from('team').select('*').lt('id', 13);
  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch staff',
    });
  }
  return data;
});
