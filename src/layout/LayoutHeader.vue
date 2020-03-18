<template>
    <header class="pk-header">
        <div class="uk-container">
            <div class="pk-container">
                <div class="uk-flex uk-flex-space-between uk-flex-middle uk-hidden-small">
                    <h1 class="pk-title">
                        <a @click="$router.push({ name: 'home' })">Biskuit Publishers</a>
                    </h1>
                </div>
            </div>
            <nav class="pk-navbar uk-navbar-container" uk-navbar>
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <li :class="{'uk-active': $route.name === 'sign-in' }">
                            <a @click="$router.push({ name: 'sign-in' })">Sign in</a>
                        </li>
                        <li :class="{'uk-active': $route.name === 'sign-up' }">
                            <a @click="$router.push({ name: 'sign-up' })">Sign up</a>
                        </li>
                        <li :class="{'uk-active': $route.name === 'support' }">
                            <a @click="$router.push({ name: 'support' })">Support</a>
                        </li>
                        <li :class="{'uk-active': $route.name === 'reset-password' }">
                            <a @click="$router.push({ name: 'reset-password' })">Reset password</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        methods: { },
        mounted() { }
    }
</script>