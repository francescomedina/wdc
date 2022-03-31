import Rectangle_3 from './assets1/foto1.jpg';
import Rectangle_4 from './assets1/foto2.jpg';
import Rectangle_5 from './assets1/foto3.jpg';

export const data = {
    hero:{
      appType: 'ECO-IT Foundation',
      tagLine: 'Carbon emissions free',
      description: 'Exploring what the sector can do to reduce its footprint',
      mainActionText: 'Contact us',
      extraActionText: 'See more...',
    },
    home:{
      homeText: 'Home',
      productText: 'Mission',
      faqText: 'Project',
      contactText: 'Contact',
    },
    step1: {
      title: 'Step 1',
      heading: 'Footprint evaluations',
      description: 'Direct carbon emissions associated with ICT manufacturing, use and disposal (ICT’s carbon footprint)',
      img: Rectangle_3,
      alternate: false,
    },
    step2: {
      title: 'Step 2',
      heading: 'Emissions estimations',
      description: 'Indirect positive or negative emission effects from using ICT (e.g. travel substitution and transportation optimization)',
      img: Rectangle_4,
      alternate: true,
    },
    step3: {
      title: 'Step 3',
      heading: "Behaviour actions",
      description: "Impacting behaviors and preferences (reshaping how we lead our lives on a societal level)",
      img: Rectangle_5,
      alternate: false,
    },
    bottomLead: {
      actionText: 'What can we all do to minimize the impact of our online life?',
      description:
          'Your digital carbon footprint is greatly\n' +
          'influenced by the number of devices you have\n' +
          'and how long you use them for, as well as\n' +
          'where you live and use them',
      mainActionText: 'See Journals',
      extraActionText: 'Extra contents',
    },
    contact: {
      nameText: 'Nome',
      emailText: 'Email',
      messageText: 'Messaggio',
      submitText: 'Invia',
    },
  }