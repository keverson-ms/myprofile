// Edite este arquivo com suas informações reais.
export default {
  firstName: 'Keverson',
  lastName: 'Souza',
  role: 'Desenvolvedor de Sistemas',
  photo: 'profile.jpg',
  photoHover: 'pen.jpg', // exibida ao passar o mouse sobre a lateral

  // Cada item é um parágrafo
  profile: [
    'Possuo habilidades em desenvolvimento Full Stack, com experiência em PHP, Laravel, JavaScript, TypeScript, ' +
      'Vue.js, Inertia.js, Tailwind CSS e Python, atuando na construção de aplicações web, APIs, integrações e ' +
      'sistemas corporativos. Tenho conhecimentos em bancos de dados, Docker, Git, GitHub, Microsoft Azure, ' +
      'Active Directory, LDAP, Microsoft Entra ID, Microsoft Graph e soluções ERP, como RM Folha e Protheus.',
    'Tenho interesse em arquitetura de software, integração de sistemas, automação de processos, infraestrutura, ' +
      'computação em nuvem, DevOps e práticas de CI/CD. Busco aprimorar continuamente meus conhecimentos, explorar ' +
      'novas tecnologias e desenvolver soluções cada vez mais eficientes, seguras, escaláveis e sustentáveis.',
    'Como pretensão de futuro, desejo evoluir tecnicamente, ampliar minha atuação em arquitetura e engenharia de ' +
      'software, aprofundar meus conhecimentos em Python, cloud computing e DevOps, além de participar de projetos ' +
      'desafiadores, contribuindo tanto na construção de soluções quanto na evolução tecnológica e estratégica das ' +
      'organizações.',
  ],

  contact: [
    { icon: 'phone', text: '+55 (65) 99275-4042', href: 'tel:+5565992754042' },
    { icon: 'mail', text: 'keverson.marquesouza@gmail.com', href: 'mailto:keverson.marquesouza@gmail.com' },
    { icon: 'map', text: 'Cuiabá - MT, Brasil' },
    { icon: 'globe', text: 'keverson.com.br', href: 'https://keverson.com.br' },
  ],

  social: [
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      handle: 'keverson-marques-de-souza',
      href: 'https://www.linkedin.com/in/keverson-marques-de-souza-677a5b140',
    },
    {
      icon: 'instagram',
      label: 'Instagram',
      handle: '@marquesouzaz',
      href: 'https://www.instagram.com/marquesouzaz/',
    },
    {
      icon: 'facebook',
      label: 'Facebook',
      handle: 'keversonMarqueSouza',
      href: 'https://www.facebook.com/keversonMarqueSouza/',
    },
  ],

  skills: [
    { name: 'Vue.js', level: 5 },
    { name: 'JavaScript', level: 5 },
    { name: 'PHP / Laravel', level: 4 },
    { name: 'Tailwind CSS', level: 4 },
    { name: 'SQL / MySQL', level: 4 },
  ],

  passions: [
    { icon: 'code', label: 'Programação' },
    { icon: 'music', label: 'Música' },
    { icon: 'plane', label: 'Viagens' },
    { icon: 'book', label: 'Leitura' },
  ],

  // Da mais recente para a mais antiga.
  // description: lista de parágrafos | highlights: destaques (opcional) | tags: tecnologias (opcional)
  experience: [
    {
      company: 'SESI - Serviço Social da Indústria (Mato Grosso)',
      period: '03/2026 - Atual',
      position: 'Desenvolvedor de Automação',
      description: [
        'Atuo no desenvolvimento e na integração de soluções corporativas, com foco em aplicações web, automação ' +
          'de processos, interoperabilidade entre sistemas e gestão de identidades.',
      ],
      highlights: [
        {
          title: 'Backend',
          text: 'Desenvolvo com PHP e Laravel: APIs, regras de negócio e integrações entre sistemas.',
        },
        {
          title: 'Frontend',
          text: 'Construo interfaces com Vue.js, Inertia.js, TypeScript e Tailwind CSS.',
        },
        {
          title: 'Python',
          text:
            'Utilizo Python para automação, processamento de dados e desenvolvimento de serviços complementares ' +
            'às aplicações corporativas.',
        },
        {
          title: 'Identidade e diretório',
          text:
            'Desenvolvo integrações com serviços de diretório e identidade (LDAP, Active Directory, Microsoft ' +
            'Entra ID e Microsoft Graph), abrangendo autenticação, gestão de usuários e aplicações e comunicação ' +
            'entre ambientes locais e serviços em nuvem.',
        },
        {
          title: 'Sistemas empresariais',
          text:
            'Trabalho com integrações de sistemas empresariais, como TOTVS RM Folha e Protheus, automatizando o ' +
            'intercâmbio de informações entre diferentes áreas e plataformas.',
        },
        {
          title: 'Orquestração de processos',
          text:
            'Utilizo o n8n na orquestração de processos, criando fluxos que integram APIs, aplicações e serviços ' +
            'corporativos, sincronizam informações e eliminam tarefas operacionais manuais.',
        },
        {
          title: 'Engenharia de software',
          text:
            'Trabalho com Docker, Git/GitHub e CI/CD na padronização de projetos e na estruturação dos fluxos de ' +
            'desenvolvimento, homologação e implantação, em ambientes locais e no Microsoft Azure. Participo ainda ' +
            'de decisões de arquitetura, investigação de problemas técnicos, avaliação de bibliotecas e tecnologias ' +
            'e otimização de aplicações.',
        },
      ],
      tags: [
        'PHP', 'Laravel', 'Vue.js', 'Inertia.js', 'TypeScript', 'Tailwind CSS', 'Python', 'n8n',
        'LDAP / Active Directory', 'Microsoft Entra ID', 'Microsoft Graph', 'TOTVS RM Folha', 'Protheus',
        'Docker', 'Git / GitHub', 'CI/CD', 'Microsoft Azure',
      ],
    },
    {
      company: 'SESI - Serviço Social da Indústria (Mato Grosso)',
      period: '03/2021 - 02/2026',
      position: 'Consultor de TI',
      description: [
        'Atuei no desenvolvimento, manutenção e evolução de sistemas e aplicações corporativas, participando de ' +
          'diferentes etapas do ciclo de vida do software, desde o levantamento de necessidades e compreensão das ' +
          'regras de negócio até a implementação, integração, sustentação e melhoria contínua das soluções.',
      ],
      highlights: [
        {
          title: 'Backend',
          text:
            'Minha atuação envolveu principalmente o desenvolvimento backend com PHP e Laravel, contemplando a ' +
            'criação de funcionalidades, implementação de regras de negócio, construção e integração de APIs REST, ' +
            'manipulação de bancos de dados e desenvolvimento de serviços para atender às necessidades dos ' +
            'processos internos da organização.',
        },
        {
          title: 'Frontend',
          text:
            'Trabalhei na construção e evolução de interfaces utilizando JavaScript, TypeScript, Vue.js, Inertia.js, ' +
            'Tailwind CSS, HTML e CSS, buscando desenvolver aplicações dinâmicas, responsivas e com boa experiência ' +
            'de utilização.',
        },
        {
          title: 'Integração de sistemas',
          text:
            'Participei de iniciativas de integração entre sistemas corporativos, explorando tecnologias e serviços ' +
            'como LDAP, Active Directory e Microsoft Graph, incluindo possibilidades de gerenciamento de identidades, ' +
            'autenticação e integração com o Microsoft Entra ID. Tive contato com ambientes e sistemas empresariais ' +
            'como RM Folha e TOTVS Protheus.',
        },
        {
          title: 'Infraestrutura e entrega de software',
          text:
            'Trabalhei com Git para versionamento e gerenciamento de código-fonte, Docker para conteinerização de ' +
            'aplicações e organização de ambientes de desenvolvimento e homologação. Também participei de ' +
            'iniciativas relacionadas à automação de processos de desenvolvimento e implantação, utilizando ' +
            'conceitos de CI/CD e integração com ambientes em nuvem, especialmente Microsoft Azure.',
        },
        {
          title: 'Sustentação e melhoria contínua',
          text:
            'Análise e resolução de problemas técnicos, identificação de falhas, otimização de processos, ' +
            'manutenção de aplicações existentes e evolução de soluções, buscando conciliar as necessidades ' +
            'operacionais do negócio com a qualidade técnica, a segurança e a sustentabilidade dos sistemas.',
        },
      ],
      closing:
        'Ao longo desse período, desenvolvi uma visão abrangente do desenvolvimento de software, atuando tanto no ' +
        'backend quanto no frontend e ampliando minha participação em questões relacionadas à arquitetura de ' +
        'aplicações, integração de sistemas, infraestrutura e processos de entrega de software.',
      tags: [
        'PHP', 'Laravel', 'JavaScript', 'TypeScript', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'APIs REST',
        'LDAP / Active Directory', 'Microsoft Graph', 'Microsoft Entra ID', 'RM Folha', 'TOTVS Protheus',
        'Git', 'Docker', 'CI/CD', 'Microsoft Azure',
      ],
    },
    {
      company: 'SENAI - Serviço Nacional de Aprendizagem Industrial (Mato Grosso)',
      period: '02/2019 - 03/2021',
      position: 'Analista de TI',
      highlights: [
        { text: 'Sustentação da infraestrutura web da federação (SESI, SENAI, IEL, FIEMT).' },
        { text: 'Integrações com Protheus, Gestão Escolar e LDAP/Active Directory.' },
        { text: 'Desenvolvimento com PHP, Laravel, JavaScript, Bootstrap e Tailwind.' },
        { text: 'Banco de dados MySQL, PostgreSQL e SQL Server.' },
        { text: 'Levantamento de requisitos, execução, homologação e implantação em produção.' },
      ],
      tags: [
        'PHP', 'Laravel', 'JavaScript', 'Bootstrap', 'Tailwind CSS',
        'MySQL', 'PostgreSQL', 'SQL Server', 'Protheus', 'LDAP / Active Directory',
      ],
    },
    {
      company: 'Boot Sistemas de Gestão e Marketing (Aequilibrio Pagamentos e Sistemas)',
      period: '08/2017 - 02/2019',
      position: 'Analista de Sistemas',
      description: [
        'Embora o registro em carteira compreenda o período de 01/08/2018 a 04/08/2019, minha trajetória na ' +
          'empresa teve início por meio do cumprimento de estágio obrigatório, com duração de um ano. Após esse ' +
          'período, fui efetivado, dando continuidade às atividades profissionais e assumindo responsabilidades ' +
          'cada vez maiores no desenvolvimento de soluções tecnológicas.',
        'Fui o primeiro funcionário contratado pela empresa, atuando diretamente ao lado do sócio e líder técnico, ' +
          'que concentrava o conhecimento técnico e operacional do negócio. Durante os primeiros seis meses, tive a ' +
          'oportunidade de adquirir conhecimentos, desenvolver habilidades técnicas e compreender os processos de ' +
          'desenvolvimento e manutenção dos sistemas. Gradualmente, passei a assumir a execução de atividades, ' +
          'funcionalidades e projetos, sempre sob sua supervisão e orientação.',
        'Esse período foi fundamental para minha formação e consolidação profissional, permitindo o desenvolvimento ' +
          'de autonomia técnica, capacidade de resolução de problemas e experiência prática na concepção, ' +
          'implementação e evolução de sistemas.',
        'Minha atuação esteve diretamente relacionada ao desenvolvimento de aplicações web utilizando tecnologias ' +
          'fundamentais, como PHP, HTML, CSS, JavaScript e MySQL. Trabalhei com essas tecnologias desde a construção ' +
          'das interfaces até a implementação das regras de negócio, processamento de dados e integração com bancos ' +
          'de dados, desenvolvendo soluções a partir de suas estruturas fundamentais (from scratch).',
        'Além das atividades de desenvolvimento, participei ativamente da concepção e construção de produtos e ' +
          'soluções tecnológicas, contribuindo para o crescimento e a estruturação do portfólio da empresa, incluindo:',
      ],
      highlights: [
        {
          title: 'Ferramentas de comunicação e marketing digital',
          text: 'desenvolvimento de soluções para disparo em massa de SMS, e-mails e campanhas de WhatsApp Marketing.',
        },
        {
          title: 'Sistemas de gestão especializados',
          text:
            'participação no desenvolvimento do Boot Clinical, voltado à gestão de clínicas, e do BootConstru, ' +
            'destinado à gestão de materiais de construção.',
        },
        {
          title: 'Soluções web personalizadas',
          text:
            'desenvolvimento de portais institucionais, landing pages e sistemas de gerenciamento de conteúdo (CMS) ' +
            'customizáveis, adaptados às necessidades específicas dos clientes.',
        },
      ],
      closing:
        'Minha atuação contribuiu para a construção da base tecnológica da empresa, desde o desenvolvimento de ' +
        'soluções sob demanda até a concepção e evolução de produtos próprios, proporcionando uma experiência ' +
        'abrangente em desenvolvimento de software, participação no crescimento de uma empresa de tecnologia e ' +
        'construção de soluções voltadas às necessidades reais dos clientes.',
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
  ],

  // description é opcional
  education: [
    {
      institution: 'Instituto Cuiabá de Ensino e Cultura (MT)',
      period: '02/2014 - 10/2018',
      course: 'Ensino Superior em Ciência da Computação',
    },
  ],
}
