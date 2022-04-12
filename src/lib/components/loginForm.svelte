<script lang="ts">
	import { getAuth, updateProfile } from 'firebase/auth';
	import { signInUser, createUser } from '$utils/firebase/emailPasswordAuth';
	import { goto } from '$app/navigation';
	import { user } from '$store/user';
	import { getErrorFromCode } from '$utils/firebase/errorMessage';
	import { emailValidator, passwordValidator } from '$utils/vest/loginForm';
	import Input from '$components/ui/Input.svelte';
	import Button from '$components/ui/Button.svelte';
	import {
		UserIcon,
		KeyIcon,
		EyeIcon,
		EyeOffIcon,
		LoginIcon
	} from '@rgossiaux/svelte-heroicons/outline';

	let data: ILoginFormData = {};

	// fb errrors
	let formError: { [key: string]: string } = { email: '', password: '' };

	let showPass: boolean = false;
	let focus: 'password' | 'login' | '' = '';

	$: formIsValid = () => {
		if (
			!data.email ||
			!data.password ||
			formError?.email ||
			formError?.password ||
			emailValidation.hasErrors() ||
			passwordValidation.hasErrors()
		)
			return false;
		return true;
	};

	const logIn = () => {
		signInUser(data.email, data.password)
			.then(() => goto('/'))
			.catch((e) => {
				goto('/login');
				let error = getErrorFromCode(e.code);
				formError[error.location] = error.message;
			});
	};

	let emailValidation = emailValidator.get();
	let passwordValidation = passwordValidator.get();

	const emailHandler = () => {
		formError['email'] = '';
		emailValidation = emailValidator(data.email);
	};
	const passwordHandler = () => {
		formError['password'] = '';
		passwordValidation = passwordValidator(data.password);
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
				let error = getErrorFromCode(e.code);
				formError[error.location] = error.message;
			});
	};
</script>

<div class="flex flex-col gap-5 mt-5">
	<Input
		bind:value={data.email}
		placeholder="Email"
		errorMessages={[formError?.email, ...emailValidation.getErrors('email')].filter(Boolean)}
		on:input={emailHandler}
		on:focus={() => (focus = 'login')}
		on:blur={() => (focus = '')}
	>
		<UserIcon
			slot="before"
			class={`w-6 ${focus === 'login' ? 'text-primary' : 'text-grey-500'}  ${
				emailValidation.hasErrors() || formError['email']?.length ? 'text-error' : ''
			}`}
		/>
	</Input>

	<Input
		bind:value={data.password}
		type={showPass ? 'text' : 'password'}
		placeholder="Password"
		errorMessages={[formError?.password, ...passwordValidation.getErrors('password')].filter(
			Boolean
		)}
		on:input={passwordHandler}
		on:focus={() => (focus = 'password')}
		on:blur={() => (focus = '')}
	>
		<KeyIcon
			slot="before"
			class={`w-6 ${focus === 'password' ? 'text-primary' : 'text-grey-500'} ${
				passwordValidation.hasErrors() || formError['passsword']?.length ? 'text-error' : ''
			}`}
		/>
		<div slot="after">
			{#if showPass}
				<EyeOffIcon
					slot="after"
					on:click={() => (showPass = false)}
					class={`cursor-pointer w-6 ${focus === 'password' ? 'text-primary' : 'text-grey-500'}`}
				/>
			{:else}
				<EyeIcon
					slot="after"
					on:click={() => (showPass = true)}
					class={`cursor-pointer w-6 ${focus === 'password' ? 'text-primary' : 'text-grey-500'}`}
				/>
			{/if}
		</div>
	</Input>
	<p class="text-xs mt-2 text-secondary text-left">
		First time here? <a class="underline font-bold" href="/signUp">Join us</a>
	</p>

	<Button disabled={!formIsValid()} on:click={logIn}>
		<LoginIcon slot="after" class="w-5" />
		Log In
	</Button>
</div>
