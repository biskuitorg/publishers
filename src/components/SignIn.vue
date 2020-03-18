<template>
  <div class="uk-section">
    <div class="uk-container">
      <h3>Log in to your account</h3>
      <p>Use data entered during registration.</p>

      <form>
        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: mail"></span>
            <input class="uk-input" type="text" placeholder="E-mail">
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input class="uk-input" type="password" placeholder="Password">
          </div>
        </div>
        <div class="uk-margin">
          <label><input class="uk-checkbox" type="checkbox" checked> Remember me</label>
        </div>
        <div class="uk-margin">
          <button class="uk-button uk-button-primary">Sign in</button>
          <button class="uk-button uk-button-secondary" uk-icon="github">GitHub </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'signin',
  metaInfo: {
    title: 'Sign In'
  }
}
</script>
