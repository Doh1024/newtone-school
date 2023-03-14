import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from '../components/Card'
import prog1 from '../assets/prog1.jpg'
import prog2 from '../assets/prog2.png'
import prog3 from '../assets/prog3.jpg'
import prog4 from '../assets/prog4.png'
import requirement from '../assets/requirement.png'

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';


const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const { t, i18n } = useTranslation();
	const languageSlice = useSelector((state) => state.language);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:1337/api/programs");
      setPrograms(response.data);
      console.log(response.data);
  }
    fetchData();
  },[]);

	useEffect(() => {
		i18n.changeLanguage(languageSlice.language);
	}, [languageSlice, i18n]);
  return (
    <div>
      <h1 className="flex justify-center text-center font-montserrat align-center text-2xl sm:3xl lg:text-4xl font-bold m-5 mt-10 dark:text-dark-cyan">
        {t('program_title')}
      </h1>
      <p className="text-center w-11/12 sm:w-2/3 lg:1/4 font-montserrat mx-auto pt-6 dark:text-dark-cyan">
        {t('program_para_1')}
      </p>
      <p className="text-center w-11/12 sm:w-2/3 lg:1/4 font-montserrat mx-auto pb-10 pt-6 dark:text-dark-cyan">
        {t('program_para_2')}
        <a class="font-montserrat underline underline-offset-auto" href="https://www.robertsoncollege.com/programs/">
          {t('p_robertson_college')}
        </a> 
        {t('program_para_3')}  
      </p>
      <div className="container mx-auto flex justify-center">
        <div className="grid place-self-center grid-cols-1 pb-10 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <Card
            img={prog1}
            prog="Intensive Academic English (IAE1)"
            level={t('high_beginner')}
            length={t('p_length')}
            info={t('beg_info_1')}
            info2={t('beg_info_2')}
            format={t('format')}
            intake={t('intake')}
          />
          <Card 
            img={prog2}
            prog="Intensive Academic English (IAE2)"
            level={t('low_intermediate')}
            length={t('p_length')}
            info={t('low_info_1')}
            info2={t('low_info_2')}
            format={t('format')}
            intake={t('intake')}
          />
          <Card 
            img={prog3}
            prog="Intensive Academic English (IAE3)"
            level={t('upper_intermediate')}
            length={t('p_length')}
            info={t('upp_info_1')}
            info2={t('upp_info_2')}
            format={t('format')}
            intake={t('intake')}
          />
          <Card 
            img={prog4}
            prog="Intensive Academic English (IAE4)"
            level={t('advanced')}
            length={t('p_length')}
            info={t('adv_info_1')}
            info2={t('adv_info_2')}
            format={t('format')}
            intake={t('intake')}
          />
        </div>
      </div>
      <h1 className="flex justify-center font-montserrat text-center align-center text-2xl font-bold m-5 md:text-3xl dark:text-dark-cyan">{t('req')}</h1>
      <img src={requirement} alt="requirement" className="mx-auto pb-20"></img>
    </div>
  )
}

function ProgramPage({ program }) {
  return (
    <div>
      <h1>{program.name}</h1>
      <p>{program.description}</p>
    </div>
  );
}


export default Programs
