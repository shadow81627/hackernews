<template>
  <client-only>
    <v-tooltip top>
      <time :datetime="_date.toISOString()">{{ _date.format(format) }}</time>
      <template #activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on">{{ relativeDate }}</span>
      </template>
    </v-tooltip>
  </client-only>
</template>

<script>
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default {
  props: {
    utc: Boolean,
    interval: { type: Number, default: 60000 },
    format: { type: String, default: 'ddd, DD MMM YYYY HH:mm:ss Z' },
    date: { type: String, required: true },
  },
  data() {
    return {
      relativeDate: null,
      timer: null,
    }
  },
  computed: {
    _date() {
      return dayjs(this.date)
    },
  },
  created() {
    this.toRelativeDate()
    if (this._date.isAfter(dayjs().subtract(1, 'day'))) {
      this.timer = setInterval(this.toRelativeDate, this.interval)
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    toRelativeDate() {
      this.relativeDate = this._date.fromNow()
    },
  },
}
</script>
