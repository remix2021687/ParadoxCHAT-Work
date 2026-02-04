import { useEffect } from 'react'
import { HomePageChat } from "./components/HomePageChat/HomePageChat"
import { HomePageUserList } from "./components/HomePageUserList/HomePageUserList"

export const HomePage: React.FC = () => {

    useEffect(() => {
        document.title = "Chat - Home"
    })

    return (
        <section className="HomePage">
            <HomePageUserList />
            <HomePageChat />
        </section>
    )
}