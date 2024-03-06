import ReturnButton from '../components/shared/Return-Button'

const OrderHelp = () => {
	return (
		<div className='order'>
			<div className='block-container'>
				<div className='order__box'>
					<ReturnButton />
					<div className='order__content'>
						<p className='order__text'>
							Безопасный сервер WEBPAY www.webpay.by устанавливает шифрованное
							соединение по защищенному протоколу TLS и конфиденциально
							принимает от клиента данные его платёжной карты (номер карты, имя
							держателя, дату окончания действия, и контрольный номер банковской
							карточке CVC/CVC2).
						</p>
						<p className='order__text'>
							После совершения оплаты с использованием банковской карты
							необходимо сохранять полученные карт-чеки (подтверждения об
							оплате) для сверки с выпиской из карт-счёта (с целью подтверждения
							совершённых операций в случае возникновения спорных ситуаций).
						</p>
						<p className='order__text'>
							В случае, если Вы не получили заказ (не оказана услуга), Вам
							необходимо обратиться (в службу технической поддержки) по
							телефонам +375447780252 или e-mail sportdiva@bk.ru. Менеджеры Вас
							проконсультируют.
						</p>
						<p className='order__text'>
							При оплате банковской платежной картой возврат денежных средств
							осуществляется на карточку, с которой была произведена оплата
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrderHelp
