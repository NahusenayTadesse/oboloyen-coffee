

<script>

    let menu = [
         { name: 'Messages', href: '/admin/messages' }
    ]
    let { children } = $props();
</script>
<div class="grid grid-cols-3 justify-center items-center justify-self-center">
{#each menu as item}
    <a href={item.href} class="text-primary hover:text-primary/80 hover:scale-110 ease-in-out font-semibold py-2 px-4 rounded transition duration-300">
        {item.name}
    </a>
{/each}
</div>

{@render children()}

