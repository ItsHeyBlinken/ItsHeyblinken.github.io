# Product Requirements Document: Athlete Recruiting Profile Website Template

**Document Version:** 1.0
**Date:** July 14, 2026
**Author:** Manus AI

## 1. Introduction
This Product Requirements Document (PRD) outlines the specifications for a master template for athlete recruiting profile websites. This template will serve as the foundation for a new service offering by BytesByBlinken LLC, enabling the rapid deployment of personalized, high-quality web profiles for student-athletes. The primary development environment for this project is Cursor, leveraging Chris's existing technical stack and infrastructure.

## 2. Project Goal
The overarching goal is to develop a robust, scalable, and easily customizable web template that can be efficiently deployed for individual athletes. The template must be data-driven, allowing for quick updates to athlete information, statistics, and highlight videos with minimal manual code changes. It should provide a professional online presence for athletes to showcase their skills and academic achievements to college recruiters.

## 3. Target Audience
*   **Primary**: College coaches and athletic recruiters seeking comprehensive information about prospective student-athletes.
*   **Secondary**: Student-athletes and their families who require a professional and easily shareable online profile.

## 4. Key Features
The template must include the following sections and functionalities, drawing inspiration from the reference site (https://skittles-softball.bytesbyblinken.com/):

*   **Hero Section**: Prominent display of athlete's name, sport, class year, primary position, and key statistics (e.g., batting average, RBIs, GPA).
*   **About Section**: Customizable biography highlighting the athlete's dedication, experience, and aspirations.
*   **Athletics Section**: Detailed information on primary/secondary positions, batting/throwing style, current/previous teams, and significant athletic achievements.
*   **Academics Section**: Presentation of GPA, class rank, SAT/ACT scores (if applicable), academic honors, intended major, and extracurricular activities.
*   **Videos Section**: A gallery capable of displaying up to 5 highlight videos (5-10MB each). The gallery should be filterable by category (e.g., "All Videos," "At-Bats," "Training"). Videos will be embedded using standard HTML5 `<video>` tags.
*   **Statistics Section**: A clear, tabular or grid-based display of detailed season statistics.
*   **Contact Section**: Easy access to athlete's contact information (email, phone, location) and a prominent call-to-action for recruiters.
*   **Downloadable Recruitment Packet**: A link to a downloadable PDF document containing a comprehensive profile sheet.
*   **Responsive Design**: The website must be fully responsive and optimized for viewing across various devices, particularly mobile phones.
*   **SEO-Friendly**: Basic SEO considerations (e.g., semantic HTML, meta tags) to ensure discoverability.

## 5. Technical Specifications

### 5.1. Core Technologies
*   **Frontend Framework**: React (using Vite for fast development and bundling).
*   **Styling**: Tailwind CSS for utility-first styling and rapid UI development.
*   **Language**: TypeScript (optional, but recommended for type safety and maintainability).

### 5.2. Data Structure
The site content for each athlete will be driven by a single `profile-data.json` file. This file will be the primary source for all dynamic content on the site. Cursor should create a clear, well-structured JSON schema. An example structure is provided below:

```json
{
  "athleteName": "[Athlete's Full Name]",
  "classYear": "[e.g., Class of 2028]",
  "sport": "[e.g., Softball]",
  "primaryPosition": "[e.g., Pitcher]",
  "secondaryPositions": "[e.g., Outfielder / First Base]",
  "battingStyle": "[e.g., Lefty]",
  "throwingHand": "[e.g., Lefty]",
  "statsSummary": {
    "battingAverage": ".577",
    "rbi": "14",
    "gpa": "4.1"
  },
  "aboutMe": [
    "Paragraph 1 of about me...",
    "Paragraph 2 of about me..."
  ],
  "currentTeams": [
    {"type": "Travel Team", "name": "Glory Adkins 18u Demoss"},
    {"type": "Previous Travel Team", "name": "MTX Cardinals 16u"}
  ],
  "achievements": [
    "2x All-Star Team",
    "Team MVP (2025)"
  ],
  "academicInfo": {
    "gpa": "4.1 Weighted",
    "classRank": "207/754 (Top 30%)",
    "satScore": "N/A (Not Yet Taken)",
    "honors": [
      "National Honor Society Member"
    ],
    "intendedMajor": "Sports Business/Management",
    "extracurriculars": [
      "FCCLA (Family Career and Community Leaders of America) - Captain"
    ]
  },
  "videos": [
    {
      "title": "RBI Single",
      "description": "Driving in a run with a clean single up the middle.",
      "category": "At-Bats",
      "url": "https://s3.your-storage.com/client-name/videos/rbi-single.mp4",
      "thumbnail": "/assets/stills/rbi-single-thumb.jpg"
    },
    {
      "title": "Skittles Triple",
      "description": "Three-bagger laced into the gap.",
      "category": "At-Bats",
      "url": "https://s3.your-storage.com/client-name/videos/skittles-triple.mp4",
      "thumbnail": "/assets/stills/skittles-triple-thumb.jpg"
    }
    // ... up to 5 video objects
  ],
  "detailedStats": [
    {"label": "Batting Average", "value": ".577"},
    {"label": "On-Base Percentage", "value": ".662"},
    {"label": "Slugging Percentage", "value": ".889"},
    {"label": "OPS", "value": "1.551"},
    {"label": "RBI", "value": "14"}
  ],
  "contactInfo": {
    "email": "athlete.email@example.com",
    "phone": "(XXX) XXX-XXXX",
    "location": "[City, State]"
  },
  "recruitingPacketUrl": "https://s3.your-storage.com/client-name/packets/recruiting-packet.pdf"
}
```

### 5.3. Asset Management
*   **Images**: Static images (e.g., athlete photos, team photos, logos) will be stored locally within the project's `public/assets/stills/` directory.
*   **Videos**: Highlight videos (MP4, 5-10MB each) will be hosted on S3-compatible object storage (e.g., Backblaze B2, Cloudflare R2). The `url` field in the `videos` array of `profile-data.json` will point directly to these external URLs.
*   **Recruitment Packet**: The downloadable PDF will also be hosted on S3-compatible object storage. The `recruitingPacketUrl` field in `profile-data.json` will link to this external PDF.

### 5.4. Deployment Environment
*   **Hosting**: Hostinger VPS.
*   **Deployment Tool**: Coolify. The template should be designed for easy deployment via Coolify's Git integration (e.g., automatic build and deploy on `git push` to a designated repository).
*   **Domain Management**: Hostinger for domain registration. DNS `A` and `CNAME` records will point to the Hostinger VPS IP address. Coolify will handle automatic SSL certificate provisioning (Let's Encrypt).

## 6. User Interface (UI) / User Experience (UX)
*   **Visual Reference**: The site https://skittles-softball.bytesbyblinken.com/ should be used as the primary visual and functional reference for layout, section ordering, and overall aesthetic.
*   **Mobile-First Design**: The template must prioritize an excellent user experience on mobile devices, given that coaches often view these profiles on the go.
*   **Intuitive Navigation**: Clear and concise navigation links (About, Athletics, Academics, Videos, Stats, Contact) that smoothly scroll to the respective sections.
*   **Video Player**: Standard HTML5 video player controls for playback.

## 7. Admin / Update Workflow
*   **Content Updates**: All content updates (text, stats, video links, PDF links) will be performed by the agency (Chris) by directly editing the `profile-data.json` file and replacing asset files (images, PDFs) as needed.
*   **Deployment**: After local changes are made and committed, a `git push` to the designated Git repository will trigger an automatic build and deployment via Coolify, updating the live website.

## 8. Monetization Context
This template supports an "All-In" subscription model with an initial setup fee and a recurring monthly fee, which includes domain management, hosting, and regular content updates. The design should facilitate easy content swapping to support this business model efficiently.

## 9. Future Considerations (Out of Scope for Initial Build)
*   **Client-Facing CMS**: Integration with a headless CMS (e.g., Strapi, Sanity) to allow clients to make minor text updates themselves.
*   **Video Transcoding**: Automated video optimization and transcoding pipeline for uploaded videos.
*   **Advanced Analytics**: Integration with analytics tools to track profile views and engagement.

## 10. Deliverables
*   A complete, functional web project (Vite + React + Tailwind CSS) implementing the features described above.
*   A clear `profile-data.json` schema and an example `profile-data.json` file populated with dummy data.
*   Instructions for local development and deployment via Coolify.

## 11. References
[1] Skittles Softball. (n.d.). *Shannon Hall - Collegiate Softball Recruiting Portfolio*. [https://skittles-softball.bytesbyblinken.com/](https://skittles-softball.bytesbyblinken.com/)
[2] Backblaze B2 Cloud Storage. (n.d.). *Cloud Storage for Less*. [https://www.backblaze.com/b2/cloud-storage.html](https://www.backblaze.com/b2/cloud-storage.html)
[3] Cloudflare R2. (n.d.). *Object Storage for the Cloud*. [https://www.cloudflare.com/developer/r2/](https://www.cloudflare.com/developer/r2/)
[4] Coolify. (n.d.). *Self-hosting for everyone*. [https://coolify.io/](https://coolify.io/)
[5] Hostinger. (n.d.). *Web Hosting, Domain Names, VPS & Cloud Hosting*. [https://www.hostinger.com/](https://www.hostinger.com/)
