import { Routes } from '@angular/router';
import { Notes } from './components/notes/notes';
import { Pagenotfound } from './components/pagenotfound/pagenotfound';
import { Note } from './components/note/note';
import { About } from './components/about/about';
import { AboutProjects } from './components/about-projects/about-projects';
import { AboutSponsors } from './components/about-sponsors/about-sponsors';

export const routes: Routes = [
    {
        path: 'notes',
        title: 'Notes',
        component: Notes,
    },
    {
        path: 'notes/:id',
        title: 'Note',
        component: Note,
    },
    {
        path: 'about',
        title: 'About',
        component: About,
        children: [
            {
                path: 'projects',
                title: 'About Projects',
                component: AboutProjects
            },
            {
                path: 'sponsors',
                title: 'About Sponsors',
                component: AboutSponsors
            }
        ]

    },
       
    /* {
        path: '', 
        redirectTo: '/notes', 
        pathMatch: 'full'
    } */
   {
    path: "**",
    title: "Not Found",
    component: Pagenotfound
   }
];
