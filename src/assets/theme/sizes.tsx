export const mobileBreakpoint = '800px';

export const materialSMBreakpoint = '600px';

// iPhone 5 screen is 320px wide. This breakpoint is used for iphone5 specific adjustments:
export const smallPhoneBreakpoint = '321px';

// Breakpoint at which the county map changes to position:fixed on the location page:
export const countyMapToFixedBreakpoint = '1320px';

export interface Spacing {
  contentGutterMobile: string;
  contentGutterDesktop: string;
  maxWidthLocationPageContent: string;
}

export const spacingTheme: Spacing = {
  contentGutterMobile: '1rem',
  contentGutterDesktop: '2rem',
  maxWidthLocationPageContent: '900px',
};
