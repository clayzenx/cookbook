<script lang="ts">
	import LoginForm from '$components/loginForm.svelte';
	import LoginProviders from '$components/LoginProviders.svelte';

	let activeTab: LOGINFORMTYPE = 1;
	let data: ILoginFormData = {};
	let formError = null;
</script>

<div class="p-centered login-wrapper">
	<ul class="tab tab-block">
		<li
			class="tab-item"
			class:active={activeTab === 1}
			on:click={() => {
				activeTab = 1;
				formError = null;
			}}
		>
			<a>Log In</a>
		</li>
		<li
			class="tab-item"
			class:active={activeTab === 0}
			on:click={() => {
				activeTab = 0;
				formError = null;
			}}
		>
			<a>Sign Up</a>
		</li>
	</ul>

	<LoginForm type={activeTab} bind:data bind:formError />

	<div class="divider text-center" data-content="OR" />

	<LoginProviders />
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
