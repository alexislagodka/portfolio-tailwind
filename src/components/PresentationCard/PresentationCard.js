import React from 'react';
import me from '../../assets/images/me.jpg';
import linkedInLogo from '../../assets/images/LI-In-Bug.png';

export default function PresentationCard() {
    return (
        <div className="card">
            <div className="md:flex">
                <img className="flex-auto md:w-1/3 rounded object-cover" 
                src={me} 
                alt="Pictures of me"/>
                <div className="grid p-4">
                    <div className="grid grid-cols-2">
                        <div className="p-2">
                            <h1>Alexis Lagodka</h1>
                            <h2 className="">Développeur Front-End</h2>
                        </div>
                        <div className="p-2 flex flex-col items-end">
                            <a 
                            href="https://www.linkedin.com/in/alexis-lagodka/"
                            className="flex items-center">
                                <img className="h-4"
                                src={linkedInLogo} 
                                alt="LinkedIn logo"/>
                                Mon linkedIn
                            </a>
                        </div>  
                    </div>
                    <div className="p-2">
                        <p className="pb-4">
                        Actuellement technicien dans une communauté d'agglomération, je
                        suis à la recherche de nouveaux défis qui me permettront d'assoir mes compétences en développement web et d'évoluer dans ce domaine que j'affectionne.
                        </p>
                        <p>
                        Rejoindre une équipe et travailler sur des projets stimulants sont des ambitions que j'arbore et cela me permettrait de m'épanouir professionnellement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
