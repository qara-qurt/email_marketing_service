import Header from "components/Header/Header.tsx";
import Banner from "components/Banner/Banner.tsx";
import Tariffs from "components/Tariffs/Tariffs.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store.ts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { signIn } from "store/authSlice.ts";

const HomePage = () => {
    const {isAuth} = useSelector((state:RootState)=>state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
      const currentURL = window.location.href;
      const url = new URL(currentURL)
      const params = new URLSearchParams(url.search);
      const code = params.get("code");

      if(code){
        getTokens(code)
      }
      if(isAuth){
        navigate("/emailservice")
      }
    },[])

    const getTokens = async (code:string) =>{
      const tokens = await axios.post("https://oauth2.googleapis.com/token",{
        code:code,
        client_id:"1092028433387-tkiksf8mvb1d5golclhme55srl94rr9p.apps.googleusercontent.com",
        client_secret:"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",
        redirect_uri:"http://localhost:3000",
        grant_type:"authorization_code",
      })
      dispatch(signIn(true))

      const res1 = await axios.post("http://localhost:5000/register",{
        "refresh_token": tokens.data.refresh_token
      },{withCredentials: true})

      const res2 = await axios.get("http://localhost:5000/login",{withCredentials: true})

      console.log(res1,res2);
      navigate("/emailservice")
    }

    return (
        <div>
            <Header />
            <Banner />
            <Tariffs />
        </div>
    );
};

export default HomePage;
