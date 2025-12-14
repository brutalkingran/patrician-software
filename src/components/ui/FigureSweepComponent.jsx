import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

const FigureSweepComponent = ({ children, extraStyle }) => {
  const items = Array.isArray(children) ? children : [children];
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [onScreen, setOnScreen] = useState(false);
  const [canceled, setCanceled] = useState(false);

  const onChangePage = (n, stopAuto = false) => {
    if (stopAuto) setCanceled(true);
    setDirection(n);
    setCurrentPage((prev) => {
      let next = prev + n;
      if (next >= items.length) next = 0;
      if (next < 0) next = items.length - 1;
      return next;
    });
  };

  useEffect(() => {
    if (!onScreen || canceled) return;

    const interval = setInterval(() => {
      onChangePage(1);
    }, 8000);

    return () => clearInterval(interval);
  }, [onScreen, canceled, currentPage]);

  return (
    <motion.div
      className={`relative items-center justify-center w-full max-w-4xl aspect-3/1 mx-auto ${extraStyle}`}
      viewport={{ margin: "0px" }}
      onViewportEnter={() => setOnScreen(true)}
      onViewportLeave={() => setOnScreen(false)}
    >
      {/* Arrows */}
      {items.length > 1 && (
        <>
          <IoIosArrowBack
            className="absolute left-4 top-1/2 -translate-y-1/2
             cursor-pointer hover:scale-110 transition-all z-20
             bg-[#f5f5f5]/80 p-1 rounded-full
             md:w-10 md:h-10 w-8 h-8"
            onClick={() => onChangePage(-1, true)}
            color="#1a1a1a"
          />

          <IoIosArrowForward
            className="absolute right-4 top-1/2 -translate-y-1/2
            cursor-pointer hover:scale-110 transition-all z-20
            bg-[#f5f5f5]/80 p-1 rounded-full
            md:w-10 md:h-10 w-8 h-8"
            onClick={() => onChangePage(1, true)}
            color="#1a1a1a"
          />

          {/* Dots */}
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-20 flex gap-2 z-20">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCanceled(true);
                  setDirection(index > currentPage ? 1 : -1);
                  setCurrentPage(index);
                }}
                className={`
              w-3 h-3 rounded-full transition-all duration-300 shadow-[#1a1a1a] cursor-pointer shadow-[0.9px_1px_1px_rgb(0_0_0_/_1)]
              ${currentPage === index ? "bg-gray-400 scale-125" : "bg-gray-300 hover:bg-gray-500"}
            `}
              />
            ))}
          </div>
        </>
      )}

      {/* Slides */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentPage}
          className="absolute w-full h-full"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
        >
          {items[currentPage]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default FigureSweepComponent;
