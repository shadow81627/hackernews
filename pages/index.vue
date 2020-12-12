<template>
  <v-container>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="limit"
      item-key="title"
      hide-default-footer
      :loading="$fetchState.pending"
      :server-items-length="total"
    >
      <template #loading>
        <v-row>
          <v-col
            v-for="i in new Array(limit)"
            :key="i"
            class="d-flex flex-column"
            cols="12"
          >
            <v-skeleton-loader>
              <div class="v-skeleton-loader__bone">
                <item
                  class="flex d-flex flex-column justify-between"
                  :item="{ loading: true }"
                ></item>
              </div>
            </v-skeleton-loader>
          </v-col>
        </v-row>
      </template>
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.title"
            class="d-flex flex-column"
            cols="12"
          >
            <v-fade-transition appear>
              <item
                class="flex d-flex flex-column justify-between"
                :item="item"
              ></item>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
      <template #footer>
        <v-row class="mt-2" align="center" justify="center">
          <v-col>
            <v-pagination v-model="page" :length="pages" total-visible="9" />
            <div v-show="false">Total: {{ total }}</div>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    const result = await this.$axios.$get(
      'https://hn.algolia.com/api/v1/search',
      {
        params: {
          hitsPerPage: this.limit,
          query: this.search || undefined,
          page: this.page,
          tags: 'story',
        },
      }
    )
    this.items = result.hits
    this.total = result.nbHits
    this.pages = result.nbPages
    this.page = result.page
  },
  fetchOnServer: false,
  data: () => ({
    items: [],
    defaultLimit: 12,
    total: null,
    pages: 1,
  }),
  computed: {
    page: {
      get() {
        const page = parseInt(this.$route.query.page, 10) || 1
        // set page to last page if page is larger than last page
        return page <= this.pages ? page : this.pages
      },
      set(value) {
        const page = value <= this.pages ? value : this.pages
        if (page !== this.page) {
          this.$router.push({
            query: this.generateQuery({
              page,
            }),
          })
        }
      },
    },
    search: {
      get() {
        return this.$route.query.search || ''
      },
      set(search) {
        this.$router.push({
          query: { search: search && search !== '' ? search : undefined },
        })
      },
    },
    limit: {
      get() {
        const limit = this.defaultLimit === -1 ? this.total : this.defaultLimit
        return parseInt(this.$route.query.limit, 10) || limit
      },
      set(limit) {
        this.$router.push({ query: this.generateQuery({ limit }) })
      },
    },
  },
  watch: {
    '$route.query'() {
      this.$fetch()
    },
  },
  methods: {
    generateQuery({
      page = this.reset ? 1 : this.page,
      limit = this.limit,
      search = this.search,
    }) {
      // sorted query string for more cache hits
      return Object.fromEntries(
        Object.entries({
          search: search && search !== '' ? search : undefined,
          page: page !== 1 ? page : undefined,
          limit:
            limit !== this.defaultLimit && limit !== this.total
              ? limit
              : undefined,
        }).sort()
      )
    },
  },
}
</script>
