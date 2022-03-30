<script lang="ts" type="module">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { getAuth } from 'firebase/auth';
	import { getApp } from '$utils/firebase';
	import 'spectre.css';
	import '$assets/index.css';

	getApp();

	onMount(() => {
		if (!getAuth().currentUser) goto('/login');
	});
</script>

<div class="main-wrapper">
	<div class="nav">header</div>
	<slot />
	<div class="footer">footer</div>
</div>
