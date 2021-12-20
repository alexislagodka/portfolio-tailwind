import React from 'react';
import BasicButton from '../Buttons/BasicButton/BasicButton';

export default function ProjectCard(props) {
    return (
        <div className="card md:flex">
            <div className="flex items-center justify-center">
                <img 
                className="min-w-sm max-w-sm rounded"
                src={props.img}/>
            </div>
            <div className="grid grid-rows-4 p-4">
                <div>
                    {props.tags.map(tag => `${tag} ` )}
                </div>
                <h1>{props.title}</h1>
                <div>
                    {props.children}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <BasicButton 
                    handleClick={() => window.open(props.demoUrl)} 
                    color="blue"
                    >Demo</BasicButton>
                    <BasicButton 
                    handleClick={() => window.open(props.gitUrl)} 
                    color="white"
                     >Code</BasicButton>
                </div>
            </div>
        </div>
    )
}
