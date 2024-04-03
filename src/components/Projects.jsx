import PropTypes from "prop-types";


function Projects({ projects }) {

    return (
        projects.map((myProject, index) => (
            <article key={myProject.nameProject} >
                <h2>{myProject.nameProject}</h2>
                <img className="image_projet" src={myProject.image} alt={myProject.nameProject} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi aperiam sint nisi nam molestias itaque amet qui eum eveniet dicta molestiae unde quidem quo cumque alias reiciendis ipsam dolorum!</p>
            </article>
        ))
    )
}

Projects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            nameProject: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })).isRequired
}


export default Projects;