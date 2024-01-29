import React, { useState } from "react";


function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [camposCompletos, setCamposCompletos] = useState(true);
  const [mensajeError, setMensajeError] = useState("");
}

export default Formulario;
