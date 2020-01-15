import React from 'react'
import './style.css'

export default function DeveloperItem({ developer }) {
    return(        
        <li key={developer._id} className="developer-item">
        <header>
          <img src={developer.avatar_url} alt={developer.name} />
          <div className="user-info">
            <strong>{developer.name}</strong>
          </div>
        </header>
        <p>{developer.bio}</p>
        <a href={`https://github.com/${developer.github_username}`}>Acessar perfil no Github</a>
      </li>
    )
}