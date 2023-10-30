import React, { useState } from 'react';
import vg from '../assets/vg.png';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {

    const [inputs, setInputs] = useState({name: "", email: "", message: ""});
    const [disableBtn, setDisableBtn] = useState(false);

    const handleChange = (event) => {
        setInputs({...inputs, [event.target.name]: event.target.value});
    }

    const submitForm = async (event) => {
        event.preventDefault();
        setDisableBtn(true);
        try {
            await addDoc(collection(db, 'portfolio-contacts'), inputs);
            toast.success("Message Sent");
            setInputs({name: "", email: "", message: ""});
            setDisableBtn(false);
        } catch (error) {
            toast.error("Failed to Send Message");
            console.error(error);
            setDisableBtn(false);
        }
    }

    const animations = {
        form: {
            initial: {
                x: '-100%',
                opacity: 0
            },

            whileInView: {
                x: 0,
                opacity: 1
            }
        },

        button: {
            initial: {
                y: '-100%',
                opacity: 0
            },

            whileInView: {
                y: 0,
                opacity: 1
            },

            transition: {
                delay: 0.2
            }
        }
    }

    return (
        <div id='contact'>
            <section>
                <motion.form {...animations.form} onSubmit={submitForm}>
                    <h2>Contact Me</h2>
                    <input type="text" name='name' value={inputs.name} onChange={handleChange} placeholder='Your Name' required />
                    <input type="email" name='email' value={inputs.email} onChange={handleChange} placeholder='Your Email' required />
                    <input type="text" name='message' value={inputs.message} onChange={handleChange} placeholder='Type Message...' required />
                    <motion.button className={disableBtn ? 'disableBtn' : ''} {...animations.button} type='submit' disabled={disableBtn}>Send</motion.button>
                </motion.form>
            </section>
            <aside>
                <img src={vg} alt="graphics" />
            </aside>
        </div>
    )
}

export default Contact;
