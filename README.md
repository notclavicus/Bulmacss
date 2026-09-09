# NOVA Boutique - Login & Sign-Up System

## Group Members
1. Clark Salazar


## Project Description
A Login and Sign-Up interface for an online hub called "N-niwan Hub". Built with Bulma CSS framework and JavaScript. 

## Technologies Used

### HTML
- Semantic HTML5 structure
- Form elements with proper labels
- Meta viewport tag for responsive design
- Font Awesome icons

### CSS / Bulma
- Bulma CSS Framework (v0.9.4) - CDN linked
  - field, control, input, button for forms
  - notification for error/success messages
  - is-primary, is-success for colors
  - Responsive utilities
- Custom CSS for:
  - Gradient backgrounds
  - Card styling with shadows
  - Animations
  - Password strength bar
  - Custom checkboxes

### JavaScript
- Pure JavaScript (No frameworks)
- Form validation (real-time and on submit)
- Password visibility toggle
- Password strength checker
- Error handling with visual feedback

## Features Implemented

### Login Page
- Email field with validation
- Password field (minimum 8 characters)
- Show/Hide password toggle
- Remember Me checkbox
- Forgot Password link
- Error notifications
- Link to Sign-Up page

### Sign-Up Page
- Full Name field
- Email field with format validation
- Username field (minimum 4 characters)
- Password field with strength indicator
- Confirm Password field (must match)
- Terms of Service agreement
- Success notification with redirect
- Link to Login page

### Interactive Features
1. Form Validation - Real-time + on-submit
2. Password Strength Indicator - Visual bar showing Weak/Medium/Strong
3. Show/Hide Password - Toggle with eye icon
4. Error Messages - Contextual error display
5. Animations - Shake effect on errors, slide-up on load

## Repository Structure

login-signup/
├── index.html          # Login page
├── signup.html         # Sign-Up page
├── README.md           # Project documentation
├── css/
│   └── style.css       # Custom styles
└── js/
    └── script.js       # JavaScript functionality


