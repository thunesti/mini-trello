<script setup lang="ts">
    // Tar imot feil-objektet fra Nuxt
    defineProps({
    error: Object
    })

    // Funksjon som nullstiller feilen og sender brukeren trygt tilbake til dashboardet
    function handleError() {
    clearError({ redirect: '/dashboard' })
    }
</script>

<template>
  <div class="error-layout">
    <main class="error-container">
      <div class="terminal-header">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yellow"></span>
        <span class="terminal-dot green"></span>
        <span class="terminal-title">APP_CONSOLE_DUMP.ERR</span>
      </div>

      <div class="terminal-body">
        <h1 class="error-code">STATUS_404</h1>
        
        <div class="error-message">
          <p class="warning-text"><span class="blink-warning">[AVBRUTT]</span> Rute ikke funnet.</p>
          <p class="desc-text">
            Adressen du har oppgitt eksisterer ikke på denne serveren. 
            Siden kan ha blitt slettet, flyttet eller deaktivert under en systemoppdatering.
          </p>
        </div>

        <div class="command-line">
            <span class="prompt">></span>
            <span class="command">router.push('/dashboard')</span>
            <span class="cursor">_</span>
        </div>

        <button @click="handleError" class="stealth-btn">
          OMDIRIGER TIL DASHBOARD
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped>
    .error-layout {
        background-color: #0D1117; /* Det dype, iskalde verdensrommet */
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    }

    .error-container {
        background-color: #161B22;
        border: 1px solid rgba(255, 0, 127, 0.3);
        box-shadow: 0 0 30px rgba(255, 0, 127, 0.08);
        border-radius: 8px;
        width: 100%;
        max-width: 550px;
        overflow: hidden;
    }

    /* Terminal-toppen */
    .terminal-header {
        background-color: #090D14;
        padding: 10px 16px;
        display: flex;
        align-items: center;
        gap: 8px;
        border-bottom: 1px solid #222C3A;
    }

    .terminal-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        opacity: 0.6;
    }

    .terminal-dot.red { background-color: #FF007F; opacity: 0.9; }
    .terminal-dot.yellow { background-color: #F59E0B; }
    .terminal-dot.green { background-color: #10B981; }

    .terminal-title {
        color: #64748B;
        font-size: 0.7rem;
        font-weight: bold;
        letter-spacing: 1px;
        margin-left: 8px;
    }

    /* Terminal-innmaten */
    .terminal-body {
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .error-code {
        color: #FF007F;
        font-size: 2.5rem;
        font-weight: 900;
        margin: 0;
        letter-spacing: -1px;
        text-shadow: 0 0 10px rgba(255, 0, 127, 0.3);
    }

    .error-message {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .warning-text {
        color: #E2E8F0;
        font-weight: bold;
        font-size: 1.05rem;
        margin: 0;
    }

    .blink-warning {
        color: #FF007F;
        animation: alarm-blink 1s step-start infinite;
    }

    .desc-text {
        color: #64748B;
        font-size: 0.9rem;
        line-height: 1.6;
        margin: 0;
    }

    /* Simulert kommandolinje */
    .command-line {
        background-color: #090D14;
        padding: 14px;
        border-radius: 6px;
        border: 1px solid #222C3A;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
    }

    .command-line .prompt {
        color: #4DEEEA;
        margin-right: 10px;
        font-weight: bold;
    }

    .command-line class {
        color: #E2E8F0;
    }

    .command-line .cursor {
    color: #4DEEEA;
    font-weight: bold;
    margin-left: 2px;
    animation: cursor-blink 1s step-start infinite;
    }

    .stealth-btn {
        background-color: #0D1117;
        color: #4DEEEA;
        border: 1px solid #4DEEEA;
        padding: 14px;
        border-radius: 6px;
        font-weight: bold;
        font-family: inherit;
        font-size: 0.9rem;
        letter-spacing: 1.5px;
        cursor: pointer;
        margin-top: 8px;
        transition: all 0.25s ease;
    }

    .stealth-btn:hover {
        background-color: #4DEEEA;
        color: #0D1117;
        box-shadow: 0 0 20px rgba(77, 238, 234, 0.5);
    }

    .stealth-btn:active {
        transform: scale(0.98);
    }

    @keyframes cursor-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
    }

    @keyframes alarm-blink {
    0%, 100% { color: #FF007F; }
    50% { color: #64748B; }
    }
</style>