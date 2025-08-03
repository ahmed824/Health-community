# CV Builder Component Structure

This directory contains the refactored CV Builder components, organized for better maintainability and separation of concerns.

## Component Structure

### Main Component
- **`BuildCV.jsx`** - The main component that orchestrates the CV building process

### UI Components
- **`CVBuilderHeader.jsx`** - Handles the header section with breadcrumb and title
- **`ATSBanner.jsx`** - Displays the ATS (Applicant Tracking System) optimization banner
- **`StepFormContainer.jsx`** - Container that renders different step components based on current step
- **`CVPreviewSection.jsx`** - Handles the CV preview section with download functionality

### Custom Hooks
- **`useCVData.js`** - Manages all CV data state and related functions
- **`useStepNavigation.js`** - Handles step navigation logic
- **`usePDFDownload.js`** - Manages PDF download functionality

### Constants
- **`cvConstants.js`** - Contains all static data like countries, cities, and stepper configuration

## Benefits of This Structure

1. **Separation of Concerns**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused in other parts of the application
3. **Maintainability**: Easier to maintain and debug individual components
4. **Testability**: Each component and hook can be tested independently
5. **Readability**: The main component is much cleaner and easier to understand

## Data Flow

1. **BuildCV.jsx** uses custom hooks to manage state and logic
2. **useCVData** manages all CV-related data and operations
3. **useStepNavigation** handles step progression
4. **usePDFDownload** manages PDF generation
5. UI components receive props and render accordingly

## File Organization

```
src/pages/create-cv/
├── BuildCV.jsx                 # Main component
├── components/
│   ├── CVBuilderHeader.jsx     # Header component
│   ├── ATSBanner.jsx          # ATS banner component
│   ├── StepFormContainer.jsx  # Step form container
│   ├── CVPreviewSection.jsx   # CV preview section
│   └── ...                    # Other existing components
├── hooks/
│   ├── useCVData.js           # CV data management hook
│   ├── useStepNavigation.js   # Step navigation hook
│   └── usePDFDownload.js      # PDF download hook
├── constants/
│   └── cvConstants.js         # Static data and configuration
└── README.md                  # This file
```

## Usage

The main `BuildCV.jsx` component can be used exactly as before, but now it's much more organized and maintainable. All the complex logic has been extracted into custom hooks, and the UI has been broken down into smaller, focused components. 