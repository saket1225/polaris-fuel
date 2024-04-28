import '../styles/homepage.css'
import Nav from "@/components/nav";
import Scroller from '@/components/scroller';

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <div className="secondoryNav">
        <a href="#" className="active">Customers</a>
        <a href="#" className="">Polaris Providers</a>
      </div>
      
      <Scroller></Scroller>
    </div>
  );
}
