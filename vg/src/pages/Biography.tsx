// Siguraduhing tama ang path at pangalan ng picture mo dito
import bioImage from '../assets/bio-pic.png'; 

function Biography() {
  return (
    <section className="bio-section">
      <div className="bio-container">
        
        {/* IMAGE COLUMN */}
        <div className="bio-image-col">
          <img src={bioImage} alt="Vice Governor Atty. JM Carait" className="bio-img" />
        </div>

        {/* TEXT COLUMN */}
        <div className="bio-text-col">
          <h1>Atty. Magtangol Jose "JM" Carait III</h1>
          <p>
            Magtangol Jose "JM" Carait III is the current Vice Governor of Laguna, having assumed office on June 30, 2025. An attorney by profession, he is a member of the Lakas–CMD party.
          </p>
          <p>
            Before becoming the province's second-highest official, Atty. JM Carait built a diverse background in local governance:
          </p>
          
          <h3>Public Service Experience</h3>
          <ul>
            <li><strong>Vice Governor (2025–Present)</strong> - He was declared the winner of the vice gubernatorial race on May 13, 2025, defeating several opponents with a decisive mandate. In this role, he leads the Sangguniang Panlalawigan, the provincial legislature, and has initiated programs like "Sangguniang Panlalawigan Day" to provide direct legal and social services to constituents.</li>
            <li><strong>Provincial Board Member</strong> - He previously served as a member of the Laguna Provincial Board for nine years. He represented the 1st District and was known for supporting community sports and non-governmental organizations.</li>
            <li><strong>City Councilor</strong> - He served as a city councilor in Biñan, Laguna, for nearly nine years.</li>
            <li><strong>Barangay Official</strong> - His entry into public service began at the grassroots level, where he served as a barangay official for seven years.</li>
          </ul>
          
          <h3>Professional Background</h3>
          <ul>
            <li><strong>Practicing Lawyer</strong> - He serves as the Owner and CEO of his own law firm.</li>
            <li><strong>Legal Advocacy</strong> - He frequently utilizes his legal expertise in his current office to offer free legal consultations to the public.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Biography;