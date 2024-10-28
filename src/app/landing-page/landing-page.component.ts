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
    { appId: 1, appName: 'Contacts', icon: 'person', description: 'Easily manage and categorize all your contacts in one place.' },
    { appId: 2, appName: 'Documents', icon: 'description', description: 'Store and organize important documents securely.' },
    { appId: 3, appName: 'Time Schedule', icon: 'schedule', description: 'Plan and track your daily activities and appointments.' },
    { appId: 4, appName: 'My Photos', icon: 'photo_library', description: 'Keep your precious memories safe with photo storage.' },
    { appId: 5, appName: 'My Notes', icon: 'note', description: 'Jot down important notes and ideas whenever you need.' },
    { appId: 6, appName: 'Food Routine', icon: 'restaurant', description: 'Track your meal plans and dietary habits effortlessly.' },
    { appId: 7, appName: 'Diary', icon: 'book', description: 'Maintain a daily diary to document your thoughts and memories.' },
    { appId: 8, appName: 'Weakness', icon: 'sentiment_dissatisfied', description: 'Keep track of areas you want to improve.' },
    { appId: 9, appName: 'Things to Do', icon: 'list', description: 'Organize your to-do lists and stay productive.' },
    { appId: 10, appName: 'Trading Data', icon: 'trending_up', description: 'Analyze and record your trading data with ease.' },
    { appId: 11, appName: 'My Balance-sheet', icon: 'book', description: 'Keep track of your financial status and budgeting.' }
  ];

  constructor(private router: Router) {}

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToFeature(appId: number) {
    document.getElementById(`feature-${appId}`)?.scrollIntoView({ behavior: 'smooth' });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
