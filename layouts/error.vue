<template>
  <main class="error_wrap container">
    <section class="error_inner has-text-centered">
      <h1 class="main_line"><LogoImg :size="35"></LogoImg></h1>
      <h2 class="title is-1 m-t-50">４０４</h2>
      <p class="subtitle has-text-grey m-t-30">Not Found.</p>
      <div class="columns has-text-centered m-t-30">
        <div class="column">
            <router-link to="/" class="button is-rounded">
              Back To Home
            </router-link>
          </div>
      </div>
    </section>
  </main>
</template>

<script>
import LogoImg from "~/components/Logo.vue"
export default {
  components: {
    LogoImg
  }
}
</script>


<style scoped>
.wrap {
  height: 100vh;
}
.error_inner {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
}

.broken-link {
  width: 10rem;
}
.error_wrap .logo {
  width: 50px;
  animation: bounding .3s ease infinite alternate;
}
@keyframes bounding{
  0% {transform: translateY(0px);}
  100% {transform: translateY(-10px);}
}
.error_wrap .button {
  border-color: #44a044;
  color: #44a044;
  font-weight: bold;
}
.error_wrap {
  height: calc(100vh - 230px)
}
</style>
