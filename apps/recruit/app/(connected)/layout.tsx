import { Dashboard } from 'ui'
import Logo from 'ui/beeyoo-jaune-png.png'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <Dashboard
            user={{
                name: 'Edona Sturce',
                avatar: 'https://pps.whatsapp.net/v/t61.24694-24/180460371_715449136618501_656645227196881719_n.jpg?ccb=11-4&oh=01_AdTofNFkrj9j4dQR-XOAzc-nAbdsQuzVKsjL02mvcRTkDw&oe=642B0499',
                alias: '@edosturce'
            }}
            menu={[]}
            logo={Logo.src}
        >
            {children}
        </Dashboard>
    )
}
