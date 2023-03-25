'use client'

import { MouseEventHandler, ReactNode } from "react"
import { cls } from "../utils/classnames"

export type RecruiterPageAction = {
    text: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
    href?: string
    main?: boolean
}

export type RecruiterPageProps = {
    children?: ReactNode
    actions?: RecruiterPageAction[]
    title?: string
}

export const RecruiterPage = ({ children, actions = [], title }: RecruiterPageProps) => {

    return (
        <>
            {/* Page title & actions */}
            < div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" >
                <div className="min-w-0 flex-1">
                    <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">{title}</h1>
                </div>
                <div className="mt-4 flex sm:mt-0 sm:ml-4">
                    {actions.map(action => {

                        const klass = cls({
                            "sm:order-0 order-1 ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-0": !action.main,
                            "order-0 inline-flex items-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 sm:order-1 sm:ml-3": !!action.main
                        })

                        if (action.href) {
                            return <a key={action.href} href={action.href} className={klass}>
                                {action.text}
                            </a>
                        }

                        return (
                            <button key={action.text} type="button" className={klass} onClick={action.onClick}>
                                {action.text}
                            </button>
                        )
                    })}
                </div>
            </div >

            {children}
        </>
    )
}
