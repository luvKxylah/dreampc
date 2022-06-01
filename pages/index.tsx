import Head from 'next/head'
import { SiGithub as GitHubIcon } from 'react-icons/si'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducer } from 'react'

interface CardProps {
  name: string
  description: string
  url: string
  type: string
}

const components: CardProps[] = [
  {
    name: 'AMD Ryzen 5 5000',
    description:
      'Sinceramente prefiro AMD a Intel e a Ryzen é a melhor opção para a minha CPU.',
    url: 'https://www.newegg.com/amd-ryzen-5-5500-ryzen-5-5000-series/p/N82E16819113737?Item=N82E16819113737&nm_mc=AFC-RAN-COM&cm_mmc=AFC-RAN-COM&utm_medium=affiliates&utm_source=afc-PCPartPicker&AFFID=2558510&AFFNAME=PCPartPicker&ACRID=1&ASID=https%3a%2f%2fpcpartpicker.com%2f&ranMID=44583&ranEAID=2558510&ranSiteID=8BacdVP0GFs-ziCKvhkP2vH58vt7Fuw.NQ',
    type: 'CPU',
  },
  {
    name: 'Gigabyte GeForce RTX 3080 Ti',
    description:
      'GeForce RTX porque tanto para gaming como para aplicações mais pesadas é bastante rápida.',
    url: 'https://www.amazon.es/dp/B095X51RHY?psc=1&th=1&linkCode=gs2&tag=pcp02-21',
    type: 'GPU',
  },
  {
    name: 'AMD Stock CPU Cooler',
    description:
      'Cooler de Stock da AMD (CPU Cooler que vem com o processador) para porque é bom o suficiente.',
    url: '',
    type: 'CPU Cooler',
  },
  {
    name: 'NZXT N7 B550',
    description:
      'Eu gosto bastante dos produtos da NZXT porque são muito bons, não precisam de muito esforço para serem montados, têm portas USB-C e têm a aplicação NZXT CAM.',
    url: 'https://nzxt.com/product/n7-b550',
    type: 'Motherboard',
  },
  {
    name: 'Corsair Vengeance RGB Pro',
    description:
      'Nunca tive má experiências com as memórias RAM da Corsair, são muito rápidas e têm muito poder de gerenciamento.',
    url: 'https://www.corsair.com/us/en/Categories/Products/Memory/Vengeance-PRO-RGB-Black/p/CMW16GX4M2C3200C16?utm_source=PCPartPicker_79301&utm_medium=Affiliate&utm_campaign=497986_CORSAIR%20US%20Product%20Catalog%20Ad&utm_content=Corsair&clickid=W3SwFOX3bxyIRukTHlSCwSkLUkDxd-TpMxZi1s0&utm_coupon=Content&irgwc=1',
    type: 'RAM',
  },
  {
    name: 'Gigabyte AORUS 1TB M.2',
    description:
      'Não tenho preferência na marca mas tenho preferência em M.2 poque tem melhor desempenho',
    url: 'https://www.amazon.es/dp/B08FCY3BM2?psc=1&th=1&linkCode=gs2&tag=pcp02-21',
    type: 'SSD',
  },
  {
    name: 'NZXT H710i',
    description:
      'Eu gosto bastante dos produtos da NZXT porque são muito bons, não precisam de muito esforço para serem montados, têm portas USB-C, têm a aplicação NZXT CAM e esta caixa em especifíca é a que mais gosto.',
    url: 'https://nzxt.com/product/h710i',
    type: 'Caixa',
  },
  {
    name: 'NZXT C 750W Gold',
    description:
      'Eu gosto bastante dos produtos da NZXT porque são muito bons e não precisam de muito esforço para serem montados.',
    url: 'https://www.amazon.es/s?k=NZXT+C750+-+NP-C750M+-+750+Watt+PSU+-+80+Gold+Certified+-+Hybrid+Silent+Fan+Control+-+Fluid+Dynamic+Bearings+-+Modular+Design+-+Sleeved+Cables+-+ATX+Gaming+Power+Supply+-+2020&linkCode=gs3&tag=pcp02-21',
    type: 'Fonte',
  },
  {
    name: 'SteelSeries Apex Pro TKL',
    description:
      'Bom tanto para jogar como para programar, tem RGBs, não tem o teclado número (tal como eu gosto) e tem repouso para os pulsos.',
    url: 'https://www.adorama.com/ss64734.html?sterm=2UMzVeX3fxyIUwtQopym208zUkDxf2XNMxZi1s0&utm_source=rflaid912925',
    type: 'Keyboard',
  },
  {
    name: 'Razer DeathAdder V2',
    description:
      'Sempre usei os ratos da Razer e nunca tive nenhuma má experiência.',
    url: 'https://www.amazon.es/s?k=Razer+DeathAdder+V2+Gaming+Mouse%3A+20K+DPI+Optical+Sensor+-+Fastest+Gaming+Mouse+Switch+-+Chroma+RGB+Lighting+-+8+Programmable+Buttons+-+Rubberized+Side+Grips+-+Classic+Black&linkCode=gs3&tag=pcp02-21',
    type: 'Mouse',
  },
  {
    name: 'AOC 24G2',
    description: "23.8'' 1920x1080 com 144Hz, perfeito para jogar e uso diário",
    url: 'https://www.amazon.es/s?k=AOC+24G2+24%22+Frameless+Gaming+IPS+Monitor%2C+FHD+1080P%2C+1ms+144Hz%2C+Freesync%2C+HDMI%2FDP%2FVGA%2C+Height+Adjustable%2C+3-Year+Zero+Dead+Pixel+Guarantee%2CBlack%2FRed&linkCode=gs3&tag=pcp02-21',
    type: 'Monitor',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>dream pc</title>
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
        </div>

        <h1 className="text-3xl font-bold sm:text-4xl md:text-6xl">
          PC de sonhos
        </h1>

        <div className="space-y-4">
          <div className="grid auto-cols-max grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3">
            {components.map((component) => (
              <Card
                name={component.name}
                description={component.description}
                url={component.url}
                type={component.type}
              />
            ))}
          </div>
        </div>
        <h1 className="text-l text-blue-400 sm:text-2xl md:text-4xl">
          Preço final: <span className="text-gray-600">$3073.42</span>
        </h1>
      </div>
    </>
  )
}

function Card({ name, description, url, type }: CardProps) {
  const [isOpen, toggle] = useReducer((x) => !x, false)
  return (
    <motion.div
      animate={{ height: isOpen ? 'auto' : '54px' }}
      className="relative flex flex-col overflow-hidden rounded-md border-white/10 bg-gradient-to-tr from-blue-100 to-blue-700/5 text-blue-900/80 no-underline md:rounded-lg"
    >
      <button
        onClick={toggle}
        className="flex cursor-pointer select-none items-center space-x-2 border-b border-white/10 py-4 px-5 text-lg font-bold focus:outline-none"
      >
        <div className="flex flex-1 items-center space-x-2 text-left">
          <span>{name}</span>
        </div>
        <div>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            className="rounded-full bg-white/0 p-1 hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex h-full"
          >
            <div className="flex flex-col space-y-4 py-4 px-5">
              <p className="flex-1">{description}</p>
              <p className="flex-1 text-indigo-700">{type}</p>

              <div>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex select-none items-center space-x-2 rounded-full bg-blue-700 py-2 px-6 text-white no-underline transition-transform duration-500 hover:scale-95"
                >
                  <span>Ver componente</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
