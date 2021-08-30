import React from "react"

const Footer : React.FC<any> = () => {
    return (
        <footer className="py-4 px-5 bg-gray-900">
          <div className="flex flex-col items-center justify-between space-y-4 w-full max-w-7xl md:space-y-0 md:flex-row">
            <div className="text-sm text-gray-300">&copy; Learning 2021</div>
            <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <a href="#" className="py-2 px-3 text-sm font-medium text-gray-100 rounded-md transition duration-200 ease-in-out hover:bg-gray-800">Email</a>
                <a href="#" className="py-2 px-3 text-sm font-medium text-gray-100 rounded-md transition duration-200 ease-in-out hover:bg-gray-800">Twitter</a>
                <a href="#" className="py-2 px-3 text-sm font-medium text-gray-100 rounded-md transition duration-200 ease-in-out hover:bg-gray-800">Login</a>
                <a href="#" className="bg-primary hover:bg-purple-400 block rounded-md px-4 py-2 text-white border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none disabled:opacity-25 transition ease-in-out duration-150">Register for free</a>
            </div>
          </div>
      </footer>
    );
}

export default Footer