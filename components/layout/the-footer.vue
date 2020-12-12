<template>
  <v-footer class="hidden-print-only" height="auto">
    <v-container>
      <v-row no-gutters>
        <v-col cols="auto">
          <v-card flat color="transparent">
            <v-card-text>
              <span>{{ $config.VERSION }}</span>
              <span v-if="$config.COMMIT">{{ shortHash($config.COMMIT) }}</span>
              <span v-if="$config.VERSION && $config.COMMIT"></span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row no-gutters>
        <v-col cols="auto">
          <v-card flat tile color="transparent">
            <v-card-text class="py-2">
              <font-awesome-icon
                :icon="faMapMarker"
                title="location"
                fixed-width
              />
              <span>New Farm, Australia</span>
              <span
                >© <time datetime="2020">2020</time> |
                <a href="https://daim.dev">Damien Robinson</a></span
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-spacer />
        <v-col cols="auto">
          <last-modified v-bind="{ utc }" />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
export default {
  data: () => ({
    utc: false,
    faMapMarker,
  }),
  methods: {
    shortHash: (value) => (value ? value.substring(0, 7) : null),
  },
}
</script>
