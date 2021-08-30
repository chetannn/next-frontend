import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import AppLayout from '../components/layouts/app-layout'
import { Tab } from '@headlessui/react'


const Dashboard: NextPage = () => {

    return (
        <AppLayout header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        }>

                <div className="w-full flex-1 bg-gray-900 border-b">
                    <div className="h-screen overflow-hidden space-y-4 flex flex-col xl:flex-row max-w-11xl mx-auto">
                        <div className="relative flex-1 bg-gray-900">
                            <div className="aspect-w-full aspect-h-full">
                                <iframe src="https://player.vimeo.com/video/192718209" width="900" height="700"
                                    allow="autoplay; fullscreen; picture-in-picture" allowFullScreen={true} data-ready="true"></iframe>
                            </div>
                        </div>

                        <div className="xl:w-96 flex flex-col bg-white">
                            <div className="p-4 bg-gray-900">
                                <h1 className="mb-6 text-xl font-bold text-center text-white">InertiaJS & Laravel misc</h1>
                                <h3 className="font-semibold tracking-wide text-white">Determining active routes</h3>
                            </div>

                            <div className="flex relative flex-col flex-1">
                                <ul className="w-full h-full overflow-y-scroll absolute">
                                    <li className="text-white bg-primary">
                                        <a className="font-medium p-4 flex space-x-4 items-center">
                                            <span className="flex-shrink-0 rounded-full inline-flex ring-2  text-white ring-white  font-semibold justify-center items-center iself-start w-9 h-9 text-sm font-normal leading-relaxed text-center">
                                                1
                                            </span>

                                            <div className="flex flex-1 flex-col space-y-0.5">
                                                <div>Determining active routes</div>
                                                <div className="text-xs text-white">#1 - 05:34</div>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="hover:bg-gray-100">
                                        <a className="font-medium p-4 flex space-x-4 items-center">
                                            <span className="flex-shrink-0 rounded-full inline-flex ring-2 text-gray-600 ring-gray-200  font-semibold justify-center items-center iself-start w-9 h-9 text-sm font-normal leading-relaxed text-center">
                                                2
                                            </span>

                                            <div className="flex flex-1 flex-col space-y-0.5">
                                                <div>Create a searchable list</div>
                                                <div className="text-xs text-gray-500">#1 - 05:34</div>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="hover:bg-gray-100">
                                        <a className="font-medium p-4 flex space-x-4 items-center">
                                            <span className="flex-shrink-0 rounded-full inline-flex ring-2 text-gray-600 ring-gray-200  font-semibold justify-center items-center iself-start w-9 h-9 text-sm font-normal leading-relaxed text-center">
                                                3
                                            </span>

                                            <div className="flex flex-1 flex-col space-y-0.5">
                                                <div>Handling regular forms</div>
                                                <div className="text-xs text-gray-500">#1 - 05:34</div>
                                            </div>
                                        </a>
                                    </li>


                                    <li className="hover:bg-gray-100">
                                        <a className="font-medium p-4 flex space-x-4 items-center">
                                            <span className="flex-shrink-0 rounded-full inline-flex ring-2 text-gray-600 ring-gray-200  font-semibold justify-center items-center iself-start w-9 h-9 text-sm font-normal leading-relaxed text-center">
                                                4
                                            </span>

                                            <div className="flex flex-1 flex-col space-y-0.5">
                                                <div>Toast notifications</div>
                                                <div className="text-xs text-gray-500">#1 - 05:34</div>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="hover:bg-gray-100">
                                        <a className="font-medium p-4 flex space-x-4 items-center">
                                            <span className="flex-shrink-0 rounded-full inline-flex ring-2 text-gray-600 ring-gray-200  font-semibold justify-center items-center iself-start w-9 h-9 text-sm font-normal leading-relaxed text-center">
                                                5
                                            </span>

                                            <div className="flex flex-1 flex-col space-y-0.5">
                                                <div>Building a slide-over dialog component with HeadlessUI and VueJS</div>
                                                <div className="text-xs text-gray-500">#1 - 05:34</div>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            <div className="py-10 mx-auto w-full bg-white">
                <div className="mx-auto mb-6 max-w-7xl">
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Building a slide-over dialog component with HeadlessUI and VueJS</h1>
                </div>

                <div className="flex mx-auto space-x-4 align-start max-w-7xl mx-auto border-b border-gray-200">
                <Tab.Group>
                <Tab.List className="flex px-1 space-x-1">
                <Tab className={({ selected }) =>
            selected ? 'border-b border-primary' : 'bg-white text-black'
          }>Code</Tab>
        <Tab>Discussion</Tab>
                    </Tab.List>
                    {/* <button>Code</button>
                    <button>Discussion</button> */}
                    </Tab.Group>
                </div>
            </div>

        </AppLayout>
    );
}


export default Dashboard