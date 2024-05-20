'use client'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';

interface FormData {
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  vehiculo: string;
}

const VehicleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    dni: '',
    telefono: '',
    vehiculo: '',
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const message = `¡Hola! Quiero un plan Chevrolet. \nNombre: ${formData.nombre}\nApellido: ${formData.apellido}\nDNI: ${formData.dni}\nTeléfono: ${formData.telefono}\nVehículo: ${formData.vehiculo}`;
    const phoneNumber = '91137606705'; // Reemplaza con tu número de WhatsApp en formato internacional, sin el '+'.
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const emailParams: Record<string, string> = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      dni: formData.dni,
      telefono: formData.telefono,
      vehiculo: formData.vehiculo,
    };

    try {
      await emailjs.send('service_653h3e1', 'template_0aoa3g9', emailParams, 'fQf_Pyn1kiMZsgd14');
      alert('Formulario enviado con éxito por correo.');
      
      // Redirigir a la página de confirmación
      router.push('/vehicleformconfirmation');
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert('Error al enviar el formulario por correo: ' + error.message);
      } else {
        alert('Error desconocido al enviar el formulario por correo.');
      }
    }

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Apellido</label>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">DNI</label>
        <input
          type="text"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Teléfono</label>
        <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Modelo de Vehículo</label>
        <select
          name="vehiculo"
          value={formData.vehiculo}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        >
          <option value="">Seleccionar...</option>
          <option value="Tracker">Tracker LTAT</option>
          <option value="Tracker">Tracker MTAT</option>
          <option value="S10">S10</option>
          <option value="Onix">Onix</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded mt-4"
      >
        Enviar
      </button>
    </form>
  );
};

export default VehicleForm;
