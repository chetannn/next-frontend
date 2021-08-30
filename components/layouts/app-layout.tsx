import * as React from 'react'
import { useAuth } from '../../hooks/auth';
import Footer from '../Footer';
import Header from '../Header';

const AppLayout: React.FC<any> = ({ header, children }) => {
    const { user } = useAuth({ value: 'auth' })

    return (
        <div className="min-h-screen bg-gray-100">
             <Header user={user} />
             
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            <main className="h-full">{children}</main>

            <Footer />
        </div>
    );
}
export default AppLayout