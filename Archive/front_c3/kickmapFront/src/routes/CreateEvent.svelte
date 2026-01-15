<!-- src/routes/CreateEvent.svelte -->
<script>
    import { collection, addDoc } from 'firebase/firestore';
    import { db } from '../firebase'; 


    let title = '';
    let time = '';
    let date = '';
    let location = '';
    let description = '';
    let unit = ''; 
  
    async function createEvent() {
        try {
    const docRef = await addDoc(collection(db, 'events'), {
      title, // string
      time,  // string
      date, // format: 'YYYY-MM-DD'
      location, // string
      description, // string
      unit // number
    });
    console.log('Event created with ID:', docRef.id);
    alert('Event created successfully!'); 
  } catch (e) {
    console.error('Error adding event:', e);
    alert('Failed to create event.'); 
  }
    }
  </script>
  
  <style>
    .event-form {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      background: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
    .event-form header {
      margin-bottom: 2rem;
      text-align: center;
    }
    .event-form header h2 {
      font-size: 1.5rem;
      color: #333;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .form-group button {
      width: 100%;
      padding: 1rem;
      background-color: #ff3e00;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
    }
    .form-group button:hover {
      background-color: #e03500;
    }
  </style>
  
  <form on:submit|preventDefault={createEvent} class="event-form">
    <header>
      <h2>Tell us more about your event</h2>
    </header>
    <div class="form-group">
      <label for="title">Name of Event *</label>
      <input type="text" id="title" bind:value={title} required />
    </div>
    <div class="form-group">
      <label for="date">Date *</label>
      <input type="date" id="date" bind:value={date} required />
    </div>
    <div class="form-group">
      <label for="time">Start Time *</label>
      <input type="time" id="time" bind:value={time} required />
    </div>
    <div class="form-group">
      <label for="location">Location *</label>
      <input type="text" id="location" bind:value={location} required />
    </div>
    <div class="form-group">
      <label for="description">Description *</label>
      <textarea id="description" bind:value={description} required></textarea>
    </div>
    <div class="form-group">
      <label for="link">Event Link</label>
      <input type="url" id="link" bind:value={unit} />
    </div>
    <div class="form-group">
      <button type="submit">Submit</button>
    </div>
  </form>
  