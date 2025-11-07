<script lang='ts'>


	import  { superForm } from 'sveltekit-superforms';
	  import { zod4Client } from 'sveltekit-superforms/adapters';
	    let { data } = $props();

    import { Loader } from '@lucide/svelte';
  import { schema } from './schema.js';

	const { form, errors, enhance, delayed, message } = superForm(
		data.form,
		{


			validators: zod4Client(schema)

		}
	);



</script>

<div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
	<div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
		<img src="/logo.webp" alt="Logo" class="w-20 h-20 object-contain mx-auto bg-primary rounded-full" />

		<h1 class="mt-4 text-center text-2xl font-semibold text-gray-800">Welcome back</h1>
		<p class="mt-1 text-center text-sm text-gray-500">Log in to your account </p>

		<form method="post" action="?/login" use:enhance class="mt-6 space-y-4">
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
				<input
					id="email"
					name="email"
					autocomplete="email"
					bind:value={$form.email}
					required
class="w-full px-4 py-3 bg-background border border-border 
			rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent aria-invalid:focus:ring-red-500 "				/>
				{#if $errors?.email}
					<p class="mt-1 text-sm text-red-600">{$errors.email}</p>
				{/if}
			</div>

			<div>
				<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
				<input
					id="password"
					type="password"
					name="password"
					bind:value={$form.password}
					autocomplete="current-password"
					required
class="w-full px-4 py-3 bg-background border border-border 
			rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent aria-invalid:focus:ring-red-500 "				/>
				{#if $errors?.password}
					<p class="mt-1 text-sm text-red-600">{$errors.password}</p>
				{/if}
			</div>

			{#if $message}
				<p class="text-center text-sm text-red-600">{$message}</p>
			{/if}

			<div class="flex flex-col sm:flex-row gap-3 mt-2">
				<button
				type="submit"
				disabled={$delayed}
				class="w-full {$delayed ? "animate-pulse": ''} bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
			>
				{#if $delayed}
					<Loader class="animate-spin" />
					Logging In...
				{:else}
					Login In
				{/if}
			</button>
			   

				<!-- <button
					type="submit"
					formaction="?/register"
					class="w-full sm:flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-200 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition"
				>
					Register
				</button> -->
			</div>

			
		</form>

		<!-- <form action="?/register" method="post">
			 <input type="text" name="username"  />
			 <input type="password" name="password">
			<button
					type="submit"
					formaction="?/register"
					class="w-full sm:flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-200 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition"
				>
					Register
				</button>
           
			 
		</form> -->
	</div>
</div>
