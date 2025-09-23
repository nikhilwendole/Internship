import React, { useEffect, useState } from "react";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch patients");
        const data = await res.json();
        const mappedData = data.map((p) => ({
          id: p.id,
          name: p.name,
          age: Math.floor(Math.random() * 60) + 20,
          phone: p.phone,
          email: p.email,
          address: `${p.address.street}, ${p.address.city}`,
        }));
        setPatients(mappedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    if (!newPatient.name || !newPatient.age || !newPatient.phone) return;

    const newEntry = { ...newPatient, id: patients.length + 1 };
    setPatients((prev) => [...prev, newEntry]);
    setNewPatient({ name: "", age: "", phone: "", email: "", address: "" });
  };


  const [isFormOpen, setIsFormOpen] = React.useState(false);


  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
        <p className="ml-4 text-lg font-medium">Loading patients...</p>
      </div>
    );


  if (error)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <p className="text-red-600 text-xl font-bold mb-4">Oops! Something went wrong.</p>
        <p className="text-gray-700">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="min-h-screen px-4 md:px-16 lg:px-24 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Patients</h2>

      <div className="flex justify-center mb-4">

<button
  onClick={() => setIsFormOpen(!isFormOpen)}
  className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 "
>
  {isFormOpen ? "Close Form" : "Add New Patient"}
</button>
</div>
{isFormOpen && (
  <div className="mb-8 bg-white p-6 rounded shadow-md max-w-xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Add New Patient</h3>
    <form onSubmit={handleAddPatient} className="flex flex-col gap-4">
      <input type="text" name="name" placeholder="Name" value={newPatient.name} onChange={handleChange} className="px-4 py-2 border rounded" />
      <input type="number" name="age" placeholder="Age" value={newPatient.age} onChange={handleChange} className="px-4 py-2 border rounded" />
      <input type="text" name="phone" placeholder="Contact" value={newPatient.phone} onChange={handleChange} className="px-4 py-2 border rounded" />
      <input type="email" name="email" placeholder="Email" value={newPatient.email} onChange={handleChange} className="px-4 py-2 border rounded" />
      <input type="text" name="address" placeholder="Address" value={newPatient.address} onChange={handleChange} className="px-4 py-2 border rounded" />
      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
        Add Patient
      </button>
    </form>
  </div>
)}



     
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

     
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPatients.map((patient) => (
          <div key={patient.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">{patient.name}</h3>
            <p>Age: {patient.age}</p>
            <p>Contact: {patient.phone}</p>
            <button
              onClick={() => setSelectedPatient(patient)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      
      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={() => setSelectedPatient(null)}>
              ✖
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedPatient.name}</h3>
            <p><strong>Age:</strong> {selectedPatient.age}</p>
            <p><strong>Contact:</strong> {selectedPatient.phone}</p>
            <p><strong>Email:</strong> {selectedPatient.email}</p>
            <p><strong>Address:</strong> {selectedPatient.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patients;
