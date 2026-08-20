import React from 'react'
import './projects.css'
import projectsData from '../data/projects.json'

import project1 from '../assets/cashflow.png'
import project2 from '../assets/teamForge.png'
import project3 from '../assets/readwiseAI.png'
import project4 from '../assets/loconomics.png'

const mediaMap = {
  project1,
  project2,
  project3,
  project4,
}

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-content">
        <div className="projects-text">
          <h5>/ Portfolio Projects</h5>
          <h3>Selected <span>Works Samples</span></h3>
          <p>A focused set of projects that reflect how I think, build, and solve problems across the stack.</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const mediaSrc = mediaMap[project.mediaKey] || project.mediaSrc || project.mediaKey
            const isImage = typeof mediaSrc === 'string' && /\.(png|jpe?g|webp|svg|gif|avif)(\?.*)?$/i.test(mediaSrc)
            const isVideo = !isImage && (project.mediaType === 'video' || (typeof mediaSrc === 'string' && /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(mediaSrc)))

            return (
              <div 
                key={project.id} 
                className="project-card"
                tabIndex={0}
                role="region"
                aria-label={project.title}
              >
                <div className="project-media-wrapper">
                  {isVideo ? (
                    <video 
                      src={mediaSrc} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="project-media" 
                    />
                  ) : (
                    <img 
                      src={mediaSrc} 
                      alt={project.title || 'Portfolio Project'} 
                      className="project-media" 
                    />
                  )}
                </div>

                {/* Hover Text & Details Overlay */}
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <div className="project-overlay-header">
                      {project.category && (
                        <span className="project-category-badge">{project.category}</span>
                      )}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target={project.link.startsWith('http') ? '_blank' : '_self'} 
                          rel="noopener noreferrer" 
                          className="project-link-btn"
                          aria-label={`Open ${project.title}`}
                          onClick={(e) => {
                            if (project.link === '#' || !project.link) e.preventDefault();
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>
                      )}
                    </div>

                    <div className="project-overlay-body">
                      <h4 className="project-title">{project.title}</h4>
                      {project.description && (
                        <p className="project-description">{project.description}</p>
                      )}
                    </div>

                    {project.tags && project.tags.length > 0 && (
                      <div className="project-tags">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="project-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects

