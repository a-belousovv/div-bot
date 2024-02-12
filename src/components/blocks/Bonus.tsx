import SharedButton from '../shared/Shared-Button'

const Bonus = () => {
	return (
		<div className='bonus'>
			<div className='block-container'>
				<div className='bonus__box'>
					<div className='bonus__content'>
						<h3 className='bonus__content_title'>+ Жирный бонус</h3>
						<div className='bonus__content_items'>
							<div className='bonus__content_item'>
								<p className='bonus__content_text'>
									<span>
										Ежемесячная возможность попасть на личную тренировку с
										Аленой офлайн.{' '}
									</span>
									Раз в месяц я буду приглашать до 8 желающих на совместную
									групповую тренировку вместе со мной. Это возможность личного
									общения и обсуждения Ваших запросов со мной.
								</p>
								<div className='bonus__content_img'>
									<img src='/pictures/Bonus/Bonus-Stats.png' alt='' />
								</div>
							</div>
							<div className='bonus__content_item'>
								<p className='bonus__content_text'>
									<span>
										Бесплатное обновление бота на протяжении 6 месяцев.{' '}
									</span>
									База материалов будет пополняться еженедельно материалами по
									здоровью, питанию, дисциплине и тд. Стоимость подписки будет
									увеличиваться соразмерно ценности
								</p>
								<div className='bonus__content_img'>
									<img src='/pictures/Bonus/Bonus-Stats.png' alt='' />
								</div>
							</div>
						</div>
						<SharedButton href='#tariffs' color='blue' text='УЧАСТВОВАТЬ' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Bonus
