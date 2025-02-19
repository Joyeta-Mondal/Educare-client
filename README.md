# Edu-Care

Edu-Care is a platform for managing scholarships, allowing users to browse, apply for, and review scholarships. The platform also includes functionality for role-based dashboards for users, moderators, and admins.

---
![Project Screenshot](./src/assets/edu-care.jpg)
## Features

### Home Page
- **Navbar:**
  - Left: Logo
  - Right: Links to Home, All Scholarships, User Dashboard (Private), Admin Dashboard (Private), and Login/Logout (depending on user state).
  - User Dashboard and Admin Dashboard are displayed based on the logged-in user's role.
- **Banner:**
  - Slider/Carousel displaying 3 or more offers/advertisements.
- **Top Scholarships:**
  - Displays 6 scholarships based on criteria (low application fees & recently posted).
  - Includes an "All Scholarships" button to view all scholarships.
- **Additional Sections:**
  - Custom sections based on website needs (e.g., "How It Works," "Top Universities").
- **Footer:**
  - Links and additional information about Edu-Care.

### Scholarship Details Page (Private Route)
- Displays detailed scholarship information, including:
  - University Name, Logo, Scholarship Category, Location, Deadline, Description, Stipend (if available), Fees, and more.
- Includes a slider/carousel for user reviews.
- **Apply Scholarship Button:**
  - Leads to the payment/checkout page.

### Payment & Application
- **Payment Page:**
  - Users can pay application fees using Stripe or SSL-Commerz.
  - Successful payment leads to an application form.
- **Application Form:**
  - Collects details such as contact information, academic results, degree, and scholarship details.
  - Upon submission, data is stored in the database, and a success toast is displayed.

### All Scholarships Page
- Displays all scholarships with search functionality.
- **Search Criteria:**
  - Scholarship Name, University Name, and Degree Name.
- **Pagination:**
  - Displays scholarships with pagination.

### Authentication
- **Email & Password Login/Registration:**
  - Registration validates password strength (minimum 6 characters, includes a capital letter, and a special character).
  - Displays errors via toast/alerts.
- **Social Login:**
  - Integration with one social login provider.
  - Displays user profile picture and logout button upon login.
- Private routes for protected content.
- Implements JWT-based authentication with tokens stored in localStorage.

### User Dashboard (Private Route)
- **My Profile:**
  - Displays user details, including name, image, and role.
- **My Applications:**
  - Displays all applied scholarships in a table with options to view, edit, cancel, or add reviews.
- **My Reviews:**
  - Displays all user reviews in a table with edit and delete options.

### Moderator Dashboard (Private Route)
- **My Profile:**
  - Displays moderator details, including name, image, and role.
- **Manage Scholarships:**
  - Displays scholarships in a table with options to view, edit, or delete.
- **All Reviews:**
  - Displays all reviews in card format with delete options.
- **All Applied Scholarships:**
  - Displays all applications with options to view details, provide feedback, or cancel.
- **Add Scholarship:**
  - Allows moderators to add scholarships with fields for all necessary details.

### Admin Dashboard (Private Route)
- **Admin Profile:**
  - Displays admin details, including name, image, and role.
- **Add Scholarship:**
  - Same functionality as the moderator dashboard.
- **Manage Scholarships:**
  - Same functionality as the moderator dashboard.
- **Manage Applied Applications:**
  - Same functionality as the moderator dashboard.
- **Manage Reviews:**
  - Same functionality as the moderator dashboard.
- **Manage Users:**
  - Displays all users in a table with sorting/filtering by role.
  - Allows admins to update user roles and delete users.
- **Analytics Chart:**
  - Displays charts/graphs for website analytics.

---

## Challenges Implemented
- **Pagination:**
  - Implemented for the All Scholarships page.
- **Sorting/Filtering:**
  - Added sorting/filtering for applications and users based on role and other criteria.
- **JWT Authentication:**
  - Secure login with tokens stored in localStorage.
- **Analytics Chart:**
  - Visual representation of data in the admin dashboard.

---

## Technologies Used
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: Firebase, JWT
- Payment Gateway: Stripe/SSL-Commerz

## Live Link 
[Edu-Care]=("https://edu-care-e1c6c.web.app/")
