import { Routes } from '@angular/router';
import { Auth } from './core/services/auth';
import { adminGuard } from './core/guards/admin-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/pages/login/login').then(m => m.Login)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/pages/dashboard/dashboard').then(m => m.Dashboard),
        canActivate: [Auth]
    },

    {
        path: 'admin/users',
        loadComponent: () => import('./features/admin/pages/user-management/user-management').then(m => m.UserManagement),
        canActivate: [Auth, adminGuard]
    },

    {
        path: 'news',
        loadComponent: () => import('./features/news/pages/news-list/news-list').then(m => m.NewsList)
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/pages/register/register').then(m => m.Register)
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/pages/home/home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/pages/about/about').then(m => m.About)
    },
    {
        path: 'academics/programs',
        loadComponent: () => import('./features/academics/pages/programs/programs').then(m => m.Programs)
    },
    {
        path: 'academics/courses',
        loadComponent: () => import('./features/academics/pages/courses/courses').then(m => m.Courses)
    },
    {
        path: 'academics/faculty',
        loadComponent: () => import('./features/academics/pages/faculty-list/faculty-list').then(m => m.FacultyList)
    },
    {
        path: 'academics/faculty/:id',
        loadComponent: () => import('./features/academics/pages/faculty-detail/faculty-detail').then(m => m.FacultyDetail)
    },
    {
        path: 'admissions/overview',
        loadComponent: () => import('./features/admissions/pages/overview/overview').then(m => m.Overview)
    },
    {
        path: 'admissions/requirements',
        loadComponent: () => import('./features/admissions/pages/requirements/requirements').then(m => m.Requirements)
    },
    {
        path: 'admissions/apply',
        loadComponent: () => import('./features/admissions/pages/apply-online/apply-online').then(m => m.ApplyOnline)
    },
    {
        path: 'admissions/fees',
        loadComponent: () => import('./features/admissions/pages/fees/fees').then(m => m.Fees)
    },
    {
        path: 'campus/facilities',
        loadComponent: () => import('./features/campus/pages/facilities/facilities').then(m => m.Facilities)
    },
    {
        path: 'campus/gallery',
        loadComponent: () => import('./features/campus/pages/gallery/gallery').then(m => m.Gallery)
    },
    {
        path: 'campus/infrastructure',
        loadComponent: () => import('./features/campus/pages/infrastructure/infrastructure').then(m => m.Infrastructure)
    },
    {
        path: 'news',
        loadComponent: () => import('./features/news/pages/news-list/news-list').then(m => m.NewsList)
    },
    {
        path: 'news/:id',
        loadComponent: () => import('./features/news/pages/news-detail/news-detail').then(m => m.NewsDetail)
    },
    {
        path: 'events',
        loadComponent: () => import('./features/events/pages/events-list/events-list').then(m => m.EventsList)
    },
    {
        path: 'events/:id',
        loadComponent: () => import('./features/events/pages/event-detail/event-detail').then(m => m.EventDetail)
    },
    {
        path: 'student-life/clubs',
        loadComponent: () => import('./features/student-life/pages/clubs/clubs').then(m => m.Clubs)
    },
    {
        path: 'student-life/achievements',
        loadComponent: () => import('./features/student-life/pages/achievements/achievements').then(m => m.Achievements)
    },
    {
        path: 'student-life/placements',
        loadComponent: () => import('./features/student-life/pages/placements/placements').then(m => m.Placements)
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/pages/contact/contact').then(m => m.Contact)
    },
    {
        path: 'grievance',
        loadComponent: () => import('./features/grievance/pages/grievance/grievance').then(m => m.Grievance)
    },
    {
        path: '**',
        loadComponent: () => import('./features/not-found/pages/not-found/not-found').then(m => m.NotFound)
    }
];