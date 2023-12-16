import React, { useState, useEffect } from 'react';
import { Dna } from 'react-loader-spinner';
import '../assets/processing.css'


function Processing({ isOpen, onClose}) {
    const [loadingMessage, setLoadingMessage] = useState('');

  useEffect(() => {
    const messages = [
        'Checking card',
        'Getting information',
        'Checking balance',
        'Verifying security details',
        'Processing payment',
            'Validating credentials',
        'Securing transaction',
        'Generating receipt',
        'Confirming order details',
        'Performing final checks',
        'Fetching your address',
        'Ensuring delivery feasibility',
        'Preparing for shipment',
        'Finalizing purchase',
        'Placing your order',
        'Congratulation you order have been placed and you will never receive it.',
        ' '
      ];
    let index = 0;

    const interval = setInterval(() => {
      setLoadingMessage(messages[index]);
      index++;

      if (index === messages.length) {
        clearInterval(interval);
        onClose(); // Close the modal when all messages are displayed
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isOpen, onClose]);
  return (
    <div>
      <div className={`processing-model ${isOpen ? 'show' : 'hide'}`}>
      <div className="modal-content">
            <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        />
        <h2>{loadingMessage}</h2>
      </div>
    </div>
    </div>
  )
}

export default Processing
