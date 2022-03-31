<script lang="ts">
	import LoginForm from '$components/loginForm.svelte';
	let activeTab = 'signIn';
</script>

<div class="p-centered login-wrapper">
	<ul class="tab tab-block">
		<li
			class="tab-item"
			class:active={activeTab === 'signIn'}
			on:click={() => (activeTab = 'signIn')}
		>
			<a>Sign In</a>
		</li>
		<li
			class="tab-item"
			class:active={activeTab === 'signUp'}
			on:click={() => (activeTab = 'signUp')}
		>
			<a>Sign Up</a>
		</li>
	</ul>

	<LoginForm type={activeTab} />
</div>

<style>
	.login-wrapper {
		width: 325px;
		padding: 10px;
	}
	a {
		cursor: pointer;
	}
</style>
