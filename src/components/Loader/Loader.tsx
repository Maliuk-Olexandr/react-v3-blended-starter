import { ClipLoader } from "react-spinners";
import style from "./Loader.module.css";

export default function Loader() {
  setTimeout(() => {}, 2000);
  return (
    <div className={style.backdrop}>
      {<ClipLoader color="#ffffff" size={80} />}
    </div>
  );
}
