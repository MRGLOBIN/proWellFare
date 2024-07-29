import Link from 'next/link'
import React from 'react'

interface IIconProps {
  fontSize: 'small' | 'medium' | 'large'
}

interface IMenuItem {
  title: string
  link: string
  icon: React.FC<IIconProps>
}

const HoverMenu = ({
  menuList,
  selected,
  setSelected,
}: {
  menuList: IMenuItem[]
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}) => {
  const handleSelected = (title: string) => {
    setSelected(title)
  }

  return (
    <div className='absolute top-[8px] left-[-6px] z-10 bg-[#353A48] text-white text-sm w-56 rounded m-0 drop-shadow-2xl cursor-pointer'>
      {menuList.map((listItem: IMenuItem) => (
        <Link
          key={listItem.title}
          href={listItem.link}
          onClick={() => handleSelected(listItem.title)}
          className={`flex items-center py-3 px-3 m-0 my-0.5  w-full ${
            selected === listItem.title ? 'bg-[#3496CE]' : 'hover:bg-[#2B303E]'
          }`}
        >
          <listItem.icon fontSize='small' />
          <span className='ml-4'>{listItem.title}</span>
        </Link>
      ))}
    </div>
  )
}

export default HoverMenu
