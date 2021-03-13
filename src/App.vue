<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  #app {
    height: 100vh;
    background-color: #101821;
    p {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    input {
      outline: none;
      background: none;
      border: none;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    .up-enter-active, .up-leave-active {
      transition: all .6s;
    }

    .up-enter, .up-leave-to {
      opacity: 1;
      transform: translateY(100%);
    }
  }

</style>
