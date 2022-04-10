<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let color = 'primary';
	export let type: 'solid' | 'outline' | 'link' = 'solid';
	export let disabled: boolean = false;

	const dispatch = createEventDispatcher();
</script>

<button
	{disabled}
	type="button"
	class="
    px-4 
    py-2 
    text-sm 
    font-medium 
    {type === 'link' ? '' : 'border'}
    {type === 'link' ? '' : `bg-${color}`}
    border-{color}
    {type === 'solid'
		? 'bg-opacity-80 hover:bg-opacity-70'
		: 'bg-opacity-5 hover:bg-opacity-10'}    
    active:bg-opacity-100
    active:text-{type === 'link' ? color : 'white'}
    rounded-md
    focus:outline-none 
    focus-visible:ring-2 
    focus-visible:ring-grey-500
    focus-visible:ring-opacity-90
    {type === 'solid' ? 'text-white' : `text-{color}`}
    {disabled ? 'bg-opacity-50 hover:bg-opacity-50 active:bg-opacity-50' : ''}
  "
	on:click={() => dispatch('click')}
>
	<div class="flex items-center justify-center gap-2">
		<slot name="before" />
		<slot />
		<slot name="after" />
	</div>
</button>
