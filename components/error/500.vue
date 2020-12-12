<template>
  <v-container class="fill-height" fluid>
    <v-row class="align-self-center">
      <v-col align="center">
        <v-card id="message" max-width="360" class="text-left">
          <v-card-subtitle class="text--primary pb-0">
            <h2
              class="font-weight-bold text-subtitle-1"
              style="letter-spacing: 3px"
            >
              500
            </h2>
          </v-card-subtitle>
          <v-card-title class="pt-0">
            <h1 class="text-h5 font-weight-light" style="letter-spacing: 3px">
              OOPSIE WOOPSIE!!
            </h1>
          </v-card-title>

          <v-card-text
            class="text--primary font-weight-light"
            style="line-height: 140%; letter-spacing: 1px"
            >An unexpected error has occured</v-card-text
          >
          <v-card-text>
            <v-row no-gutters>
              <v-col>
                <v-btn
                  href="javascript:location.reload();"
                  color="primary"
                  block
                  x-large
                  >Try again</v-btn
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn to="/" color="primary" block x-large> Home </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  head() {
    return {
      title: 'OOPSIE WOOPSIE!!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'An unexpected error has occured',
        },
      ],
    }
  },
}
</script>
