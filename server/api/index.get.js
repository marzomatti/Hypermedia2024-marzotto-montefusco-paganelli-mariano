// server/api/services.js
import { serverSupabaseClient } from "#supabase/server";


export default defineEventHandler(async (event) => {

  const client = serverSupabaseClient(event)

  try {
    var { data: services, error } = await client
      .from("services")
      .select()

    if (error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    }
    return services;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
