<script lang="ts">
	import { goto } from '$app/navigation';
	import { signInUser } from '$utils/firebase/googleAuth';

	const signIn = () => {
		signInUser()
			.then(() => goto('/'))
			.catch(console.error);
	};
</script>

<div class="flex-row">
	<i class="fi fi-brands-google" on:click={() => signIn()} />
</div>

<style>
	.flex-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
	}
	i.fi {
		font-size: 20px;
		color: var(--grey);
		cursor: pointer;
	}
	i.fi:hover {
		color: var(--dark-grey);
	}
</style>
