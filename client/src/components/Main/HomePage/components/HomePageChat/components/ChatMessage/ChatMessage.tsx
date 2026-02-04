import { Message } from "./components/Message/Message"

export const ChatMessage: React.FC = () => {
    type FakeUser = {
        message: string;
        time: string;
        is_readed: boolean;
    }

    const fakeUserData: Array<FakeUser> = [
        { message: "Hello, how are you?", time: "10:30", is_readed: true },
        { message: "I'm good, thanks! And you?", time: "10:32", is_readed: false },
        { message: "Doing well, just working on a project.", time: "10:33", is_readed: true },
        { message: "That's great to hear!", time: "10:35", is_readed: false },
    ]

    return (
        <section className="ChatMessage">
            {
                fakeUserData.map((data, index) => (
                    <Message
                        key={index}
                        message={data.message}
                        time={data.time}
                        is_readed={data.is_readed}
                    />
                ))
            }
        </section>
    )
}