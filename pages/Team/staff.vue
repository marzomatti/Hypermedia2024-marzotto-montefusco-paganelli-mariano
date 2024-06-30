<template>
  <TeamList :people="staff" :team-name="teamName"/>
</template>
  
<script setup>
useHead({
  title: 'Staff',
})

const supabase = useSupabaseClient()

const staff = ref([])
const teamName = 'staff'

const { data, pending } = await useAsyncData('staff', async () => {
  const { data, error } = await supabase
    .from('staff')
    .select()
    
  if (error) {
    return []
  }

  return data
})

staff.value = data.value

</script>

<style scoped>

</style>
  