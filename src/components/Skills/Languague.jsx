import { useState } from "react";
import ReactDOM from "react-dom";
import { languages } from "../../constants";
import "./Skills.css";


const Language = () => {
  const [selected, setSelected] = useState(null);

  const openModal = (lang) => {
    setSelected(lang);
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <section className="languageGrid">
      {languages.map((lang) => (
        <div key={lang.name} className="card">
          <img src={lang.flag} alt={`${lang.name} flag`} className="flag" />
          <h3 className="langName">{lang.name}</h3>
          <p className="certificate">{lang.certificate}</p>
          <button className="viewBtn" onClick={() => openModal(lang)}>
            查看證書
          </button>
        </div>
      ))}

      {selected &&
        ReactDOM.createPortal(
          <div className="modalBackdrop" onClick={closeModal}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()} // 防止冒泡
            >
              <img src={selected.image} alt="" className="modalImage" />
              <h4>
                {selected.name} - {selected.certificate}
              </h4>
              <button className="closeBtn" onClick={closeModal}>
                關閉
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

export default Language;
