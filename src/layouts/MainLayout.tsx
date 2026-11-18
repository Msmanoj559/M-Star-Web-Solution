import React from 'react'

const MainLayout: React.FC<{ children: React.ReactNode; title?: string }> = ({
  children,
  title,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {title && (
          <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">{title}</h1>
        )}
        <div className="prose max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout