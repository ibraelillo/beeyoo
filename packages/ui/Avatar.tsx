'use client'


import { ComponentPropsWithoutRef, useMemo } from "react"
import { cls } from './utils/classnames'

export type AvatarProps = ComponentPropsWithoutRef<'img'> & {
    size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge',
    title?: string
    subtitle?: string,
    href?: string
}

export const Avatar = ({ title, subtitle, href, size = 'medium', src, className, ...rest }: AvatarProps) => {

    const klass = useMemo(() => cls({
        'inline-block rounded-full': true,
        [className]: !!className,
        'h-16 w-16': size === 'xxlarge',
        'h-14 w-14': size === 'xlarge',
        'h-12 w-12': size === 'large',
        'h-10 w-10': size === 'medium',
        'h-8 w-8': size === 'small'
    }), [size, className])

    let content = <img
        className={klass}
        src={src}
        {...rest}
    />

    if (title || subtitle) {
        content = (
            <div className="flex items-center">
                <div>
                    <img
                        className={klass}
                        src={src}
                        {...rest}
                    />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{title}</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">{subtitle}</p>
                </div>
            </div>
        )
    }

    if (href) {
        return <a target="_blank" rel="noreferer" href={href} className="group block flex-shrink-0">
            {content}
        </a>
    }

    return content
}
