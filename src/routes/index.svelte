<script lang="ts">
	import { user } from '$store/user';
	import { signOut, getAuth } from 'firebase/auth';
	import Button from '$lib/components/ui/Button.svelte';

	const signOutUser = () => {
		signOut(getAuth());
		$user = {};
	};
</script>

<Button onClick={signOutUser}>Sign Out</Button>
