import SharedButton from '../shared/Shared-Button'

const Header = () => {
	return (
		<div className='header'>
			<div className='block-container'>
				<div className='header__box'>
					<div className='header__lines-background'>
						<img
							src='/backgrounds/Header/header-lines-background.jpeg'
							alt=''
						/>
					</div>
					<div className='header__waves-background'>
						<img src='/backgrounds/Header/header-waves-background.svg' alt='' />
					</div>
					<div className='header__content'>
						<h1 className='header__title-course-name'>
							<span>Авторский онлайн-курс</span> Алёны Белоусовой
						</h1>
						<div className='header__img-background'>
							<img src='/pictures/Header/header-picture.png' alt='' />
						</div>
						<h2 className='header__subtitle'>
							<span>Набирай аудиторию, </span>закупая рекламу <br /> в
							инстаграм-пабликах
						</h2>
						<div className='header__lessons'>
							<div className='header__lessons_item'>
								<div className='header__item_point'></div>
								<div className='header__item_content'>
									<h3 className='header__content_title'>
										<span>12 уроков: </span> пошаговые инструкции с заданиями
									</h3>
								</div>
							</div>
							<div className='header__lessons_item'>
								<div className='header__item_point'></div>
								<div className='header__item_content'>
									<h3 className='header__content_title'>
										<span>42 минуты: </span> общая длительность обучения
									</h3>
								</div>
							</div>
						</div>
						<SharedButton href='#tariffs' text='УЧАСТВОВАТЬ' color='blue' />
						<a href='#program' className='header__button header__button-white'>
							СМОТРЕТЬ ПРОГРАММУ
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
