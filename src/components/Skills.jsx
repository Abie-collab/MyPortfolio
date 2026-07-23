import { Container } from 'react-bootstrap';
import { FaTools, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaPhp, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiLaravel, SiMysql, SiMongodb } from 'react-icons/si';

const Skills = () => {
  // Define your skills and their corresponding icons
  const skillsList = [
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
    { name: 'PHP', icon: <FaPhp color="#777BB4" /> },
    { name: 'Laravel', icon: <SiLaravel color="#FF2D20" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'Git/GitHub', icon: <FaGitAlt color="#F05032" /> },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        {/* Heading with Icon */}
        <div className="d-flex align-items-center mb-4">
          <FaTools className="text-primary me-2" size={20} />
          <h2 className="fw-bold mb-0 h4">Tech stack</h2>
        </div>

        {/* Skills Grid / Flex Wrap */}
        <div className="d-flex flex-wrap gap-2">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-pill d-flex align-items-center">
              <span className="me-2 d-flex align-items-center">
                {skill.icon}
              </span>
              <span className="fw-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;