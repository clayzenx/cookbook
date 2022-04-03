<script lang="ts" type="module">
	import { user } from '$store/user';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { initApp } from '$utils/firebase';
	import { initAuth } from '$utils/firebase/auth';
	import { firebaseConfig } from '$lib/fb';
	import 'spectre.css';
	import '$assets/index.css';

	let app = initApp(firebaseConfig);
	initAuth(app);

	onMount(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (state) => {
			if (state) user.set({ displayName: state.displayName || '', email: state.email });
			else goto('/login');
		});
	});
</script>

<div class="main-wrapper">
	<div class="nav">header</div>
	<slot />
	<div class="footer">footer</div>
</div>
