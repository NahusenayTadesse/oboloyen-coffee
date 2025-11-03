<script lang="ts">
	const coffeeProducts = [
		{
			name: 'Washed Guji',
			grade: 'Grade 1 - Specialty',
			image: '/placeholder.svg?height=300&width=300',
			description: 'Clean, bright, and complex. Notes of citrus and jasmine with exceptional clarity.',
			characteristics: ['Bright acidity', 'Fruity notes', 'Floral undertones', 'Full body'],
			processing: 'Washed',
			altitude: '1800-2100m',
			harvestSeason: 'Oct-Dec'
		},
		{
			name: 'Natural/Sun-Dried Guji',
			grade: 'Grade 1',
			image: '/placeholder.svg?height=300&width=300',
			description: 'Rich, fruity, and vibrant. Notes of berry and stone fruit with sweet, complex finish.',
			characteristics: ['Fruity sweetness', 'Berry notes', 'Full body', 'Smooth finish'],
			processing: 'Natural',
			altitude: '1800-2100m',
			harvestSeason: 'Oct-Dec'
		},
		{
			name: 'Honey/Pulped Natural',
			grade: 'Specialty',
			image: '/placeholder.svg?height=300&width=300',
			description: 'Balanced and sweet. Notes of honey, chocolate, and ripe fruit with silky mouthfeel.',
			characteristics: ['Sweet profile', 'Honey notes', 'Balanced acidity', 'Silky texture'],
			processing: 'Honey Process',
			altitude: '1800-2100m',
			harvestSeason: 'Oct-Dec'
		}
	];

	const processingSteps = [
		{
			name: 'Harvesting',
			description: 'Hand-picked ripe cherries from our fields in the Guji region, ensuring only the best beans are selected.',
			icon: '🌱'
		},
		{
			name: 'Sorting & Cleaning',
			description: 'Cherries are cleaned and sorted to remove any defects, preparing them for their respective processing methods.',
			icon: '✨'
		},
		{
			name: 'Processing (Washed/Natural/Honey)',
			description: 'Depending on the desired profile, cherries undergo washed, natural, or honey processing to develop unique flavor characteristics.',
			icon: '⚙️'
		},
		{
			name: 'Drying',
			description: 'Beans are dried slowly on our drying beds or in mechanical dryers to achieve optimal moisture content (11-12%).',
			icon: '☀️'
		},
		{
			name: 'Milling & Grading',
			description: 'Dried beans are milled to remove the parchment layer, then graded by size and quality to ensure consistency.',
			icon: '⚡'
		},
		{
			name: 'Quality Control & Export',
			description: 'Final cupping and testing ensures every batch meets our premium standards before shipment worldwide.',
			icon: '✅'
		}
	];

	const processDetails = [
		{
			name: 'Washed Process',
			description: 'The cherry is removed and beans are fermented in water channels, then dried to develop clean, bright, and complex flavors.',
			benefits: ['Clean cup profile', 'Bright acidity', 'Clear flavor notes', 'Consistent quality']
		},
		{
			name: 'Natural/Sun-Dried Process',
			description: 'The entire cherry is dried in the sun, allowing the fruit to impart sweet, fruity, and complex flavors to the bean.',
			benefits: ['Fruity sweetness', 'Full body', 'Complex notes', 'Distinctive character']
		},
		{
			name: 'Honey/Pulped Natural Process',
			description: 'The skin is removed but fruit mucilage (honey) is left on the bean during drying, creating a balanced, sweet profile.',
			benefits: ['Balanced flavor', 'Honey sweetness', 'Smooth finish', 'Unique complexity']
		}
	];
</script>

<!-- Hero Section -->
<section class="relative h-96 bg-primary text-primary-foreground overflow-hidden">
	<img
		src="/placeholder.svg?height=400&width=1200"
		alt="Coffee beans"
		class="absolute inset-0 w-full h-full object-cover opacity-20"
	/>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative h-full flex items-center justify-center text-center px-4">
		<div>
			<h1 class="font-serif text-5xl md:text-6xl font-bold mb-4">Our Coffee</h1>
			<p class="text-xl opacity-90">Premium Ethiopian Guji, Expertly Processed</p>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="py-16 px-4">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="font-serif text-3xl font-bold mb-4 text-primary">Why Oboleyan Coffee?</h2>
		<p class="text-lg text-foreground/80 leading-relaxed">
			Our coffee is sourced from the renowned Guji region of Ethiopia, grown at high altitudes where volcanic soil and ideal climate conditions produce beans of exceptional quality. Each batch is carefully processed and graded to meet our rigorous standards for flavor, aroma, and consistency.
		</p>
	</div>
</section>

<!-- Products Section -->
<section class="py-20 px-4 bg-card">
	<div class="max-w-6xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12 text-primary">Our Coffee Selection</h2>
		<div class="grid md:grid-cols-3 gap-8">
			{#each coffeeProducts as product}
				<div class="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
					<div class="h-64 overflow-hidden bg-gradient-to-br from-secondary to-primary">
						<img src={product.image || "/placeholder.svg"} alt={product.name} class="w-full h-full object-cover" />
					</div>
					<div class="p-6 flex-1 flex flex-col">
						<h3 class="font-serif text-2xl font-bold text-primary mb-1">{product.name}</h3>
						<p class="text-accent font-semibold text-sm mb-3">{product.grade}</p>
						<p class="text-foreground/80 mb-4 flex-1">{product.description}</p>

						<!-- Details -->
						<div class="grid grid-cols-2 gap-3 mb-4 text-sm">
							<div class="bg-muted rounded p-2">
								<p class="text-muted-foreground text-xs font-semibold">ALTITUDE</p>
								<p class="text-primary font-semibold">{product.altitude}</p>
							</div>
							<div class="bg-muted rounded p-2">
								<p class="text-muted-foreground text-xs font-semibold">HARVEST</p>
								<p class="text-primary font-semibold">{product.harvestSeason}</p>
							</div>
						</div>

						<!-- Characteristics -->
						<div class="mb-4">
							<p class="text-xs font-semibold text-muted-foreground mb-2">CHARACTERISTICS</p>
							<div class="flex flex-wrap gap-2">
								{#each product.characteristics as char}
									<span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded">{char}</span>
								{/each}
							</div>
						</div>

						<a href="/contact" class="text-accent font-semibold hover:text-secondary transition-colors">
							Request a Sample →
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Processing Overview Section -->
<section class="py-20 px-4">
	<div class="max-w-6xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12 text-primary">Our Process</h2>
		<div class="grid md:grid-cols-3 gap-6 mb-16">
			{#each processingSteps as step, i}
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center font-serif text-xl font-bold text-accent-foreground">
						{i + 1}
					</div>
					<div>
						<h3 class="font-serif text-lg font-bold text-primary mb-2">{step.name}</h3>
						<p class="text-foreground/80 text-sm leading-relaxed">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Processing Methods Section -->
<section class="py-20 px-4 bg-card">
	<div class="max-w-6xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12 text-primary">Processing Methods Explained</h2>
		<div class="grid md:grid-cols-3 gap-8">
			{#each processDetails as method}
				<div class="bg-background rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
					<h3 class="font-serif text-2xl font-bold text-primary mb-4">{method.name}</h3>
					<p class="text-foreground/80 mb-6 leading-relaxed">{method.description}</p>
					<div>
						<p class="text-xs font-semibold text-muted-foreground mb-3">KEY BENEFITS</p>
						<ul class="space-y-2">
							{#each method.benefits as benefit}
								<li class="flex items-start gap-2 text-sm text-foreground/80">
									<span class="text-accent font-bold">•</span>
									<span>{benefit}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Quality Assurance Section -->
<section class="py-20 px-4 bg-primary text-primary-foreground">
	<div class="max-w-4xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-8">Our Commitment to Quality</h2>
		<div class="grid md:grid-cols-2 gap-8 mb-8">
			<div class="bg-white/10 rounded-lg p-6">
				<h3 class="font-serif text-xl font-bold mb-3">Rigorous Grading</h3>
				<p class="opacity-90">Every batch is evaluated and graded according to international standards, ensuring consistent quality across all shipments.</p>
			</div>
			<div class="bg-white/10 rounded-lg p-6">
				<h3 class="font-serif text-xl font-bold mb-3">Professional Cupping</h3>
				<p class="opacity-90">Our experienced cuppers conduct sensory evaluations to verify flavor profiles and ensure each lot meets our premium standards.</p>
			</div>
			<div class="bg-white/10 rounded-lg p-6">
				<h3 class="font-serif text-xl font-bold mb-3">Traceability</h3>
				<p class="opacity-90">We maintain detailed records of each batch from farm to export, ensuring complete transparency and accountability.</p>
			</div>
			<div class="bg-white/10 rounded-lg p-6">
				<h3 class="font-serif text-xl font-bold mb-3">Sustainability Practices</h3>
				<p class="opacity-90">We implement environmentally responsible practices throughout our operations to protect our land and communities.</p>
			</div>
		</div>
		<div class="text-center">
			<a href="/contact" class="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
				Discuss Your Order
			</a>
		</div>
	</div>
</section>
