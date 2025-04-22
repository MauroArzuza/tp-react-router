import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Se definen las interfaces Estudiante y Curso
interface Estudiante {
  id: number;
  nombre: string;
  edad: number;
}

interface Curso {
  id: number;
  nombre: string;
  estudiantes: Estudiante[];
}

export const CursosScreen = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/cursos")
      .then((res) => res.json())
      .then((data) => setCursos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex items-center justify-center p-6">
      <div
        style={{ backgroundColor: "#131212" }}
        className="rounded-lg p-6 w-80 text-white border border-white shadow-black shadow-md"
      >
        <h1 className="text-3xl font-bold mb-8 text-sky-500 text-center">
          Lista de Cursos
        </h1>
        <div className="space-y-4 max-h-80 overflow-auto">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="bg-slate-800 p-4 rounded shadow-md border border-transparent hover:border-white transition-all duration-200 ease-in-out"
              onClick={() => navigate(`/estudiantes?curso=${curso.id}`)}
            >
              <h3 className="text-xl font-semibold text-sky-300">
                {curso.nombre}
              </h3>
              <p className="text-sm mt-1">
                Cantidad de estudiantes: {curso.estudiantes.length}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
