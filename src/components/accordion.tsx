import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export type AccordionProps = {
  sections: {
    title: string
    content: string
  }[]
}
export default function Accordion({ sections }: AccordionProps) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full divide-y rounded-xl divide-gray-300 bg-white shadow-lg">
        {sections.map((section, index) => (
          <Disclosure as="div" className="p-6" key={index} defaultOpen={index === 0}>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-xl font-medium text-black group-data-[hover]:text-gray-700">
                {section.title}
              </span>
              <ChevronDownIcon className="size-5 fill-gray-600 group-data-[hover]:fill-gray-700 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-l text-black">
              {section.content}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  )
}
