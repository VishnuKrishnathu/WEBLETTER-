import "../css/ErrorPage.css";
import { Link } from "react-router-dom";
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
export default function ErrorPage () {
	const stripe = useStripe();
	const elements = useElements();
	const CARD_VALUE = {

				style: {
				  base: {
					fontSize: '16px',
					color: '#42446a',
					'::placeholder': {
					  color: '#424770',
					},
				  },
				  invalid: {
					color: '#9e2146',
				  },
				},
	}
	const handleDonations = async(events) => {
		events.preventDefault();
		if (!stripe || !elements){
			return;
		}
		const cardElement = elements.getElement(CardElement);
		const {error, paymentMethod} = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
		});
		if (error){
			console.log(`error is ::${error.message}`);
		}else{
			console.log(paymentMethod);
		}
	}
	return (
		<div className="error-page" >
			<div className="login_link">
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</div>
			<div className="testuser">
			Test users can login using
				<div>Username: test</div>
				<div>Password: test</div>
			</div>
			<CardElement
			  options={CARD_VALUE}
			/>
			<button onClick= {handleDonations}>DONATE</button>
		</div>
	)
}