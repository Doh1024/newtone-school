import React from 'react'
import { FaInfo, FaLevelUpAlt } from 'react-icons/fa'
import Card from '../components/Card'
import prog1 from '../assets/prog1.jpg'
import prog2 from '../assets/prog2.png'
import prog3 from '../assets/prog3.jpg'
import prog4 from '../assets/prog4.png'
import requirement from '../assets/requirement.png'



const Programs = () => {
  return (
    <div>
      <h1 class="flex justify-center text-center font-montserrat align-center text-2xl sm:3xl lg:text-4xl font-bold m-5 mt-10 dark:text-dark-cyan">Newtone English Language Programs</h1>
      <p class="text-center w-11/12 sm:w-2/3 lg:1/4 font-montserrat mx-auto pt-6 dark:text-dark-cyan">Strong English language skills are essential for international students to communicate and effectively contribute in a Canadian classroom and thrive in a globalized world. </p>
      <p class="text-center w-11/12 sm:w-2/3 lg:1/4 font-montserrat mx-auto pb-10 pt-6 dark:text-dark-cyan">Newtone's intensive English language programs implement contemporary and cutting-edge learning techniques using real-world texts and videos to help you develop the language proficiency necessary to apply to <a class="font-montserrat underline underline-offset-auto" href="https://www.robertsoncollege.com/programs/">Robertson College</a> and English-language educational institutions as an international student.  </p>
      <div class="container mx-auto flex justify-center">
        <div class="grid place-self-center grid-cols-1 pb-10 gap-6 lg:gap-32 md:grid-cols-2 lg:grid-cols-2">
          <Card
            img={prog1}
            prog="Intensive Academic English (IAE1)"
            level="High Beginner"
            length="12 Weeks Full-Time / Monday - Friday"
            info="In this course, students will develop English proficiency at the high beginner level. Students will practice speaking and reading skills and strategies to participate in daily routines. They will learn to read and understand speech and written text on familiar topics. Students will also practice reading, listening, and vocabulary strategies to understand basic information. They will learn to identify the purpose and main idea of a short text. Students will also learn foundational grammar and basic vocabulary needed to participate in conversations and communicate in writing."
            info2="This course also introduces expressions to participate in and maintain conversation about familiar topics and everyday routines. Students will also practice repair strategies to reduce communication breakdown. In this course, skills and strategies will be taught using familiar topics, such as culture, jobs, travel, family, hobbies, and neighbourhoods."
            format="Format: Online"
            intake="Continuous intake every 4 weeks - please contact 1-888-709-0730 (TF) or fill out the contact form below for more information "
          />
          <Card 
            img={prog2}
            prog="Intensive Academic English (IAE2)"
            level="Low Intermediate"
            length="12 Weeks Full-Time / Monday - Friday"
            info="In this course, students will develop English proficiency at the high beginner level. Students will practice speaking and reading skills and strategies to participate in daily routines. They will learn to read and understand speech and written text on familiar topics. Students will also practice reading, listening, and vocabulary strategies to understand basic information. They will learn to identify the purpose and main idea of a short text. Students will also learn foundational grammar and basic vocabulary needed to participate in conversations and communicate in writing."
            info2="This course also introduces expressions to participate in and maintain conversation about familiar topics and everyday routines. Students will also practice repair strategies to reduce communication breakdown. In this course, skills and strategies will be taught using familiar topics, such as culture, jobs, travel, family, hobbies, and neighbourhoods."
            format="Format: Online"
            intake="Continuous intake every 4 weeks - please contact 1-888-709-0730 (TF) or fill out the contact form below for more information "
          />
          <Card 
            img={prog3}
            prog="Intensive Academic English (IAE3)"
            level="Upper Intermediate"
            length="12 Weeks Full-Time / Monday - Friday"
            info="In this course, students will develop English proficiency at the intermediate level. They will learn English skills and strategies to complete moderately complex tasks for academic and professional purposes. Students will read and understand text on unfamiliar topics and develop strategies to identify the main idea and supporting details. They will analyze the most common academic words in English and build their understanding of intermediate grammatical structures. They will also focus on fluency and accuracy when speaking, and learn to communicate preferences, ask for and give advice, and agree and disagree."
            info2="Students will understand moderately complex speech when listening and will learn to apply active learning principles in their routine interactions. They will write about familiar and unfamiliar topics using active voice and moderately complex sentence structures and practice writing to express their opinion, request information and make a comparison."
            format="Format: Online" 
            intake="Continuous intake every 4 weeks - please contact 1-888-709-0730 (TF) or fill out the contact form below for more information "
          />
          <Card 
            img={prog4}
            prog="Intensive Academic English (IAE4)"
            level="Advanced"
            length="12 Weeks Full-Time / Monday - Friday"
            info="In this course, students will develop English proficiency at the high intermediate level. They will learn English skills and strategies to complete moderately complex tasks for academic and professional purposes. Students will read and understand longer text on unfamiliar topics. They will learn the most common academic words in English and build their understanding of more advanced grammatical structures found in academic text. They will focus on fluency and accuracy when speaking, and use language for persuading, summarizing and interpreting data."
            info2="Students will also develop their ability to understand complex speech when listening to infer main points, supporting details and examples in academic discourse. They will learn about the writing process and write moderately unfamiliar topics. They will begin to use complex sentence structures and more advanced grammatical structures to write a variety of short essay types including descriptive, opinion and persuasive essays."
            format="Format: Online"
            intake="Continuous intake every 4 weeks - please contact 1-888-709-0730 (TF) or fill out the contact form below for more information "
          />
        </div>
      </div>
      <h1 class="flex justify-center font-montserrat text-center align-center text-2xl font-bold m-5 md:text-3xl dark:text-dark-cyan">Newtone Program Entrance Requirements</h1>
      <img src={requirement} alt="requirement" class="mx-auto pb-20"></img>
    </div>
  )
}

export default Programs
