<template>
  <v-card
    :href="item.url || `https://news.ycombinator.com/item?id=${item.objectId}`"
    target="_blank"
    rel="noopener"
  >
    <v-list-item three-line>
      <v-list-item-avatar tile size="64" class="ma-auto">
        {{ item.points }}
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-wrap">
          {{ item.title }}
          <template v-if="isAbsolute(item.url)">
            <small class="grey--text" style="word-break: break-all"
              >({{ item.url }})</small
            >
          </template>
          &ZeroWidthSpace;</v-list-item-title
        >
        <v-list-item-subtitle>
          <span v-if="item.type !== 'job' && item.author">
            by
            <a
              :href="`https://news.ycombinator.com/user?id=${item.author}`"
              target="_blank"
              rel="noopener"
              >{{ item.author }}</a
            >
          </span>
          <span v-if="item.created_at">
            <relative-date :date="item.created_at"></relative-date>
          </span>
          <template v-if="item.num_comments || item.num_comments === 0">
            |
            <a
              target="_blank"
              rel="noopener"
              :href="`https://news.ycombinator.com/item?id=${item.objectId}`"
            >
              {{ item.num_comments }} comments</a
            >
          </template>
          &ZeroWidthSpace;
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true },
  },
  methods: {
    isAbsolute(url) {
      return /^https?:\/\//.test(url)
    },
  },
}
</script>
