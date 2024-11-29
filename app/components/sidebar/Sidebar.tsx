import React from 'react';

interface SidebarProps {
  links: { name: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <aside className="w-64 bg-secondary p-4">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="block p-2 hover:bg-accent rounded">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
