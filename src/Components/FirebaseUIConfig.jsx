import React, { useEffect, useState, useRef } from 'react';
import firebase from 'firebase/compat/app'; //v9
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'; // Import the CSS for FirebaseUI
import { auth } from '../firebase';



const uiConfig = {
  signInSuccessUrl: '/', // This URL is called after a successful sign-in.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
};

function FirebaseUI() {
  const uiContainerRef = useRef(null);

  useEffect(() => {
    const uiContainer = uiContainerRef.current;
    if (uiContainer) {
      const existingUI = firebaseui.auth.AuthUI.getInstance();
      if (!existingUI) {
        const ui = new firebaseui.auth.AuthUI(auth);
        ui.start(uiContainer, uiConfig);
      } else {
        existingUI.reset();
        existingUI.start(uiContainer, uiConfig);
      }
    }

    return () => {
      const ui = firebaseui.auth.AuthUI.getInstance();
      if (ui) {
        ui.reset();
      }
    };
  }, []);

  return <div ref={uiContainerRef}></div>;
}

export default FirebaseUI;