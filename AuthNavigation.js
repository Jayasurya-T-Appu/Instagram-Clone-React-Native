import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './Navigation'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './firebaseConfig';

export default function AuthNavigation() {
    const [currentUser, setCurrentUser] = useState('')
    useEffect(()=> {
        handleCurrentUser()

        return handleCurrentUser()
    },[])


    const handleCurrentUser  =  () => {
        onAuthStateChanged(auth,  (user) => {
            if (user) {
                setCurrentUser(user)
            }
            else {
                setCurrentUser('')
            }
        })
    }
  return (
    <>{currentUser ? <SignedInStack/> : <SignedOutStack/>}</>
  )
}