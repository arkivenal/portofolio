import Link from "next/link"
import { HN } from "../utils/fonts"

// Heavily unoptimized. Will turn into a component in a future fix.
const ProjectList = () => {
  return(
    <>
      <div className="flex flex-grow flex-col min-h-screen divide-y divide-dashed divide-gray-900 w-full pt-20">
        <div className="flex flex-wrap justify-between items-start p-2">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h3 className={`text-2xl md:text-3xl font-semibold ${HN.className} text-left`}>
              2025 PROJECTS
            </h3>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-end justify-start">
            <Link href="/projects/dclassics" passHref>
              <h3 className="text-xl md:text-2xl text-right mb-2 hover:text-blue-600 transition">
                D'CLASSICS
              </h3>
            </Link>
            <div className="flex flex-wrap justify-end gap-2 mb-4">
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                Java
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                Android Studio
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                Mobile App Development
              </span>
            </div>

            <Link href="/projects/eatscapade" passHref>
              <h3 className="text-xl md:text-2xl text-right mb-2 hover:text-blue-600 transition">
                EATSCAPADE
              </h3>
            </Link>
            <div className="flex flex-wrap justify-end gap-2 mb-4">
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                HTML
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                CSS
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                JavaScript
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                Web Development
              </span>
            </div>

            <Link href="/projects/ecotri" passHref>
              <h3 className="text-xl md:text-2xl text-right mb-2 hover:text-blue-600 transition">
                ECOTRI
              </h3>
            </Link>
            <div className="flex flex-wrap justify-end gap-2 mb-4">
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                Figma
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                UI/UX Design
              </span>
            </div>

            <Link href="/projects/enddate" passHref>
              <h3 className="text-xl md:text-2xl text-right mb-2 hover:text-blue-600 transition">
                ENDDATE
              </h3>
            </Link>
            <div className="flex flex-wrap justify-end gap-2 mb-4">
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                Figma
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900  transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                Axure RP
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900  transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                UI/UX Design
              </span>
            </div>

            <Link href="/projects/fridgifi" passHref>
              <h3 className="text-xl md:text-2xl text-right mb-2 hover:text-blue-600 transition">
                FRIDGI-FI
              </h3>
            </Link>
            <div className="flex flex-wrap justify-end gap-2 mb-4">
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900  transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:text-white">
                Flutter
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900  transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:text-white">
                Dart
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900  transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:text-white">
                AI/ML Models
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900  transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:text-white">
                Android Studio
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:text-white">
                Mobile App Development
              </span>
            </div>

          </div>
        </div>

        <div className="flex flex-wrap justify-between items-start p-5">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h3 className={`text-2xl md:text-3xl text-left font-semibold ${HN.className}`}>
              2024 PROJECTS
            </h3>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-end justify-start">
            <Link href="/projects/bbetter" passHref>
              <h3 className="text-xl md:text-2xl text-right mb-2 hover:text-blue-600 transition">
                BBETTER
              </h3>
            </Link>
            <div className="flex flex-wrap justify-end gap-2 mb-4">
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                Figma
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                UI/UX Design
              </span>
            </div>

            <Link href="/projects/trackeling" passHref>
              <h3 className="text-xl md:text-2xl text-right mb-2 hover:text-blue-600 transition">
                TRACKELING
              </h3>
            </Link>
            <div className="flex flex-wrap justify-end gap-2 mb-4">
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                HTML
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                CSS
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                JavaScript
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                Figma
              </span>
              <span className="rounded-4xl text-sm px-3 py-2 border text-zinc-900 border-zinc-900 transition-colors delay-80 duration-200 bg-zinc-100/50 hover:bg-gray-800/90 hover:border-zinc-900 hover:text-white">
                UI/UX Design
              </span>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectList;