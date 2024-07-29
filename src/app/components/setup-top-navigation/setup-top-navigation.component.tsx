import React from 'react'

interface IIconProps {
  fontSize: 'small' | 'medium' | 'large'
}

interface IMenuItem {
  icon: React.FC<IIconProps>
  title: string
}

const HoverMenu = ({ menuList }: { menuList: IMenuItem[] }) => {
  return (
    <div className='absolute top-[12px] left-[-6px] z-10 bg-[#353A48] text-white text-sm w-56 rounded m-0 drop-shadow-2xl '>
      {menuList.map((listItem: IMenuItem) => (
        <div
          key={listItem.title}
          className='flex items-center py-3 px-3 m-0 my-0.5 hover:bg-[#2B303E] w-full'
        >
          <listItem.icon fontSize='small' />
          <span className='ml-4'>{listItem.title}</span>
        </div>
      ))}
    </div>
  )
}

export default HoverMenu
