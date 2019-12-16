<template>
    <div class="uk-section">
        <div class="uk-container">
            <h3>Create your developer account</h3>
            <p>Registration is free, you don't have to pay anything.</p>
            <form>
                <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                        <input class="uk-input" type="text" placeholder="Your name">
                    </div>
                </div>
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
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: lock"></span>
                        <input class="uk-input" type="password" placeholder="Repeat password">
                    </div>
                </div>
                <div class="uk-margin">
                    <button class="uk-button uk-button-primary">Sign up</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'signup',
  metaInfo: {
    title: 'Sign Up'
  }
}
</script>
