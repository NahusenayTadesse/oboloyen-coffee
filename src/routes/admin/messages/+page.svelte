<script>
	import { enhance } from "$app/forms";
	import { CircleAlert, CircleCheck, Eye, LoaderCircle, Reply, Trash } from "@lucide/svelte";
	import { fly, fade } from "svelte/transition";

  let { data, form } = $props();

  let searchQuery = $state('');
  let allQuotes    = $derived(data.messages);

  // reactive filtered list
  let filteredQuotes = $derived(
    searchQuery.trim()
      ? allQuotes.filter(q => {
          const term = searchQuery.toLowerCase();
          return (
            (q.id        && q.id.toString().toLowerCase().includes(term)) ||
            (q.name && q.name.toLowerCase().includes(term)) ||
            (q.email     && q.email.toLowerCase().includes(term)) ||
            (q.phone     && q.phone.toLowerCase().includes(term))  ||
            (q.company     && q.company.toLowerCase().includes(term)) ||
            (q.phone     && q.subject.toLowerCase().includes(term)) ||
            (q.phone     && q.message.toLowerCase().includes(term)) 
          );
        })
      : allQuotes
  );

  


 let open = $state(false);

</script>

<input
  type="search"
  placeholder="Search Quotes"
  class="fixed top-24 right-4 px-4 py-2 w-64 text-gray-800 bg-white rounded-md shadow-lg
         focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75
         transition-shadow duration-300"
  bind:value={searchQuery}
/>

{#await data.messages}

 <div class="w-full h-full flex flex-col justify-center items-center">
<LoaderCircle class="animate-spin w-32 h-32" />
</div>
 
{:then allquotes} 
{#if filteredQuotes?.length === 0}
 
 <h3>No Quotes Found</h3>
{/if}
  <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center justify-self-center   items-center overflow-y-auto">
  {#each filteredQuotes as quote}
    <div class="flex flex-col p-6 rounded-lg shadow-sm shadow-primary/50 border border-primary/20  gap-2 bg-light-blue-1" transition:fade>
      <p>Name: {quote.name}</p>
      <a href="mailto:{quote.email}">Email: {quote.email}</a>
      <a href="tel:{quote.phone}">Phone: {quote.phone}</a>
      <p>Company: {quote.company}</p>
      <p>Subject: {quote.subject}</p>
      <p>Message: {quote.message}</p>
     
      <p>Submission Date: {new Date(quote.createdAt).toLocaleDateString()}</p>
      <!-- <a href="/dashboard/messages/{quote.id}" 
      class="bg-primary text-white w-1/2 text-center rounded-2xl p-2 flex flex-row gap-2 hover:scale-110 transition-all ease-in-out duration-300">
<Eye />      View Detail</a> -->
      
      
 
 
   
    </div>
    
  {/each}
</div>
{/await}





