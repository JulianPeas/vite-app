<template>
    <div>
        <div>{{ count }}</div>
        <button @click="countAdd">add</button>
        <button @click="countReduce">reduce</button>
        <button @click="goDemo2">demo02</button>
    </div>
</template>

<script lang="ts">
import {
    ref,
    reactive,
    onMounted,
    onUnmounted,
    watch,
    defineComponent,
} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    setup(prop) {
        const router = useRouter()
        console.log(router)
        const count = ref(0)
        const countAdd = () => {
            count.value++
        }
        const state = reactive({
            num: 11,
        })
        const countReduce = () => {
            count.value--
        }
        const goDemo2 = () => {
            router.push({ path: '/demo2' })
        }
        const num: number = 1
        watch(count, (count, prevCount) => {
            console.log(count, prevCount)
        })
        onMounted(() => {
            console.log(process.env, num)
        })
        onUnmounted(() => {
            console.log('组件卸载了')
        })
        return {
            count,
            countAdd,
            countReduce,
            goDemo2
        }
    },
})
</script>

<style lang="scss"></style>
