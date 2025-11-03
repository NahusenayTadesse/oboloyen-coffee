<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/products', label: 'Products' },
		{ href: '/operations', label: 'Operations' },
		{ href: '/contact', label: 'Contact' }
	];

	let isOpen = $state(false);
</script>

<!-- Navigation -->
<nav class="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-20">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 group">
				<div class="w-10 h-10 rounded-full flex items-center justify-center">
					<img src="/logo.webp" alt="">
				</div>
				<div class="hidden sm:block">
					<h1 class="font-serif text-xl font-bold">OBOLEYAN</h1>
					<p class="text-xs opacity-90">Coffee Export</p>
				</div>
			</a>

			<!-- Desktop Menu -->
			<div class="hidden md:flex items-center gap-8">
				{#each navItems as item}
					<a
						href={item.href}
						class={`text-sm font-medium transition-colors ${
							$page.url.pathname === item.href
								? 'text-accent border-b-2 border-accent pb-1'
								: 'hover:text-accent'
						}`}
					>
						{item.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
				onclick={() => (isOpen = !isOpen)}
				aria-label="Toggle menu"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>

		<!-- Mobile Menu -->
		{#if isOpen}
			<div class="md:hidden pb-4 space-y-2">
				{#each navItems as item}
					<a
						href={item.href}
						class={`block px-4 py-2 rounded-lg transition-colors ${
							$page.url.pathname === item.href
								? 'bg-accent text-accent-foreground'
								: 'hover:bg-white/10'
						}`}
						onclick={() => (isOpen = false)}
					>
						{item.label}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</nav>

<!-- Main Content -->
<main class="flex-1">
	{@render children()}
</main>

<!-- Footer -->
<footer class="bg-primary text-primary-foreground mt-20 py-16">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
			<div>
				<h3 class="font-serif text-lg font-bold mb-4">Oboleyan Coffee</h3>
				<p class="text-sm opacity-90">Premium Ethiopian Guji coffee export since 2018</p>
			</div>
			<div>
				<h4 class="font-semibold mb-4">Quick Links</h4>
				<ul class="space-y-2 text-sm opacity-90">
					<li><a href="/" class="hover:text-accent transition-colors">Home</a></li>
					<li><a href="/about" class="hover:text-accent transition-colors">About</a></li>
					<li><a href="/products" class="hover:text-accent transition-colors">Products</a></li>
				</ul>
			</div>
			<div>
				<h4 class="font-semibold mb-4">Company</h4>
				<ul class="space-y-2 text-sm opacity-90">
					<li><a href="/operations" class="hover:text-accent transition-colors">Operations</a></li>
					<li><a href="/contact" class="hover:text-accent transition-colors">Contact</a></li>
				</ul>
			</div>
			<div>
				<h4 class="font-semibold mb-4">Contact</h4>
				<p class="text-sm opacity-90 mb-2">Guji, Ethiopia</p>
				<p class="text-sm opacity-90">info@oboleyan.com</p>
			</div>
		</div>
		<div class="border-t border-white/10 pt-8 text-center text-sm opacity-75">
			<p>&copy; 2025 Oboleyan Coffee Export PLC. All rights reserved.</p>
		</div>
	</div>
</footer>

<style>
	:global(html, body) {
		@apply h-full;
	}

	:global(#svelte-app) {
		@apply h-full flex flex-col;
	}
</style>
