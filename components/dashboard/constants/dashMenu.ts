import PersonIcon from '@mui/icons-material/Person'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import BarChartIcon from '@mui/icons-material/BarChart'
import DescriptionIcon from '@mui/icons-material/Description'
import LayersIcon from '@mui/icons-material/Layers'

export type SidebarItem = {
  id: string
  title: string
  href?: string
  Icon?: React.ComponentType<any>
  children?: SidebarItem[] // nested items
}

export const dashMainItems = [
  { id: 'blog', title: 'Blog', href: '/dashboard/employees', Icon: NewspaperIcon },
  { id: 'users', title: 'Users', href: '/dashboard/users', Icon: PersonIcon },
]

export const dashExampleItems: SidebarItem[] = [
  {
    id: 'reports',
    title: 'Reports',
    Icon: BarChartIcon,
    // top-level "reports" may have children
    children: [
      { id: 'sales', title: 'Sales', href: '/reports/sales', Icon: DescriptionIcon },
      { id: 'traffic', title: 'Traffic', href: '/reports/traffic', Icon: DescriptionIcon },
    ],
  },
  { id: 'integrations', title: 'Integrations', href: '/integrations', Icon: LayersIcon },
]
