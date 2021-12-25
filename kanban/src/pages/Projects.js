import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Projects = () => {
  const projects = useSelector((state) => state.projects.value)

  return (
    <>
      <Link to={`/new-project`}>Create a new project</Link>
      <ul>
        {Object.values(projects).map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
