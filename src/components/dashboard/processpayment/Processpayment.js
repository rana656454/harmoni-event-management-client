import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';
const Processpayment = ({handlePayment}) => {
    const stripePromise = loadStripe('pk_test_51IeWHYADLG4RQA3MQFMpv8jpxvJivFp2WvX420VdI1dLukP12khMNvW8T0eNMiCiBcYS6ydx0Yf7rsZuu7U2iaxx00en6zYl7B');
    return (
        <div>
            <Elements stripe={stripePromise}>

<SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
        </div>
    );
};

export default Processpayment;