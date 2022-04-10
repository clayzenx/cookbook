<script lang="ts">
	import { user } from '$store/user';
	import { CheckIcon } from '@rgossiaux/svelte-heroicons/outline';
	import { UserCircleIcon } from '@rgossiaux/svelte-heroicons/outline';
</script>

<header id="header" class="d-flex gap-5 justify-between">
	<h1 class="title-1">Hi {$user.displayName ? $user.displayName : 'cheef'}</h1>
	<UserCircleIcon class="heroic-icon" />
</header>
