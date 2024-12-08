import React, { lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
// import SubjectCard from './SubjectCard';
import SubjectCardSkeleton from '../Skeletons/SubjectCardSkeleton';
const SubjectCard = lazy(() => import('./SubjectCard'));

function LazySubjectCard({ subject, year, image }) {
  const { ref: myRef, inView } = useInView({
    triggerOnce: true, // Renderizar una sola vez
    threshold: 0.20,    // Activar cuando esté el 20% visible
  });

  return (
    <div ref={myRef} className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
      {inView ? (
        <Suspense fallback={<SubjectCardSkeleton quantity={1} />}>
          <SubjectCard
            idSubject={subject?.id_subject}
            year={year}
            nameSubject={subject?.name_subject}
            imageSubject={image}
            teacher={subject?.teacher}
            workload={subject?.workload}
            classroom={subject?.classroom}
          />
        </Suspense>
      ) : (
        <SubjectCardSkeleton quantity={1} />
      )}
    </div>
  );
}

export default LazySubjectCard;
