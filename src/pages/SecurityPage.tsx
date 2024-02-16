import { Link } from 'react-router-dom'

const SecurityPage = () => {
	return (
		<div className='security-page'>
			<div className='block-container'>
				<div className='security-page__box'>
					<Link to='/' className='security-page__button'>
						Назад
					</Link>
					<h1 className='security-page__title'>
						Оплата банковскими картами осуществляется через ОАО «Приорбанка».
					</h1>

					<p className='security-page__text'>
						К оплате принимаются карты международных платежных систем VISA,
						MasterCard, платежной системы БЕЛКАРТ, платежной системы МИР. Оплату
						также можно совершить посредством сервисов Apple Pay, Samsung Pay.
						Безопасность совершения платежа обеспечивается современными методами
						проверки, шифрования и передачи данных по закрытым каналам связи.
					</p>
					<p className='security-page__text'>
						Ввод данных карточки осуществляется на защищенной авторизационной
						странице банка. Для оплаты необходимо ввести реквизиты карточки:
						номер, имя держателя, срок действия и трехзначный код безопасности.
						Трёхзначный код безопасности (CVV2 для VISA, CVC2 для MasterCard) —
						это три цифры, находящиеся на обратной стороне карточки. Если
						карточка поддерживает технологию 3DSecure или Интернет-пароль для
						держателей карточек БЕЛКАРТ, Вы будете перенаправлены на страницу
						банка, выпустившего карточку, для ввода кода безопасности. При
						оплате с помощью Apple Pay выберете карту из приложения Wallet,
						воспользуйтесь код- паролем или иным способом аутентификации, в
						зависимости от того, какой способ выбран в приложении. При
						оформлении заказа с помощью Samsung Pay нажмите «Оплатить Samsung
						Pay», введите ваш Samsung Account и подтвердите покупку на вашем
						смартфоне (по отпечатку пальца, радужке или PIN-коду Samsung Pay).
					</p>
					<p className='security-page__text'>
						Предоставляемая Вами персональная информация (например: имя, адрес,
						телефон, e-mail, номер банковской карты и прочее) является
						конфиденциальной и не подлежит разглашению. Данные карточки
						передаются только в зашифрованном виде и не сохраняются на данном
						интернет-ресурсе.
					</p>
				</div>
			</div>
		</div>
	)
}

export default SecurityPage
