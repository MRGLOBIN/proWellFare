import Image from 'next/image'

const FlagCellRender: React.FC<{ icon: string }> = ({ icon }) => (
  <Image src={icon} width={20} height={20} alt='data flag' />
)

export default FlagCellRender
