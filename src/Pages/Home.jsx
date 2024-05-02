import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import '../Styles/Home.css';

const Home = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const auth = getAuth();
    const db = getFirestore();

    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const userDoc = await getDoc(doc(db, 'Users', authUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser({
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
          });
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Your Messaging App</h1>
      {user ? (
        <div className="user-info">
          <p>Welcome, {user.firstName}!</p>
          <p>Email: {user.email}</p>
          <p>LastName: {user.lastName}</p>
        </div>
      ) : (
        <p>Please log in to access your messages.</p>
      )}
    </div>
  );
};


export default Home;