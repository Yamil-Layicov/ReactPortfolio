import { motion } from "framer-motion";

const Portfolio = () => {
  
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          transition: {
            duration: 1,
          },
          x: -100,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
          x: 0,
        }}
      >
        <h1>
          Bacola <span>Ecommerce</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          transition: {
            duration: 1,
          },
          y: -50,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
          y: 0,
        }}
        className="portfolio"
      >
        
      </motion.div>
    </>
  );
};

export default Portfolio;
