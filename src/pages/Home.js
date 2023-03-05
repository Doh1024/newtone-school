import React, { useEffect } from 'react';
import HeroSlider, { Overlay, Slide, Nav } from 'hero-slider';

//images
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import logo2 from '../assets/logo2.png';
import flex from '../assets/flex.png';
import accre from '../assets/accre.png';
import learn from '../assets/learn.png';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Home = () => {
	const { t, i18n } = useTranslation();

	const languageSlice = useSelector((state) => state.language);

	useEffect(() => {
		i18n.changeLanguage(languageSlice.language);
	}, [languageSlice, i18n]);
	return (
		<div>
			<HeroSlider
				slidingAnimation='left_to_right'
				orientation='horizontal'
				initialSlide={1}
				style={{
					color: '#FFF',
				}}
				settings={{
					slidingDuration: 250,
					slidingDelay: 100,
					shouldAutoplay: true,
					shouldDisplayButtons: true,
					autoplayDuration: 5000,
					height: '90vmin',
				}}
			>
				<Overlay
					style={{
						display: 'flex',
						flexFlow: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						height: '100%',
						backgroundColor: 'rgba(0, 0, 0, 0.33)',
						textAlign: 'center',
					}}
				>
					<div className='absolute inset-0  bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/80 sm:to-white/25'></div>
					<div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
						<div className='max-w-xl text-center sm:text-left sm:mx-auto sm:mt-32 lg:mx-0 md:mt-48 lg:mt-0'>
							<h1 className='text-3xl font-montserrat font-medium sm:text-5xl tracking-wide'>
								{t('english_courses_for_a')}

								<strong className='block font-extrabold font-montserrat text-light-purple'>
									{t('brighter_future')}.
								</strong>
							</h1>
							<p className='mt-4 max-w-lg font-montserrat sm:text-xl md:text-lg sm:leading-relaxed tracking-wide pt-5'>
								{t('dicover_newton')}
							</p>
							<div className='mt-8 flex flex-wrap gap-4 text-center'>
								<Link
									to='/about'
									className='flex justify-center font-montserrat mx-auto sm:block sm:mx-0 px-10 rounded tracking-wide bg-light-purple py-3 text-md font-semibold text-white shadow hover:text-white hover:bg-dark-cyan focus:outline-none focus:ring active:text-rose-500 sm:w-auto'
								>
									{t('learn_more')}
								</Link>
							</div>
						</div>
					</div>
				</Overlay>

				<Slide
					background={{
						backgroundImageSrc: hero1,
						backgroundAttachment: 'fixed',
						backgroundPosition: 'center center',
					}}
				/>

				<Slide
					background={{
						backgroundImageSrc: hero2,
						backgroundAttachment: 'fixed',
						backgroundPosition: 'center center',
					}}
				/>

				<Slide
					background={{
						backgroundImageSrc: hero3,
						backgroundAttachment: 'fixed',
						backgroundPosition: 'center center',
					}}
				/>

				<Slide
					background={{
						backgroundImageSrc: hero4,
						backgroundAttachment: 'fixed',
						backgroundPosition: 'center center',
					}}
				/>
				<Nav />
			</HeroSlider>

			{/*icons*/}

			<div className='container mx-auto mt-12 px-4'>
				<h1 className='flex justify-center text-center font-montserrat align-center text-2xl sm:3xl lg:text-4xl font-bold m-5 mt-10 dark:text-dark-cyan'>
					{t('the_newton_advantage')}
				</h1>
				<p className='text-center w-5/10 lg:2/4 font-montserrat mx-auto pb-10 pt-6 dark:text-dark-cyan'>
					{t('the_newton_advantage_heading_1')}
					<a
						className='font-montserrat underline underline-offset-auto'
						href='https://www.robertsoncollege.com/programs/'
					>
						{t('robertson_college')}
					</a>{' '}
					{t('the_newton_advantage_heading_2')}.
				</p>
				<div className='flex flex-wrap justify-center'>
					<div className='w-full sm:w-1/2 md:w-1/3 px-4 mb-8'>
						<div className='flex items-center justify-center mb-2'>
							<img
								src={flex}
								alt='Flexibility Icon'
								className='w-12 ml-4 h-12 mr-4'
							/>
						</div>
						<h2 className='text-xl lg:text-3xl font-bold font-montserrat dark:text-dark-cyan flex justify-center'>
							{t('flexibility_heading')}
						</h2>
						<p className='text-medium p-5 font-montserrat dark:text-dark-cyan text-center'>
							{t('flexibility_para_1')}
						</p>
						<p className='text-medium p-5 font-montserrat dark:text-dark-cyan text-center'>
							{t('flexibility_para_2')}
						</p>
					</div>

					<div class='w-full sm:w-1/2 md:w-1/3 px-4 mb-8'>
						<div className='flex items-center justify-center mb-2'>
							<img
								src={accre}
								alt='Accreditation Icon'
								className='w-12 h-12 ml-4 mr-4'
							/>
						</div>
						<h2 className='text-xl lg:text-3xl font-bold font-montserrat dark:text-dark-cyan flex justify-center'>
							{t('accreditation_heading')}
						</h2>
						<p className='text-medium p-5 font-montserrat dark:text-dark-cyan text-center'>
							{t('accreditation_para_1')}
							<a
								className='font-montserrat underline underline-offset-auto'
								href='https://www.languagescanada.ca/en/'
							>
								{t('language_Canada')}
							</a>{' '}
							— {t('accreditation_para_2')}.
						</p>
						<p className='text-medium p-5 font-montserrat dark:text-dark-cyan text-center'>
							{t('accreditation_para_3')}
						</p>
					</div>

					<div className='w-full sm:w-1/2 md:w-1/3 px-4 mb-8'>
						<div className='flex items-center justify-center mb-2'>
							<img
								src={learn}
								alt='Learner Experience Icon'
								className='w-12 ml-4 h-12 mr-4'
							/>
						</div>
						<h2 className='text-xl lg:text-3xl font-bold font-montserrat dark:text-dark-cyan flex justify-center'>
							{t('learner_experience_heading')}
						</h2>
						<p className='text-medium p-5 font-montserrat dark:text-dark-cyan text-center'>
							{t('learner_experience_para')}.
						</p>
					</div>
				</div>
			</div>
			{/*languages canada logo*/}

			<div className=''>
				<img src={logo2} alt='Newtone Logo' className='w-32 mx-auto pb-5' />
			</div>
			
				<button className='bg-light-purple tracking-wide hover:bg-dark-cyan mb-20 font-montserrat mx-auto flex justify-center items-center text-white font-semibold py-3 px-4 rounded mt-4'>
					<Link to='/programs'>{t('discover_our_programs')}</Link>
				</button>
			
		</div>
	);
};

export default Home;
