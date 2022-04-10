<script lang="ts" type="module">
	import { onMount } from 'svelte';
	import { user } from '$store/user';
	import { goto } from '$app/navigation';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { initApp } from '$utils/firebase';
	import { initAuth } from '$utils/firebase/auth';
	import { firebaseConfig } from '$lib/fb';
	import Header from '$components/layout/Header.svelte';
	import Main from '$components/layout/Main.svelte';
	import '$assets/index.css';

	let app = initApp(firebaseConfig);
	initAuth(app);

	onMount(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (state) => {
			console.log(state);
			if (state)
				user.set({
					displayName: state.displayName || '',
					email: state.email,
					image: state.photoURL
				});
			else goto('/login');
		});
	});
</script>

<Main>
	<Header />
	<slot />

	<div class="footer">footer</div>
</Main>

<style global>
	body {
		background-color: rgb(248 250 252);
	}
</style>
