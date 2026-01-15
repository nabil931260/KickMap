<script>
  import { onAuthStateChanged } from 'firebase/auth';
  import { auth } from '../../firebase';

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is logged in:', user);
    } else {
      console.log('User is logged out');
    }
  });
</script>
