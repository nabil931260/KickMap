<!-- src/routes/SearchEvent.svelte -->
<script lang="ts">
  import { collection, query, where, getDocs } from 'firebase/firestore';
  import { db } from '../../firebase'; 

  interface Event {
  id: string;
  date: string;
  description: string;
  image: string; 
  location: string;
  time: string;
  title: string;
  unit: number; 
}

  const schools = ['School A', 'School B', 'School C']; 
  const types = ['Type 1', 'Type 2', 'Type 3']; 
  const locations = ['Location 1', 'Location 2', 'Location 3']; 
  const timeSpans = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
  const categories = ['Category 1', 'Category 2', 'Category 3']; 

  let keyword = '';
  let selectedSchool = '';
  let selectedType = '';
  let selectedLocation = '';
  let selectedTimeSpan = '';
  let selectedCategory = '';
  let searchResults: Event[] = [];
  let searching = false;

  async function searchEvents() {
    searching = true;
    let q = query(collection(db, 'events'));

    if (keyword) {
      q = query(q, where('title', '>=', keyword), where('title', '<=', keyword + '\uf8ff'));
    }

    if (selectedSchool) {
      q = query(q, where('school', '==', selectedSchool));
    }

    if (selectedType) {
      q = query(q, where('type', '==', selectedType));
    }

    if (selectedLocation) {
      q = query(q, where('location', '==', selectedLocation));
    }

    if (selectedTimeSpan) {
      q = query(q, where('timespan', '==', selectedTimeSpan));
    }

    if (selectedCategory) {
      q = query(q, where('category', '==', selectedCategory));
    }

    const querySnapshot = await getDocs(q);
    searchResults = querySnapshot.docs.map((doc) => ({
    ...doc.data() as Event,
    id: 'ICNLMck6nME0misUnb7G'
}));

    searching = false;
  }
</script>

<style>
  .search-container {
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: auto;
    padding: 1em;
  }

  .filter-container {
    display: flex;
    flex-direction: column;
    background: #f3f3f3;
    padding: 1em;
    border-radius: 8px;
    margin-bottom: 1em;
  }

  .filter-container > * {
    margin-bottom: 0.5em;
  }

  .result-container {
    display: flex;
    flex-direction: column;
  }

  .event-item {
    display: flex;
    align-items: center;
    background: white;
    margin-bottom: 1em;
    padding: 1em;
    border-radius: 8px;
  }

  .event-image {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    margin-right: 1em;
    border-radius: 8px;
  }

  .event-content {
    display: flex;
    flex-direction: column;
  }

  .event-title {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5em;
  }

  .event-description {
    font-size: 0.9rem;
    color: #666;
  }

  input, select, button {
    padding: 0.5em;
    margin-bottom: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background: #ff3e00;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:disabled {
    background: #bbb;
  }
</style>

<div class="search-container">
  <div class="filter-container">
    <!-- Keyword Search -->
    <input type="text" bind:value={keyword} placeholder="Keyword search...">
    
    <!-- Filters -->
    <select bind:value={selectedSchool}>
      <option value="">All Schools</option>
      {#each schools as school}
        <option value={school}>{school}</option>
      {/each}
    </select>

    <select bind:value={selectedType}>
      <option value="">All Types</option>
      {#each types as type}
        <option value={type}>{type}</option>
      {/each}
    </select>

    <select bind:value={selectedLocation}>
      <option value="">All Locations</option>
      {#each locations as location}
        <option value={location}>{location}</option>
      {/each}
    </select>

    <select bind:value={selectedTimeSpan}>
      <option value="">All Time Spans</option>
      {#each timeSpans as timeSpan}
        <option value={timeSpan}>{timeSpan}</option>
      {/each}
    </select>

    <select bind:value={selectedCategory}>
      <option value="">All Categories</option>
      {#each categories as category}
        <option value={categories}>{categories}</option>
      {/each}
    </select>


    <!-- Search Button -->
    <button on:click={searchEvents} disabled={searching}>Search</button>
  </div>

  <div class="result-container">
    {#if searching}
      <p>Searching...</p>
    {:else if searchResults.length === 0}
      <p>No results found.</p>
    {:else}
    {#each searchResults as event}
    <div class="event-item">
      <img src={event.image} alt={`Image for ${event.title}`} />
      <div class="event-info">
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <a href={`/events/${event.id}`}>View Details</a>
      </div>
    </div>
  {/each}
    {/if}
  </div>
</div>
