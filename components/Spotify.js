import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, WifiIcon } from '@heroicons/react/outline'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Spotify({ navigation }) {

  const spotifyRefreshInterval = 60 * 1000; //60,000ms = 60s = 1min
  const fetcher = (url) => fetch(url).then((r) => r.json());
  // TODO: convert SWR use to useEffect
  // cannot assign any variable name to useSWR, only data, error are valid
  const spotifyData = useSWR('/api/spotify', fetcher, { refreshInterval: spotifyRefreshInterval }).data;
  console.log(spotifyData)
  return (
    <div>
      {/* Spotify dropdown */}
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button
            className="bg-transparent flex text-white
                              font-semibold
                              rounded-full
                              pl-3
                              pr-3
                              p-1
                              hover:bg-black
                              ">
            {
              spotifyData
                ?.isPlaying
                ? (<span className='hidden lg:block h-8 whitespace-pre'>{spotifyData.title} </span>)
                // : (<span className='hidden lg:block h-8 whitespace-pre'>Not Playing</span>)
                : (<></>)
            }
            <svg xmlns="http://www.w3.org/2000/svg" className='h-8 p-1' fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <div>
                  {
                    spotifyData
                      ?.isPlaying
                      ? (
                        <a
                          target='_blank' rel="noopener noreferrer"
                          href={spotifyData.songUrl}
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          <img src={spotifyData.albumImageUrl} alt={spotifyData.album} />
                          <p className='font-bold'>{spotifyData.title}</p>
                          <p>({spotifyData.artist})</p>
                        </a>
                      )
                      : (
                        <span className={'block px-4 py-2 text-sm text-gray-700'}>Probably Sleeping.</span>
                      )
                  }

                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  target='_blank' rel="noopener noreferrer"
                  href='https://open.spotify.com/user/shivampoddar1997'
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  Open Spotify profile ↗️
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
