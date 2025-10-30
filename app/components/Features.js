import styles from "../../Styles/Features.module.css";
import { GiWoodPile } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";  
import { FaClock } from "react-icons/fa"; 
import { MdCancel } from "react-icons/md"; 
import { FaPalette } from "react-icons/fa";


export default function Features() {
  return (
    <section className={styles.features}>
      <h2>The Hidden Costs of Traditional Carpentry Work</h2>
        <div className={styles.list}>
        <div><GiWoodPile color="#8B4513" /> Dust, noise, and chaos at home for weeks</div>
        <div><FaTools color="#888" /> Uneven finishing and poor precision</div>
        <div><FaHardHat color="#E6B800" /> Dependence on unskilled labor</div>
        <div><FaClock color="#0070f3" /> Delays and cost overruns</div>
        <div><MdCancel color="#d9534f" /> No warranty or after-sales support</div>
        <div><FaPalette color="#C71585" /> Limited design options and poor material usage</div>
      </div>
    </section>
  );
}
