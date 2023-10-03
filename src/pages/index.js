import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession();

  return (
    <main className={styles.main}>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <div> You have acceess to our pages</div>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </main>

  )
}