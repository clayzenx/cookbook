<script lang="ts">
	export let color = 'primary';
	export let type: 'solid' | 'outline' | 'link' = 'solid';

	export let onClick: any = () => {};
</script>

<button
	type="button"
	on:click={onClick}
	class={`
    px-4 
    py-2 
    text-sm 
    font-medium 
    ${type === 'link' ? '' : 'border'}
    bg-${type === 'link' ? '' : color}
    border-${color}
    ${
			type === 'solid' ? 'bg-opacity-80 hover:bg-opacity-70' : 'bg-opacity-5 hover:bg-opacity-10'
		}    
    active:bg-opacity-100
    active:text-${type === 'link' ? color : 'white'}
    rounded-md
    focus:outline-none 
    focus-visible:ring-2 
    focus-visible:ring-grey-500
    focus-visible:ring-opacity-90
    text-${type === 'solid' ? 'white' : color}
  `}
>
	<slot />
</button>
