<template>
  <todo-item
    v-for="item of todoList"
    :key="item.id"
    :item="item"
    @removeTodo="removeTodo"
    @setStatus="setStatus"
    @setDoing="setDoing"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TodoItem from './Item.vue'
import { ITodo } from '../../../typings';
import { IUseTodo, useToDo } from '@/hooks';

export default defineComponent(
  {
    name: 'Todolist',
    components: {
      TodoItem
    },
    props: {
      todoList: Array as PropType<ITodo[]>
    },
    setup () {
      const {
        removeTodo,
        setStatus,
        setDoing
      }: IUseTodo = useToDo()
      return {
        removeTodo,
        setStatus,
        setDoing
      }
    }
  }
)
</script>

<style scoped lang="scss">

</style>