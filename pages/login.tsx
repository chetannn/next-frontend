import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import { useAuth } from '../hooks/auth'
import AuthValidationErrors from '../components/auth-validation-errors'
import Input from '../components/input'
import Button from '../components/button'
import Label from '../components/label'

const Login: NextPage = () => {

  const { login } = useAuth({ value: 'guest' })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const onLogin = async (e: any) => {
    e.preventDefault()

    login({ setErrors, email, password })

  }

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col sm:justify-center items-center">
        <div className="w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">

          <AuthValidationErrors className="mb-4" errors={errors} />

          <form onSubmit={onLogin}>
            <div>
               <Label htmlFor="email">Email</Label>
              <Input type="email" className="px-2 h-10 w-full mt-1 block" id="email" value={email} onChange={(e: any) => setEmail(e.target.value)} required />
            </div>

            <div className="mt-4">
              <Label htmlFor="password">Password</Label>
              <Input className="px-2 h-10 w-full mt-1 block" id="password" onChange={(e: any) => setPassword(e.target.value)} value={password} type="password" />
            </div>

            <div className="flex items-center justify-end mt-4">
              <Link href="/forgot-password">
                 <a className="underline text-sm text-purple-500 hover:text-purple-400">Forgot your password?</a> 
              </Link>

              <Button className="block ml-3">Log in</Button>
            </div>

          </form>

        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Login
