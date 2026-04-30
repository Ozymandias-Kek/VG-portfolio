import{ useState } from 'react';

function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const programsData = [
    {
      id: 1,
      title: "serVICEyo Caravan",
      details: (
        <>
          <p>This flagship mobile outreach program travels across Laguna to provide free services directly to residents. In April 2026, recent caravans in towns like Bay and Santa Rosa included:</p>
          <ul>
            <li><strong>Health:</strong> Free medical and dental consultations, eye check-ups with free eyeglasses, and cataract screenings.</li>
            <li><strong>Legal:</strong> As a licensed attorney, Atty. Carait provides free legal consultations and document drafting.</li>
            <li><strong>Social Welfare:</strong> Livelihood seminars (e.g., dishwashing liquid and fabric conditioner making), free laboratory tests, haircuts, and hot meals.</li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      title: "Sangguniang Panlalawigan Day",
      details: (
        <p>Held every Monday at the Provincial Capitol, this initiative provides a centralized venue for constituents to access legal aid, job opportunities through the Public Employment Service Office (PESO), and social support.</p>
      )
    },
    {
      id: 3,
      title: 'PhilHealth "Yakap" Day',
      details: (
        <p>Registration and orientation sessions to help residents enroll in the PhilHealth Yakap program for better healthcare coverage.</p>
      )
    },
    {
      id: 4,
      title: "Solo Parent Health Caravan",
      details: (
        <p>Specialized caravans designed specifically for the needs of solo parents, providing targeted medical and legal support.</p>
      )
    },
    {
      id: 5,
      title: "Legislative Role",
      details: (
        <p>As the presiding officer of the 12th Sangguniang Panlalawigan, he coordinates with Governor Sol Aragones to ensure the provincial legislative agenda aligns with the administration's health and development programs.</p>
      )
    }
  ];

  const closeModal = () => setSelectedProgram(null);

  return (
    <section className="programs-section">
      
      <div className="programs-header">
        <h1>Programs & Initiatives</h1>
        <p>
          Atty. JM Carait has implemented a variety of programs over the past few years, both as a longtime Provincial Board Member and more recently as the Vice Governor of Laguna, after winning the 2025 vice gubernatorial race. His initiatives primarily focus on delivering direct healthcare, legal, and social services to local communities.
        </p>
      </div>

      <div className="programs-grid">
        {programsData.map((program) => (
          <div key={program.id} className="prog-card-no-img">
            <h2>{program.title}</h2>
            <button 
              className="read-more-btn"
              onClick={() => setSelectedProgram(program)}
            >
              READ MORE
            </button>
          </div>
        ))}
      </div>

      {selectedProgram && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2>{selectedProgram.title}</h2>
            <div className="modal-body">
              {selectedProgram.details}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Programs;