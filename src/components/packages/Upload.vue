<template>
  <div class="uk-section uk-section-default">
    <div class="uk-container">
        <h3>Upload new package</h3>
        <p>The package will be approved by a moderator before being published in the marketplace.</p>
        <form>
            <div class="uk-margin">
                <div uk-form-custom>
                    <input type="file">
                    <button class="uk-button uk-button-default" type="button" tabindex="-1">Select package.zip</button>
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: link"></span>
                    <input class="uk-input" type="text" placeholder="Documentation link">
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: link"></span>
                    <input class="uk-input" type="text" placeholder="Support link">
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: link"></span>
                    <input class="uk-input" type="text" placeholder="Demo link">
                </div>
            </div>
            <div class="uk-margin">
                <button class="uk-button uk-button-primary">Send for review</button>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'packages-upload',
  metaInfo: {
    title: 'Upload package'
  }
}
</script>
