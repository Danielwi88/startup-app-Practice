// Navbar.tsx
import { auth } from "@/auth"
import { signIn, signOut } from "@/auth"
import Image from "next/image"
import Link from "next/link"

export async function handleSignIn() {
  'use server'
  await signIn('github')
}

export async function handleSignOut() {
  'use server'
  await signOut({
    redirectTo: "/", 
  })
}

const Navbar = async () => {
  const session = await auth()

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans text-black'>
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src='/icons.svg' alt='logo' width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form action={handleSignOut}>
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session.user.id ?? ''}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form action={handleSignIn}>
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
