<template>
  <div class="wrapper">
    <todo-input></todo-input>
    <todo-list :todoList="todoList"></todo-list>
  </div>
</template>

<script lang="ts">
import TodoInput from '@/components/TodoInput/index.vue'
import TodoList from '@/components/TodoList/index.vue'
import { defineComponent, onMounted, computed } from "vue";
import { IUseTodo, useToDo } from "@/hooks";
import { Store, useStore } from "vuex";

export default defineComponent({
  
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  setup () {
    const {setTodoList}: IUseTodo = useToDo()
    const store: Store<any> = useStore()
    onMounted(() => {
      setTodoList()
    })
    return {
      todoList: computed(() => store.state.list)
    }
  }
  
})
</script>
