'use client'

import { GeneralTable } from '@/app/components/generalTable'
import { GeneralTableTopBar } from '@/app/components/generalTable/general-table-top-bar'
import Link from 'next/link'

const masterLinks = [
  { name: 'Manufacturer', link: 'manufacturer' },
  { name: 'Device Models', link: 'device-models' },
  { name: 'Task Category', link: 'task-category' },
  { name: 'Device Type', link: 'device-type' },
  { name: 'Total Inventory', link: 'total-inventory' },
  { name: 'Inventory Summary', link: 'inventory-summary' },
  { name: 'Inventory Logs', link: 'inventory-logs' },
  { name: 'Orderables', link: 'orderables' },
  { name: 'Resultables', link: 'resultables' },
  { name: 'Allergy', link: 'allergy' },
  { name: 'Medication', link: 'medication' },
  { name: 'Insurance Company', link: 'insurance company' },
  { name: 'Insurance Plan', link: 'insurance-plan' },
  { name: 'State', link: 'state' },
  { name: 'City', link: 'city' },
  { name: 'Patient Recruitments', link: 'patient-recruitments' },
  { name: 'CPT Codes', link: 'cpt-codes' },
  { name: 'Training Material', link: 'training-material' },
  { name: 'Auto Complete', link: 'auto-complete' },
  { name: 'Designation', link: 'designation' },
]

const MasterSettingsLayout = () => {
  return (
    <article
      style={{ maxHeight: 'calc(100vh - 10vh)' }}
      className='flex h-full bg-tetiary mx-1 my-2'
    >
      <section className='bg-secondary p-2 rounded min-w-[25%] max-w[40%]'>
        <div className='bg-tetiary rounded overflow-y-auto flex-grow max-h-[80vh]'>
          {masterLinks.map((settingsLink, index) => (
            <div
              key={settingsLink.link}
              className={`${
                index !== 0 && index !== masterLinks.length - 1
                  ? 'my-0.5'
                  : 'rounded-t'
              } bg-primary text-white py-2 px-2 shadow-md drop-shadow-md`}
            >
              <Link href={`master-settings/${settingsLink.link}`}>
                {settingsLink.name}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className='bg-secondary w-full ml-2 mr-1 rounded flex-1'>
        <div></div>
      </section>
    </article>
  )
}

export default MasterSettingsLayout
