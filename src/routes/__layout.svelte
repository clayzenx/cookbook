<script lang="ts">
	import { getApp } from '$utils/firebase';
	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

	let app = getApp();
	let auth = getAuth();

	createUserWithEmailAndPassword(auth, 'clay.zenx@gmail.com', 'E5x2L2w5')
		.then((userCredential) => {
			const user = userCredential.user;
		})
		.catch((error: { code: string; message: string }) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});

	console.log(app, auth);
</script>

<slot />
