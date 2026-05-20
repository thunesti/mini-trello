<script setup>
	definePageMeta({
	layout: 'blank'
	})
</script>

<template>
	<header class="logo-wrapper">
		<MiniTrelloLogo />
	</header>

	<main class="login-box">
		<form class="login-form">
			<h2 class="form-title">Logg inn på terminalen</h2>
			
			<div class="input-group">
				<label>Brukernavn</label>
				<input type="text" placeholder="Ditt brukernavn..." />
			</div>
			
			<button type="submit">Start økt</button>
		</form>
	</main>
</template>

<style scoped>
	.login-box {
		background-color: #221c2b;
		padding: 40px;
		border-radius: 8px;
		border: 1px solid #becfe4;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
		width: 100%;
		max-width: 400px;
	}

	.form-title {
		text-align: center;
		font-size: 1.2rem;
		color: #E4E4E4;
		margin-bottom: 24px;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 16px;
	}

	input {
		background-color: #0e0915;
		border: 1px solid #221c2b;
		color: #E4E4E4;
		padding: 10px;
		border-radius: 4px;
	}

	button {
		background-color: #bd3fd8;
		color: #0e0915;
		border: none;
		padding: 12px;
		border-radius: 4px;
		font-weight: bold;
		cursor: pointer;
		width: 100%;
	}
</style>