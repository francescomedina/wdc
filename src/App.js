import './App.css';
import logo from "./assets1/logo_transparent.png";

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Button from './components/Button';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Section from './components/Section';
import { data } from './content';
import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  DiscreteColorLegend
} from 'react-vis';

function App() {
  const BarSeries = VerticalBarSeries;
  return (
    <div className="box-border">
      <div className="flex flex-col">
        
        <Header 
          logo={logo}
          homeText={data.home.homeText}
          productText={data.home.productText}
          faqText={data.home.faqText}
          contactText={data.home.contactText}
        />
        
        <Hero 
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        />

<XYPlot
          className="clustered-stacked-bar-chart-example"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}
        >
          <DiscreteColorLegend
            style={{position: 'absolute', left: '50px', top: '10px'}}
            orientation="horizontal"
            items={[
              {
                title: 'Apples',
                color: '#12939A'
              },
              {
                title: 'Oranges',
                color: '#79C7E3'
              }
            ]}
          />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            cluster="2015"
            color="#12939A"
            data={[
              {x: 'Q1', y: 10},
              {x: 'Q2', y: 5},
              {x: 'Q3', y: 15},
              {x: 'Q4', y: 20}
            ]}
          />
          <BarSeries
            cluster="2015"
            color="#79C7E3"
            data={[
              {x: 'Q1', y: 3},
              {x: 'Q2', y: 7},
              {x: 'Q3', y: 2},
              {x: 'Q4', y: 1}
            ]}
          />
          <BarSeries
            cluster="2016"
            color="#12939A"
            data={[
              {x: 'Q1', y: 3},
              {x: 'Q2', y: 8},
              {x: 'Q3', y: 11},
              {x: 'Q4', y: 19}
            ]}
          />
          <BarSeries
            cluster="2016"
            color="#79C7E3"
            data={[
              {x: 'Q1', y: 22},
              {x: 'Q2', y: 2},
              {x: 'Q3', y: 22},
              {x: 'Q4', y: 18}
            ]}
          />
        </XYPlot>
        
        {/* <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div> */}
        
        <div id="faq" className="bg-white py-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold">About the project</div>
        
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

          <Contact
            nameText={data.contact.nameText}
            emailText={data.contact.emailText}
            messageText={data.contact.messageText}
            submitText={data.contact.submitText}
          />

          <Footer logo={logo}/>
      </div>
    </div>
  );
}

export default App;
