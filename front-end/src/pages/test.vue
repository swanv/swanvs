<template>
    <div>
        <h1>Headline1</h1>
        <p class="text-subtitle1 text-primary bg-positive">subtitle1</p>
        <div
          class="flex inline shadow-box flex-center"
          v-for="n in 24" :key="n"
          :class="`shadow-${n}`">
          .shadow-{{ n }}
        </div>
        <div class="row">
            <div class="col-8 bg-primary">two thirds</div>
            <div class="col-2 bg-teal">one six</div>
            <div class="col-auto bg-green">auto size based on content and available space</div>
            <div class="col bg-cyan">fills remaining available space</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PageTest'
}
</script>

<style lang="sass">
h1
  color: $red
  bg-color: $deep-purple
.shadow-box
  width: 90px
  height: 90px
  margin: 25px
  border-radius: 50%
  font-size: 12px
</style>
