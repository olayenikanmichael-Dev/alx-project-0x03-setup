

interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}


interface LayoutProps {
  children: ReactNode;
}


export interface HomePageProps {
  title: string;
  description?: string;
}

// export interface ButtonProps {
//   title: string;
//   className?: string;
//   onClick?: () => void;
// }

// export interface LayoutProps {
//   children: React.ReactNode;
// }
