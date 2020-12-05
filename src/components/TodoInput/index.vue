<template>
  <div>
    <label>
      <input
        v-model="todoValue"
        type="text"
        @keyup.enter="setTodoValue"
      />
    </label>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {useToDo} from "@/hooks";

export default defineComponent(
  {
    name: "TodoInput",
    setup() {
      const todoValue = ref('')
      const {setTodo} = useToDo()
      const setTodoValue = () => {
        if (todoValue.value.trim().length > 0) {
          setTodo(todoValue.value)
          todoValue.value = ''
        }
      }
      return {
        todoValue,
        setTodoValue
      }
    }
  }
)
</script>

<style lang="scss" scoped>

</style>