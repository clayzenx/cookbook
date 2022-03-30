<script lang="ts">
	import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
</script>

<div class="p-centered">
	<h3>Login page</h3>
	<div class="form-group">
		<label class="form-label" for="input-example-1">Name</label>
		<input class="form-input" type="text" id="input-example-1" placeholder="Name" />
		<p class="form-input-hint" />
	</div>
	<button class="btn btn-primary p-centered">Log In</button>
</div>
