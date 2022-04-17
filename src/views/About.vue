<template>
    <div class="about">
        <input type="text" v-model="num">
        <button @click="setNum">更新</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:this.$store.getters['getNum']
        }
    },
    watch:{
        "$store.state.num":{
            handler(data){
                console.log(data)
            }
        }
    },
    methods:{
        setNum(){
            this.$store.dispatch('setNum',this.num);
        }
    }
}
</script>
<style lang="less" scoped>
    .about{
       
    }
</style>>