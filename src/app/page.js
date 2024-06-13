"use client"
import Login from "@/components/Login";
import Navbar from "@/components/NavBar";
import "./globals.css"
import Cardimg from "@/components/cardimg/Cardimg";
import Card2 from "@/components/cardimg/Card2";
import Card3 from "@/components/card3/card3";
import Section from "@/components/section/section";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="">
      <div className="App">
      <Navbar/>
      <Login/>
      </div>
      <div style={{ display: 'flex'}}>
      <Cardimg />
    </div>
    <div className="card2">
      <Card2 />
    </div>
    <div className='card3'>
  <Card3/>
    </div>
    <div>
      <Section/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}
