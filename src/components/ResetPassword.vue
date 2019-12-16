<template>
  <div class="uk-section">
    <div class="uk-container">
      <h3>Reset password</h3>
      <p>Reset your developer account password.</p>
      <form>
        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: mail"></span>
            <input class="uk-input" type="text" placeholder="E-mail">
          </div>
        </div>
        <div class="uk-margin">
          <button class="uk-button uk-button-primary">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reset-password',
  metaInfo: {
    title: 'Reset password'
  }
}
</script>
