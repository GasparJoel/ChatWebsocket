import { Button } from "@/components/ui/button"
import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import { Chat } from "./pages/chat";
import { Profile } from "./pages/profile";

export const App = () => {
  return (
   <>

    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={ <Auth/> }/>
        <Route path="*" element={ <Navigate to="/auth"/> } />
        <Route path="/chat" element={ <Chat/> }/>
        <Route path="/profile" element={ <Profile/> }/>
      </Routes>

    </BrowserRouter>   
   </>
    
  )
}
