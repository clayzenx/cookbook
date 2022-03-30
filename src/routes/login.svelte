<script lang="ts">
	import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
</script>

<div class="p-centered">
	<h3>Login page</h3>
	<div class="form-group has-error">
		<label class="form-label" for="input-example-1">Name</label>
		<input class="form-input" type="text" id="input-example-1" placeholder="..." />
		<p class="form-input-hint">The name is invalid.</p>
	</div>

	<!-- form validation class: is-success -->
	<div class="form-group">
		<label class="form-label" for="input-example-1">Name</label>
		<input class="form-input is-success" type="text" id="input-example-1" placeholder="..." />
		<p class="form-input-hint">The name is invalid.</p>
	</div>
</div>
