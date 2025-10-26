# Logout Button Implementation

## Features

1. **Full Width**: The logout button spans the entire width of the screen under the Quick Actions section
2. **Gradient Animation**: 
   - Default state: Blends with the background (gray gradient)
   - Hover state: Transitions to red gradient
3. **Always Visible Text**: Logout text remains visible at all times
4. **Shadow Effects**: 
   - Default shadow to show button edges
   - Enhanced shadow on hover
5. **Smooth Transitions**: All animations use smooth transitions with easing

## Technical Details

- Implemented using Framer Motion for animations
- Uses Tailwind CSS for styling
- Gradient transition handled with CSS `hover:` classes
- Button scales slightly on hover and tap for interactive feedback
- Positioned with proper spacing using margin classes

## Behavior

- On click, navigates back to the login screen
- Hover effect includes color change, shadow enhancement, and slight scale transformation
- Text color changes from gray to white during hover for better contrast

## CSS Classes Used

- `w-full`: Full width button
- `py-4 px-6`: Padding for comfortable touch targets
- `bg-gradient-to-r`: Right-facing gradient
- `from-gray-100 to-gray-100`: Default subtle gray gradient
- `hover:from-red-500 hover:to-red-600`: Red gradient on hover
- `text-gray-800 hover:text-white`: Text color change on hover
- `font-medium`: Medium font weight
- `rounded-lg`: Rounded corners
- `shadow-lg`: Default shadow
- `transition-all duration-300 ease-in-out`: Smooth transitions
- `transform`: Enables transform effects