import React from 'react';

const SolaredgeItem = {
    imageLink: "/images/Solaredge_logo.svg",
    pageName: "Solaredge", 
    hrefLink: "https://www.solaredge.com/home", 
    title: "Full-Stack Software Developer, Since April 2016", 
    location: "Hertzelia, Israel", 
    description: 
    <div className="done-so-far-item-content--description">
        <p>
            Solaredge is a global leading company in the smart energy technology.
            It offers smart energy solutions for harvesting and managing photovoltaic (PV) systems.
        </p>
        <p>
            As a full-stack developer I was given the responsibility for designing and developing the Integration division’s 
            website from the very beginning.
            That included the design of all the databases, models relations and the REST API for the server side, 
            along with the design of the client side.
            Server side was written in ASP.NET and by using MySql and EF, while client side is written maily with React framework.
            This site is used for the management of all the lab devices and for creating and handling automation runs in the company.
        </p>
        <p> 
            Another major project I was given was to design and develop the company’s automation testing analysis web tool.
            This site fetches data from elasticsearch and enables a platform for creating and analyzing graphs, 
            logs and other data with easy to use interface.
            Server side here was written in ASP.NET CORE and client side was written in React. 
            This project and the experience our team recieved by using the elasticsearch stack, 
            paved the way for other teams to work with the ELK as well. 
        </p>
        <p>
            My team works in an Agile Scrum methodology, and our code is deployed using continues integration environment.
            Writing unit tests, performing and undergoing code reviews make us creating a top-notch code that never breaks.   
            Working at Solaredge as a software developer keeps pushing me to my limits, 
            and poses great challnages while working with the latest technologies. 
        </p>
    </div>
}

export default SolaredgeItem;