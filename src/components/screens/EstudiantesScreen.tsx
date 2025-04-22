import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Estudiante {
  id: number;
  nombre: string;
  edad: number;
}

export const EstudiantesScreen = () => {
  const [searchParams] = useSearchParams();
  const cursoId = searchParams.get("curso");

  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);

  useEffect(() => {
    if (cursoId) {
      fetch(`http://localhost:3001/cursos/${cursoId}`)
        .then((res) => res.json())
        .then((data) => setEstudiantes(data.estudiantes))
        .catch((err) => console.error(err));
    }
  }, [cursoId]);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">
        Estudiantes del curso #{cursoId}
      </h1>
      <ul className="space-y-2">
        {estudiantes.map((est) => (
          <li key={est.id} className="bg-slate-700 p-3 rounded">
            {est.nombre} ({est.edad} años)
          </li>
        ))}
      </ul>
    </div>
  );
};
