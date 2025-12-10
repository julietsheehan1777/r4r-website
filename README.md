# Recycle4Research

A nonprofit web application for glass recycling that supports medical research through Research!America.

## About

Recycle4Research is a community initiative that makes glass recycling convenient while supporting vital medical research. We collect glass from residents in the McLean MCNA neighborhood and ask participants to donate to Research!America in exchange for the free pickup service.

## Features

- 🌱 **Bubbly, Animated Design**: Modern, minimalistic interface with smooth animations and a pastel green color palette
- ♻️ **Impact Tracking**: Live statistics showing total glass recycled and environmental impact
- 📋 **Easy Signup**: Simple registration process with integrated forms
- 📱 **Responsive Design**: Works beautifully on all devices
- 🎨 **Interactive Elements**: 3D card effects, parallax scrolling, and dynamic animations

## Pages

1. **Home**: Overview of the program with quick stats
2. **About**: The story behind Recycle4Research
3. **Impact**: Real-time tracking of recycling statistics
4. **Process**: Step-by-step guide to participation
5. **Charity**: Information about Research!America
6. **Contact**: Get in touch with the team

## Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Use a Local Server
For the best experience, run a local development server:

```bash
# Using Python 3
python -m http.server 3000

# Using Node.js http-server (install first: npm install -g http-server)
http-server -p 3000

# Using PHP
php -S localhost:3000
```

Then visit `http://localhost:3000` in your browser.

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and transitions
- **Vanilla JavaScript**: Interactive features without dependencies
- **No build tools required**: Simple, clean code that runs directly in the browser

## File Structure

```
juliet/
├── index.html          # Home page
├── about.html          # About page
├── impact.html         # Impact statistics page
├── process.html        # How to participate
├── charity.html        # About Research!America
├── contact.html        # Contact information
├── styles.css          # All styles and animations
├── script.js           # Interactive functionality
├── package.json        # Project metadata
└── README.md          # This file
```

## Customization

### Updating Statistics
Edit the data in `script.js` in the `initImpactData()` function:

```javascript
const currentData = {
    totalGlass: 727.674,  // in thousands of pounds
    avgGlass: 121.279,
    totalPickups: 6,
    milestone: 1000       // 1 million pounds
};
```

### Changing Colors
Modify the color palette in `styles.css` under `:root`:

```css
:root {
    --primary-green: #a8d5ba;
    --light-green: #d4edda;
    --dark-green: #7cb992;
    /* ... */
}
```

## Future Enhancements

- Backend integration for form submissions
- Database for tracking statistics
- Payment integration (Venmo API)
- Email notifications for pickup schedules
- Admin dashboard for managing participants

## Contact

**Juliet Sheehan** - Founder  
Phone: (571) 565-1672  
Email: jsshe.us.1717@gmail.com

**Evelyn** - Social Media Manager  
Phone: (571) 565-1975

## License

Copyright © 2025 Recycle4Research. All rights reserved.

---

*Making a difference, one bottle at a time.* 🌱♻️
