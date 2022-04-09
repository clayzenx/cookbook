<script lang="ts">
	import { user } from '$store/user';
	import { signOut, getAuth } from 'firebase/auth';

	const signOutUser = () => {
		signOut(getAuth());
	};
</script>

<h1>Welcome to SvelteKit {$user.displayName ? $user.displayName : 'cheef'}</h1>
<button on:click={signOutUser} class="btn btn-lg btn-error p-centered">Sign Out</button>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
