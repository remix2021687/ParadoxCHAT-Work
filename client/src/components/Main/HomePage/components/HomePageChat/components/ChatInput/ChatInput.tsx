import { PaperclipIcon, SmileyIcon, MicrophoneIcon, PaperPlaneTiltIcon } from "@phosphor-icons/react"

export const ChatInput: React.FC = () => {
    return (
        <section className="ChatInput">
            <PaperclipIcon size={30} opacity={0.5} />
            <label htmlFor="chat_input" className="ChatInput__label">
                <input id="chat_input" type="text" placeholder="Type your message..." />
                <SmileyIcon className="EmojiIcon" size={30} opacity={0.5} />
            </label>
            <MicrophoneIcon size={30} opacity={0.5} />
            <PaperPlaneTiltIcon className="SendIcon" weight="fill" size={30} opacity={0.5}/>
        </section>
    )
}