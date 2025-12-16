import React, { useEffect, useRef, useState } from 'react';
import DocItemLayout from '@theme-original/DocItem/Layout';
import type DocItem from '@theme/DocItem';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof DocItem>;

function DocItemWrapped(props: Props): JSX.Element {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <DocItemLayout {...props} />
      {/* Progress Bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '5px',
          backgroundColor: 'lightblue', // Base of the progress bar
          zIndex: 9999, // Ensure it's above other content
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            width: `${scrollProgress}%`,
            height: '100%',
            backgroundColor: 'blue', // Actual progress color
            transition: 'width 0.1s ease-out', // Smooth transition for progress updates
          }}
        />
      </div>
    </>
  );
}

export default DocItemWrapped;