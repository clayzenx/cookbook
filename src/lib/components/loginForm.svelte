<script lang="ts">
	import { signInUser, createUser } from '$utils/firebase/emailPasswordAuth';
	export let type: LOGINFORMTYPE;
	export let data: IUser;
	import { goto } from '$app/navigation';
	import { getAuth, updateProfile } from 'firebase/auth';

	let showingPass: boolean = false;
	let passInput: HTMLInputElement;

	const logIn = () => {
		signInUser(data.email, data.password)
			.then(goto.apply({}, ['/']))
			.catch(console.error);
	};

	const signUp = () => {
		createUser(data.email, data.password)
			.then(() => {
				updateProfile(getAuth().currentUser, {
					displayName: data.login
				});
				goto('/');
			})
			.catch(console.error);
	};
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
	<button on:click={logIn} class="btn btn-lg btn-success p-centered"> Log In </button>
{:else}
	<button on:click={signUp} class="btn btn-lg btn-success p-centered"> Sign Up </button>
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
