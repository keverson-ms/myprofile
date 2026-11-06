export default {
  firstName: 'Keverson',
  lastName: 'Marques de Souza',
  role: 'Desenvolvedor Full Stack | Integrações e Automação',
  photo: 'profile.jpg',
  photoHover: 'pen.jpg',

  profile: [
    'Desenvolvedor Full Stack com mais de 8 anos no Sistema FIEMT (SESI, SENAI e IEL), especializado em integração ' +
      'de sistemas corporativos e automação de processos. Desenvolvo em PHP/Laravel, Vue.js e Python, com APIs REST ' +
      'e webservices SOAP que conectam ERPs (TOTVS RM e Protheus), a plataforma SoftExpert, Active Directory e ' +
      'Microsoft Entra ID, além de ' +
      'plataformas de marketing e recrutamento, e trabalho com consultas SQL e integração de dados em MySQL, SQL ' +
      'Server e Oracle. Conduzo as entregas do levantamento de requisitos ao deploy em Linux, Docker e Azure. Criei o ' +
      'Orion, eleito Melhor Case no 15º Encontro de Gestores de TI do Sistema Indústria (2026).',
  ],

  stackCloud: [
    { name: 'Orion', weight: 6 },

    { name: 'Laravel', weight: 5 },
    { name: 'Unimed', weight: 3 },
    { name: 'SoftExpert', weight: 3 },
    { name: 'PHP', weight: 5 },
    { name: 'APIs REST', weight: 5, match: ['API REST', 'APIs REST', 'REST'] },
    { name: 'MySQL', weight: 4 },
    { name: 'Docker', weight: 4 },
    { name: 'Azure App Service', weight: 4 },
    { name: 'Linux', weight: 4 },
    { name: 'Livewire', weight: 4 },
    { name: 'LDAP / Active Directory', weight: 4, match: ['LDAP', 'Active Directory', 'AD'] },
    { name: 'TOTVS Protheus', weight: 4 },
    { name: 'TOTVS RM', weight: 4 },
    { name: 'Redis', weight: 4 },

    { name: 'Nginx', weight: 3 },
    { name: 'Apache', weight: 3 },
    { name: 'PHP-FPM', weight: 3 },
    { name: 'SQL Server', weight: 3 },
    { name: 'PostgreSQL', weight: 3 },
    { name: 'Filas e jobs (Horizon)', weight: 3, match: ['Horizon', 'filas', 'fila', 'jobs'] },
    { name: 'OAuth2', weight: 3, match: ['OAuth2', 'OAuth 2.0', 'OAuth'] },
    { name: 'Microsoft Entra ID', weight: 3 },
    { name: 'SSO / OpenID Connect', weight: 3, match: ['SSO', 'OpenID Connect', 'Single Sign-On'] },
    { name: 'Microsoft Graph', weight: 3 },
    { name: 'SOAP / Webservices', weight: 3, match: ['SOAP', 'webservice', 'webservices'] },
    { name: 'SQL', weight: 4, match: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'SQL'] },
    { name: 'Marketing digital', weight: 2, match: ['RD Station', 'Meta Pixel', 'Mailjet', 'marketing'] },
    { name: 'Gupy', weight: 2 },
    { name: 'Swagger / OpenAPI', weight: 3 },
    { name: 'n8n', weight: 3 },
    { name: 'Azure OpenAI', weight: 3 },
    { name: 'Vue.js', weight: 3, match: ['Vue.js', 'Vue 3', 'Vue'] },
    { name: 'Tailwind CSS', weight: 3 },
    { name: 'JavaScript', weight: 3, match: ['JavaScript', 'jQuery'] },
    { name: 'TypeScript', weight: 3 },
    { name: 'Python', weight: 3 },
    { name: 'GitHub Actions', weight: 3 },

    { name: 'Docker Swarm', weight: 2 },
    { name: 'Traefik', weight: 2 },
    { name: 'Supervisor', weight: 2 },
    { name: "Let's Encrypt", weight: 2 },
    { name: 'pgvector', weight: 2 },
    { name: 'Inertia.js', weight: 2 },
    { name: 'React', weight: 2 },
    { name: 'Angular', weight: 2 },
    { name: 'Java / Spring Boot', weight: 2 },
    { name: 'Oracle', weight: 2 },
    { name: 'Git / GitHub', weight: 2, match: ['GitHub', 'git hooks', 'Gitflow'] },
  ],

  contact: [
    { icon: 'phone', text: '+55 (65) 99275-4042', href: 'tel:+5565992754042' },
    { icon: 'mail', text: 'keverson.marquesouza@gmail.com', href: 'mailto:keverson.marquesouza@gmail.com' },
    { icon: 'map', text: 'Cuiabá - MT, Brasil' },
    { icon: 'globe', text: 'keverson.com.br', href: 'https://keverson.com.br' },
    { icon: 'github', text: 'github.com/keverson-ms', href: 'https://github.com/keverson-ms' },
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

  passions: [
    { icon: 'code', label: 'Programação' },
    { icon: 'music', label: 'Música' },
    { icon: 'plane', label: 'Viagens' },
    { icon: 'book', label: 'Leitura' },
  ],

  experience: [
    {
      company: 'SESI - Serviço Social da Indústria (Mato Grosso)',
      period: '03/2026 - Atual',
      position: 'Desenvolvedor de Automação',
      summary: [
        'Criei e mantenho o Orion, middleware que integra o TOTVS RM ao Active Directory (contas criadas, ' +
          'atualizadas e desativadas automaticamente a partir da folha) e atua como provedor de SSO OAuth2/OpenID Connect.',
        'Desenvolvo aplicações web e automações de processos com Laravel, Vue.js, Python e n8n.',
        'Integro ERPs (Protheus, RM Folha) e serviços Microsoft (Entra ID, Graph).',
      ],
      description: [
        'Atuo no desenvolvimento e na integração de soluções corporativas, com foco em aplicações web, automação ' +
          'de processos, interoperabilidade entre sistemas e gestão de identidades.',
      ],
      highlights: [
        {
          title: 'Orion',
          text:
            'Criei e mantenho o Orion (Laravel 12, Vue 3/Inertia), que lê as views do TOTVS RM no SQL Server e ' +
            'traduz admissões, demissões, férias, licenças e transferências em ações no Active Directory via LDAP, ' +
            'com filas no Redis, workers sob Supervisor e deploy em Docker Compose (Nginx, PHP-FPM) sobre Linux. ' +
            'Também atua como provedor de SSO OAuth2/OpenID Connect para outras aplicações.',
        },
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
      tags: ['Laravel', 'Vue.js', 'Python', 'n8n', 'LDAP / AD', 'SSO / OIDC', 'Entra ID / Graph', 'Protheus', 'Docker', 'Azure'],
    },
    {
      company: 'SESI - Serviço Social da Indústria (Mato Grosso)',
      period: '03/2021 - 02/2026',
      position: 'Consultor de TI',
      summary: [
        'Desenvolvi e sustentei sistemas e APIs REST em Laravel, Vue.js e TypeScript, do levantamento de ' +
          'requisitos à implantação.',
        'Integrei sistemas com Protheus, RM Folha, AD/LDAP e Microsoft Graph, e a API da Unimed à plataforma SoftExpert.',
        'Implantei pipelines CI/CD e ambientes com Docker e Azure.',
      ],
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
      tags: ['Laravel', 'Vue.js', 'TypeScript', 'APIs REST', 'LDAP / AD', 'Microsoft Graph', 'Docker', 'Azure'],
    },
    {
      company: 'SENAI - Serviço Nacional de Aprendizagem Industrial (Mato Grosso)',
      period: '02/2019 - 03/2021',
      position: 'Analista de TI',
      summary: [
        'Sustentei a infraestrutura web da federação (SESI, SENAI, IEL e FIEMT).',
        'Integrei sistemas com Protheus, Gestão Escolar e AD/LDAP.',
        'Desenvolvi em PHP/Laravel e JavaScript, com MySQL, PostgreSQL e SQL Server.',
      ],
      tags: ['PHP', 'Laravel', 'JavaScript', 'SQL Server', 'PostgreSQL', 'Protheus', 'LDAP / AD'],
    },
    {
      company: 'Boot Sistemas de Gestão e Marketing (Aequilibrio Pagamentos e Sistemas)',
      period: '08/2017 - 02/2019',
      position: 'Analista de Sistemas',
      summary: [
        'Iniciei como estagiário e fui efetivado, desenvolvendo soluções web em PHP, JavaScript e MySQL.',
      ],
      description: [
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
      tags: ['PHP', 'JavaScript', 'MySQL'],
    },
  ],

  education: [
    {
      institution: 'Instituto Cuiabá de Ensino e Cultura (ICEC)',
      period: '02/2014 - 10/2018',
      course: 'Ciência da Computação',
    },
  ],

  projects: [
    {
      name: 'Orion — Integração RM × Active Directory e SSO',
      org: 'Sistema FIEMT',
      period: '11/2025 – Atual',
      commits: 769,
      featured: true,
      award: {
        title: 'Melhor Case',
        event: '15º Encontro de Gestores de TI do Sistema Indústria',
        place: 'Belém-PA, 2026',
        detail: 'Projeto Portal Orion: case mais votado, com 39,53% dos votos.',
      },

      media: [
        {
          type: 'image',
          src: 'projects/orion/melhor-case.jpeg',
          alt: 'Telão do 15º Encontro de Gestores de TI anunciando o Projeto Portal Orion, da FIEMT, como Melhor Case, com 39,53% dos votos',
          caption: 'Resultado da votação: Portal Orion eleito Melhor Case',
        },
        {
          type: 'image',
          src: 'projects/orion/premio.jpg',
          alt: 'Keverson Marques de Souza segurando o troféu de Melhor Case diante do painel do 15º Encontro de Gestores de TI do Sistema Indústria, em Belém',
          caption: 'Recebendo o troféu em Belém-PA',
        },
        {
          type: 'video',
          src: 'projects/orion/anuncio-melhor-case.mp4',
          poster: 'projects/orion/melhor-case.jpeg',
          alt: 'Vídeo do anúncio do Melhor Case no auditório do evento',
          caption: 'Vídeo: anúncio do resultado no evento',
        },
      ],
      links: [
        { label: 'Fotos do evento (Flickr)', href: 'https://www.flickr.com/photos/sistemafiepaweb/55520170799/' },
        { label: 'Mais fotos (Flickr)', href: 'https://www.flickr.com/photos/sistemafiepaweb/55520615625/' },
      ],
      summary:
        'Criei e mantenho o Orion, meu principal projeto: um middleware em Laravel 12 que integra o TOTVS RM ' +
        '(folha e RH, via views no SQL Server) ao Active Directory. Eventos do Departamento Pessoal (admissão, ' +
        'demissão, férias, licenças e transferências) disparam automaticamente a criação, atualização, desativação ' +
        'e transferência de contas no AD via LDAP (LdapRecord), com sincronização de grupos e OUs e reconciliação ' +
        'periódica por CPF, e-mail ou matrícula. Os processos rodam em comandos agendados e jobs em filas nomeadas ' +
        'no Redis, executados por workers sob Supervisor. O Orion também é provedor de SSO OAuth2/OpenID Connect ' +
        '(Passport) para outras aplicações e oferece login via LDAP, Microsoft Entra ID e link por e-mail. O painel ' +
        'administrativo, em Vue 3 com Inertia e Tailwind, gerencia usuários, permissões, seções e filiais, com ' +
        'auditoria e templates de e-mail. Em produção, roda em Docker Compose sobre Linux: Nginx com HTTPS, ' +
        'PHP-FPM 8.2 com OPcache, MySQL e Redis, com validação de Gitflow e padronização de código no GitHub Actions.',
      stack: ['Laravel 12', 'PHP 8.2', 'Vue 3', 'Inertia.js', 'Tailwind CSS', 'MySQL', 'SQL Server', 'Redis'],
      integrations: ['TOTVS RM', 'LDAP / AD', 'OAuth2', 'OpenID Connect (SSO)', 'Microsoft Entra ID', 'Microsoft Graph'],
      infra: ['Docker Compose', 'Nginx', 'PHP-FPM', 'Supervisor', 'Filas e jobs', 'Linux', 'GitHub Actions', 'OpenSSL'],
    },
    {
      name: 'SGI — Plataforma de Gestão Integrada',
      org: 'Sistema FIEMT',
      period: '11/2023 – 09/2025',
      commits: 499,
      summary:
        'Integrei a API REST da Unimed ao SGI (Laravel 9/PHP 8) para abastecer a plataforma SoftExpert com contratos, ' +
        'titulares, dependentes, faturas, mensalidades e coparticipações, usando token Bearer em cache, jobs em filas ' +
        'Redis/Horizon e agendamentos. Expus APIs REST com OAuth2 (Passport) documentadas em Swagger, consumidas pelos ' +
        'portais, e criei o módulo de Não Similaridade com login LDAP/AD, consulta de NCM no Siscomex e uma API de ' +
        'verificação de certificados SSL.',
      stack: ['Laravel 9', 'PHP 8', 'Livewire', 'MySQL', 'Redis'],
      integrations: ['Unimed', 'SoftExpert', 'APIs REST', 'OAuth2 (Passport)', 'Swagger', 'LDAP / AD', 'Siscomex', 'TOTVS Protheus', 'TOTVS RM'],
      infra: ['Horizon', 'Filas e jobs', 'Azure App Service', 'Linux', 'Kudu'],
    },
    {
      name: 'Plataforma de automação e IA (n8n)',
      org: 'Sistema FIEMT',
      period: '05/2025 – 09/2026',
      commits: 120,
      summary:
        'Implantei e mantenho o n8n self-hosted em Docker Swarm sobre Linux, com Traefik v3 como proxy reverso (TLS ' +
        'com certificado coringa, rotas interna e externa e métricas restritas por IP), PostgreSQL 17 com pgvector e ' +
        'Redis em modo fila com workers dedicados. Construí fluxos de IA (RAG) com Azure OpenAI, embeddings em ' +
        'PGVector e memória de chat no Postgres, integrações com APIs internas e webhook do WhatsApp, e documentei a ' +
        'gestão de certificados com OpenSSL.',
      stack: ['n8n', 'PostgreSQL 17', 'pgvector', 'Redis'],
      integrations: ['Azure OpenAI', 'RAG', 'WhatsApp', 'APIs REST'],
      infra: ['Docker Swarm', 'Traefik', 'Linux', 'OpenSSL', 'Prometheus'],
    },
    {
      name: 'Tili — Inteligência Legislativa',
      org: 'Plataforma multi-tenant',
      period: '02/2024 – 03/2026',
      commits: 379,
      summary:
        'Atuei na infraestrutura do Tili, plataforma multi-tenant de inteligência legislativa em Laravel e Vue ' +
        '3/Inertia. Containerizei a aplicação com Docker Compose (Nginx, PHP-FPM 8.3, MySQL 8, Redis e Supervisor), ' +
        "criei templates Nginx por domínio com SSL via Certbot/Let's Encrypt, separei os ambientes local, homologação " +
        'e produção em servidores Linux (Ubuntu), automatizei o deploy com scripts shell e documentei todo o processo.',
      stack: ['Laravel', 'Vue 3', 'Inertia.js', 'MySQL 8', 'Redis'],
      infra: ['Docker Compose', 'Nginx', 'PHP-FPM', 'Supervisor', "Let's Encrypt", 'Linux (Ubuntu)', 'Shell script'],
    },
    {
      name: 'Atualização Cadastral de Colaboradores',
      org: 'Sistema FIEMT',
      period: '02/2024 – 03/2025',
      commits: 300,
      summary:
        'Desenvolvi do zero o sistema em que os colaboradores atualizam dados pessoais e formações, com aprovação do ' +
        'RH (Laravel 9, Livewire, Tailwind, MySQL). Integrei o login ao Active Directory via LDAP (LdapRecord), li ' +
        'tabelas do TOTVS RM direto no SQL Server e gravei os dados aprovados de volta via webservice SOAP, com filas ' +
        'e jobs agendados. Implementei notificações por e-mail, logs de auditoria e ambiente Docker com drivers do ' +
        'SQL Server.',
      stack: ['Laravel 9', 'Livewire', 'Tailwind CSS', 'Alpine.js', 'MySQL', 'SQL Server'],
      integrations: ['LDAP / AD', 'TOTVS RM', 'SOAP', 'SMTP'],
      infra: ['Docker', 'Supervisor', 'Filas e jobs'],
    },
    {
      name: 'Aprender — Gestão de Programa Educacional',
      org: 'Sistema FIEMT',
      period: '08/2025 – 10/2025',
      commits: 281,
      summary:
        'Desenvolvi a plataforma Aprender (Laravel 9, Livewire, Vite, MySQL) para gestão de um programa educacional: ' +
        'trilhas formativas, escolas parceiras, matrizes curriculares, editais e módulos com upload de arquivos. ' +
        'Implementei login híbrido (LDAP/AD e base local), verificação de e-mail e redefinição de senha, permissões ' +
        'hierárquicas por papel com cache, exportação para Excel, integração com a API do IBGE e painéis de BI ' +
        'incorporados, com deploy no Azure App Service.',
      stack: ['Laravel 9', 'Livewire', 'Vite', 'Tailwind CSS', 'MySQL'],
      integrations: ['LDAP / AD', 'IBGE', 'SMTP', 'Painéis de BI'],
      infra: ['Azure App Service', 'Kudu'],
    },
    {
      name: 'Corporate Login — SSO com Microsoft Entra ID',
      org: 'Biblioteca PHP (Composer)',
      period: '10/2026',
      commits: 5,
      summary:
        'Criei um pacote Composer de Single Sign-On com Microsoft Entra ID (OpenID Connect/OAuth 2.0 com PKCE), com ' +
        'validação de ID Token JWT via JWKS, consulta de perfil pelo Microsoft Graph e provisionamento automatizado ' +
        'de aplicações e segredos no Entra ID. Ofereci integração pronta para Laravel 10–12 (Service Provider, ' +
        'middleware, rotas e facades) e para PHP puro, com testes PHPUnit, PHPStan e PHPCS.',
      stack: ['PHP 8.1+', 'Laravel 10–12', 'Guzzle'],
      integrations: ['Microsoft Entra ID', 'OpenID Connect', 'OAuth 2.0 (PKCE)', 'JWT', 'Microsoft Graph'],
      infra: ['Composer', 'PHPUnit', 'PHPStan'],
    },
    {
      name: 'ADSentinel — Auditoria do Active Directory',
      org: 'Sistema FIEMT',
      period: '08/2026 – 10/2026',
      commits: 17,
      summary:
        'Desenvolvi em Python uma ferramenta de auditoria do Active Directory que lê o log de segurança dos Domain ' +
        'Controllers (pywin32/Event Log API via RPC ou PowerShell remoto via WinRM) e extrai eventos de criação, ' +
        'alteração e bloqueio de contas, grupos e logons. Gera arquivos JSON Lines por Event ID, com leitura ' +
        'incremental em lotes, checkpoint para retomada e modo em tempo real, alimentando o monitoramento de segurança.',
      stack: ['Python', 'pywin32'],
      integrations: ['Active Directory', 'Windows Event Log', 'WinRM / PowerShell'],
      infra: ['Windows Server'],
    },
    {
      name: 'Portal do Sistema FIEMT',
      org: 'Sistema FIEMT',
      period: '02/2024 – 09/2026',
      commits: 82,
      summary:
        'Atuei no portal institucional do Sistema FIEMT (Laravel/PHP, MySQL). Integrei via API REST (Guzzle) o ' +
        'formulário de não similaridade do CIN ao SGI, com upload de arquivos, fila de envio e mapeamento de dados. ' +
        'Criei homes dinâmicas gerenciadas pelo CMS, o formulário de enquadramento sindical com envio de e-mail e ' +
        'otimizei consultas. Migrei a stack de PHP 7.4/Laravel 7 para PHP 8/Laravel 9, reforcei a sanitização de ' +
        'entradas e publico no Azure App Service Linux via Kudu.',
      stack: ['Laravel 9', 'PHP 8', 'MySQL', 'jQuery'],
      integrations: ['APIs REST', 'reCAPTCHA', 'SMTP'],
      infra: ['Azure App Service', 'Linux', 'Kudu'],
    },
    {
      name: 'CMS Corporativo',
      org: 'Sistema FIEMT',
      period: '11/2023 – 07/2025',
      commits: 120,
      summary:
        'Mantive e evoluí o CMS corporativo em PHP 8 e MySQL (PDO), que alimenta os portais institucionais via API. ' +
        'Desenvolvi melhorias nos módulos de categorias, links, FAQ, serviços, downloads e eventos, regras para os ' +
        'Portais da Transparência/TCU, fluxo de publicação com confirmação e exclusão restrita, ouvidoria e ' +
        'pré-inscrições em cursos. Corrigi exposição de dados sensíveis, tratei erros de banco e configurei Apache ' +
        '(.htaccess) e CORS para a API.',
      stack: ['PHP 8.3', 'MySQL', 'Bootstrap', 'jQuery'],
      integrations: ['APIs REST', 'Mailjet', 'SMTP'],
      infra: ['Apache', 'CORS'],
    },
    {
      name: 'Portal de Carreiras',
      org: 'Sistema FIEMT',
      period: '12/2023 – 04/2025',
      commits: 111,
      summary:
        'Desenvolvi do zero o portal de carreiras em Laravel 8 e Livewire, com Bootstrap 5 e SASS, integrando a API ' +
        'REST da Gupy para listar vagas com filtros por departamento, local e modalidade (híbrido/remoto) e ' +
        'consumindo conteúdos gerenciados no CMS (banners, depoimentos, FAQ). Implementei cache para performance, ' +
        'tolerância a falhas da API, SSL forçado e redirecionamentos por ambiente, com deploy no Azure App Service ' +
        'via Kudu.',
      stack: ['Laravel 8', 'Livewire', 'Bootstrap 5', 'SASS', 'MySQL'],
      integrations: ['Gupy', 'APIs REST'],
      infra: ['Azure App Service', 'Kudu'],
    },
    {
      name: 'Portais da Transparência SESI e SENAI MT',
      org: 'SESI e SENAI MT',
      period: '11/2023 – 06/2025',
      commits: 89,
      summary:
        'Desenvolvi e refatorei os módulos dos Portais da Transparência do SESI e do SENAI MT (Laravel/PHP): ' +
        'orçamento e execução orçamentária, contratos, licitações, integridade, demonstrações contábeis, legislação ' +
        'e dirigentes, com componentes Blade reutilizáveis e conteúdo vindo do CMS. Conduzi a migração do Laravel 7 ' +
        'para o 10 (PHP 8.1) nos portais e nos sites de documentos do TCU, criei git hooks para impor o Gitflow e ' +
        'publiquei no Azure App Service Linux via Kudu.',
      stack: ['Laravel 10', 'PHP 8.1', 'MySQL', 'SQL Server', 'Redis'],
      integrations: ['APIs REST', 'reCAPTCHA'],
      infra: ['Azure App Service', 'Linux', 'Kudu', 'Git hooks'],
    },
    {
      name: 'Moodle — Infraestrutura do AVA',
      org: 'Sistema FIEMT',
      period: '04/2024 – 09/2026',
      commits: 33,
      summary:
        'Montei o ambiente Docker inicial do Moodle (Nginx, PHP-FPM 8.0 a 8.3 e MySQL) e depois assumi a stack de ' +
        'produção do Moodle 4.2: PHP 8.1-FPM em Debian com extensões GD, intl, LDAP e OPcache, Nginx como proxy ' +
        'FastCGI com HTTPS, MySQL 8 e cron no contêiner. Fiz hardening (server_tokens off, permissões, remoção de ' +
        'certificados e segredos do repositório), ajustei o php.ini e documentei a extração de certificados de PFX ' +
        'com OpenSSL.',
      stack: ['Moodle 4.2', 'PHP 8.1', 'MySQL 8'],
      integrations: ['LDAP / AD'],
      infra: ['Docker', 'Nginx', 'PHP-FPM', 'Linux (Debian)', 'OpenSSL'],
    },
    {
      name: 'Cantina — Pedidos de Autoatendimento',
      org: 'Sistema FIEMT',
      period: '07/2024 – 08/2024',
      commits: 119,
      summary:
        'Desenvolvi um sistema de pedidos para cantina corporativa em Laravel 10, Livewire 3/Volt, Tailwind e MySQL, ' +
        'com carrinho de compras, finalização de pedidos e impressão de comprovantes em impressora térmica via ' +
        'ESC/POS. Estruturei a integração REST com o ERP TOTVS Protheus, usei Redis com Horizon e Pulse para filas e ' +
        'monitoramento e preparei o ambiente em containers Docker.',
      stack: ['Laravel 10', 'Livewire 3', 'Tailwind CSS', 'MySQL', 'Redis'],
      integrations: ['TOTVS Protheus', 'APIs REST', 'ESC/POS'],
      infra: ['Docker', 'Horizon', 'Pulse'],
    },
    {
      name: 'SINAES-MT — Avaliação Institucional',
      org: 'Ensino superior',
      period: '11/2024',
      commits: 43,
      summary:
        'Atuei no sistema de avaliação institucional (SINAES) em Laravel 11, Inertia.js, Vue 3 e MySQL. Desenvolvi a ' +
        'integração REST com o sistema de gestão educacional para importar unidades, cursos e alunos por jobs em ' +
        'fila, implementei auditoria de ações, sessão única por usuário e escopos globais, e criei o script de deploy ' +
        'para o Azure App Service Linux (Kudu) com Apache.',
      stack: ['Laravel 11', 'Inertia.js', 'Vue 3', 'Tailwind CSS', 'MySQL'],
      integrations: ['APIs REST', 'TOTVS RM'],
      infra: ['Azure App Service', 'Linux', 'Kudu', 'Apache'],
    },
    {
      name: 'Gestão de Treinamentos',
      org: 'Sistema FIEMT',
      period: '04/2025 – 06/2025',
      commits: 61,
      summary:
        'Configurei o CI/CD do sistema de gestão de treinamentos: GitHub Actions compilando o backend Java 21/Spring ' +
        'Boot 3.3 (JPA, Spring Security com JWT, OpenAPI, MySQL) via Maven e publicando no Azure App Service, e ' +
        'workflows do frontend Angular 17 (PrimeNG) para Azure App Service e Azure Static Web Apps, com servidor ' +
        'Express para o build de produção. Ajustei a segurança e o CORS, as variáveis de ambiente e a documentação.',
      stack: ['Java 21', 'Spring Boot 3', 'Angular 17', 'MySQL'],
      integrations: ['JWT', 'OpenAPI'],
      infra: ['GitHub Actions', 'Azure App Service', 'Azure Static Web Apps', 'Docker'],
    },
    {
      name: 'Vênus — Estornos e Reclassificações Contábeis',
      org: 'Sistema FIEMT',
      period: '11/2023 – 04/2025',
      commits: 15,
      summary:
        'No Vênus, aplicação React (Material UI e Ant Design) para estornos e reclassificações contábeis e de folha, ' +
        'implementei o consumo da API REST do TOTVS Protheus com OAuth2 (token Bearer via interceptor do axios), ' +
        'filtros de contas contábeis, centros de custo e folha, validações de formulários com Formik/Yup e o script ' +
        'de publicação da homologação em servidor Linux.',
      stack: ['React', 'Material UI', 'Ant Design', 'Formik'],
      integrations: ['TOTVS Protheus', 'OAuth2', 'APIs REST'],
      infra: ['Linux', 'Shell script'],
    },
    {
      name: 'Portais SENAI, FATEC SENAI e IEL MT',
      org: 'SENAI, FATEC e IEL MT',
      period: '11/2023 – 09/2026',
      commits: 71,
      summary:
        'Atuei nos portais do SENAI, da FATEC SENAI e do IEL MT (Laravel/PHP), que reúnem dados de MySQL, SQL Server ' +
        '(visões do TOTVS RM) e Oracle e integram a API de vagas da Empregare. Migrei projetos do Laravel 7 para 8 e ' +
        '9 (PHP 8), tratei injeção de SQL e sanitização, adicionei reCAPTCHA e Form Requests nas pré-inscrições, ' +
        'configurei conexão MySQL com SSL/TLS, integrei RD Station e Meta Pixel e otimizei o desempenho, com deploy ' +
        'no Azure App Service via Kudu.',
      stack: ['Laravel 9', 'PHP 8', 'MySQL', 'SQL Server', 'Oracle'],
      integrations: ['TOTVS RM', 'Empregare', 'reCAPTCHA', 'RD Station', 'Meta Pixel'],
      infra: ['Azure App Service', 'Kudu', 'SSL/TLS'],
    },
    {
      name: 'Eficientômetro do CSC',
      org: 'Sistema FIEMT',
      period: '05/2025',
      commits: 3,
      summary:
        'Criei o Eficientômetro do CSC, dashboard web responsivo em React e TypeScript (Vite, Tailwind, shadcn/ui, ' +
        'Recharts) que apresenta as reduções de custos e de horas obtidas pelo Centro de Serviços Compartilhados, ' +
        'com fluxo de cadastro e aprovação, rotas protegidas por perfil, testes unitários e a especificação da ' +
        'integração com API Node/Express e MySQL.',
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      integrations: ['APIs REST', 'MySQL'],
      infra: ['Testes unitários'],
    },
  ],

  courses: [],
}
