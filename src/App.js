import "./App.css";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";

const images = [image1, image2, image3, image4];

function App() {
    const carrosel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
    }, []);

    return (
        <div className="App">
            <motion.div
                ref={carrosel}
                className="carrosel"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {images.map((image) => (
                        <motion.div className="item" key={image}>
                            <img src={image} alt="" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default App;
