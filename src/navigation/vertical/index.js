import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://github.com/mdlog/mdlogchain/blob/master/public/2e7ffc43ac9141fdb8d9400000fb8b35.png',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://ping.pub',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Testnet Explorer',
      href: 'http://testnet.ping.pub',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/mdlog/mdlogchain',
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Discord',
    href: 'https://discord.gg/5WScYn2r',
    icon: 'EyeIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/MDNodes',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Telegram',
    href: 'https://t.me/mdlog',
    icon: 'SendIcon',
  })

  return chainMenus
}

export default processMenu()
