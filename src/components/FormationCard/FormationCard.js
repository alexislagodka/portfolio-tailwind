import React from 'react'

export default function FormationCard () {
  return (
    <div className='card w-full'>
      <h1>FORMATION</h1>
      <div className='p-2'>
        <h2>Institut des sciences technique de Valencienne 2016-2017</h2>
        <h3>Licence Services Informatique aux organisations mention conception, développement et test logiciels</h3>
        <ul className='list-disc pl-8 pt-4'>
          <li>Système d’exploitation</li>
          <li>Réseaux et messageries d’entreprise</li>
          <li>Génie logiciel et UML</li>
          <li>Programmation objet C++ et Java</li>
          <li>Gestion et progiciels de gestion</li>
          <li>Bases de données avancées</li>
          <li>Technologies des services du web</li>
          <li>Logiciels professionnels</li>
          <li>Anglais technique</li>
          <li>Techniques d’expression</li>
          <li>Vie de l’entreprise</li>
        </ul>
      </div>
      <div className='p-2'>
        <h2>Lycée Carnot de Bruay-La-Buissière 2014-2016</h2>
        <h3>BTS Systèmes Numérique</h3>
        <ul className='list-disc pl-8 pt-4'>
          <li>Télécommunications -Téléphonie</li>
          <li>Informatique - RéseauxInformatiques</li>
          <li>Multimédia - Télédiffusion</li>
          <li>Electronique médicale</li>
          <li>Electronique embarquée</li>
          <li>Bases de données avancées</li>
          <li>Mesure - Instrumentation</li>
          <li>Automatique - Robotique</li>
          <li>Production électronique</li>
        </ul>
      </div>
    </div>
  )
}
