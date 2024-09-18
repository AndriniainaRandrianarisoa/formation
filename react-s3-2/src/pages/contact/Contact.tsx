import { useState } from 'react';
import './contact.css'
import { FormInterface } from '../../service/interface/formInterface';
import { useFormik } from 'formik';
import { object,string } from 'yup';


const Contact = ({handleParentClick}: {handleParentClick: (form: FormInterface) => void}) => {
    const [form, setForm] = useState<FormInterface>({
        title: '',
        content: '',
        email: ''
   })

   const userSchema = object({
    title: string().min(2, "minumum 2 car").required(),
    content: string().required(),
    email: string().email("donne moi email cochon").required()
  });


   const formik = useFormik({
    initialValues: form,
    validationSchema:userSchema,
    onSubmit: values => {
    console.log("🚀 ~ Contact ~ values:", values)
    },

  });


    return (
        <div>
            je suis la page contact
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="">Title</label>
                <input
                    type="text"
                    placeholder="Title" 
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    name="title"
            
                    
                />
                <small className="">{formik.errors.title}</small>
                <label htmlFor="">Message</label>
                <textarea
                    rows={10} cols={30}
                    placeholder="Message"
                    name="content"
                    onChange={formik.handleChange}
                    value={formik.values.content}
                
                ></textarea>
                <small>{formik.errors.content}</small>
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                
                />
                <small>{formik.errors.email}</small>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};



export default Contact;