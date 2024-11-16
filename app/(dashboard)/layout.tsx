import React from 'react'


function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen'>
        <div className='flex flex-col flex-1 min-h-screen'>
                <div className='flex-1 py-4 text-accent-foreground'>
                  {children}
                </div>
        </div>
    </div>
  );
}

export default layout
