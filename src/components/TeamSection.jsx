import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { teamMembers } from '../data/team';

const TeamSection = () => {
  const controls = useAnimation();

  // Infinite loop animation
  const startAnimation = async () => {
    const totalWidth = teamMembers.length * 320; // 320px per card (300px width + 20px gap)
    await controls.start({
      x: -totalWidth,
      transition: {
        x: { repeat: Infinity, repeatType: 'loop', duration: 50, ease: 'linear' },
      },
    });
  };

  // Start animation on mount
  React.useEffect(() => {
    startAnimation();
  }, [controls]);

  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300 snap-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#000000] dark:text-[#ffffff]">
            Meet Our Team
          </h2>
          <p className="text-lg text-[#4B5563] dark:text-[#D1D5DB] mb-12 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of professionals drives Zelox’s mission to deliver innovative digital solutions. Get to know the experts behind our success.
          </p>
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-5"
              animate={controls}
              onHoverStart={() => controls.stop()}
              onHoverEnd={startAnimation}
            >
              {[...teamMembers, ...teamMembers].map((member, index) => ( // Duplicate for seamless looping
                <motion.div
                  key={`${member.name}-${index}`}
                  className="w-[300px] bg-[#ffffff] dark:bg-[#000000] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0"
                  variants={cardVariants}
                  whileHover="hover"
                  role="region"
                  aria-label={`Team member ${member.name}`}
                >
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.jobTitle}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-[#000000] dark:text-[#ffffff] mb-2">{member.name}</h3>
                  <p className="text-[#4B5563] dark:text-[#D1D5DB] font-medium mb-2">{member.jobTitle}</p>
                  <p className="text-[#4B5563] dark:text-[#D1D5DB] text-sm">{member.about}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;