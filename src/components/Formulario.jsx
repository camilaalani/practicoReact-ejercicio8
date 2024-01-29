import React, { useState } from "react";


function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [camposCompletos, setCamposCompletos] = useState(true);
  const [mensajeError, setMensajeError] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    setMensajeError("");

    if (!nombre || !apellido || !dni || !email) {
        setCamposCompletos(false);
        return;
      }
  
      if (!/^\d{8}$/.test(dni)) {
        setMensajeError("El DNI debe contener exactamente 8 números.");
        return;
      }
  
      if (/^\d+$/.test(email)) {
        setMensajeError("El email no puede contener solo números.");
        return;
      }
  
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        setMensajeError("Ingrese un email válido.");
        return;
      }
  
      if (nombre.length < 3 || nombre.length > 30) {
        setMensajeError("El nombre debe tener entre 3 y 30 caracteres.");
        return;
      }
  
      if (apellido.length < 3 || apellido.length > 30) {
        setMensajeError("El apellido debe tener entre 3 y 30 caracteres.");
        return;
      }
  
      if (dni.length !== 8) {
        setMensajeError("El DNI debe tener exactamente 8 números.");
        return;
      }
  
      if (email.length < 3 || email.length > 30) {
        setMensajeError("El email debe tener entre 3 y 30 caracteres.");
        return;
      }
  
      alert("Datos enviados");
      setNombre("");
      setApellido("");
      setDni("");
      setEmail("");
      setCamposCompletos(true);
    };
}

export default Formulario;
