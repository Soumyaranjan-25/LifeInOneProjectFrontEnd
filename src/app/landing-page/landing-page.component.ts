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
      description: 'Easily organize and access personal and professional contacts with added functionality to save notes, group contacts, and set reminders. Enjoy efficient, categorized storage with a powerful search feature. This tool ensures you never lose track of important relationships, making communication smoother and more effective.',
      image: 'assets/Feature/contact_2.jpg',
      link: '/contact'
    },
    {
      title: 'Document Storage',
      description: 'Store, secure, and organize all your essential documents. Categorize and tag files for quick access, ensuring you can retrieve them anytime, anywhere. With robust security measures in place, you can rest assured that your important files are protected against unauthorized access, providing peace of mind.',
      image: 'assets/Feature/document_storage.jpg',
      link: '/document'
    },
    {
      title: 'Task Scheduler',
      description: 'Plan your day with ease using a comprehensive task scheduler. Prioritize tasks, track deadlines, and set reminders to ensure you stay productive and on top of your schedule. The intuitive interface helps you visualize your day, allowing you to allocate time efficiently and manage your responsibilities effectively.',
      image: 'assets/Feature/task_scheduler.jpg',
      link: '/tasks'
    },
    {
      title: 'Photo Gallery',
      description: 'Store and organize your photos in a secure, accessible gallery. Easily create albums, tag images, and revisit cherished memories with structured photo management. With options for sharing and editing, you can enhance your photos and relive your favorite moments whenever you want.',
      image: 'assets/Feature/photo_gallery.jpg',
      link: '/photos'
    },
    {
      title: 'Notes and Ideas',
      description: 'Quickly capture ideas, reminders, and essential information. Organize your notes with tags, and find them fast with an intuitive search tool. Whether it’s a quick thought or a detailed plan, this feature ensures your ideas are always at your fingertips for when you need them.',
      image: 'assets/Feature/idea.webp',
      link: '/notes'
    },
    {
      title: 'Diary',
      description: 'Record daily reflections, thoughts, and experiences in a personal diary. Secure entries and categorize them by date, allowing you to revisit your memories with ease. This feature not only helps you keep track of your life’s journey but also serves as a safe space for self-expression.',
      image: 'assets/Feature/diary.webp',
      link: '/diary'
    },
    {
      title: 'Things To Do',
      description: 'Create a dynamic list of tasks, to-dos, and goals. Stay organized and track your progress with prioritization and notifications for timely completion. This feature helps you break down larger tasks into manageable steps, ensuring you stay motivated and productive throughout the day.',
      image: 'assets/Feature/to_do_list.jpg',
      link: '/todo'
    },
    {
      title: 'Trading Data',
      description: 'Monitor and track stock trades and investments efficiently. Stay updated with market trends, analyze trading data, and manage your portfolio with ease. This feature provides insightful analytics to help you make informed investment decisions and maximize your returns.',
      image: 'assets/Feature/trading_data_2.webp',
      link: '/trading'
    },
    {
      title: 'Balance Sheet',
      description: 'Manage and monitor your personal balance sheet to track income, expenses, assets, and liabilities. Set financial targets and achieve greater control over your financial health. This feature allows you to visualize your financial status and make informed decisions for a more secure future.',
      image: 'assets/Feature/balance_sheet.jpg',
      link: '/balance-sheet'
    }
];

testimonials = [
  { text: "This app is fantastic!", user: "User1" },
  { text: "Helped me organize everything.", user: "User2" },
  // Add more testimonials as needed
];


  constructor(private router: Router) { }

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  setRating(rating: number) {
    console.log(`User rated: ${rating}`);
  }
}
