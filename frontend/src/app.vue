<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
}
</script>
<template lang="pug">
#app
    //#nav
      router-link(to="/profile") Profile
      router-link(to="/login") Login
      router-link(to="/register") Register
      a(@click="doLogout" href="#") Logout
    nav#nav.navbar.navbar-expand-lg.bg-light
      .container-fluid
        button.navbar-toggler(type='button', data-bs-toggle='collapse', data-bs-target='#navbarTogglerDemo01', aria-controls='navbarTogglerDemo01', aria-expanded='false', aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarTogglerDemo01.collapse.navbar-collapse
          router-link.navbar-brand(to='/') Karateka
          ul.navbar-nav.me-auto.mb-2.mb-lg-0
            li.nav-item
            router-link(to="/profile") Profile
              //a.nav-link.active(aria-current='page', href='#') Home
            li.nav-item
            router-link(to="/login") Login
              //a.nav-link(href='#') Link
            li.nav-item
            router-link(to="/register") Register
              //a.nav-link.disabled Disabled
            li.nav-item
            a.nav-link(@click="doLogout") Logout)
          form.d-flex(role='search')
            input.form-control.me-2(type='search', placeholder='Search', aria-label='Search')
            button.btn.btn-outline-success(type='submit') Search
    router-view
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 16px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
