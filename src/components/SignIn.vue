<template>
  <div class="uk-section">
    <div class="uk-container">
      <h3>Log in to your account</h3>
      <p>Use data entered during registration.</p>

      <div class="uk-child-width-expand@s uk-text-center" uk-grid>
        <div>
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
            </div>
          </form>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">Sign In with Social</h3>
            <div class="uk-margin">
              <button class="uk-button uk-button-secondary" uk-icon="github">GitHub</button>
            </div>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">Item</div>
        </div>
      </div>


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
