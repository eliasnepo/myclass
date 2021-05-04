import React from 'react';
import CourseCard from './components/CourseCard/CourseCard'
import ProfileCard from './components/ProfileCard/ProfileCard';

export default function Home() {
    return(
        <div>
            <h1>HOME</h1>
            <CourseCard 
            courseTitle="Cálculo 3A" 
            courseDescription="AKI TERIA UMA DESCRIÇÃO SUPER INTERESSANTE SOBRE O CURSO QUE PODE OU NÃO SER MUITO GRANDE"
            />
            <ProfileCard 
            studentName="Elias Nepomuceno"
            institutionName="Universidade Federal de Goiás (UFG)"
            courseCount="4"
            />
        </div>
    );
}