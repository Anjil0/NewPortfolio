import { useState, useRef } from "react";
import CanvasLoader from "./Loader";
import { EarthCanvas } from "./canvas";
import { styles } from "../style";
import SectionWrapper from "../hoc/sectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's Your Name?"
              className="bg-tertiary py-4 px-6 rounded-lg font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's Your Email?"
              className="bg-tertiary py-4 px-6 rounded-lg font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 rounded-lg font-medium text-white outline-none placeholder:text-secondary"
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
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-350px"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Contact, "contact");
