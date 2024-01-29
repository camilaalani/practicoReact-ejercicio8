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

    return (
        <div className="formulario">
          <Form onSubmit={manejarEnvio}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                  setMensajeError("");
                }}
              />
            </Form.Group>
    
            <Form.Group controlId="formApellido">
              <Form.Label className="mt-2">Apellido:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido"
                value={apellido}
                onChange={(e) => {
                  setApellido(e.target.value);
                  setMensajeError("");
                }}
              />
            </Form.Group>
    
            <Form.Group controlId="formDni">
              <Form.Label className="mt-2">DNI:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su DNI"
                value={dni}
                onChange={(e) => {
                  setDni(e.target.value);
                  setMensajeError("");
                }}
              />
            </Form.Group>
    
            <Form.Group controlId="formEmail">
              <Form.Label className="mt-2">Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="correo@correo.com"
                value={email}
                className="mb-3"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMensajeError("");
                }}
              />
            </Form.Group>
    
            {!camposCompletos && (
              <Alert variant="danger">
                Completar todos los campos del formulario.
              </Alert>
            )}
    
            {mensajeError && <Alert variant="danger">{mensajeError}</Alert>}
    
            <Button className="mt-3" variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      );
}

export default Formulario;
