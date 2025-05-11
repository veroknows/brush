# Personal Art Studio Website - Technical Specification

## Overview

A responsive web application for a personal art studio offering digital art and sticker printing services. The application will be frontend-only, using local storage for data persistence.

## Technical Requirements

- **Framework**: React.js with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Context for cart management
- **Data Storage**: Browser's localStorage
- **Responsive Design**: Mobile-first approach, breakpoints for:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## Core Components

### 1. Layout Components

#### NavigationBar
- Fixed position at top
- Responsive menu with hamburger for mobile
- Components:
  - Logo/Brand
  - Navigation Links (Home, About, Cart)
  - Cart Icon with Badge
    - Badge shows item count
    - Red dot indicator when cart has items

#### Footer
- Fixed position at bottom
- Components:
  - Copyright notice
  - Social media links with icons
  - Legal links (Privacy, Terms)

### 2. Page Components

#### MyServicesPage
- Lists all available services using a scalable model
- Each service is displayed as a card (like My Arts section)
- No detailed email instructions shown here

#### HomePage
Divided into three main sections:

##### ServicesSection
```typescript
interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  emailInstructions: string;
}
```
- Displays a summary of available services (first service shown)
- "View All Services" link navigates to My Services page
- Uses a scalable array of services for easy future expansion

##### ArtsSection
```typescript
interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  description?: string;
}
```
- Responsive grid layout
- Artwork cards with:
  - Image preview (lazy loading)
  - Title
  - Price
  - Add to Cart button
- Filter/Sort functionality (optional)

##### InformationSection
- Order instructions
- Contact information
- FAQ accordion
- Terms of service
- Privacy policy
- Delivery regions

#### CartPage
```typescript
interface CartItem {
  id: string;
  type: 'sticker' | 'artwork';
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
```
Features:
- Item list with quantity controls
- Price calculations
- Order summary
- Email template generation
- Clear instructions for order submission

## State Management

### Cart State
```typescript
interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}
```

### Local Storage Implementation
```typescript
// Storage keys
const STORAGE_KEYS = {
  CART: 'art_studio_cart',
  THEME: 'art_studio_theme'
};

// Local storage utilities
const storageUtils = {
  saveCart: (cart: CartState) => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  },
  getCart: (): CartState | null => {
    const cart = localStorage.getItem(STORAGE_KEYS.CART);
    return cart ? JSON.parse(cart) : null;
  },
  clearCart: () => {
    localStorage.removeItem(STORAGE_KEYS.CART);
  }
};
```

## User Flow

1. **Landing**
   - Loading screen with animation
   - Redirect to HomePage

2. **Browsing**
   - View services and artworks
   - Add items to cart (stored in localStorage)
   - View item details

3. **Checkout**
   - Review cart
   - Generate order summary
   - Copy order details
   - Submit via email

## Performance Considerations

- Implement lazy loading for images
- Use image optimization
- Implement proper caching strategies
- Minimize bundle size
- Use code splitting for routes

## Security Considerations

- Sanitize user inputs
- Implement rate limiting for localStorage operations
- Protect against XSS
- Handle localStorage quota exceeded errors

## Testing Requirements

- Unit tests for components
- Integration tests for user flows
- E2E tests for critical paths
- Responsive design testing
- Cross-browser compatibility
- Local storage functionality tests

## Deployment

- Static site hosting (e.g., Vercel, Netlify)
- Environment configuration
- Build optimization
- Analytics setup (optional)

## Future Enhancements

- User accounts (if backend is added later)
- Order tracking
- Payment integration
- Admin dashboard
- Analytics dashboard

## Core Data Model

### Service Model
- All services are defined in a `Service` interface and managed in a `services` array (see `src/config/services.ts`)
- To add a new service, simply add a new object to the array

## Navigation
- Navigation bar now includes a "Services" link to the My Services page