<script lang="ts">
	import { goto } from '$app/navigation';
	import { signInUser } from '$utils/firebase/googleAuth';
	import { signInUser as signInUserFB } from '$utils/firebase/facebookAuth';
	import Button from '$components/ui/Button.svelte';

	const signIn = () => {
		signInUser()
			.then(() => goto('/'))
			.catch(console.error);
	};
	const signInFb = () => {
		signInUserFB()
			.then(() => goto('/'))
			.catch(console.error);
	};
</script>

<div class="flex flex-col gap-2 mt-5">
	<Button type="outline" color="secondary" on:click={() => signIn()}>
		Sign in with
		<i slot="after" class="fi fi-brands-google" />
	</Button>
	<Button type="outline" color="secondary" on:click={() => signInFb()}>
		Sign in with
		<i slot="after" class="fi fi-brands-facebook" />
	</Button>
</div>

<style>
	i.fi {
		font-size: 20px;
		color: var(--grey);
		cursor: pointer;
	}
	i.fi:hover {
		color: var(--dark-grey);
	}
</style>
