<script setup lang="ts">
// Nuxt 4 ordner useUserStore, ref og navigateTo helt automatisk i bakgrunnen! 👌
definePageMeta({
    layout: 'blank'
})

const userStore = useUserStore()

const usernameInput = ref('')
const errorMessage = ref('')

function handleLogin() {
    errorMessage.value = ''

    // Sikrer at det ikke logges inn med tomt felt
    if (!usernameInput.value.trim()) {
        errorMessage.value = 'ANGI GYLDIG BRUKERNAVN!'
        return
    }

    const success = userStore.login(usernameInput.value)
    if (success) {
        // Sender brukeren til dashboardet hvis innloggingen var vellykket
        navigateTo('/dashboard')
    } else {
        errorMessage.value = 'AUTENTISERING FEILET!'
    }
}
</script>

<template>
    <header class="logo-wrapper">
        <MiniTrelloLogo />
    </header>

    <main class="login-box">
        <form @submit.prevent="handleLogin" class="login-form">
            <h2 class="form-title">INNLOGGING</h2>
            
            <div class="input-group">
                <label for="username">Brukernavn:</label>
                <input 
                    id="username"
                    v-model="usernameInput" 
                    type="text" 
                    placeholder="Skriv inn navnet ditt..." 
                    autocomplete="off"
                    required
                />
            </div>

            <p v-if="errorMessage" class="error-text">
                <span>FEIL:</span> {{ errorMessage }}
            </p>
            
            <button type="submit">ÅPNE DASHBOARD</button>
        </form>
    </main>
</template>

<style scoped>
    .login-box {
        background-color: #161B22;
        padding: 40px;
        border-radius: 16px;
        border: 1px solid #30363D;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }

    .form-title {
        text-align: center;
        font-size: 1.2rem;
        color: #E2E8F0;
        margin-bottom: 24px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 28px;
        width: 100%;
    }

    label {
        color: #64748B;
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        user-select: none;
    }

    input {
        width: 100%;
        box-sizing: border-box;
        background-color: #090D14;
        border: 1px solid #222C3A;
        color: #E2E8F0;
        padding: 14px;
        border-radius: 6px;
        font-family: monospace;
        font-size: 1rem;
        transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
    }

    input::placeholder {
        color: #4A5568;
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 0.85rem;
        letter-spacing: 1.5px;
        text-transform: uppercase;
		opacity: 0.9
    }

    input:focus::placeholder {
        opacity: 0.3;
    }

    /* CSS for feilmeldingen */
    .error-text {
        color: #FF8C00;
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 0.8rem;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }

    .error-text span {
        font-weight: bold;
    }

    input:focus {
        outline: none;
        background-color: #0D1117;
        border-color: #4DEEEA;
        box-shadow: 0 0 12px rgba(77, 238, 234, 0.4);
    }

    button {
        background-color: #0D1117;
        color: #4DEEEA;
        padding: 14px;
        border: 1px solid #4DEEEA;
        border-radius: 6px;
        font-weight: bold;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        cursor: pointer;
        width: 100%;
        box-shadow: 0 0 8px rgba(77, 238, 234, 0.1);
        transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, transform 0.1s ease;
    }

    button:hover {
        background-color: #4DEEEA;
        color: #0D1117;
        box-shadow: 0 0 20px rgba(77, 238, 234, 0.6);
    }

    button:active {
        transform: scale(0.98);
        box-shadow: 0 0 10px rgba(77, 238, 234, 0.4);
    }
</style>