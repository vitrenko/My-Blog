import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { ThemeProvider } from "./context/themeContext";
import { AuthProvider } from "./context/auth";

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App;
