import React, { useState, useEffect } from "react";
import StudentStats from "../components/Dashboard/StudentStats.jsx";
import PieChart from "../components/Dashboard/PieChart.jsx";
import Calendar from "../components/Dashboard/Calendar.jsx";
import AnnualStats from "../components/Dashboard/AnnualStats.jsx";
import UpcomingEventsCard from "../components/UpcomingEventsCard/UpcomingEventsCard.jsx";

import students from "../mocks/students.json";
import assignmentsData from "../mocks/assignments.json";
import events from '../mocks/events.json';

function Home() {
  const [student, setStudent] = useState(null);
  const [filteredAssignments, setFilteredAssignments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentStudent = students.find((s) => s.id === 1);
      setStudent(currentStudent);

      const studentAssignments = assignmentsData.filter(
        (a) => a.student_id === 1
      );
      setFilteredAssignments(studentAssignments);
    };

    fetchData();
  }, []);

  if (!student) return <p>Lo sentimos, aún no hay datos vinculados al usuario</p>;

  return (
    <div className="landing-page">
      <h1>Mi escritorio</h1>
      <StudentStats
        stats={{
          classes_attended: student.attendance.present,
          total_classes: 100,
          assignments_submitted: 8,
          total_assignments: 10,
          average_grade: student.average_grade,
          term: student.term,
        }}
      />
      <main className="main-stats-section">
        <PieChart attendance={student.attendance} />
        <Calendar assignments={filteredAssignments} />
      </main>
      <AnnualStats performance={student.annual_performance} />
      <section className="events-section">
        <h2>Próximos eventos</h2>
        <div className="upcoming-events">
          {events.map(event => (
            <UpcomingEventsCard
              key={event.id}
              name={event.name}
              description={event.description}
              image1={event.image1}
              image2={event.image2}
              date={event.date}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
