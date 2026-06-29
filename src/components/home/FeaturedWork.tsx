import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PortfolioCard from "./PortfolioCard";
import { portfolio } from "../../data/portfolio";

const FeaturedWork = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-20 top-40 h-[450px] w-[450px] rounded-full bg-primary/15 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/15 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{
            opacity:0,
            y:40,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          transition={{
            duration:.7,
          }}
          className="mb-20 text-center"
        >

          <p className="mb-4 uppercase tracking-[0.2em] text-primary">
            FEATURED WORK
          </p>

          <h2 className="mb-6 text-5xl font-heading font-bold lg:text-6xl">
            The Work Speaks First. 
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Results are not just a promise here. They are a portfolio entry. 

          </p>

        </motion.div>

        {/* Grid */}

        <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr]">

          <motion.div
            initial={{
              opacity:0,
              x:-40,
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            viewport={{
              once:true,
            }}
          >
            <PortfolioCard
              {...portfolio[0]}
              large
            />
          </motion.div>

          <div className="grid gap-8">

            {portfolio.slice(1).map((item,index)=>(
              <motion.div
                key={item.id}
                initial={{
                  opacity:0,
                  x:40,
                }}
                whileInView={{
                  opacity:1,
                  x:0,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  delay:index*.2,
                }}
              >
                <PortfolioCard {...item}/>
              </motion.div>
            ))}

          </div>

        </div>

        {/* Button */}

        <motion.div
          initial={{
            opacity:0,
            y:30,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          className="mt-20 text-center"
        >

          <Link
            to="/portfolio"
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-white/10
            px-8
            py-4
            font-semibold
            transition-all
            duration-300
            hover:border-primary
            hover:bg-primary/10
          "
          >
            See All Work

            <ArrowRight size={18}/>
          </Link>

        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedWork;
