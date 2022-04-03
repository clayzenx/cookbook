<script lang="ts">
	import { signInUser, createUser } from '$utils/firebase/emailPasswordAuth';
	import { getErrorFromCode, type ERROR } from '$utils/firebase/errorMessage';
	import { goto } from '$app/navigation';
	import { getAuth, updateProfile } from 'firebase/auth';

	export let type: LOGINFORMTYPE;
	export let data: ILoginFormData;
	export let formError: ERROR = null;

	import { user } from '$store/user';

	let showingPass: boolean = false;
	let passInput: HTMLInputElement;

	$: formIsValid = () => {
		if (!data.email || !data.password) return false;
		if (type === 0 && !data.login) return false;

		return true;
	};

	const logIn = () => {
		signInUser(data.email, data.password)
			.then(() => goto('/'))
			.catch((e) => {
				goto('/login');
				formError = getErrorFromCode(e.code);
			});
	};

	const signUp = () => {
		createUser(data.email, data.password)
			.then(() => {
				updateProfile(getAuth().currentUser, {
					displayName: data.login
				})
					.then(() => {
						user.set({ ...$user, displayName: data.login });
						goto('/');
					})
					.catch(console.error);
			})
			.catch((e) => {
				goto('/login');
				formError = getErrorFromCode(e.code);
			});
	};
</script>

<div class="form-group p-2">
	{#if type === 0}
		<input bind:value={data.login} class="form-input input-lg" type="text" placeholder="Login" />
		<p class="form-input-hint" />
	{/if}

	<input
		bind:value={data.email}
		class={`form-input input-lg ${formError?.location === 'email' ? 'is-error' : ''}`}
		type="text"
		placeholder="Email"
	/>
	<p class="form-input-hint">{formError?.location === 'email' ? formError?.message : ''}</p>

	<div class="has-icon-right">
		<i
			on:click={() => {
				showingPass = !showingPass;
				passInput.type = passInput.type === 'text' ? 'password' : 'text';
				passInput.focus();
			}}
			class={`form-icon fi ${showingPass ? 'fi-rr-eye' : 'fi-rr-eye-crossed'} ${
				data.password ? 'show' : ''
			} text-gray mr-2 c-hand`}
			style="top: 17px;"
		/>

		<input
			bind:value={data.password}
			class={`form-input input-lg ${formError?.location === 'password' ? 'is-error' : ''}`}
			type="password"
			placeholder="Password"
			bind:this={passInput}
		/>
		<p class="form-input-hint">{formError?.location === 'password' ? formError?.message : ''}</p>
	</div>
</div>

{#if type === 1}
	<button on:click={logIn} disabled={!formIsValid()} class="btn btn-lg btn-success p-centered">
		Log In
	</button>
{:else}
	<button on:click={signUp} disabled={!formIsValid()} class="btn btn-lg btn-success p-centered">
		Sign Up
	</button>
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
