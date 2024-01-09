import React, { ForwardRefExoticComponent, ReactElement, ReactNode } from "react"



interface Props {
  title: String,
  Icon: ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
} & React.RefAttributes<SVGSVGElement>>
}

export default function SidebarMenuItem({title, Icon} : Props) {
  return (
    <div className="hoverEffect flex xl:justify-start justify-center items-center space-x-3 text-gray-700">
      <Icon className="min-w-7 max-w-7"/>
      <span className="hidden xl:inline">{title}</span>
    </div>
  )
}
