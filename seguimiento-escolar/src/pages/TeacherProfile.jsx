import React, { useEffect, useState } from 'react'
import { getAll } from '../services/teachers';
import { useParams } from 'react-router-dom';
import TeacherInfo from '../components/TeacherSummary/TeacherInfo';
import TeacherSchedule from '../components/TeacherSummary/TeacherSchedule';
import Loader from '../components/Loader/Loader'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function TeacherProfile() {
  const [teacher, setTeacher] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  let { year, idSubject, idTeacher } = useParams();
  // We use import.meta.glob to load all images  
  const images = import.meta.glob('../assets/teachers/*', { eager: true });
  const colors = ['#A79DE8', '#F4A258', '#708C82', '#303972'];

  useEffect(() => {
    const fetchTeacher = () => {
      try {
        const data = getAll();
        if (data && Array.isArray(data) && data.length > 0) {
          // Busca el profesor asignado

          const teacherAssigned = data.find(
            (item) => item.subject.id_subject == idSubject /* && item.subject.subject_year == year */
          );

          if (teacherAssigned) {
            setTeacher(teacherAssigned);
          } else {
            setTeacher(null);
          }
        } else {
          console.error("Los datos obtenidos no son un arreglo o están vacíos.");
        }
      } catch (error) {
        console.error("Error obteniendo info de materia:", error);
      }
    };

    if (isLoading) {
      setTimeout(() => {
        fetchTeacher();
        setisLoading(false);
      }, 1000);
    }
  }, [idTeacher, isLoading]);

  return (
    <div className="container py-4">
      <h1 className="text-center fw-bold mb-4">Detalle del profesor</h1>
      {
        isLoading ? (
          <Loader />
        ) : (
          <div className="row g-4">
            <TeacherInfo
              photo={images[`../assets/teachers/${teacher.photo}`]?.default}
              name={teacher?.name}
              subject={teacher?.subject?.name}
              nationality={teacher?.nationality}
              phoneNumber={teacher?.phone_number}
              email={teacher?.email}
              professionalProfile={teacher?.professional_profile}
              educations={teacher?.educations}
              experiences={teacher?.experiences}
            />
            <TeacherSchedule
              schedules={teacher.schedules}
              colors={colors}
            />
          </div>
        )
      }
    </div>
  )
}

export default TeacherProfile