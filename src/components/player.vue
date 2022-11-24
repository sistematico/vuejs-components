<script setup lang="ts">
import { Player, Audio, DefaultUi } from '@vime/vue-next'
</script>
<template>
  <Player>
    <Audio>
      <source
        data-src="https://radio.somdomato.com/geral"
        type="audio/mpeg"
      />
    </Audio>
    <DefaultUi />
  </Player>
</template>

