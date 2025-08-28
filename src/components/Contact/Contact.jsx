import { useState, useRef, useEffect } from "react";
import validator from "validator";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Contact.css"; 
import { formFields, contactItems } from "../../constants/index.jsx";
import { slideBottom } from "../../utility/animation";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  const SERVICE_ID = "service_gmmbl9f";
  const TEMPLATE_ID = "template_7pfqc3p";
  const PUBLIC_KEY = "326QzKS8XKYB1TRUg";

  
  const hasError = (fieldName) => !!errors[fieldName];

  const getContactItemClass = (index) => {
    if (index === 0 || index === 2) return "tilt-left";
    if (index === 1) return "tilt-right";
    return "";
  };

  const validateFields = (data, fieldName = "") => {
    const newErrors = { name: "", email: "", message: "" };

    if (validator.isEmpty(data.name.trim())) {
      newErrors.name ||= "姓名為必填欄位";
    }
    if (data.name.length > 50) {
      newErrors.name ||= "姓名不能超過50個字元";
    }

    if (validator.isEmpty(data.email.trim())) {
      newErrors.email ||= "電子郵件為必填欄位";
    }
    if (!validator.isEmail(data.email)) {
      newErrors.email ||= "請輸入有效的電子郵件格式";
    }
    if (data.email.length > 100) {
      newErrors.email ||= "電子郵件不能超過100個字元";
    }

    if (validator.isEmpty(data.message.trim())) {
      newErrors.message ||= "訊息為必填欄位";
    }
    if (data.message.length < 10) {
      newErrors.message ||= "訊息至少需要10個字元";
    }
    if (data.message.length > 1000) {
      newErrors.message ||= "訊息不能超過1000個字元";
    }

    return fieldName
      ? { ...errors, [fieldName]: newErrors[fieldName] }
      : newErrors;
  };

  const handleBlur = (e) => {
    const newErrors = validateFields(form, e.target.name);
    setErrors(newErrors);
  };

  const clearError = (fieldName) => {
    setErrors((prev) => ({ ...prev, [fieldName]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateFields(form);
    setErrors(newErrors);

    const inputs = formRef.current.elements;
    for (let i = 0; i < inputs.length; i++) {
      if (
        (inputs[i].nodeName === "INPUT" || inputs[i].nodeName === "TEXTAREA") &&
        hasError(inputs[i].name)
      ) {
        inputs[i].focus();
        return;
      }
    }

    setLoading(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Yi",
          from_email: form.email,
          to_email: "po910216@gmail.com",
          message: form.message
        },
        PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: "已成功發送！",
          text: "感謝您的訊息，我會盡快回覆您。",
          icon: "success",
          confirmButtonText: "OK",
          customClass: { confirmButton: "my-confirm-button" }
        });
        setForm({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        Swal.fire({
          title: "發送失敗",
          text: "請稍後再試一次，或以其他方式聯絡。",
          icon: "error",
          confirmButtonText: "OK",
          customClass: { confirmButton: "my-confirm-button" }
        });
      });
  };


  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="contact-section">
      <motion.div
        className="contact-title"
        variants={slideBottom(0.2)}
        initial="initial"
        whileInView="animate"
      >
        Contact
      </motion.div>

      <div className="contact-container">
        {/* 左邊聯絡資訊 */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
       
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className={`contact-item ${getContactItemClass(index)}`}
            >
              <div className="contact-icon">
                <div>{item.icon}</div>
              </div>
              <div className="contact-details">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 右邊表格 */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3>發送訊息</h3>
          <form onSubmit={handleSubmit} ref={formRef}>
            {formFields.map((field, index) => (
              <div
                key={field.name}
                className="form-group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${(index + 3) * 0.1}s`
                }}
              >
                <label htmlFor={field.name}>{field.label}</label>
                {field.type !== "textarea" ? (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    placeholder={field.placeholder}
                    className={`form-control ${
                      hasError(field.name) ? "error" : ""
                    }`}
                    required={field.required}
                    onBlur={handleBlur}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        [field.name]: e.target.value
                      }))
                    }
                    onInput={() => clearError(field.name)}
                  />
                ) : (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={form[field.name]}
                    placeholder={field.placeholder}
                    className={`form-control textarea ${
                      hasError(field.name) ? "error" : ""
                    }`}
                    required={field.required}
                    rows="5"
                    onBlur={handleBlur}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        [field.name]: e.target.value
                      }))
                    }
                    onInput={() => clearError(field.name)}
                  />
                )}
                {errors[field.name] && (
                  <div className="error-message">{errors[field.name]}</div>
                )}
              </div>
            ))}

            <div className="form-group">
              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
                style={{ opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "發送中..." : "發送訊息"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
