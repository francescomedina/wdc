import './App.css';
import logo from "./assets1/logo_transparent.png";

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Section from './components/Section';
import { data } from './content';

function App() {
  return (
    <div className="box-border">
      <div className="flex flex-col">
        
        <Header logo={logo}/>
        <Hero 
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        />
        
        {/* <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div> */}
        
        <div id="faq" className="bg-white py-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold">How the app works </div>
        
        <Section
          title={data.step1.title}
          heading={data.step1.heading}
          description={data.step1.description}
          img={data.step1.img}
          alternate={data.step1.alternate}
          />
          <Section
          title={data.step2.title}
          heading={data.step2.heading}
          description={data.step2.description}
          img={data.step2.img}
          alternate={data.step2.alternate}
          />
          <Section
          title={data.step3.title}
          heading={data.step3.heading}
          description={data.step3.description}
          img={data.step3.img}
          alternate={data.step3.alternate}
          />

          <About 
            actionText={data.bottomLead.actionText}
            description={data.bottomLead.description}
            mainActionText={data.bottomLead.mainActionText}
            extraActionText={data.bottomLead.extraActionText}
          />

          <Footer logo={logo}/>
      </div>
    </div>
  );
}

export default App;
