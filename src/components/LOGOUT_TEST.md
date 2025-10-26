# Logout Button Testing Guide

## How to Test the Logout Button

1. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Then open http://localhost:3000 in your browser

2. **Navigate to the Dashboard**
   - If you see the splash screen, wait for it to complete
   - If you see the login screen, enter any credentials to proceed
   - You should arrive at the dashboard screen

3. **Locate the Logout Button**
   - Scroll down to the bottom of the dashboard
   - You should see a "Logout" button under the Quick Actions section
   - The button should span the full width of the screen

4. **Test Button Appearance**
   - By default, the button should blend with the background
   - The text "Logout" should be clearly visible in dark gray
   - The button should have visible edges due to the shadow effect

5. **Test Hover Effects**
   - Hover your mouse over the logout button
   - The button should:
     * Change color from gray to red gradient
     * Text should change from dark to white
     * Slightly increase in size
     * Shadow should become more pronounced

6. **Test Click Functionality**
   - Click the logout button
   - You should be navigated back to the login screen
   - All user data should be cleared (in a real implementation)

## Expected Behavior

- Button should always be visible and accessible
- Hover animations should be smooth and responsive
- Click should navigate to the login screen
- Button should maintain consistent width across different screen sizes
- Text should remain readable at all times

## Troubleshooting

If the button doesn't appear:
1. Check that you're on the dashboard screen
2. Ensure you've scrolled to the bottom
3. Verify there are no JavaScript errors in the browser console

If animations don't work:
1. Check that Framer Motion is properly installed
2. Verify Tailwind CSS is correctly configured
3. Ensure browser supports CSS transitions

If navigation fails:
1. Check the onNavigate prop is correctly passed to Dashboard
2. Verify the 'login' screen is properly handled in App.tsx