# Decent Luxury Hotel Skardu - React Website

A modern, responsive website for Decent Luxury Hotel, a premium accommodation business in Skardu, Pakistan. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏨 **Room Listings** - Showcase 8 premium rooms with detailed information
- 📅 **Booking System** - Interactive booking form with flexible check-in times
- 📱 **Responsive Design** - Mobile-first approach with modern UI
- ⚡ **Fast Performance** - Built with Next.js for optimal performance
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS
- 🔍 **SEO Optimized** - Meta tags and structured content

## Hotel Information

- **Name**: Decent Luxury Hotel
- **Location**: ShangriLa Road, Murtazabad, Skardu, Pakistan
- **Owner**: Shoaib Haider
- **Contact**: 03343338726
- **Email**: shoaibhaider81@gmail.com
- **Rooms**: 8 total rooms (3 Master Single + 5 Master Double)
- **Check-in**: 12 PM (Flexible)
- **Check-out**: 12 PM (Fixed)
- **Amenities**: WiFi, Parking, Breakfast

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Validation**: Zod
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd decent-luxury-hotel
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── PropertyCard.tsx   # Room display card
│   └── Gallery.tsx        # Image gallery
├── public/               # Static assets
│   └── scardu*.jpg       # Skardu images
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # Project documentation
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### Header
- Responsive navigation
- Contact information in top bar
- Mobile menu with hamburger icon
- "Book Now" call-to-action button

### Hero Section
- Full-screen hero with Skardu background image
- Interactive booking form
- Check-in/Check-out time display
- Location information

### Room Cards
- Image gallery with hover effects
- Pricing and rating display
- Amenities icons (WiFi, Parking, Breakfast)
- "View Details" action button

### Amenities Section
- WiFi, Parking, Breakfast features
- Room count display (8 rooms total)
- Modern icon-based design

### Gallery
- Interactive image gallery
- Modal view for enlarged images
- Skardu landscape showcase

### Footer
- Company information
- Quick navigation links
- Contact details (Shoaib Haider)
- Social media links

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Content
- Update room information in `app/page.tsx`
- Modify contact details in `components/Header.tsx` and `components/Footer.tsx`
- Change images by updating URLs in the components

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom CSS can be added to `globals.css`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Railway**: Deploy directly from GitHub
- **AWS Amplify**: Connect repository and deploy

## Environment Variables

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=shoaibhaider81@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=03343338726
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- **Owner**: Shoaib Haider
- **Email**: shoaibhaider81@gmail.com
- **Phone**: 03343338726
- **Address**: ShangriLa Road, Murtazabad, Skardu, Pakistan

---

Built with ❤️ for Decent Luxury Hotel Skardu 