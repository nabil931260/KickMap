<!-- src/Login.svelte -->
<script>
    import { auth } from '../firebase';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { signOut } from 'firebase/auth';
  
    let email = '';
    let password = '';
  
    async function login() {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in successfully');
      
      } catch (error) {
        console.error('Login failed:', error);
     
      }
    }

    function logout() {
  signOut(auth).then(() => {
    console.log('User logged out');

  }).catch((error) => {
    console.error('Logout failed:', error);
  });
}

  </script>
  
  <form on:submit|preventDefault={login}>
    <input type="email" bind:value={email} placeholder="Email">
    <input type="password" bind:value={password} placeholder="Password">
    <button type="submit">Login</button>
    <button on:click={logout}>Logout</button>
  </form>
  