<script lang="ts">
	import { onMount } from 'svelte';

	let currentSlide = $state(0);
	const slides = [
		{
			image: '/placeholder.svg?height=600&width=1200',
			heading: 'Premium Ethiopian Guji Coffee',
			subheading: 'The Coffee From Its Source'
		},
		{
			image: '/placeholder.svg?height=600&width=1200',
			heading: 'Crafted with Heritage',
			subheading: 'Family tradition spanning generations'
		},
		{
			image: '/placeholder.svg?height=600&width=1200',
			heading: 'Global Excellence',
			subheading: '50 containers exported annually'
		}
	];

	onMount(() => {
		const interval = setInterval(() => {
			currentSlide = (currentSlide + 1) % slides.length;
		}, 5000);
		return () => clearInterval(interval);
	});



</script>

<!-- Hero Carousel -->
<section class="relative h-screen bg-primary overflow-hidden">
	<!-- Slides -->
	{#each slides as slide, i}
		{#if i === currentSlide}
			<div class="absolute inset-0 transition-opacity duration-1000">
				<img src={slide.image || "/placeholder.svg"} alt={slide.heading} class="w-full h-full object-cover opacity-30" />
				<div class="absolute inset-0 bg-black/40"></div>
			</div>
		{/if}
	{/each}

	<!-- Content -->
	<div class="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
		<div class="max-w-3xl">
			<h1 class="font-serif text-5xl md:text-7xl font-bold mb-4 leading-tight">
				{slides[currentSlide].heading}
			</h1>
			<p class="text-xl md:text-2xl opacity-90 mb-8">{slides[currentSlide].subheading}</p>
			<a
				href="/products"
				class="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
			>
				Explore Our Coffee
			</a>
		</div>
	</div>

	<!-- Carousel Controls -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
		{#each slides as _, i}
			<button
				onclick={() => (currentSlide = i)}
				class={`w-3 h-3 rounded-full transition-all ${
					i === currentSlide ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white'
				}`}
				aria-label={`Slide ${i + 1}`}
			></button>
		{/each}
	</div>
</section>

<!-- About Section -->
<section class="py-20 px-4 bg-card">
	<div class="max-w-6xl mx-auto">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="font-serif text-4xl font-bold mb-6 text-primary">Our Legacy</h2>
				<p class="text-lg text-card-foreground/80 mb-4 leading-relaxed">
					Founded in 2018 by four brothers, Oboleyan Coffee Export PLC carries forward a heritage rooted in Ethiopia's fertile Guji region. Our story began with our grandfather's vision and continues today with unwavering commitment to excellence.
				</p>
				<p class="text-lg text-card-foreground/80 leading-relaxed">
					Every bean reflects our passion for quality, tradition, and the meticulous care that defines our brand.
				</p>
			</div>
			<div class="bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden h-96">
				<img
					src="/placeholder.svg?height=400&width=500"
					alt="Coffee farm"
					class="w-full h-full object-cover"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="py-16 px-4 bg-primary text-primary-foreground">
	<div class="max-w-6xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<div class="text-center">
				<div class="font-serif text-4xl font-bold text-accent mb-2">2018</div>
				<p class="opacity-90">Founded</p>
			</div>
			<div class="text-center">
				<div class="font-serif text-4xl font-bold text-accent mb-2">3</div>
				<p class="opacity-90">Washing Stations</p>
			</div>
			<div class="text-center">
				<div class="font-serif text-4xl font-bold text-accent mb-2">10</div>
				<p class="opacity-90">Drying Stations</p>
			</div>
			<div class="text-center">
				<div class="font-serif text-4xl font-bold text-accent mb-2">1000</div>
				<p class="opacity-90">Tons Annually</p>
			</div>
		</div>
	</div>
</section>

<!-- Featured Products -->
<section class="py-20 px-4">
	<div class="max-w-6xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12 text-primary">Our Coffee Selection</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each ['Washed', 'Natural/Sun-Dried', 'Specialty'] as coffeeType}
				<div class="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
					<div class="h-48 bg-gradient-to-br from-secondary to-primary overflow-hidden">
						<img
							src="/placeholder.svg?height=250&width=400"
							alt={coffeeType}
							class="w-full h-full object-cover"
						/>
					</div>
					<div class="p-6">
						<h3 class="font-serif text-xl font-bold text-primary mb-2">{coffeeType} Coffee</h3>
						<p class="text-card-foreground/70 mb-4">Premium grade Ethiopian Guji coffee processed with precision and care for exceptional flavor.</p>
						<a href="/products" class="text-accent font-semibold hover:text-secondary transition-colors">
							Learn More →
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 px-4 bg-primary text-primary-foreground">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="font-serif text-4xl font-bold mb-6">Ready to Experience Excellence?</h2>
		<p class="text-lg opacity-90 mb-8">
			Discover why Oboleyan Coffee is trusted by connoisseurs worldwide
		</p>
		<a
			href="/contact"
			class="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
		>
			Get in Touch
		</a>
	</div>
</section>
