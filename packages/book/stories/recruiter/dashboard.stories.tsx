import type { Story } from "@ladle/react";
import { Bars3CenterLeftIcon, Bars4Icon, ClockIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    ChevronRightIcon,
    ChevronUpDownIcon,
    EllipsisVerticalIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

import { Dashboard, PinnedCard, RecruiterPage, cls } from 'ui'
import Logo from 'ui/beeyoo-jaune-png.png'



const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'My tasks', href: '#', icon: Bars4Icon, current: false },
    { name: 'Recent', href: '#', icon: ClockIcon, current: false },
]
const teams = [
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]
const projects = [
    {
        id: 1,
        title: 'GraphQL API',
        initials: 'GA',
        team: 'Engineering',
        members: [
            {
                name: 'Dries Vincent',
                handle: 'driesvincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Lindsay Walton',
                handle: 'lindsaywalton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Courtney Henry',
                handle: 'courtneyhenry',
                imageUrl:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Tom Cook',
                handle: 'tomcook',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
        totalMembers: 12,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-pink-600',
    },
    // More projects...
]
const pinnedProjects = projects.filter((project) => project.pinned)


export const DashboardPage: Story = () => <Dashboard
    logo={Logo}
    menu={navigation}
    user={{
        name: 'Edona Sturce',
        avatar: 'https://pps.whatsapp.net/v/t61.24694-24/180460371_715449136618501_656645227196881719_n.jpg?ccb=11-4&oh=01_AdTofNFkrj9j4dQR-XOAzc-nAbdsQuzVKsjL02mvcRTkDw&oe=642B0499',
        alias: '@edosturce'
    }}
>
    <RecruiterPage title="Search for 'graphql'">
        {/* Pinned projects */}
        <div className="mt-6 px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-medium text-gray-900">Pinned Projects</h2>
            <ul role="list" className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
                {pinnedProjects.map((project) => (
                    <li key={project.id} >
                        <PinnedCard
                            title={project.title}
                            subtitle={`${project.totalMembers} Members`}
                            initials={project.initials}
                            bgColorClass={project.bgColorClass}
                            menu={[
                                {
                                    title: "view",
                                    href: "#"
                                }
                            ]}
                        />
                    </li>
                ))}
            </ul>
        </div>
    </RecruiterPage>
</Dashboard >
