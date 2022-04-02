<script lang="ts">
	import LoginForm from '$components/loginForm.svelte';
	let activeTab: LOGINFORMTYPE = 0;

	let data: LoginFormData = { email: '', password: '', login: '' };
</script>

<div class="p-centered login-wrapper">
	<h3>{data?.email}</h3>
	<h3>{data?.password}</h3>

	<ul class="tab tab-block">
		<li class="tab-item" class:active={activeTab === 1} on:click={() => (activeTab = 1)}>
			<a>Sign In</a>
		</li>
		<li class="tab-item" class:active={activeTab === 0} on:click={() => (activeTab = 0)}>
			<a>Sign Up</a>
		</li>
	</ul>

	<LoginForm type={activeTab} bind:data />

	<div class="divider text-center" data-content="OR" />
</div>

<style>
	.login-wrapper {
		width: 325px;
		height: 375px;
		padding: 10px;
	}
	a {
		cursor: pointer;
	}
</style>
