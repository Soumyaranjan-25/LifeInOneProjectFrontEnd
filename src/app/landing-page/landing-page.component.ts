import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Feature {
    appId: number;
    appName: string;
    icon: string;
}

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
    features = [
        {
          title: 'Contact Management',
          description: 'Easily organize personal and professional contacts, add notes, and set reminders. Ideal for quick access to details with powerful search and grouping features.',
          image: 'assets/Feature/contact.jfif',
          link: '/contact'
        },
        {
          title: 'Document Storage',
          description: 'Safely store, access, and organize essential documents. With secure file storage, categorize your files and retrieve them anytime, anywhere.',
          image: 'assets/images/document.jpg',
          link: '/document'
        },
        {
          title: 'Task Scheduler',
          description: 'Plan, prioritize, and track your tasks effortlessly. Set reminders and deadlines to stay on top of your schedule, ensuring productivity every day.',
          image: 'assets/images/tasks.jpg',
          link: '/tasks'
        },
        {
          title: 'Photo Gallery',
          description: 'Organize and access your photos in a well-structured gallery. Create albums, add tags, and relive memories with a convenient and secure storage space.',
          image: 'assets/images/photos.jpg',
          link: '/photos'
        },
        {
          title: 'Financial Tracker',
          description: 'Monitor your finances with ease. Track income, expenses, and savings, set monthly budgets, and gain insights to achieve financial goals effectively.',
          image: 'assets/images/finance.jpg',
          link: '/finance'
        },
        {
          title: 'Notes and Memos',
          description: 'Capture ideas, reminders, or important information instantly. Organize and access your notes with ease using tags and search functionality.',
          image: 'assets/images/notes.jpg',
          link: '/notes'
        },
        {
          title: 'Health & Fitness Tracker',
          description: 'Log workouts, monitor health metrics, and track your fitness goals. Stay motivated with detailed insights and personalized progress updates.',
          image: 'assets/images/fitness.jpg',
          link: '/fitness'
        },
        {
          title: 'Events and Calendar',
          description: 'Organize events and manage your schedule. Set reminders for birthdays, meetings, and special occasions, so you’re always prepared.',
          image: 'assets/images/calendar.jpg',
          link: '/calendar'
        },
        {
          title: 'Goal Planner',
          description: 'Define and track goals with milestones. Use this planner to break down large goals, monitor progress, and celebrate achievements.',
          image: 'assets/images/goals.jpg',
          link: '/goals'
        },
        {
          title: 'Expense Splitter',
          description: 'Easily manage shared expenses and split bills. Ideal for group expenses, you can track payments, calculate splits, and keep everything transparent.',
          image: 'assets/images/splitter.jpg',
          link: '/splitter'
        }
      ];
      

    constructor(private router: Router) {}

    scrollToSection(section: string) {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }

    navigateToLogin() {
        this.router.navigate(['/login']);
    }
}
