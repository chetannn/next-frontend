import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import AuthValidationErrors from '../components/auth-validation-errors'
import Input from '../components/input'
import Button from '../components/button'
import Label from '../components/label'

const ForgotPassword: NextPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const onLogin = async (e: any) => {
        e.preventDefault()


    }

    return (
        <div>
            <Head>
                <title>Forgot Password</title>
                <meta name="description" content="Login" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen flex flex-col sm:justify-center items-center">
                <div className="w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">

                <div className="mt-3 mb-4 text-sm text-gray-600">
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>

                    <AuthValidationErrors className="mb-4" errors={errors} />

                    <form onSubmit={onLogin}>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email"
                                className="px-2 h-10 w-full mt-1 block"
                                id="email" value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                                required
                                autoFocus />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button className="block ml-3">Email Password Reset Link</Button>
                        </div>

                    </form>

                </div>
            </div>


            <Footer />
        </div>
    )
}

export default ForgotPassword
