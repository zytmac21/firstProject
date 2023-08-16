<template>
  <div>123</div>
</template>

<script>
export default {
  data() {
    return {
      testGroup: {
        name: "test",
        age: 25,
      },
    };
  },
  methods: {
    async getData() {
      try {
        const res = await _getData();
      } catch (error) {
        console.log(error);
      }
    },
    init(){
        const test ={
            name:'TEST',
            age:34
        }
      Object.assign(this.testGroup,test)
      console.log(this.testGroup);
    },
  },
  mounted(){
        this.init()
    }
};
</script>

<style>
</style>