import React from 'react';
import ProfileCard from './components/ProfileCard';

const App = () => {
  const members = [ 
    {
      id: 1,
      name: 'Bob Jone',
      image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?ga=GA1.1.2140911238.1745732965&semt=ais_hybrid&w=740',
      role: 'Web Developer'
  
    },
    {
      id: 2,
      name: 'Alisa Jabin',
      image: 'https://img.freepik.com/free-photo/portrait-young-tender-woman-with-healthy-freckled-skin_158595-3947.jpg?ga=GA1.1.2140911238.1745732965&semt=ais_hybrid&w=740',
      role: 'UI/UX Designer'
  
    },
    {
      id: 3,
      name: 'John Doe',
      image: 'https://img.freepik.com/free-photo/photo-handsome-unshaven-guy-looks-with-pleasant-expression-directly-camera_176532-8164.jpg?ga=GA1.1.2140911238.1745732965&semt=ais_hybrid&w=740',
      role: 'Data Scientist'
  
    }
    ,
    {
      id: 4,
      name: 'jui Martin',
      image: 'https://img.freepik.com/free-photo/close-up-shot-beautiful-young-brunette-woman-dressed-striped-top-relaxing-plant-nursery-daytime-enjoying-fresh-air-people-nature-greenery-agriculture-gardening-freshness-concept_343059-209.jpg?ga=GA1.1.2140911238.1745732965&semt=ais_hybrid&w=740',
      role: 'Project Manager'
  
    }
    ,
    {
      id: 5,
      name: 'Sam Wilson',
      image: 'https://plus.unsplash.com/premium_photo-1682089804117-cea5d901647f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      role: 'DevOps Engineer'
  
    }   
    ,
    {
      id: 6,
      name: 'Maria Hill',
      image: 'https://img.freepik.com/free-photo/young-woman-posing-outdoor-field_23-2149334480.jpg?ga=GA1.1.2140911238.1745732965&semt=ais_hybrid&w=740',
      role: 'Software Engineer'
  
    }
    ,
    {
      id: 7,
      name: 'jabet Smith',
      image: 'https://img.freepik.com/premium-photo/close-up-portrait-young-man-against-wall_1048944-19731384.jpg?ga=GA1.1.2140911238.1745732965&semt=ais_hybrid&w=740',
      role: 'QA Engineer'
  
    }
    ,
    {
      id: 8,
      name: 'Natasha Romanoff',
      image: 'https://img.freepik.com/free-photo/girl-smiling-looking-camera_23-2148194027.jpg?ga=GA1.1.2140911238.1745732965&semt=ais_hybrid&w=740',
      role: 'Business Analyst'
  
    }
    ,
    {
      id: 9,
      name: 'Clark Kent',
      image: 'https://img.freepik.com/free-photo/young-man-sad-expression_1194-2829.jpg?ga=GA1.1.2140911238.1745732965&semt=ais_hybrid&w=740',
      role: 'System Administrator'
  
    }
    
  
  ]
  return (
    <div className='min-h-screen p-6 max-w-screen-xl mx-auto'>
      <h1 className='text-3xl font-bold text-center text-blue-600'>Team Member List App</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
        {
          members.map((member)=><ProfileCard key={member.id} member={member}/>)
        }
      
      </div>
      
    </div>
  );
};

export default App;