import { createClient } from '@supabase/supabase-js';
const config = useRuntimeConfig();

const supabaseUrl = config.public.supabaseUrl;
const supabaseKey = config.public.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    
    // Fetch the person's data from the 'team' table
    const { data: person, error: personError } = await supabase
        .from('team')
        .select()
        .eq('id', id)
        .limit(1)
        .single();

    if (personError) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch person data',
        });
    }



    const { data: services, error: serviceError } = await supabase
    .from('services')
    .select()
    .in('id', person.value.relatedServices);

    if (serviceError) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch services data',
        });
    }

  

    return {services};
});
