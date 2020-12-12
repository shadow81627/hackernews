<template>
  <v-text-field
    v-model="search"
    clearable
    flat
    solo-inverted
    hide-details
    :prepend-inner-icon="mdiMagnify"
    label="Search"
  ></v-text-field>
</template>

<script>
import { mdiMagnify } from '@mdi/js'
export default {
  data: () => ({ mdiMagnify }),
  computed: {
    search: {
      get() {
        return this.$route.query.search || ''
      },
      set(search) {
        this.$router.push({
          path: '/',
          query: { search: search && search !== '' ? search : undefined },
        })
      },
    },
  },
}
</script>
