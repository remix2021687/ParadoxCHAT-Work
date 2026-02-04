import { ChatInput } from "./components/ChatInput/ChatInput"
import { ChatMessage } from "./components/ChatMessage/ChatMessage"

export const HomePageChat: React.FC = () => {
    return (
        <section className="HomePageChat">
            <ChatMessage />
            <ChatInput />
        </section>
    )
}