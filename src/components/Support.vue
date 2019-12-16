<template>
  <div class="uk-section">
    <div class="uk-container">
      <h3>Support center</h3>
      <p>Support section for developers.</p>
      <ul uk-accordion>
        <li class="uk-open">
            <a class="uk-accordion-title" href="#">How do I update my package?</a>
            <div class="uk-accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </li>
        <li>
            <a class="uk-accordion-title" href="#">My package is in moderation queue</a>
            <div class="uk-accordion-content">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
            </div>
        </li>
        <li>
            <a class="uk-accordion-title" href="#">How to migrate from pagekit to biskuit</a>
            <div class="uk-accordion-content">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
            </div>
        </li>
        <li>
            <a class="uk-accordion-title" href="#">How do I handle package translations?</a>
            <div class="uk-accordion-content">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
            </div>
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'support',
  metaInfo: {
    title: 'Support'
  }
}
</script>
