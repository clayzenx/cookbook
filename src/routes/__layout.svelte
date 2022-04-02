<script lang="ts" type="module">
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
		onAuthStateChanged(auth, (user) => {
			if (!user) goto('/login');
			else {
			}
		});
	});
</script>

<div class="main-wrapper">
	<div class="nav">header</div>
	<slot />
	<div class="footer">footer</div>
</div>
