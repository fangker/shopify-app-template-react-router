declare module "*.css";

declare namespace JSX {
  interface IntrinsicElements {
    "s-card": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    "s-app-nav": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    "s-text": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      fontWeight?: string;
      tone?: string;
    };
  }
}
