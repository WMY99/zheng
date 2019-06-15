<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title:""
    };
  },
  created() {
    this.title=this.$route.query.title
    console.log(this.$route.query.res);
    this.hide();
  },
  methods: {
    hide() {
      setTimeout(() => {
          this.$router.push("/home")
      }, 2000);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../static/common.scss";
h1 {
  font-size: pxTorem(30px);
  text-align: center;
}
</style>



