import React from 'react'
import '../SubjectCard/subjectCardStyles.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SubjectCardSkeleton({ quantity }) {

  return (
    <>
      {Array(quantity).fill(0).map((_, index) => (
        <div key={index} className="card card__custom">
          <Skeleton className='card-img-top' />
          <div className="card-body">
            <h4 className="card-title card-title__custom fw-bold"><Skeleton width={'150px'} duration={2} /></h4>
            <ul className='ul-card'>
              <li>
                <p className='card-text'>
                  <span className='fw-bold'><Skeleton width={'100%'} duration={2} /> </span>
                </p>
              </li>
              <li>
                <p className='card-text'>
                  <span className='fw-bold'><Skeleton width={'100%'} duration={2} /> </span>
                </p>
              </li>
              <li>
                <p className='card-text'>
                  <span className='fw-bold'> </span><Skeleton width={'90px'} duration={2} />
                </p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

export default SubjectCardSkeleton