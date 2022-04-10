<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let value: string = '';
	export let type: 'text' | 'password' = 'text';
	export let placeholder: string = '';

	const dispatch = createEventDispatcher();

	let inputElement = null;

	const input = ({ target }) => {
		value = target.value;
	};
	const focus = () => {
		dispatch('focus');
	};
	const blur = () => {
		dispatch('blur');
	};
</script>

<div class="relative">
	<div class="absolute h-full flex items-center gap-0.5" on:click={() => inputElement.focus()}>
		<slot name="before" />
	</div>
	<input
		bind:this={inputElement}
		on:focus={focus}
		on:blur={blur}
		on:input={input}
		{placeholder}
		{type}
		class="
      border-0
      focus:border-0
      bg-transparent 
      border-b 
      border-grey-500
      w-64
      py-2
      px-8
      text-base
      bg-transparent
      active:autofill:bg-primary
      text-{value ? 'primary' : 'grey-500'}
      focus:outline-none
      focus:border-b
      focus:border-primary
      focus:text-primary
    "
	/>
	<div
		class="absolute h-full right-0 top-0 flex items-center gap-0.5"
		on:click={() => inputElement.focus()}
	>
		<slot name="after" />
	</div>
</div>
