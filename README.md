# ExamPDFHub - Police Exam PDF Resources Website

A modern, clean, and mobile-friendly website for Gujarat Police and Technical Operator exam preparation materials.

## Features

✨ **Modern UI Design**
- Clean blue and white color scheme
- Responsive layout (mobile-first)
- Smooth animations and transitions
- Professional and exam-oriented design

🎯 **Key Functionality**
- Live search filtering
- Category-based filtering
- PDF cards grid layout
- Detailed PDF view page
- Related PDFs section

📱 **Mobile Optimized**
- Horizontal scrolling category pills
- Responsive grid (1/2/3 columns)
- Touch-friendly buttons
- Fixed header navigation
- Mobile menu toggle

## Pages

1. **index.html** - Homepage with search, categories, and PDF grid
2. **details.html** - Individual PDF details page with related PDFs

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Font Awesome Icons

## How to Use

1. Open `index.html` in your browser
2. Browse PDFs by category or search
3. Click "View PDF" to open in Google Drive
4. Click "Details" to see full information
5. Navigate between pages seamlessly

## Customization

### Adding New PDFs

Edit the `pdfData` array in both `app.js` and `details.js`:

```javascript
{
    id: 13,
    title: "Your PDF Title",
    description: "Your PDF description here",
    category: "category-name",
    thumbnail: "image-url",
    size: "X.X MB",
    pages: 100,
    driveLink: "https://drive.google.com/..."
}
```

### Available Categories

- technical-operator
- psi-wireless
- police-exams
- gk-pdf
- gujarati-grammar
- english-grammar
- reasoning
- maths
- old-papers
- books

### Color Scheme

Primary Blue: `#2563eb`
Secondary Blue: `#1e40af`
Background: `#f9fafb`
White: `#ffffff`

## File Structure

```
book-web/
├── index.html          # Homepage
├── details.html        # PDF details page
├── app.js             # Homepage JavaScript
├── details.js         # Details page JavaScript
└── README.md          # Documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

- Backend integration for dynamic PDF management
- User authentication
- PDF upload functionality
- Comments and ratings
- Download statistics
- Admin panel

## License

Free to use for educational purposes.

## Contact

Visit our website: https://gujaratexamhub.github.io

---

Built with ❤️ for Gujarat Police Exam Aspirants