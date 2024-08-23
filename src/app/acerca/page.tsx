"use client";

// about data
const about = {
  title: "Acerca de mi",
  description:
    "Soy un Desarrollador Frontend autodidacta con una pasión insaciable por la tecnología, mi enfoque se centra en crear experiencias de usuario fluidas y visualmente atractivas, Estoy siempre dispuesto a dar lo mejor de mí para alcanzar objetivos y superar expectativas. Estoy entusiasmado por colaborar en proyectos innovadores y contribuir con soluciones eficientes y de alta calidad.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Jesus Torrealba",
    },
    {
      fieldName: "Residencia",
      fieldValue: "Venezuela",
    },
    {
      fieldName: "Estudios",
      fieldValue: "Autodidacta",
    },
    {
      fieldName: "Contacto",
      fieldValue: "+(58) 424 3786509",
    },
  ],
};

import { motion } from "framer-motion";

const Acerca = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-[88vh] flex items-center justify-center py-12 xl:py-0"
    >
      {/*content */}
      <div className="min-h-[70vh] w-full">
        {/*about */}
        <div className="w-full text-center">
          <div className="flex flex-col gap-[30px] items-center">
            <h3 className="text-4xl font-bold text-center">{about.title}</h3>

            <ul className="text-left max-w-[600px]">
              {about.info.map((item, index) => {
                return (
                  <li key={index} className="flex justify-between">
                    <span className="text-white/60">{item.fieldName}:</span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                );
              })}
            </ul>

            <p className="max-w-[600px] text-white/60 text-center">
              {about.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Acerca;
