# Health Community

A comprehensive health community platform built with Next.js, featuring a modern design with Petrona font family and optimized folder structure.

## Features

- 🎨 **Modern Design**: Clean, accessible UI with Petrona font family
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Built with Next.js 15 and optimized for performance
- 🎯 **Component-Based**: Reusable UI components with consistent styling
- 🌙 **Dark Mode**: Automatic dark mode support
- ♿ **Accessible**: WCAG compliant with proper focus management

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.js          # Root layout with Petrona font
│   ├── page.js            # Home page
│   └── globals.css        # Global styles and CSS variables
├── components/            # Reusable components
│   ├── ui/               # Basic UI components
│   │   └── Button.js     # Button component with variants
│   └── layout/           # Layout components
│       ├── Header.js     # Navigation header
│       └── Footer.js     # Site footer
├── lib/                  # Utility libraries
│   ├── constants.js      # Site configuration and constants
│   └── api.js           # API utility functions
├── utils/                # Utility functions
│   ├── cn.js            # Class name utility
│   └── validation.js    # Form validation utilities
└── hooks/                # Custom React hooks
    └── useTheme.js      # Theme management hook
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Key Technologies

- **Next.js 15** - React framework with App Router
- **Tailwind CSS 4** - Utility-first CSS framework
- **Petrona Font** - Google Fonts for typography
- **clsx** - Utility for conditional className joining

## Design System

The project uses a comprehensive design system with:

- **Colors**: Semantic color tokens with dark mode support
- **Typography**: Petrona font family with proper hierarchy
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components with variants

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
