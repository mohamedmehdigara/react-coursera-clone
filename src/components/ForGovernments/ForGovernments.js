import React from 'react';
import "./ForGovernments.css";

const ForGovernments = () => {
  return (
    <div className="forgovernment-container">
      <h1>Coursera for Government</h1>
      <div className="why-coursera">
        <h2>Why Coursera</h2>
        <p>
          Drive sustainable economic growth and build a competitive workforce with online learning
          from leading universities and companies.
        </p>
        <div className="statistics">
          <div>
            <span>1</span>
            <p>new job is created for every 30 people trained online*</p>
          </div>
          <div>
            <span>71%</span>
            <p>of learners on the Coursera platform report career benefits</p>
          </div>
        </div>
      </div>
      <div className="career-solutions">
        <h2>Choose the right career solutions for your citizens and employees</h2>
        <div className="train-citizens">
          <h3>Citizen Workforce Development</h3>
          <p>
            Enable your workforce to develop job-relevant skills to help reduce unemployment and
            increase economic competitiveness.
          </p>
        </div>
        <div className="train-employees">
          <h3>Government Employee Upskilling</h3>
          <p>
            Build the skilled workforce needed to improve service efficiency and drive performance
            results.
          </p>
        </div>
      </div>
      <div className="grow-talent">
        <h2>Grow your talent and economy with the world’s leading skills platform</h2>
        <div className="world-class-content">
          <h3>World-Class Content</h3>
          <p>Empower your learners with world-class training and credentials from 275+ leading universities and companies.</p>
        </div>
        <div className="in-demand-skills">
          <h3>In-Demand Skills</h3>
          <p>Offer training in data, technology, and leadership skills.</p>
        </div>
        <div className="hands-on-learning">
          <h3>Hands-on Learning</h3>
          <p>Enable applied learning through real-world assessments and projects.</p>
        </div>
        <div className="actionable-insights">
          <h3>Actionable Insights</h3>
          <p>Track, measure, and benchmark learner progress to guide training strategies.</p>
        </div>
      </div>
      <div className="get-in-touch">
        <h2>Get in touch with our team to learn more</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Job Title" />
            <input type="text" placeholder="Work Email" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Organization Name" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <select>
              <option value="">Which best describes your needs:</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              {/* Add more options as needed */}
            </select>
            <input type="text" placeholder="Country" />
          </div>
          <div className="form-group">
            <textarea placeholder="Please briefly describe your needs"></textarea>
          </div>
          <button type="submit">Request info</button>
        </form>
      </div>
    </div>
  );
};

export default ForGovernments;
