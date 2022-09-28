import {useForm} from "react-hook-form";
import '../CSS/ContactForm.css'
import emailjs from '@emailjs/browser'
import {Element} from 'react-scroll'

export default function ContactForm() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, data, process.env.USER_ID)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

    console.log(watch("example")); // watch input value by passing the name of it

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

                    {/* include validation with required or other standard HTML validation rules */}
                    <input
                        placeholder="Full name"
                        className="form-name"
                        {...register("name", {required: true})}
                    />
                    {errors.name?.type === 'required' && "Please provide your name"}

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
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="form-button" type="submit"/>
                </form>
            </div>
        </>
    );
}