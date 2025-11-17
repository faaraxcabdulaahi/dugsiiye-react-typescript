import React from "react";
import ContactForm from "../components/ContactForm";
import EmailForm from "../components/EmailForm";
import AgeForm from "../components/AgeForm";



const Home = () => {

    const handleEmail = (email:string) => {
        console.log("Email is passed", email)
    };

    const handleAge = (age:number) => {
        console.log("Age is passed", age);
    }

    const handleContactForm = (data:{name:string, email:string}) => {
        console.log("Contact form is passed", data);
    }

    
    
    return <div>
        <h2>Forms</h2>
        <div>
            <h3>Email</h3>
            <EmailForm onSubmit={handleEmail}/>

            <h3>Age</h3>
            <AgeForm onSubmit={handleAge}/>

            <h3>Contact Form</h3>
            <ContactForm onSubmit={handleContactForm}/>
        </div>
    </div>;
};

export default Home;
