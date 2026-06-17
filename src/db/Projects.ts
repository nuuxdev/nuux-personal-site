export interface Project {
    id: string;
    title: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    platform: 'mobile' | 'web';
    tags: string[];
    description: string
}

export const projectsData: Project[] = [
    // --- Mobile Projects ---
    {
        id: 'nova-erp',
        title: 'Nexa ERP',
        href: 'https://www.figma.com/proto/fSVsJ4bl3cZqLMtfOG91Fc/Nova?t=3QU6AZidDnbUKNbI-1&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&node-id=6-964&starting-point-node-id=6%3A964&show-proto-sidebar=1',
        imageSrc: '/projects/nova-erp-one.webp',
        imageAlt: 'Nova ERP',
        platform: 'mobile',
        tags: ['UI/UX', 'App', 'Finance'],
        description: "...........................................Description Coming Soon..........................................."
    },
    {
        id: 'vita-board',
        title: 'Vita Board',
        href: 'https://www.figma.com/proto/iEyNQK94pVTOPIPGRRQ67x/Nova-Tracker?t=sPw1Dgs5bXHGY6G4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=22-885&starting-point-node-id=22%3A885&show-proto-sidebar=1',
        imageSrc: '/projects/nova-expense-one.webp',
        imageAlt: 'Vita Board Expense Tracker',
        platform: 'mobile',
        tags: ['UI/UX', 'App', 'Finance'],
        description: "...........................................Description Coming Soon..........................................."
    },
    {
        id: 'bete-nibab',
        title: 'Bete Nibab',
        href: 'https://www.figma.com/proto/C0m5JRoGn8FDeWPIexZZ5w/beete-Nibab?t=9jZQpRQxKxl8jz2T-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1095-802&starting-point-node-id=1095%3A685&show-proto-sidebar=1',
        imageSrc: '/projects/beete-nibab.webp',
        imageAlt: 'Bete Nibab',
        platform: 'mobile',
        tags: ['UI/UX', 'character design', 'App', 'Learning'],
        description: "...........................................Description Coming Soon..........................................."
    },
    {
        id: 'crib-crm',
        title: 'Crib CRM',
        href: 'https://www.figma.com/proto/sSLu1trcyb1HtU76R2AMQm/Crib-CRM-redesign?node-id=46-834&p=f&t=IxKVw6M5M9SmMr1a-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A205&show-proto-sidebar=1',
        imageSrc: '/projects/crib-crm.webp',
        imageAlt: 'Crib CRM',
        platform: 'mobile',
        tags: ['UI/UX', 'App', 'Fintech'],
        description: "...........................................Description Coming Soon..........................................."
    },
    {
        id: 'erf-rooms',
        title: 'Erf Rooms',
        href: 'https://www.figma.com/proto/5PUlzUqWYMLbh1YJkASu6e/ERF-sabadmin?node-id=1109-1071&p=f&viewport=591%2C378%2C0.11&t=pqdyFUn9ZioENPuo-1&scaling=scale-down&content-scaling=fixed&page-id=1105%3A2&starting-point-node-id=1105%3A4',
        imageSrc: '/projects/erf-rooms.webp',
        imageAlt: 'Erf Rooms',
        platform: 'mobile',
        tags: ['UI/UX', 'App', 'Hospitality'],
        description: "...........................................Description Coming Soon..........................................."
    },

    // --- Web Projects ---
    {
        id: 'redicol-trading',
        title: 'Redicol Trading',
        href: 'https://redicoltrading.com/',
        imageSrc: '/projects/redicol-trading.webp',
        imageAlt: 'Redicol Trading Website',
        platform: 'web',
        tags: ['UI/UX', 'DEV', 'website', 'Food'],
        description: "...........................................Description Coming Soon..........................................."
    },
    {
        id: 'neros-school',
        title: 'Neros School',
        href: 'https://neros-landing.vercel.app/home',
        imageSrc: '/projects/neros-school.webp',
        imageAlt: 'Neros School Website',
        platform: 'web',
        tags: ['UI/UX', 'DEV', 'website', 'Learning'],
        description: "...........................................Description Coming Soon..........................................."
    },
    {
        id: 'dr-emebet-dental',
        title: 'Dr.Emebet Dental System Design',
        href: 'https://www.figma.com/proto/MQq1IAFYuyUlPvYI47dqbx/Dr.Emebet-Dental-Clinic-System-Project?node-id=3228-71077&p=f&t=GstLqlN9d5cTaOdg-1&scaling=min-zoom&content-scaling=fixed&page-id=15%3A45&starting-point-node-id=3783%3A4525',
        imageSrc: '/projects/dr-emebet-dental.webp',
        imageAlt: 'Dr.Emebet Dental System Design',
        platform: 'web',
        tags: ['UI/UX', 'System Design', 'Health'],
        description: "...........................................Description Coming Soon..........................................."
    },
    {
        id: 'rome-spa',
        title: 'Rome Beauty Spa System Design',
        href: 'https://www.figma.com/proto/rA1kf6Yb7KPzDjaVmTs2Oj/Rome-Beauty-Spa?node-id=9135-48263&p=f&t=VJVlOQ0FkFlmwnHb-1&scaling=scale-down&content-scaling=fixed&page-id=870%3A37365&starting-point-node-id=9135%3A48263&show-proto-sidebar=1',
        imageSrc: '/projects/rome-spa.webp',
        imageAlt: 'Rome Beauty Spa System Design',
        platform: 'web',
        tags: ['UI/UX', 'System Design', 'Hospitality'],
        description: "...........................................Description Coming Soon..........................................."
    },
    {
        id: 'emamaye-daycare',
        title: 'Emamaye Daycare Management System',
        href: 'https://emamaye-daycare.vercel.app',
        imageSrc: '/projects/emamaye-daycare.webp',
        imageAlt: 'Emamaye Daycare Management System',
        platform: 'web',
        tags: ['UI/UX', 'DEV', 'SaaS', 'Business'],
        description: "...........................................Description Coming Soon..........................................."
    },
    {
        id: 'wedding-invitation',
        title: 'Wedding Invitation and Management App',
        href: 'https://wedding-invitation-nine-sage.vercel.app/k57a4rtzvfhd3rq6ntenz8nexs80hrfm',
        imageSrc: '/projects/wedding-invitation.webp',
        imageAlt: 'Wedding Invitation and Management App',
        platform: 'web',
        tags: ['UI/UX', 'DEV', 'SaaS', 'event'],
        description: "...........................................Description Coming Soon..........................................."
    },
    {
        id: 'teddy-afro-ranking',
        title: 'Teddy Afro Songs Ranking',
        href: 'https://teddy-afro-songs-ranking.vercel.app',
        imageSrc: '/projects/teddy-afro-songs-ranking.webp',
        imageAlt: 'Teddy Afro Songs Ranking',
        platform: 'web',
        tags: ['UI/UX', 'DEV', 'Personal', 'Entertainment'],
        description: "...........................................Description Coming Soon..........................................."
    },
];