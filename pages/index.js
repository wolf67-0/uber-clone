import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()
  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user){
        setUser({
          name: user.displayName,
          photoUrL: user.photoURL
        })
      }
      else {
        setUser(null)
        router.push('/login')
      }
    })

  },[])
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Fuber%2Flogo-uber-4096.png&f=1&nofb=1" />
          <Profile>
            <Name>
              { user && user.name }
            </Name>
            <UserImage 
              src={ user && user.photoUrL}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            2-Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>

        </ActionButtons>
        <InputButton>
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}
const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4

`
const Header = tw.div`
  flex justify-between items-center
`
const UberLogo = tw.img`
  h-28 rounded-lg transform hover:scale-105 transition text-xl
`
const Profile = tw.div`
  flex items-center
`
const Name = tw.div`
  mr-4 w-20 text-sm
`
const UserImage = tw.img`
  h-12 w-12 rounded-full border-black-200 p-px cursor-pointer
`
const ActionButtons = tw.div`
  flex
`
const ActionButton = tw.div`
  flex bg-gray-500 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-95 transition text-xl
`
const ActionButtonImage = tw.img`
  h-3/5 
`
const InputButton = tw.div`
  h-20 bg-gray-500 text-2xl p-4 flex items-center mt-8  rounded-lg transform hover:scale-95 transition text-l
`