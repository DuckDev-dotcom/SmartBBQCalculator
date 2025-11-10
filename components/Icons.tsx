import React from 'react';

export const ManIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export const WomanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H9v-2.025A5.006 5.006 0 0112 14c1.657 0 3.08.872 3.999 2.137L15 18.975V21z" />
  </svg>
);

export const ChildIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const BeerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2.586l.293.293a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-7-7z" />
    <path d="M16.5 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

export const SodaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 8a1 1 0 100-2h6a1 1 0 100 2H7z" clipRule="evenodd" />
  </svg>
);

export const WaterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
    <path fillRule="evenodd" d="M12 2.25c-5.132 0-9.25 4.118-9.25 9.25 0 5.132 9.25 10.25 9.25 10.25s9.25-5.118 9.25-10.25C21.25 6.368 17.132 2.25 12 2.25z" clipRule="evenodd" />
  </svg>
);

export const SettingsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-.962a8.25 8.25 0 015.584 5.584c.045.55-.422 1.02-.962 1.11-.291.04-.582.028-.856-.048l-1.42-1.42a1.5 1.5 0 00-2.12 0L9.594 11.18a1.5 1.5 0 000 2.121l1.42 1.42c.274.274.565.48.856.528.55.087 1.015-.422.962-1.11a8.25 8.25 0 015.584-5.584c.542-.091 1.007.368 1.11.962.087.55-.422 1.015-.962 1.11a8.25 8.25 0 01-5.584 5.584c-.55.087-1.015-.422-1.11-.962a8.25 8.25 0 01-5.584-5.584z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const SaveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ResetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.695a8.25 8.25 0 00-11.664 0l-3.181 3.183" />
  </svg>
);


export const FlameIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052A9.75 9.75 0 0110.5 12c0 5.39 4.36 9.75 9.75 9.75s9.75-4.36 9.75-9.75c0-1.33.267-2.597.748-3.752a.75.75 0 00-1.498-.332A8.25 8.25 0 0112 12c0-4.556-3.694-8.25-8.25-8.25a8.25 8.25 0 00-2.286.315.75.75 0 00.286 1.488A6.75 6.75 0 0112 5.25c2.476 0 4.673 1.32 5.895 3.32a.75.75 0 001.408-.572A8.25 8.25 0 0012.963 2.286z" clipRule="evenodd" transform="translate(-8.25 -2.25)"/>
  </svg>
);


export const BeefIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22.37 10.36c.21.21.36.46.43.74.07.28.07.56.02.84l-1.07 6.13c-.11.63-.44 1.18-.92 1.58-.48.4-1.08.62-1.72.62H5.9c-.64 0-1.24-.22-1.72-.62-.48-.4-.81-.95-.92-1.58L2.19 11.94c-.05-.28-.05-.56.02-.84.07-.28.22-.53.43-.74.21-.21.46-.36.74-.43.28-.07.56-.07.84-.02l6.13 1.07c.56.1.92.56.81 1.13-.1 5.09-4.22 9.21-9.31 9.31-.56.1-1.03-.35-1.13-.81L-1.07 15.4c-.05-.28-.05-.56.02-.84.07-.28.22-.53.43-.74.21-.21.46-.36.74-.43.28-.07.56-.07.84-.02L6.13 2.19c.63.11 1.18.44 1.58.92.4.48.62 1.08.62 1.72v10.15c.64 0 1.24.22 1.72.62.48.4.81.95.92 1.58l1.07-6.13c.05-.28.05-.56-.02-.84s-.22-.53-.43-.74c-.21-.21-.46-.36-.74-.43-.28-.07-.56-.07-.84-.02L5.4 1.07c-1.16-.2-2.31.29-3.08 1.15-.77.86-1.08 2.01-.81 3.19l1.07 6.13c.05.28.05.56-.02.84s-.22-.53-.43-.74c-.21.21-.46.36-.74-.43-.28.07-.56.07-.84.02l-6.13-1.07c-1.18-.21-2.33.28-3.1 1.15-.77.86-1.08 2.01-.81 3.19l1.07 6.13c.11.63.44 1.18.92 1.58.48.4 1.08.62 1.72.62h10.15c.64 0 1.24-.22 1.72-.62.48-.4.81-.95.92-1.58l1.07-6.13c.27-1.18-.04-2.33-.81-3.19-.77-.86-1.92-1.35-3.08-1.15l-6.13 1.07c-.28.05-.56.05-.84-.02s-.53-.22-.74-.43c-.21-.21-.36-.46-.43-.74-.07-.28-.07-.56.02-.84l1.07-6.13c.1-1.18.6-2.33 1.15-3.08.86-.77 2.01-1.08 3.19-.81l6.13 1.07z" transform="translate(1.88 1.88) scale(0.84)"/></svg>
);


export const SausageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" transform="rotate(45 12 12) scale(0.9)"/></svg>
);

export const GarlicBreadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19h14.12c1.55 0 2.74-1.37 2.52-2.91zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm6 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
);


export const CharcoalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v3.93zm2-14.86c.05-.27.12-.52.2-.77.17-.48.38-.94.63-1.37.25-.43.53-.84.85-1.22.32-.38.67-.73 1.05-1.05.38-.32.78-.6 1.22-.85.43-.25.89-.46 1.37-.63.25-.08.5-.15.77-.2.27-.05.54-.08.81-.08 1.4 0 2.7.45 3.8 1.25s1.95 1.94 2.45 3.3c.08.2.15.4.2.6.05.2.1.4.15.6.03.1.05.2.08.3.02.1.04.2.06.3l.06.3c.02.1.04.2.06.3.03.1.05.2.08.3s.05.2.07.3c.02.1.04.2.06.3.02.1.04.2.06.3.02.1.04.2.05.3.02.1.04.2.05.3.02.1.04.2.05.3l-5.69 5.69c-.49-.49-1.28-.49-1.77 0l-5.69-5.69c.01-.1.02-.2.03-.3.01-.1.02-.2.03-.3.01-.1.02-.2.03-.3.01-.1.02-.2.03-.3.01-.1.02-.2.04-.3.01-.1.02-.2.04-.3.01-.1.02-.2.04-.3.01-.1.02-.2.04-.3.01-.1.02-.2.04-.3.02-.1.03-.2.04-.3zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" transform="scale(0.8) translate(3,3)"/></svg>
);
