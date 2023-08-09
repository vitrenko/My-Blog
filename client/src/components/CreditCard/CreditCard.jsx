import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

export default function CreditCard() {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 450,
    height: 250,
    padding: "20px 0",
    margin: "0 auto",
    border: "2px solid #0a0a94",
    borderRadius: 10,
  };

  const magneticStripe = {
    width: 446,
    height: 50,
    background: "#000",
    marginBottom: 30,
  }

  return (
    <div style={cardStyle}>
      <div style={magneticStripe}></div>
      <PaymentInputsWrapper {...wrapperProps}>
        <svg {...getCardImageProps({ images })} />
        <input {...getCardNumberProps()} />
        <input {...getExpiryDateProps()} />
        <input {...getCVCProps()} />
      </PaymentInputsWrapper>
    </div>   
  );
}