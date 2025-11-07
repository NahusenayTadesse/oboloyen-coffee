<script lang="ts">

	import { random1To11 } from "$lib/global.svelte";
	const founders = [
		{
			name: 'Abebe Oboleyan',
			role: 'Founder & CEO',
			image: '/placeholder.svg?height=300&width=300'
		},
		{
			name: 'Bekele Oboleyan',
			role: 'Operations Manager',
			image: '/placeholder.svg?height=300&width=300'
		},
		{
			name: 'Girma Oboleyan',
			role: 'Quality Control Manager',
			image: '/placeholder.svg?height=300&width=300'
		},
		{
			name: 'Tadesse Oboleyan',
			role: 'Export Manager',
			image: '/placeholder.svg?height=300&width=300'
		}
	];

	const values = [
		{
			title: 'Heritage',
			description: 'Building on our grandfather\'s vision and family legacy spanning generations of coffee excellence.'
		},
		{
			title: 'Quality',
			description: 'Unwavering commitment to producing the finest Ethiopian Guji coffee through meticulous care at every stage.'
		},
		{
			title: 'Sustainability',
			description: 'Responsible farming practices that protect our land and ensure long-term viability for future generations.'
		},
		{
			title: 'Community',
			description: 'Supporting local farmers and communities in the Guji region to create shared prosperity and growth.'
		}
	];

	const timeline = [
		{ year: '1950s', event: 'Grandfather begins coffee farming in Guji region' },
		{ year: '2018', event: 'Four brothers establish Oboleyan Coffee Export PLC' },
		{ year: '2019', event: 'Build first washing and drying stations' },
		{ year: '2020', event: 'Expand to 3 washing stations and 10 drying stations' },
		{ year: '2022', event: 'Reach 1000 tons annual production' },
		{ year: '2024', event: 'Established partnerships with leading global coffee roasters' }
	];
</script>

<svelte:head>
 <title>About</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative h-96 bg-primary/50 text-primary-foreground overflow-hidden">
	<img
		src="/images/coffee({random1To11()}).webp"
		alt="Guji coffee region"
		class="absolute inset-0 w-full h-full object-cover opacity-20"
	/>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative h-full flex items-center justify-center text-center px-4">
		<div>
			<h1 class="font-serif text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
			<p class="text-xl opacity-90">From tradition to global excellence</p>
		</div>
	</div>
</section>

<!-- Legacy Section -->
<section class="py-20 px-4">
	<div class="max-w-6xl mx-auto">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div class="order-2 md:order-1">
				<img
					src="/images/ob(4).webp"
					alt="Oboleyan family legacy"
					class="rounded-lg shadow-lg w-full"
				/>
			</div>
			<div class="order-1 md:order-2">
				<h2 class="font-serif text-4xl font-bold mb-6 text-primary">A Family Legacy</h2>
				<p class="text-lg text-foreground/80 mb-4 leading-relaxed">
					The Oboleyan story begins with our grandfather's passion for coffee cultivation in the fertile Guji region of Ethiopia. For generations, our family nurtured these lands with dedication and pride.
				</p>
				<p class="text-lg text-foreground/80 mb-4 leading-relaxed">
					In 2018, four brothers—Abebe, Bekele, Girma, and Tadesse—founded Oboleyan Coffee Export PLC to share their heritage with the world. What started as a family dream has grown into a respected name in premium Ethiopian coffee.
				</p>
				<p class="text-lg text-foreground/80 leading-relaxed">
					Today, we remain committed to the values our family has held for decades: quality, sustainability, and respect for both the land and the communities we serve.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Values Section -->
<section class="py-20 px-4 bg-card">
	<div class="max-w-6xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12 text-primary">Our Core Values</h2>
		<div class="grid md:grid-cols-2 gap-8">
			{#each values as value}
				<div class="bg-background rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
					<h3 class="font-serif text-2xl font-bold text-primary mb-4">{value.title}</h3>
					<p class="text-foreground/80 leading-relaxed">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Timeline Section -->
<section class="py-20 px-4">
	<div class="max-w-4xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12 text-primary">Our Journey</h2>
		<div class="relative">
			<!-- Vertical line -->
			<div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent"></div>

			<!-- Timeline items -->
			<div class="space-y-8">
				{#each timeline as item, i}
					<div class={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
						<div class="w-1/2 px-8 {i % 2 === 0 ? 'text-right' : 'text-left'}">
							<div class="bg-card rounded-lg p-6 shadow-md">
								<div class="font-serif text-2xl font-bold text-accent mb-2">{item.year}</div>
								<p class="text-foreground/80">{item.event}</p>
							</div>
						</div>
						<div class="flex justify-center w-0">
							<div class="w-4 h-4 rounded-full bg-primary ring-4 ring-card"></div>
						</div>
						<div class="w-1/2"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Team Section -->
<section class="py-20 px-4 bg-card">
	<div class="max-w-6xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12 text-primary">Meet Our Founders</h2>
		<div class="grid md:grid-cols-4 gap-8">
			{#each founders as founder}
				<div class="text-center">
					<div class="mb-6 overflow-hidden rounded-lg shadow-lg">
						<img src={founder.image || "/placeholder.svg"} alt={founder.name} class="w-full aspect-square object-cover" />
					</div>
					<h3 class="font-serif text-xl font-bold text-primary mb-1">{founder.name}</h3>
					<p class="text-accent font-semibold">{founder.role}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Vision Section -->
<section class="py-20 px-4 bg-primary text-primary-foreground">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="font-serif text-4xl font-bold mb-6">Our Vision</h2>
		<p class="text-lg opacity-90 mb-8 leading-relaxed">
			To be the world's most trusted source of premium Ethiopian Guji coffee, recognized for our exceptional quality, sustainable practices, and commitment to the communities we serve. We envision a future where every cup of Oboleyan coffee represents not just superior taste, but a connection to generations of tradition and excellence.
		</p>
		<div class="inline-block bg-accent text-accent-foreground px-8 py-1 rounded-lg">
			<p class="text-sm font-semibold">Est. 2018 | Guji, Ethiopia</p>
		</div>
	</div>
</section>
