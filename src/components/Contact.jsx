import { useState, useRef } from "react";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import SectionWrapper from "../hoc/sectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Please, enter at least 2 characters.")
    .required("Please, enter your name."),
  email: Yup.string()
    .email("Please, enter a valid email address.")
    .required("Please, enter your email."),
  message: Yup.string()
    .min(10, "Please, enter at least 10 characters.")
    .required("Please, enter your message."),
});

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);

    const userMessage = {
      from_name: values.name,
      to_name: "Anjil Neupane",
      from_email: values.email,
      to_email: "angilneupane222@gmail.com",
      message: values.message,
    };

    const autoReply = {
      to_name: values.name,
      from_email: "angilneupane222@gmail.com",
      from_name: "Anjil Neupane",
      user_email: values.email,
      reply_to: "angilneupane222@gmail.com",
    };

    emailjs
      .send(
        "service_09cvhpn",
        "template_3innc07",
        userMessage,
        "pz2YSRjJxlb0-NOJZ"
      )
      .then(
        async () => {
          setLoading(false);
          try {
            await emailjs.send(
              "service_09cvhpn",
              "template_s0twlcp",
              autoReply,
              "pz2YSRjJxlb0-NOJZ"
            );
          } catch (error) {
            console.log("Auto-reply failed:", error);
          }
          resetForm();
          alert(
            "Thank you for your message. I will get back to you as soon as possible."
          );
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(
            "Apologies, but there seems to be a problem. Please try again."
          );
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form ref={formRef} className="flex flex-col gap-8 mt-12">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <Field
                  type="text"
                  name="name"
                  placeholder="What's Your Name?"
                  className={`bg-tertiary py-4 px-6 rounded-lg font-medium text-white outline-none placeholder:text-secondary ${
                    errors.name && touched.name ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 mt-1 ml-3"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <Field
                  type="email"
                  name="email"
                  placeholder="What's Your Email?"
                  className={`bg-tertiary py-4 px-6 rounded-lg font-medium text-white outline-none placeholder:text-secondary ${
                    errors.email && touched.email ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1 ml-3"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <Field
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="What do you want to say?"
                  className={`bg-tertiary py-4 px-6 rounded-lg font-medium text-white outline-none placeholder:text-secondary ${
                    errors.message && touched.message ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 mt-1 ml-3"
                />
              </label>
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="text-white bg-tertiary py-3 px-8 rounded-xl font-bold outline-none shadow-md shadow-primary"
                >
                  {loading ? "Sending" : "Send"}
                </motion.button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Contact, "contact");
