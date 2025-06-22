import styles from './Projects.module.css';


const projects = [
    {
        title: 'Fuel Hound',
        description: 'A web based app that utilizes the UKs open road data scheme. to find the cheapest fuel for a user by postcode',
        tech: ['Python', 'Flask', 'APIs'],
        github: 'https://github.com/Darbyshire64/FuelHound',
        live: 'https://fuel.lawridarbyshire.co.uk'
    },
    {
        title: 'Portfolio Website',
        description: 'This portfolio site is built in react and styled with a nord inspired colour scheme',
        tech: ['React', 'CSS Modules', 'NPM'],
        github: 'https://github.com/Darbyshire64/Portfolio',
        live: 'https://lawridarbyshire.co.uk'
    },
    {
        title: 'Musical Lighting Design',
        description: 'Ive Been Designing some lighting for diffrent musicals so far im working on alladin. soon ill upload it to a central repository',
        tech: ['DMX', 'MyDMX', 'Stage Tech'],
    }
]

function Projects() {
    return (
        <section id='Projects' className={styles.projects}>
            <h2 className={styles.title}>My Projects</h2>
            <div className={styles.projectList}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDesc}>{project.description}</p>
                        </div>
                        <ul className={styles.techList}>
                            {project.tech.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                        <div className={styles.links}>
                            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">View Code</a>}
                            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">View Project</a>}
                        </div>    
                    </div>
                ))}
            </div>
        </section>
    )
}


export default Projects