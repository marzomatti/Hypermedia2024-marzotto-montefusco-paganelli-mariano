<template>
  <CustomTitle title="Our staff" subtitle="Testssssssssssssssssssssssssssss"/>
  <TeamList :people="staff" :team-name="teamName" :description="description"/>
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

const description = 'Meet our dedicated staff committed to supporting and advocating for women affected by violence.'
</script>

<style scoped>

</style>
  