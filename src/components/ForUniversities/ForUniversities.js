import React from 'react';

const ForUniversities = () => {
  return (
    <div className="foruniversities-container">
      <h1>Coursera for Campus</h1>
      <div className="why-coursera">
        <h2>Why Coursera</h2>
        <p>
          Equip students with the most in-demand skills and prepare them for job success.
        </p>
        <div className="statistics">
          <div>
            <span>76%</span>
            <p>Students are 76% more likely to enroll in a degree program that offers industry micro-credentials*</p>
          </div>
          <div>
            <span>88%</span>
            <p>of employers believe that Professional Certificates strengthen a candidate’s job application</p>
          </div>
          <div>
            <span>90%</span>
            <p>of students agree that a Professional Certificate will help them secure a job</p>
          </div>
        </div>
      </div>
      <div className="career-academy">
        <h2>Career Academy</h2>
        <p>
          Strengthen student employability with skills training from the world's leading companies.
        </p>
        {/* Add more content as needed */}
      </div>
      <div className="professional-certificates">
        <h2>Professional Certificates</h2>
        <p>
          A survey of 5,000 students and employers in 11 countries finds that the majority value
          Professional Certificates for driving employment outcomes. Professional Certificates help
          students demonstrate to employers that they are qualified and job-ready.
        </p>
        {/* Add more content as needed */}
      </div>
      <div className="expand-curriculum">
        <h2>Expand your curriculum and empower your faculty</h2>
        <p>
          Deliver practical, job-relevant learning experiences with professional content and courses
          from university and industry experts.
        </p>
        {/* Add more content as needed */}
      </div>
      <div className="join-universities">
        <h2>Join colleges and universities worldwide that choose Coursera for Campus</h2>
        <p>Tecnológico de Monterrey</p>
        <p>University of Michigan</p>
        {/* Add more content as needed */}
      </div>
      {/* Add more content as needed */}
    </div>
  );
};

export default ForUniversities;
