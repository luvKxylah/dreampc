import type { NextPage } from 'next'
import Head from 'next/head'
import { SiGithub as GitHubIcon } from 'react-icons/si'
import { HiOutlineLocationMarker as LocationMarker } from 'react-icons/hi'
import { Data as lanyardData, useLanyard } from 'use-lanyard'

function currentAge(): number {
  const birthday = new Date('28 November 2006')
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

interface Props {
  lanyard: lanyardData
}

export default function Home(props: Props) {
  const { data: lanyard } = useLanyard('971862569792987147', {
    fallbackData: props.lanyard,
  })

  return (
    <>
      <Head>
        <title>luvkxylah.me</title>
      </Head>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/luvkxylah"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="h-7 w-7" />
            <span className="sr-only">GitHub Profile</span>
          </a>
          {lanyard && (
            <p className="inline-flex items-center space-x-2">
              <a
                target="_blank"
                href={`https://www.google.com/maps/search/${lanyard.kv.location}`}
                rel="noreferrer"
                className="hover:bg flex items-center rounded-full bg-gray-200 px-2 pr-3 text-neutral-600 no-underline transition-colors hover:bg-gray-300"
              >
                <span>
                  <LocationMarker className="inline" />
                  &nbsp;
                </span>

                <span className="-mb-0.5">{lanyard.kv.location}</span>
              </a>
            </p>
          )}
        </div>

        <h1 className="text-3xl font-bold sm:text-4xl md:text-6xl">
          Hii, I&apos;m <span className="text-indigo-500">Kayla</span> 👋
        </h1>

        <p className="opacity-80">
          I'm a {currentAge()} year old software engineer from Portugal.
        </p>
      </div>
    </>
  )
}
