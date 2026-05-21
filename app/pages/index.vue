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
			<h2 class="form-title">Logg inn på appen</h2>
			
			<div class="input-group">
				<label for="username">Bruk fornavnet ditt:</label>
				<input 
				id="username"
				v-model="username" 
				type="text" 
				placeholder="..." 
				required
				/>
			</div>
			
			<button type="submit">Start økt</button>
		</form>
	</main>
</template>

<style scoped>
	.login-box {
		background-color: #f4f4f4;
		padding: 40px;
		border-radius: 16px;
		border: none;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
		width: 100%;
		max-width: 400px;
	}

	.form-title {
		text-align: center;
		font-size: 1.2rem;
		color: #111;
		margin-bottom: 24px;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 16px;
	}

	input {
		background-color: #e5e4e4;
		border: none;
		color: #111;
		padding: 12px;
		border-radius: 8px;
	}

	button {
		background-color: #333d7b;
		color: whitesmoke;
		border: none;
		padding: 12px;
		border-radius: 8px;
		font-weight: bold;
		letter-spacing: 0.5px;
		cursor: pointer;
		width: 100%;
	}
</style>