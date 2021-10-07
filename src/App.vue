<template>
  <section>
    <CodeArea ref="codearea" />
    <button @click="setTables">test</button>
  </section>
</template>

<script>
import CodeArea from './code-area/index.vue'
export default {
  components: {
    CodeArea
  },
  methods: {
    setTables() {
      const tables =
        Math.random() > 0.5
          ? {
              users: ['name', 'score', 'birthDate']
            }
          : {
              animals: ['name', 'score', 'birthDate']
            }
      this.$refs.codearea.setTables(tables)
    }
  }
}
</script>