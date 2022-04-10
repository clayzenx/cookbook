<script lang="ts">
	import LoginForm from '$components/loginForm.svelte';
	import LoginProviders from '$components/LoginProviders.svelte';
	import Greeting from '$components/Greeting.svelte';

	let activeTab: LOGINFORMTYPE = 1;
	let data: ILoginFormData = {};
	let formError = null;
</script>

<div>
	<Greeting />
	<LoginForm type={activeTab} bind:data bind:formError />
	<LoginProviders />
</div>
