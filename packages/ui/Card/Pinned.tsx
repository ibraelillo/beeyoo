'use client'

import { Menu, Transition } from "@headlessui/react"
import { cls } from "../utils/classnames"
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline"
import { Fragment, MouseEventHandler } from "react"


export type PinnedCardProps = {
    bgColorClass?: string
    initials?: string
    title?: string
    subtitle?: string
    menu?: {
        title: string,
        href?: string,
        onClick?: MouseEventHandler<HTMLAnchorElement>
    }[]
}

export const PinnedCard = ({ bgColorClass, initials, title, subtitle, menu }: PinnedCardProps) => {


    return (
        <div className="relative col-span-1 flex rounded-md shadow-sm">
            <div
                className={cls({
                    [bgColorClass]: !!bgColorClass,
                    'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white': true
                })}
            >
                {initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                    <a href="#" className="font-medium text-gray-900 hover:text-gray-600">
                        {title}
                    </a>
                    {subtitle && <p className="text-gray-500">{subtitle}</p>}
                </div>
                {menu?.length ? <Menu as="div" className="flex-shrink-0 pr-2">
                    <Menu.Button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {menu.map(item => (
                                    <Menu.Item key={item.title}>
                                        {({ active }) => (
                                            <a
                                                href={item.href}
                                                onClick={item.onClick}
                                                className={cls({
                                                    'bg-gray-100 text-gray-900': active,
                                                    'text-gray-700': !active,
                                                    'block px-4 py-2 text-sm': true
                                                })}
                                            >
                                                {item.title}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu> : null}
            </div>
        </div>
    )
}
