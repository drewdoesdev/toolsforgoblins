import React from 'react'
import Card from '@/components/Card'
import projectsData from '@/data/projectsData'

export const AppsContainer = () => {
  return (
    <div className="container py-12">
      <div className="-m-4 flex flex-wrap">
        {projectsData.map((d) => (
          <Card
            key={d.title}
            title={d.title}
            description={d.description}
            imgSrc={d.imgSrc}
            href={d.href}
          />
        ))}
      </div>
    </div>
  )
}
