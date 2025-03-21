import { createClient } from '@supabase/supabase-js';
const config = useRuntimeConfig();

const supabaseUrl = config.public.supabaseUrl;
const supabaseKey = config.public.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const { data, error } = await supabase.from('team').select().eq('id', id).limit(1).single();
    if (error) {
        throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch services',
        });
    }
    return data;
});