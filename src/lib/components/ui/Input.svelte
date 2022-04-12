<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { InformationCircleIcon } from '@rgossiaux/svelte-heroicons/outline';
	import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';

	export let value: string = '';
	export let type: 'text' | 'password' = 'text';
	export let placeholder: string = '';
	export let errorMessages: any = [];

	const dispatch = createEventDispatcher();

	let inputElement = null;

	const input = ({ target }) => {
		value = target.value;
		dispatch('input');
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
      {errorMessages.length ? 'border-error focus:border-error' : ''}
    "
	/>
	<div class="absolute h-full right-0 top-0 flex items-center gap-0.5">
		<div on:click={() => inputElement.focus()}>
			<slot name="after" />
		</div>
		{#if errorMessages.length}
			<Popover class="relative h-full flex items-center">
				<PopoverButton>
					<InformationCircleIcon class="w-5 cursor-pointer text-error" />
				</PopoverButton>

				<PopoverPanel
					class="absolute d-block bg-primary bg-opacity-70 rounded z-20 p-2 bottom-8 right-1/2 w-max"
				>
					<p class="text-sm text-white leading-4">{errorMessages[0]}</p>
				</PopoverPanel>
			</Popover>
		{/if}
	</div>
</div>
