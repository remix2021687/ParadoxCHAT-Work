import { useForm } from "react-hook-form"
import { UserIcon, EnvelopeIcon, PasswordIcon } from '@phosphor-icons/react'

type FormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}


export const RegisterForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <form className="RegisterForm" onSubmit={handleSubmit(onSubmit)}>
            <section className="RegisterForm_title">
                <h2>Sign Up</h2>
                <p>Join our community today.</p>
            </section>
            <section className="RegisterForm_inputs">
                <label htmlFor="username">
                    <h3>Username</h3>
                    <UserIcon className="icon" size={25} />
                    <input id="username" type="text" placeholder="Username" {...register('username', { required: true })} />
                    {errors.username && <span className="error">Username is required</span>}
                </label>
                <label htmlFor="email">
                    <h3>Email</h3>
                    <EnvelopeIcon className="icon" size={25} />
                    <input id="email" type="email" placeholder="Email" {...register('email', { required: true })} />
                    {errors.email && <span className="error">Email is required</span>}
                </label>
                <label htmlFor="password">
                    <h3>Password</h3>
                    <PasswordIcon className="icon" size={25} />
                    <input id="password" type="password" placeholder="Password" {...register('password', { required: true })} />
                    {errors.password && <span className="error">Password is required</span>}
                </label>
                <label htmlFor="confirmPassword">
                    <h3>Confirm Password</h3>
                    <PasswordIcon className="icon" size={25} />
                    <input id="confirmPassword" type="password" placeholder="Confirm Password" {...register('confirmPassword', { required: true })} />
                    {errors.confirmPassword && <span className="error">Confirm Password is required</span>}
                </label>
            </section>
            <button type="submit">Sing Up</button>
        </form>
    )
}