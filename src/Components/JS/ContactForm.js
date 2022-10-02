import {useForm} from "react-hook-form";
import '../CSS/ContactForm.css'
import emailjs from '@emailjs/browser'
import {Element} from 'react-scroll'
import {ErrorMessage} from '@hookform/error-message';
import {useState} from "react";

const SERVICE_ID = 'service_9rh1lo4'
const TEMPLATE_ID = 'template_wrxayfb'
const USER_ID = 'user_ONNhRXFDCa0D3ABXXbPqK'
export default function ContactForm() {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const onSubmit = data => emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
        .then(function (response) {
            reset()
            setShowSuccessMessage(true)

            // console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

    const getErrorName = () => {
        if (errors.name) {
            return 'name'
        } else if (errors.email) {
            return 'email'
        } else if (errors.message) {
            return 'message'
        }
    }
    const getErrorText = () => {
        if (errors.name) {
            return 'Please fill out the name field'
        } else if (errors.email) {
            return 'Please fill out the email field'
        } else if (errors.message) {
            return 'Please fill out the message field'
        }
    }
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <>

            <div className="contact-header">
                <Element id="scrollToContact">
                    <img className="header-icons" src={process.env.PUBLIC_URL + "/images/contact.png"} alt=""/>
                    Contact
                </Element>
            </div>

            <div className="contact-form">

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}

                    <ErrorMessage
                        errors={errors}
                        name={getErrorName()}
                        render={() => <div className='error-text'>{getErrorText()}</div>}/>

                    <input
                        placeholder="Full name"
                        className="form-name"
                        {...register("name", {required: true})}
                    />


                    <input
                        placeholder="Email address"
                        className="form-email"
                        {...register("email", {required: true})}
                    />
                    <textarea
                        placeholder="Please submit a detailed message and I will get back to you as soon as possible"
                        className="form-message"
                        {...register("message", {required: true})}
                    />

                    <input className="form-button" type="submit" />


                </form>

            </div>

        </>
    );
}