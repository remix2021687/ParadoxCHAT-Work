import { CheckIcon, ChecksIcon } from '@phosphor-icons/react'

interface MessageProps {
    message: string;
    time: string;
    is_readed: boolean;
}

export const Message: React.FC<MessageProps> = ({ message, time, is_readed }) => {
    return (
        <section className="Message">
            <section className="Message_content">
                <p className="Message__text">{message}</p>
                {is_readed ? <ChecksIcon color='blue' weight='bold' className='ChecksIcon' size={20} opacity={0.5} /> : <CheckIcon weight='bold' className='ChecksIcon' size={20} opacity={0.5} />}
            </section>
            <h5>{time}</h5>
        </section>
    )
}