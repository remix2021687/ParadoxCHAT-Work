import type React from "react";
import { useNavigate } from "react-router";

interface AppProps {
    Router: React.ComponentType<{ components: Record<string, React.ComponentType> }>,
    Components: Record<string, React.ComponentType<any>>
}

export const App: React.FC<AppProps> = ({ Router, Components }) => {
    const navigate = useNavigate()

    if (!localStorage.getItem("token")) {
        navigate("auth/")
    }
    
    return (
        <Router components={Components} />
    )
}