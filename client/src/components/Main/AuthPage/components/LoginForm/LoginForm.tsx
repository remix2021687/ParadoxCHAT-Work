import { useForm } from "react-hook-form"
import { EnvelopeIcon, PasswordIcon } from '@phosphor-icons/react'

type FormData = {
    email: string;
    password: string;
}

export const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
            <section className="LoginForm_title">
                <h2>Sign In</h2>
                <p>Sign In in your account.</p>
            </section>
            <label htmlFor="email">
                <h3>Email</h3>
                <EnvelopeIcon className="icon" size={25} />
                <input id="email" type="email" placeholder="Email" {...register('email', {
                    required: {
                        value: true,
                        message: 'Email is required'
                } })} />
            </label>
            {errors.email && <span className="error">{errors.email.message}</span>}
                
            <label htmlFor="password">
                <h3>Password</h3>
                <PasswordIcon className="icon" size={25} />
                <input id="password" type="password" placeholder="Password" {...register('password', {
                    required: {
                        value: true,
                        message: 'Password is required'
                } })} />
            </label>
            {errors.password && <span className="error">{errors.password.message}</span>}

            <button>Sign In</button>
        </form>
    )
}