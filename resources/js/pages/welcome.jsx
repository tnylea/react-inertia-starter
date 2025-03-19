import { Head } from '@inertiajs/react'
import { useState } from 'react'
import reactLogo from '../../../public/react.svg'
import laravelLogo from '../../../public/laravel.svg'
import inertiaLogo from '../../../public/inertia.svg'

function Welcome() {
    const [count, setCount] = useState(0)
  
    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col space-y-10 lg:p-0 p-10 items-center justify-center text-center">
                <div className="flex items-center space-x-10">
                <a href="https://laravel.com" target="_blank" className="w-32 hover:scale-[1.02] ease-out duration-300 h-auto">
                    <img src={laravelLogo} className="w-full h-full" alt="Laravel logo" />
                </a>
                <a href="https://inertiajs.com" target="_blank" className="w-32 hover:scale-[1.02] ease-out duration-300 h-auto">
                    <img src={inertiaLogo} className="w-full h-full" alt="Inertia logo" />
                </a>
                <a href="https://react.dev" target="_blank" className="w-32 hover:scale-[1.02] ease-out duration-300 h-auto">
                    <img src={reactLogo} className="w-full h-full logo" alt="React logo" />
                </a>
                </div>
                <h1 className="font-bold text-3xl">Laravel + Inertia + React</h1>
                <div className="mt-6">
                <button 
                    className="bg-gray-100 border hover:border-blue-400 border-transparent ring-2 ring-transparent focus:ring-blue-700 rounded-lg px-4 py-2 cursor-pointer"
                    onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p className="mt-5">
                    Edit <code className="text-gray-500 font-mono px-2 text-sm">resources/js/pages/welcome.jsx</code> and save to test HMR
                </p>
                </div>
                <p className="text-xs">
                Click on the Laravel, Inertia, and React logos to learn more
                </p>
            </div>
        </>
    )
  }
  
  export default Welcome
  