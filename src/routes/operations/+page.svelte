<script lang="ts">
	let selectedTab = $state('facilities');

	const facilities = [
		{
			name: 'Washing Station 1 - Adola',
			capacity: '150 tons/season',
			established: '2019',
			description: 'Our primary washing facility located in Adola, equipped with modern water channels and fermentation tanks.',
			image: '/placeholder.svg?height=300&width=400'
		},
		{
			name: 'Washing Station 2 - Bule Hora',
			capacity: '120 tons/season',
			established: '2020',
			description: 'Secondary washing facility in Bule Hora region, featuring advanced sorting and cleaning equipment.',
			image: '/placeholder.svg?height=300&width=400'
		},
		{
			name: 'Washing Station 3 - Shakiso',
			capacity: '130 tons/season',
			established: '2021',
			description: 'Latest addition to our network, combining traditional methods with modern efficiency standards.',
			image: '/placeholder.svg?height=300&width=400'
		}
	];

	const dryingStations = [
		{
			name: 'Drying Station Complex',
			stations: '10 stations',
			method: 'Sun-drying on raised beds',
			capacity: 'Up to 500 tons during peak season',
			details: 'Spread across multiple locations in the Guji region for optimal drying conditions'
		}
	];

	const gallery = [
		{ title: 'Coffee Plants in Bloom', image: '/placeholder.svg?height=300&width=400' },
		{ title: 'Harvesting the Cherries', image: '/placeholder.svg?height=300&width=400' },
		{ title: 'Washing Channels', image: '/placeholder.svg?height=300&width=400' },
		{ title: 'Drying Beds', image: '/placeholder.svg?height=300&width=400' },
		{ title: 'Quality Control Testing', image: '/placeholder.svg?height=300&width=400' },
		{ title: 'Ready for Export', image: '/placeholder.svg?height=300&width=400' }
	];

	const stats = [
		{ number: '400+', label: 'Farming Families', description: 'Local farmers we partner with' },
		{ number: '1000', label: 'Tons/Year', description: 'Annual production capacity' },
		{ number: '50', label: 'Containers', description: 'Exported annually' },
		{ number: '25+', label: 'Countries', description: 'Served worldwide' }
	];

	const equipment = [
		{ name: 'Mechanical Dryers', description: '3 industrial-grade dryers for consistent moisture control' },
		{ name: 'Sorting Machines', description: 'Advanced optical sorters for quality grading and defect removal' },
		{ name: 'Water Channels', description: 'Fermentation channels with temperature and pH monitoring' },
		{ name: 'Raised Drying Beds', description: 'Over 200 beds for traditional sun-drying methods' },
		{ name: 'Milling Equipment', description: 'Hulling and cleaning machines for final processing' },
		{ name: 'Testing Lab', description: 'Cupping lab and moisture analyzers for quality assurance' }
	];
</script>

<svelte:head>
 <title>Operations</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative h-96 bg-primary text-primary-foreground overflow-hidden">
	<img
		src="/placeholder.svg?height=400&width=1200"
		alt="Coffee operations"
		class="absolute inset-0 w-full h-full object-cover opacity-20"
	/>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative h-full flex items-center justify-center text-center px-4">
		<div>
			<h1 class="font-serif text-5xl md:text-6xl font-bold mb-4">Our Operations</h1>
			<p class="text-xl opacity-90">State-of-the-Art Facilities in Guji, Ethiopia</p>
		</div>
	</div>
</section>

<!-- Operations Overview -->
<section class="py-20 px-4">
	<div class="max-w-6xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12 text-primary">Operations Overview</h2>
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<p class="text-lg text-foreground/80 mb-6 leading-relaxed">
					Oboleyan operates a comprehensive network of washing and drying stations throughout the Guji region. Our facilities combine traditional coffee processing wisdom with modern technology to ensure consistent quality and efficiency.
				</p>
				<p class="text-lg text-foreground/80 mb-6 leading-relaxed">
					With a capacity of over 1,000 tons annually, we process coffee from over 400 farming families, providing them with fair prices and stable partnerships while maintaining our premium standards.
				</p>
				<p class="text-lg text-foreground/80 leading-relaxed">
					Our commitment to sustainability means every facility is designed with environmental consciousness, utilizing water responsibly and minimizing waste throughout the processing chain.
				</p>
			</div>
			<div class="grid grid-cols-2 gap-4">
				{#each stats as stat}
					<div class="bg-card rounded-lg p-6 text-center shadow-md">
						<div class="font-serif text-3xl font-bold text-accent mb-2">{stat.number}</div>
						<p class="font-semibold text-primary text-sm mb-1">{stat.label}</p>
						<p class="text-xs text-foreground/70">{stat.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Facilities Tab Section -->
<section class="py-20 px-4 bg-card">
	<div class="max-w-6xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12 text-primary">Our Facilities</h2>

		<!-- Tabs -->
		<div class="flex gap-4 mb-12 flex-wrap justify-center">
			<button
				onclick={() => (selectedTab = 'facilities')}
				class={`px-6 py-2 rounded-lg font-semibold transition-all ${
					selectedTab === 'facilities'
						? 'bg-primary text-primary-foreground'
						: 'bg-background text-foreground hover:bg-background/80'
				}`}
			>
				Washing Stations
			</button>
			<button
				onclick={() => (selectedTab = 'drying')}
				class={`px-6 py-2 rounded-lg font-semibold transition-all ${
					selectedTab === 'drying'
						? 'bg-primary text-primary-foreground'
						: 'bg-background text-foreground hover:bg-background/80'
				}`}
			>
				Drying Stations
			</button>
			<button
				onclick={() => (selectedTab = 'equipment')}
				class={`px-6 py-2 rounded-lg font-semibold transition-all ${
					selectedTab === 'equipment'
						? 'bg-primary text-primary-foreground'
						: 'bg-background text-foreground hover:bg-background/80'
				}`}
			>
				Equipment
			</button>
		</div>

		<!-- Tab Content -->
		{#if selectedTab === 'facilities'}
			<div class="grid md:grid-cols-3 gap-8">
				{#each facilities as facility}
					<div class="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
						<div class="h-48 overflow-hidden">
							<img src={facility.image || "/placeholder.svg"} alt={facility.name} class="w-full h-full object-cover" />
						</div>
						<div class="p-6">
							<h3 class="font-serif text-xl font-bold text-primary mb-2">{facility.name}</h3>
							<div class="flex gap-4 mb-4 text-sm">
								<div>
									<p class="text-muted-foreground text-xs font-semibold">CAPACITY</p>
									<p class="text-primary font-semibold">{facility.capacity}</p>
								</div>
								<div>
									<p class="text-muted-foreground text-xs font-semibold">ESTABLISHED</p>
									<p class="text-primary font-semibold">{facility.established}</p>
								</div>
							</div>
							<p class="text-foreground/80 text-sm leading-relaxed">{facility.description}</p>
						</div>
					</div>
				{/each}
			</div>
		{:else if selectedTab === 'drying'}
			<div class="space-y-6">
				{#each dryingStations as station}
					<div class="bg-background rounded-lg p-8 shadow-md">
						<h3 class="font-serif text-2xl font-bold text-primary mb-4">{station.name}</h3>
						<div class="grid md:grid-cols-2 gap-6 mb-4">
							<div>
								<p class="text-muted-foreground text-sm font-semibold mb-1">STATIONS</p>
								<p class="text-lg font-semibold text-primary">{station.stations}</p>
							</div>
							<div>
								<p class="text-muted-foreground text-sm font-semibold mb-1">CAPACITY</p>
								<p class="text-lg font-semibold text-primary">{station.capacity}</p>
							</div>
						</div>
						<div class="mb-4">
							<p class="text-muted-foreground text-sm font-semibold mb-1">METHOD</p>
							<p class="text-primary font-semibold">{station.method}</p>
						</div>
						<p class="text-foreground/80 leading-relaxed">{station.details}</p>
					</div>
				{/each}
			</div>
		{:else if selectedTab === 'equipment'}
			<div class="grid md:grid-cols-2 gap-6">
				{#each equipment as item}
					<div class="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
						<h3 class="font-serif text-lg font-bold text-primary mb-2">{item.name}</h3>
						<p class="text-foreground/80 text-sm leading-relaxed">{item.description}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- Gallery Section -->
<section class="py-20 px-4">
	<div class="max-w-6xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12 text-primary">Operations Gallery</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each gallery as item}
				<div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
					<img
						src={item.image || "/placeholder.svg"}
						alt={item.title}
						class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
					/>
					<div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
						<h3 class="font-serif text-lg font-bold text-white">{item.title}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Sustainability Section -->
<section class="py-20 px-4 bg-primary text-primary-foreground">
	<div class="max-w-4xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-8">Sustainability & Community</h2>
		<div class="grid md:grid-cols-2 gap-8">
			<div class="bg-white/10 rounded-lg p-6">
				<h3 class="font-serif text-xl font-bold mb-3">Environmental Responsibility</h3>
				<ul class="space-y-2 text-sm opacity-90">
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">•</span>
						<span>Water-efficient processing methods</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">•</span>
						<span>Wastewater treatment systems</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">•</span>
						<span>Composting of coffee pulp for soil enrichment</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">•</span>
						<span>Minimal use of chemical inputs</span>
					</li>
				</ul>
			</div>
			<div class="bg-white/10 rounded-lg p-6">
				<h3 class="font-serif text-xl font-bold mb-3">Community Partnership</h3>
				<ul class="space-y-2 text-sm opacity-90">
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">•</span>
						<span>Fair prices for farming families</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">•</span>
						<span>Long-term partnerships and contracts</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">•</span>
						<span>Agricultural training and support programs</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-accent font-bold">•</span>
						<span>Investment in local infrastructure</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
