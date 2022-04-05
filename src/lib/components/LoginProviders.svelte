<script lang="ts">
	import { signInUser } from '$utils/firebase/googleAuth';
</script>

<div class="flex-row">
	<i class="fi fi-brands-google" on:click={() => signInUser()} />
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

