<script lang="ts">
	import { goto } from '$app/navigation';
	import { getAuth } from 'firebase/auth';
	import { getApp } from '$utils/firebase';
	import 'spectre.css';

	getApp();

	if (!getAuth().currentUser) goto('/login');
</script>

<div class="wrapper">
	<div class="nav">header</div>
	<slot />
	<div class="footer">footer</div>
</div>

<style>
	.wrapper {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
</style>
