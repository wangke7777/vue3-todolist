<template>
  <div>
    <label>
      <input
        type="checkbox"
        :checked="item.status === FINISHED"
        @click="setStatus(item.id)"
      />
    </label>
    <span
      :class="item.status === FINISHED ? 'line-through' : '' "
    >
      {{ item.content }}
    </span>
    <button
      @click="removeTodo(item.id)"
    >删除
    </button>
    <button
      @click="setDoing(item.id)"
      v-if="item.status !== FINISHED"
      :class="item.status === DOING ? 'doing' : 'willDo'"
    >
      {{ item.status === DOING ? '正在做...' : '马上做' }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ITodo, TODO_STATUS } from "../../../typings";

interface IStatusState {
  DOING: TODO_STATUS;
  FINISHED: TODO_STATUS;
  WILLDO: TODO_STATUS
}

export default defineComponent({
  name: 'TodoItem',
  props: {
    item: Object as PropType<ITodo>
  },
  setup ( props, {emit} ) {
    const statusState = <IStatusState> {
      DOING: TODO_STATUS.DOING,
      FINISHED: TODO_STATUS.FINISHED,
      WILLDO: TODO_STATUS.WILLDO
    }
    const setStatus = ( id: number ): void => {
      emit('setStatus', id)
    }
    const removeTodo = ( id: number ): void => {
      emit('removeTodo', id)
    }
    const setDoing = ( id: number ): void => {
      emit('setDoing', id)
    }
    return {
      ...statusState,
      setStatus,
      removeTodo,
      setDoing
    }
  }
})
</script>

<style scoped lang="scss">
.line-through {
  text-decoration: line-through;
}

.doing {
  background-color: #dcdcdc;
  color: #ccc;
}

.willDo {
  background-color: orange;
  color: #fff;
}
</style>