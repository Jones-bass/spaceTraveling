import imgLogo from '../../../public/logo.svg'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="mx-auto flex h-28 max-w-[720px] items-center">
      <Image src={imgLogo} alt={'logo spacetraveling'} />
    </header>
  )
}
