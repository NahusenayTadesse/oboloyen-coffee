<script lang="ts">
  import { random1To11 } from "$lib/global.svelte";

	let formData = $state({
		name: '',
		email: '',
		company: '',
		phone: '',
		subject: '',
		message: ''
	});

	let submitted = $state(false);
	let isLoading = $state(false);
	  import { Loader, MapPin, Mail, Phone, Clock } from "@lucide/svelte";


	const contactInfo = [
		{
			title: 'Headquarters',
			details: ['Guji, Ethiopia', 'East Africa'],
			icon: MapPin
		},
		{
			title: 'Email',
			details: ['info@oboleyan.com', 'export@oboleyan.com'],
			icon: Mail
		},
		{
			title: 'Phone',
			details: ['+251 XXX XXX XXXX', 'Available weekdays 8am-5pm EAT'],
			icon: Phone
		},
		{
			title: 'Business Hours',
			details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Guji, Ethiopia (EAT/UTC+3)'],
			icon: Clock
		}
	];

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isLoading = true;

		// Simulate form submission
		try {
			await new Promise(resolve => setTimeout(resolve, 1500));

			// In a real application, you would send this data to your backend
			console.log('Form submitted:', formData);

			submitted = true;
			formData = {
				name: '',
				email: '',
				company: '',
				phone: '',
				subject: '',
				message: ''
			};

			// Reset success message after 5 seconds
			setTimeout(() => {
				submitted = false;
			}, 5000);
		} catch (error) {
			console.error('Error submitting form:', error);
		} finally {
			isLoading = false;
		}
	}

	  import  { superForm } from 'sveltekit-superforms';
	  import { zod4Client } from 'sveltekit-superforms/adapters';
	    let { data } = $props();

import { contactMessageSchema as schema} from '$lib/zodschemas.js';
  import type { Snapshot } from "@sveltejs/kit";

	const { form, errors, enhance, delayed, capture, restore } = superForm(
		data.form,
		{
			taintedMessage: () => {
				return new Promise((resolve) => {
					resolve(window.confirm('Do you want to leave?\nChanges you made may not be saved.'));
				});
			},

			validators: zod4Client(schema)

		}
	);

	export const snapshot: Snapshot = { capture, restore };



</script>

<svelte:head>
 <title>Contact</title>
</svelte:head>


{#snippet fe(label = '', name = '', type = '', placeholder = '', required=false, min="", max="")}
	<div class="flex w-full flex-col gap-2 justify-start">
		<label for={name} >{label}</label>
		<input
			{type}
			{name}
			{placeholder}
			{required}
			{min}
			{max}
			class="w-full px-4 py-3 bg-background border border-border 
			rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent aria-invalid:focus:ring-red-500 "

			bind:value={$form[name]}
			aria-invalid={$errors[name] ? 'true' : undefined}
			
		/>
		{#if $errors[name]}
			<span class="text-red-500">{$errors[name]}</span>
		{/if}
	</div>
{/snippet}

<!-- Hero Section -->
<section class="relative h-80 bg-primary/50 text-primary-foreground overflow-hidden">
	<img
		src="/images/coffee({random1To11()}).webp"
		alt="Contact us"
		class="absolute inset-0 w-full h-full object-cover opacity-20"
	/>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative h-full flex items-center justify-center text-center px-4">
		<div>
			<h1 class="font-serif text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
			<p class="text-xl opacity-90">We'd love to hear from you</p>
		</div>
	</div>
</section>

<!-- Contact Information Section -->
<section class="py-20 px-4">
	<div class="max-w-6xl mx-auto">
		<div class="grid md:grid-cols-4 gap-8 mb-12">
			{#each contactInfo as info}
				<div class="text-center">
					<div class="text-4xl mb-4 flex flex-col justify-center items-center"><info.icon class="h-8 w-8" /></div>
					<h3 class="font-serif text-xl font-bold text-primary mb-3">{info.title}</h3>
					{#each info.details as detail}
						<p class="text-foreground/80 text-sm mb-1">{detail}</p>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Contact Form Section -->
<section class="py-20 px-4 bg-card" id="form">
	<div class="max-w-2xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-4 text-primary">Send us a Message</h2>
		<p class="text-center text-foreground/80 mb-12">
			Have questions about our coffee or interested in bulk orders? Fill out the form below and we'll get back to you within 24 hours.
		</p>

		<!-- {#if submitted}
			<div class="mb-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
				<p class="text-green-700 font-semibold">Thank you! Your message has been sent successfully.</p>
				<p class="text-green-600 text-sm mt-2">We'll be in touch shortly.</p>
			</div>
		{/if} -->

		<form use:enhance method="post" class="space-y-6">
			<!-- Name and Email Row -->
			<div class="grid md:grid-cols-2 gap-6">
				{@render fe('Full Name', 'name', 'text', 'Your name', true)}
				{@render fe('Email Address', 'email', 'email', 'your@email.com', true)}
				{@render fe('Company', 'company', 'text', 'Your company name', false)}
				{@render fe('Phone Number', 'phone', 'tel', '+251 XXX XXX XXXX', false)}
				{@render fe('Subject', 'subject', 'text', 'How can we help?', true)}
			</div>
			
			<div>

			<!-- Company and Phone Row -->
				<label for="message" class="block text-sm font-semibold text-primary mb-2">Message</label>
				<textarea
					id="message"
					name="message"
					bind:value={$form.message}
					required
					rows="6"
					placeholder="Tell us about your inquiry..."
					class="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
				></textarea>

				{#if $errors.message}
			<span class="text-red-500">{$errors.message}</span>
		{/if}
			</div>

			<!-- Submit Button -->
			<button
				type="submit"
				disabled={$delayed}
				class="w-full {$delayed ? "animate-pulse": ''} bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
			>
				{#if $delayed}
					<Loader class="animate-spin" />
					Sending...
				{:else}
					Send Message
				{/if}
			</button>
		</form>
	</div>
</section>

<!-- Additional Contact Options -->
<section class="py-20 px-4">
	<div class="max-w-6xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12 text-primary">Other Ways to Connect</h2>
		<div class="grid md:grid-cols-3 gap-8">
			<div class="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
				<h3 class="font-serif text-2xl font-bold text-primary mb-4">Bulk Orders</h3>
				<p class="text-foreground/80 mb-6">
					For wholesale inquiries and bulk coffee purchases, contact our export manager directly.
				</p>
				<a href="mailto:export@oboleyan.com" class="text-accent font-semibold hover:text-secondary transition-colors">
					export@oboleyan.com
				</a>
			</div>
			<div class="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
				<h3 class="font-serif text-2xl font-bold text-primary mb-4">Visit Us</h3>
				<p class="text-foreground/80 mb-6">
					We welcome visitors interested in touring our facilities and learning about our operations firsthand.
				</p>
				<button onclick={() => document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'})} class="text-accent font-semibold hover:text-secondary transition-colors">
					Schedule a Visit →
				</button>
			</div>
			<div class="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
				<h3 class="font-serif text-2xl font-bold text-primary mb-4">Sample Orders</h3>
				<p class="text-foreground/80 mb-6">
					Interested in tasting our coffee? We offer sample packages for cupping and evaluation.
				</p>
				<a href="#form" class="text-accent font-semibold hover:text-secondary transition-colors">
					Request Samples →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="py-20 px-4 bg-primary text-primary-foreground">
	<div class="max-w-4xl mx-auto">
		<h2 class="font-serif text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
		<div class="space-y-6">
			<div class="bg-white/10 rounded-lg p-6">
				<h3 class="font-serif text-lg font-bold mb-2">What is your minimum order quantity?</h3>
				<p class="opacity-90 text-sm">
					For wholesale orders, our minimum is 1 container (20-22 tons). We can discuss smaller quantities for select buyers.
				</p>
			</div>
			<div class="bg-white/10 rounded-lg p-6">
				<h3 class="font-serif text-lg font-bold mb-2">Do you offer samples?</h3>
				<p class="opacity-90 text-sm">
					Yes, we provide sample packages ranging from 100g to 5kg. Samples can be arranged by contacting our sales team.
				</p>
			</div>
			<div class="bg-white/10 rounded-lg p-6">
				<h3 class="font-serif text-lg font-bold mb-2">What certifications do you have?</h3>
				<p class="opacity-90 text-sm">
					We maintain organic and fair trade certifications. Detailed documentation and compliance information is available upon request.
				</p>
			</div>
			<div class="bg-white/10 rounded-lg p-6">
				<h3 class="font-serif text-lg font-bold mb-2">What is your shipping timeline?</h3>
				<p class="opacity-90 text-sm">
					Typical shipping timeframe is 30-45 days depending on destination. We can arrange expedited shipping if needed.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 px-4">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="font-serif text-4xl font-bold mb-6 text-primary">Ready to Experience Oboleyan?</h2>
		<p class="text-lg text-foreground/80 mb-8">
			Join the roasters and coffee enthusiasts worldwide who trust Oboleyan for exceptional Ethiopian Guji coffee.
		</p>
		<a
			href="#contact-form"
			class="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
		>
			Start a Conversation
		</a>
	</div>
</section>
