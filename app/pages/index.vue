<script setup>
	definePageMeta({
	layout: 'blank'
	})

	const userStore = useUserStore()

	const username = ref('')

	function handleLogin() {
		const success = userStore.login(username.value)
		if (success) {
			// Sender brukeren til dashboardet hvis navnet ikke var tomt
			navigateTo('/dashboard')
		}
	}
</script>

<template>
	<header class="logo-wrapper">
		<MiniTrelloLogo />
	</header>

	<main class="login-box">
		<form @submit.prevent="handleLogin" class="login-form">
			<h2 class="form-title">Identifiser deg</h2>
			
			<div class="input-group">
				<label for="username">Navn / Brukernavn:</label>
				<input 
				id="username"
				v-model="username" 
				type="text" 
				placeholder="_" 
				required
				/>
			</div>
			
			<button type="submit">Start økt</button>
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

		/* 1. Egen CSS-variabel for synligheten her på input-feltet */
  		--placeholder-opacity: 1;

		/* 2. Animasjonen settes direkte på selve input-feltet i stedet! */
		animation: terminal-blink 1s step-start infinite;
	}

	input::placeholder {
		color: #4A5568;
		font-family: 'SFMono-Regular', Consolas, monospace;
		font-size: 0.85rem;
		letter-spacing: 1.5px;
		text-transform: uppercase;
  		opacity: var(--placeholder-opacity);
	}

	input:focus::placeholder {
		animation: none;
		opacity: 0.3;
	}

	@keyframes terminal-blink {
		0%, 100% {
			--placeholder-opacity: 1;
		}
		50% {
			--placeholder-opacity: 0;
		}
	}

	input:focus {
		outline: none;
		background-color: #0D1117;
		border-color: #4DEEEA;
		box-shadow: 0 0 12px rgba(77, 238, 234, 0.4);
		animation: none;
  		--placeholder-opacity: 0.3;
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