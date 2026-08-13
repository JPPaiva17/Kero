const { createApp, ref } = Vue;

createApp({
    setup() {

    },
    template: `
    <div class = 'container'>
        <div class = 'login-container'>
            <div class = 'login-image-container'>
                <img class='login-image' src="/static/images/login-image.jpg">
            </div>
            <div class = 'login-form'>
                <h1>Sign in</h1>
                <label></label>
                <input type="email">
                <label></label>
                <input type="password">
                <button>Sign in</button>
                <hr>
                <p>Don't have an account? <a href="">Sign up</a><p>
        </div>
    </div>
    `
}).mount('#login-app');
