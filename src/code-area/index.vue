<template>
  <textarea ref="codearea"></textarea>
</template>

<script>
import CodeMirror from 'codemirror'
import './define-mime'
export default {
  data() {
    return {
      codearea: null
    }
  },
  mounted() {
    this.codearea = CodeMirror.fromTextArea(this.$refs.codearea, {
      mode: 'sql',
      theme: 'rubyblue', // 主日样式
      lint: true,
      tabSize: 2,
      smartIndent: true, // 是否智能缩进
      styleActiveLine: true, // 当前行高亮
      lineNumbers: true, // 显示行号
      gutters: ['CodeMirror-lint-markers'],
      lineWrapping: true, // 自动换行
      matchBrackets: true, // 括号匹配显示
      autoCloseBrackets: true, // 输入和退格时成对
      autoRefresh: true // 自动刷新
      // hintOptions: {
      //   // 自定义提示选项
      //   completeSingle: false, // 当匹配只有一项的时候是否自动补全
      //   tables: {
      //     users: ['name', 'score', 'birthDate'],
      //     countries: ['name', 'population', 'size'],
      //     score: ['zooao']
      //   }
      // }
    })

    this.codearea.on('keypress', () => {
      //编译器内容更改事件
      this.codearea.showHint()
    })
  },
  methods: {
    setTables(tables) {
      this.codearea.setOption('hintOptions', {
        // 自定义提示选项
        completeSingle: false, // 当匹配只有一项的时候是否自动补全
        tables
      })
    }
  }
}
</script>

<style>
</style>