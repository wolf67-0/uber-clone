import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'
import {useTheme} from 'next-themes'


const Login = () => {
  const router = useRouter()
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        router.push('/')
      }
    })
  }, [])

  return (
    <Wrapper>
        <Button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          
        </Button>

        
        <UberLogo src='https://i.ibb.co/ZMhy8ws/uber-logo.png' />
        <Title>Log in to access your account</Title>
        <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
        <SignInButton onClick={() => signInWithPopup(auth, provider)}>
            Sign in with Google
        </SignInButton>
    </Wrapper>
  )
}

export default Login

const Button = tw.button` 
order-2 md:order-3 top-4 right-4
`

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-500 p-4 
`
const SignInButton = tw.button`
bg-gray-400 text-black-500 text-center py-4 mt-8 self-center w-full 
`

const UberLogo = tw.img`
h-20 w-auto object-contain self-start 
`

const Title = tw.div`
text-6xl pt-4 text-black-500 text-center
`

const HeadImage = tw.img`
object-contain w-full overflow-hidden
`