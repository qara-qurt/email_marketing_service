import Header from "components/Header/Header.tsx";
import Banner from "components/Banner/Banner.tsx";
import Tariffs from "components/Tariffs/Tariffs.tsx";
import { useSelector } from "react-redux";
import { RootState } from "store/store.ts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
    const {isAuth} = useSelector((state:RootState)=>state.auth)

    const navigate = useNavigate()

    useEffect(()=>{
      if(isAuth){
        navigate("/emailservice")
      }
    },[])
    return (
        <div>
            <Header />
            <Banner />
            <Tariffs />
        </div>
    );
};

export default HomePage;
