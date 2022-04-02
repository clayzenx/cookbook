<script lang="ts">
	import {} from '$utils/firebase';
	export let type: LOGINFORMTYPE;
	export let data: LoginFormData;

	let showingPass: boolean = false;

	let passInput: HTMLInputElement;
</script>

<div class="form-group p-2">
	{#if type === 0}
		<input bind:value={data.login} class="form-input input-lg" type="text" placeholder="Login" />
		<p class="form-input-hint" />
	{/if}

	<input bind:value={data.email} class="form-input input-lg" type="text" placeholder="Email" />
	<p class="form-input-hint" />

	<div class="has-icon-right">
		<input
			bind:value={data.password}
			class="form-input input-lg"
			type="password"
			placeholder="Password"
			bind:this={passInput}
		/>
		<i
			on:click={() => {
				showingPass = !showingPass;
				passInput.type = passInput.type === 'text' ? 'password' : 'text';
				passInput.focus();
			}}
			class={`form-icon fi ${showingPass ? 'fi-rr-eye' : 'fi-rr-eye-crossed'} ${
				data.password ? 'show' : ''
			} text-gray mr-2 c-hand`}
		/>
	</div>

	<p class="form-input-hint" />
</div>

{#if type === 1}
	<button class="btn btn-lg btn-success p-centered"> Log In </button>
{:else}
	<button class="btn btn-lg btn-success p-centered"> Sign Up </button>
{/if}

<style scoped>
	.form-input-hint {
		margin: 0px;
		height: 24px;
	}
	.form-group {
		margin-top: 20px;
	}
	.form-icon {
		display: none;
	}
	.show {
		display: block;
	}
</style>
