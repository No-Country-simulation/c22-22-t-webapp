import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../../SubjectStats/subjectStatsStyles.css'

function SubjectStatsSkeleton() {
  const CustomSkeleton = ({ width, height, circle, ...rest }) => (
    <Skeleton
      width={width}
      height={height}
      circle={circle}
      duration={1.6}
      {...rest}
    />
  );
  return (
    <div className="student-stats-container mb-5">
      {/* Attendance */}
      <div className="stat-container">
        <div>
          <h3><CustomSkeleton width={100} /></h3>
          <p><CustomSkeleton width={100} /></p>
          <div>
            <i className='icon'><CustomSkeleton width="2rem" height="2rem" circle /></i>
            <p><CustomSkeleton width={100} /></p>
          </div>
        </div>
        <i><CustomSkeleton width="2rem" height="2rem" circle /></i>
      </div>

      {/* Delivers */}
      <div className="stat-container">
        <div>
          <h3><CustomSkeleton width={100} /></h3>
          <p><CustomSkeleton width={100} /></p>
          <div>
            <i className='icon'><CustomSkeleton width="2rem" height="2rem" circle /></i>
            <p><CustomSkeleton width={100} /></p>
          </div>
        </div>
        <i><CustomSkeleton width="2rem" height="2rem" circle /></i>
      </div>

      {/* Behavior */}
      <div className="stat-container">
        <div>
          <h3><CustomSkeleton width={100} /></h3>
          <p><CustomSkeleton width={100} /></p>
          <div>
            <i className='icon'><CustomSkeleton width="2rem" height="2rem" circle /></i>
            <p><CustomSkeleton width={100} /></p>
          </div>
        </div>
        <i><CustomSkeleton width="2rem" height="2rem" circle /></i>
      </div>

      {/* Professor */}
      <div className="stat-container">
        <div>
          <h3><CustomSkeleton width={100} /></h3>
          <p><CustomSkeleton width={100} /></p>
        </div>
      </div>
    </div>
  );
}

export default SubjectStatsSkeleton