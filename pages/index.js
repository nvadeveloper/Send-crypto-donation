import { Toaster } from "react-hot-toast"
import Button from "../components/Button"
import Head from 'next/head'

const Index = () => {
  const name = 'Nikita'
  const linkForName = 'https://github.com/nvadeveloper'
  const coins = [
    {
      name: 'Bitcoin',
      address: '38TG4G7XY61GkCmT1ardsguFFSZv2p8LA7',
      icon: 'btc',
    },
    {
      name: 'Ethereum',
      address: '0xc70c6cdc1edde0dd779725c93e77782af77099fa',
      icon: 'eth',
    },
    {
      name: 'Dogecoin',
      address: '9vDpW79neGgdojoKTEHs2XARdSrfAn2TNU',
      icon: 'doge',
    },
    {
      name: 'Litecoin',
      address: '3QtKdh9aXqqaHJSpKhrJcErPCmiy7RdPSs',
      icon: 'ltc',
    },
    {
      name: 'USDT(TRC20)',
      address: 'TAkigKT3vT8K36M8uGcQqBGRfvHofVzLw6',
      icon: 'usdt',
    },
    {
      name: 'USDC(ERC20)',
      address: '0xc70c6cdc1edde0dd779725c93e77782af77099fa',
      icon: 'usdc',
    },
    {
      name: 'Solana',
      address: 'GXujCtf9rXMo51r6fzw9rxTRjh1VS5DW4VtCSgRckDRm',
      icon: 'sol',
    },
  ]

  return (
    <>
      <Head>
        <title>Send crypto donation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section>
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 dark:border-gray-700">
          <Toaster />
          <h1 className="text-5xl sm:text-6xl font-extrabold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-center pb-10 ">Send crypto donation to <a href={linkForName}>{name}</a></h1>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">

                  <table className="min-w-full border hidden sm:table">
                    <thead className="border-b">
                      <tr>
                        <th scope="col" className="px-6 py-4 border-r">
                          Сryptocurrency
                        </th>
                        <th scope="col" className="px-6 py-4 border-r">
                          Address
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Copy Address
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {coins.map((coin, key) => (
                        <tr className="border-b" key={key}>
                          <td className="px-6 py-4 border-r flex items-center">
                            <img
                              src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/${coin.icon}.svg`}
                              className="h-12 w-12 mr-4 hover:scale-110 hover:rotate-2"
                            />
                            <span>{coin.name}</span>
                          </td>
                          <td className="px-6 py-4 border-r">
                            {coin.address}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <Button address={coin.address} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <table className="min-w-full border sm:hidden">
                    <thead className="border-b">
                      <tr>
                        <th scope="col" className="px-6 py-4 border-r">
                          Сryptocurrency
                        </th>
                        <th scope="col" className="px-6 py-4 border-r">
                          Copy Address
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {coins.map((coin, key) => (
                        <tr className="border-b" key={key}>
                          <td className="px-6 py-4 border-r flex items-center">
                            <img
                              src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/${coin.icon}.svg`}
                              className="h-12 w-12 mr-4 hover:scale-110 hover:rotate-2"
                            />
                            <span>{coin.name}</span>
                          </td>
                          <td className="px-6 py-4 text-center border-r">
                            <Button address={coin.address} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index