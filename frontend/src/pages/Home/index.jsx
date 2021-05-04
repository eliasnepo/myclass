import React from 'react';
import CourseCard from './components/CourseCard/CourseCard'

export default function Home() {
    return(
        <div>
            <h1>HOME</h1>
            <CourseCard 
            courseTitle="Cálculo 3A" 
            courseDescription="AKI TERIA UMA DESCRIÇÃO SUPER INTERESSANTE SOBRE O CURSO QUE PODE OU NÃO SER MUITO GRANDE"
            />
        </div>
    );
}