<script lang="ts">
	import {
		getApp,
		createUserWithEmailAndPassword,
		signInWithEmailAndPassword
	} from '$utils/firebase';

	getApp();

	createUserWithEmailAndPassword('clay.zenx@gmail.com', 'E5x2L2w5').then(() => {
		signInWithEmailAndPassword('zxc@yandex.ru', 'asd123zxc').then(console.log);
	});
</script>

<slot />
