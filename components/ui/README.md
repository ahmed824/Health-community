# Health Community Loaders

Modern, optimized loading components designed specifically for the Health Community platform. These loaders feature smooth animations, health-themed designs, and are fully customizable to match your project's theme.

## Components

### 1. HealthPageLoader

A sophisticated page loader with health-themed animations including heartbeat, pulse, spinner, and wave variants.

```jsx
import { HealthPageLoader } from '@/components/ui';

// Basic usage
<HealthPageLoader />

// With custom props
<HealthPageLoader 
  variant="heartbeat" 
  size="large" 
  showText={true} 
/>
```

**Props:**
- `variant` (string): `'heartbeat' | 'pulse' | 'spinner' | 'wave'` - Animation style
- `size` (string): `'small' | 'default' | 'large' | 'xl'` - Loader size
- `showText` (boolean): Whether to show loading text
- `className` (string): Additional CSS classes

### 2. DotsLoader

A lightweight dots loader with staggered animations, perfect for section loading.

```jsx
import { DotsLoader } from '@/components/ui';

// Basic usage
<DotsLoader />

// With custom props
<DotsLoader 
  size="large" 
  speed="fast" 
  count={5} 
  color="primary" 
/>
```

**Props:**
- `size` (string): `'small' | 'default' | 'large' | 'xl'` - Dot size
- `color` (string): `'primary' | 'secondary' | 'muted' | 'white'` - Dot color
- `count` (number): Number of dots (default: 3)
- `speed` (string): `'slow' | 'normal' | 'fast'` - Animation speed
- `className` (string): Additional CSS classes

### 3. SkeletonLoader

A skeleton loader for content sections with shimmer effect.

```jsx
import { SkeletonLoader } from '@/components/ui';

// Text skeleton
<SkeletonLoader type="text" lines={4} />

// Card skeleton
<SkeletonLoader type="card" />

// Avatar skeleton
<SkeletonLoader type="avatar" height="large" />
```

**Props:**
- `type` (string): `'text' | 'card' | 'avatar'` - Skeleton type
- `lines` (number): Number of text lines (for text type)
- `height` (string): `'small' | 'default' | 'large' | 'xl'` - Height
- `width` (string): `'full' | '3/4' | '1/2' | '1/3' | '1/4'` - Width
- `className` (string): Additional CSS classes

### 4. PageLoader

A simple, classic page loader with spinning animation.

```jsx
import { PageLoader } from '@/components/ui';

// Basic usage
<PageLoader />

// With custom size
<PageLoader size="large" />
```

**Props:**
- `size` (string): `'small' | 'default' | 'large' | 'xl'` - Loader size
- `className` (string): Additional CSS classes

## Usage Examples

### Page Loading
```jsx
import { HealthPageLoader } from '@/components/ui';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <HealthPageLoader variant="heartbeat" size="large" />;
  }

  return <YourAppContent />;
}
```

### Section Loading
```jsx
import { DotsLoader, SkeletonLoader } from '@/components/ui';

function ContentSection() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <DotsLoader size="small" />
            <span>Loading content...</span>
          </div>
          <SkeletonLoader type="text" lines={3} />
        </div>
      ) : (
        <YourContent />
      )}
    </div>
  );
}
```

### Card Loading
```jsx
import { SkeletonLoader } from '@/components/ui';

function CardGrid() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {loading ? (
        // Show skeleton cards while loading
        Array.from({ length: 6 }).map((_, i) => (
          <SkeletonLoader key={i} type="card" />
        ))
      ) : (
        // Show actual cards
        cards.map(card => <Card key={card.id} {...card} />)
      )}
    </div>
  );
}
```

## Customization

### Colors
The loaders automatically use your project's CSS custom properties:
- `--primary`: Main loader color
- `--muted-foreground`: Secondary text color
- `--border`: Border colors

### Animations
Custom animations are defined in `globals.css`:
- `heartbeat`: Pulsing scale animation
- `wave`: Vertical wave animation
- `shimmer`: Horizontal shimmer effect
- `enhancedBounce`: Improved bounce animation

### Styling
All components accept a `className` prop for additional styling and are built with Tailwind CSS for easy customization.

## Performance

- All animations use CSS transforms for optimal performance
- Components are lightweight and optimized for React
- No external dependencies required
- Smooth 60fps animations

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Graceful degradation for older browsers
- Mobile-optimized touch interactions

## Demo

Visit `/loaders-demo` to see all loaders in action with different configurations and real-world usage examples. 