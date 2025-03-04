import { insights } from "@/constants/data";

export default {
    navbar: {
        about: "Sobre a PressurePro LATAM",
        explore: "Mercados",
        getStarted: "Começar",
        whatsNew: "Por que PressurePro",
        world: "Representação",
        insights: "Produtos",
        feedback: "Contato"
    },
    hero: {
        title: "PressurePro LATAM",
        subtitle: "Monitoramento de pneus em tempo real"
    },
    about: {
        title: "Sobre a PressurePro LATAM",
        text: "A PressurePro LATAM revoluciona a manutenção de pneus, fornecendo aos motoristas e gestores de frotas todos os tipos de dados em tempo real sobre o desempenho dos pneus. A PressurePro LATAM adiciona segurança e economia em qualquer caminho que você percorra. Desde 1991, a PressurePro tem sido líder em tecnologia de monitoramento de pneus, fornecendo soluções inovadoras para a segurança e eficiência de sua frota. A PressurePro LATAM é o distribuidor exclusivo para a América Latina da PressurePro, líder em tecnologia de monitoramento de pressão de pneus."
    },
    explore: {
        title: "Mercados",
        subtitle: "Uma solução para cada setor",
        showInfo: "+ Info",
        closeInfo: "Fechar",
        industries: {
            'world-1': "Mineração",
            'world-2': "Agricultura",
            'world-3': "Florestal",
            'world-4': "Portuário",
            'world-5': "Industrial",
            'world-6': "Transporte"
        },
        marketInfo: {
            'world-1': "Na mineração, nosso sistema de monitoramento de pneus otimiza a vida útil de equipamentos de alto custo e melhora a segurança operacional em ambientes extremos.",
            'world-2': "Para o setor agrícola, oferecemos soluções que maximizam o desempenho de máquinas e reduzem o tempo de inatividade durante períodos críticos de plantio e colheita.",
            'world-3': "Em ambientes florestais, nossos sensores resistem a condições difíceis e ajudam a manter os equipamentos funcionando em terrenos remotos e desafiadores.",
            'world-4': "A operação portuária se beneficia de nosso sistema, otimizando frotas de manuseio de carga onde o tempo de inatividade representa custos significativos.",
            'world-5': "Em ambientes industriais, nossas soluções melhoram a confiabilidade dos equipamentos e reduzem riscos em operações contínuas onde a segurança é prioritária.",
            'world-6': "No transporte, nosso sistema de monitoramento de pneus otimiza a vida útil de equipamentos de alto custo e melhora a segurança operacional em ambientes extremos."
        },
        modalTitle: {
            'world-1': "Mineração - Soluções Avançadas",
            'world-2': "Agricultura - Tecnologia de Precisão",
            'world-3': "Florestal - Monitoramento para Terrenos Difíceis",
            'world-4': "Portuário - Otimização de Operações",
            'world-5': "Industrial - Eficiência e Segurança",
            'world-6': "Transporte - Sistemas de Monitoramento"
        },
        modalDescription: {
            'world-1': "Nossas soluções avançadas para o setor de mineração detectam problemas de pressão e temperatura em tempo real, antecipando riscos potenciais em pneus de equipamentos críticos. Este monitoramento constante permite intervenção antes que ocorram avarias maiores, estendendo a vida útil da borracha e protegendo investimentos significativos.",
            'world-2': "A tecnologia PressurePro fornece dados críticos para maquinaria agrícola, permitindo ajustes precisos que protegem as culturas e otimizam o desempenho do equipamento. Nossos sistemas monitoram constantemente a pressão durante trabalhos intensivos, onde cada hora de operação é crucial para o sucesso da temporada.",
            'world-3': "Desenvolvemos tecnologia especializada que suporta as exigências únicas do trabalho florestal, onde os pneus enfrentam obstáculos constantes e superfícies irregulares. Nosso sistema de monitoramento mantém a produtividade em áreas onde uma falha pode significar longos tempos de espera e altos custos de recuperação.",
            'world-4': "Nossa tecnologia responde às exigências da indústria portuária moderna, onde equipamentos de movimentação de carga operam sob pressão constante. O monitoramento em tempo real permite aos operadores identificar problemas potenciais antes que afetem os rígidos cronogramas de carga e descarga, reduzindo significativamente os custos devido a atrasos.",
            'world-5': "Instalações industriais modernas requerem soluções de monitoramento que mantenham a continuidade operacional. Nossa tecnologia se integra perfeitamente aos protocolos de manutenção preventiva, alertando sobre variações de pressão que poderiam comprometer a segurança do pessoal e a integridade dos equipamentos especializados.",
            'world-6': "Os profissionais de transporte enfrentam desafios constantes em estradas que testam seus veículos. Nosso sistema fornece informações cruciais que ajudam a programar manutenções sem interromper rotas planejadas, garantindo entregas pontuais enquanto estende a vida útil da frota."
        },
        modalAdditional: {
            'world-1': "A tecnologia PressurePro permite configurar parâmetros específicos para cada tipo de maquinário de mineração, considerando fatores como carga, velocidade e condições do terreno. Esta abordagem personalizada maximiza o retorno do investimento ao reduzir as despesas com pneus em até 20%, um dos maiores custos operacionais na indústria de mineração depois do combustível.",
            'world-2': "Nossos dispositivos ajudam a prevenir a prejudicial compactação do solo causada por pneus com pressão incorreta, protegendo tanto a terra arável quanto o investimento em maquinaria. Agricultores que utilizam o PressurePro relatam até 15% de melhoria na tração e redução significativa no desgaste prematuro de componentes mecânicos.",
            'world-3': "A conectividade avançada de nossos sistemas permite o monitoramento mesmo em áreas de difícil acesso, enviando alertas precoces antes que os pneus sofram danos irreversíveis. Esta capacidade é especialmente valiosa em operações florestais onde as máquinas trabalham em locais remotos com acesso limitado a serviços de manutenção.",
            'world-4': "Adaptamos nossas soluções à variedade de equipamentos utilizados em terminais portuários, desde reach stackers até RTGs, onde cada tipo de máquina enfrenta diferentes padrões de desgaste. A implementação do PressurePro em ambientes portuários demonstrou reduzir incidentes relacionados a pneus em frotas de alta demanda em até 30%.",
            'world-5': "Em ambientes industriais com operação contínua, nosso sistema se integra com plataformas IoT existentes, centralizando informações para uma gestão eficiente de ativos. Esta conectividade permite análises preditivas que identificam padrões de desgaste antes que comprometam a produção, especialmente valioso em operações de três turnos.",
            'world-6': "Oferecemos configurações específicas para diferentes tipos de veículos de transporte, desde caminhões de longa distância até frotas de distribuição urbana. Os gestores de frota podem estabelecer parâmetros personalizados para cada rota e carga, recebendo alertas específicos que permitem decisões informadas para otimizar cada quilômetro percorrido."
        },
        benefit1: {
            'world-1': "Eficiência",
            'world-2': "Eficiência",
            'world-3': "Eficiência",
            'world-4': "Eficiência",
            'world-5': "Eficiência",
            'world-6': "Eficiência"
        },
        benefit2: {
            'world-1': "Economia",
            'world-2': "Economia",
            'world-3': "Economia",
            'world-4': "Economia",
            'world-5': "Economia",
            'world-6': "Economia"
        },
        benefit3: {
            'world-1': "Segurança",
            'world-2': "Segurança",
            'world-3': "Segurança",
            'world-4': "Segurança",
            'world-5': "Segurança",
            'world-6': "Segurança"
        },
        benefit4: {
            'world-1': "Inovação",
            'world-2': "Inovação",
            'world-3': "Inovação",
            'world-4': "Inovação",
            'world-5': "Inovação",
            'world-6': "Inovação"
        },
    },
    getStarted: {
        title: "Comece agora",
        subtitle: "Descubra como a PressurePro LATAM pode ajudá-lo a manter seus pneus"
    },
    whatsNew: {
        title: "Por que nos escolher?",
        title2: "Por que escolher a PressurePro?",
        newFeatures: [
            {
                imgUrl: '/vrpano.svg',
                title: "Segurança",
                subtitle: "Previne acidentes ao detectar variações de pressão, melhorando o controle, a estabilidade e a confiabilidade do veículo."
            },
            {
                imgUrl: '/headset.svg',
                title: "Economia",
                subtitle: "Otimiza o consumo de combustível, reduz o desgaste dos pneus e minimiza os custos de manutenção e substituição."
            }
        ]
    },
    world: {
        typingTex: "Tecnologia de ponta para a América Latina",
        title: "PressurePro LATAM distribuidor exclusivo para América Latina da PressurePro",
        description: "Somos líderes em tecnologia de monitoramento de pressão de pneus, fornecendo soluções inovadoras para a segurança e eficiência de sua frota."
    },
    insights: {
        typingTex: "Produtos",
        title: "Nossos Produtos",
        downloadSpecs: "Baixar Especificações",
        products: [
            {
                imgUrl: '/planet-06.png',
                title: '{ Sensores }',
                description:
                    'Eles são instalados ajustando-os à haste da válvula do pneu. O monitoramento avançado inclui uma lógica de detecção dinâmica única no mercado com altas taxas de amostragem e proteção incomparável.',
                specs: 'Baixar Especificações',
                specsUrl: '/SEN-200-Spec-Sheet.pdf',
            },
            {
                imgUrl: '/planet-07.png',
                title: '{ Pulse TMPMS + Display }',
                description:
                    'O Pulse TMPMS é um sistema de monitoramento de pressão de pneus e temperatura que oferece uma solução de monitoramento de pressão de pneus em tempo real para veículos de passeio, caminhões e ônibus.',
                specs: 'Baixar Especificações',
                specsUrl: '/PLS-100-Spec-Sheet.pdf',
            },
            {
                imgUrl: '/planet-08.png',
                title: '{ Link - HD, LT y UR }',
                description:
                    'O Link é um dispositivo de comunicação que permite a integração de sensores de pressão de pneus com sistemas de telemática de veículos.',
                specs: 'Baixar Especificações',
                specsUrl: 'LNK-101-Spec-Sheet.pdf',
            },
            {
                imgUrl: '/planet-088.png',
                title: '{ Fx }',
                description:
                    'O Fx é um sistema de monitoramento de pressão de pneus e temperatura que oferece uma solução de monitoramento de pressão de pneus em tempo real para veículos de passeio, caminhões e ônibus.',
                specs: 'Baixar Especificações',
                specsUrl: '/FX-Fleet.pdf',
            },
        ],
    },
    feedback: {
        text: "Desde 1991, a PressurePro revoluciona a manutenção de pneus por meio de soluções inovadoras que potencializam o desempenho dos pneus."
    },
    footer: {
        contact: "Contato",
    },
};