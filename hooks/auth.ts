import http from "../utils/axios"
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


interface Middleware {
    value: string
}

interface LoginType {
    setErrors: Function,
    email: string,
    password: string
}

interface User {
    name: string,
    email: string
}


export const useAuth = ({ value }: Middleware) => {

    const router = useRouter()

    const { data: user, error, mutate } = useSWR('/api/user', () =>

        http
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status != 409) throw error

                router.push('/verify-email')
            }),

    )

    const csrf = () => http.get('/sanctum/csrf-cookie')


    const login = async ({ setErrors, ...props } : LoginType) => {
        await csrf()

        http
            .post('/login', props)
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors(Object.values(error.response.data.errors))
            })
            .then(() => mutate())
    }

    const logout = () => {
        http.post('/logout').then(() => {
            mutate()

            window.location.pathname = '/login'
        })
    }

    useEffect(() => {
        if (value == 'guest' && user) router.push('/dashboard')
        if (value == 'auth' && error) logout()
    }, [user, error])


    return {
        login,
        user,
        logout
    }

}