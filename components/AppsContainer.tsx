import React from 'react'
import Card from '@/components/Card'
import { projectsData } from '@/data/apps-data'

export const AppsContainer = () => {
  return (
    <div className="container py-12">
      <div className="-m-4 flex flex-wrap">
        {projectsData.map((d) => (
          <Card
            key={d.title}
            title={d.title}
            description={d.description}
            imgSrc={d.image}
            href={d.href}
          />
        ))}
      </div>
    </div>
  )
}
