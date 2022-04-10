<script lang="ts">
	import { user } from '$store/user';
	import { UserCircleIcon } from '@rgossiaux/svelte-heroicons/outline';
	import Avatar from '$components/ui/Avatar.svelte';
</script>

<header id="header" class="flex gap-5 items-center justify-between w-full p-4">
	<h1 class="text-primary text-xl text-center">
		Hi {$user.displayName ? $user.displayName : 'cheef'}
	</h1>

	{#if $user.image}
		<Avatar src={$user.image} />
	{:else}
		<UserCircleIcon class="heroic-icon text-primary w-10" stroke-width="1" />
	{/if}
</header>
