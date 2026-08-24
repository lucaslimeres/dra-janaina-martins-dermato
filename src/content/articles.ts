import cirurgiaImg from "../assets/images/procedimento-cirurgia.jpeg";
import ultrassomImg from "../assets/images/procedimento-ultrassom.jpeg";
import psoriaseImg from "../assets/images/psoriase.jpg";
import consultaImg from "../assets/images/consulta-dermatologica.jpg";

export interface ArticleBlock {
  type: "heading" | "paragraph" | "list";
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  coverImage: string;
  publishedAt: string;
  readingTime: string;
  blocks: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "o-que-faz-um-dermatologista",
    title: "Dermatologista: o que faz, quando procurar e como esse médico cuida da sua pele",
    description:
      "Entenda o que faz um dermatologista, quais doenças ele trata, quando procurar esse médico e por que o cuidado com a pele vai muito além da estética.",
    category: "Dermatologia Clínica",
    tags: ["Dermatologia Clínica", "Cuidados com a Pele"],
    coverImage: consultaImg,
    publishedAt: "2026-08-24",
    readingTime: "5 min",
    blocks: [
      {
        type: "paragraph",
        text: "O dermatologista é o médico responsável por cuidar da saúde da pele, dos cabelos, das unhas e das mucosas.",
      },
      {
        type: "paragraph",
        text: "Ele diagnostica, trata e acompanha doenças de pele, além de orientar sobre prevenção, envelhecimento cutâneo e procedimentos dermatológicos.",
      },
      {
        type: "paragraph",
        text: "A pele é o maior órgão do corpo humano. Ela protege, regula a temperatura, participa da imunidade e reflete muito do que acontece dentro do organismo. Por isso, o cuidado com a pele vai muito além da estética — consultar um dermatologista é cuidar da saúde como um todo.",
      },
      { type: "heading", text: "O que o dermatologista trata?" },
      { type: "paragraph", text: "O dermatologista atua em três grandes áreas:" },
      {
        type: "list",
        items: [
          "Dermatologia clínica: diagnóstico e tratamento das doenças da pele, cabelos e unhas.",
          "Dermatologia cirúrgica: procedimentos cirúrgicos dermatológicos, desde pequenas remoções até cirurgias mais complexas.",
          "Dermatologia estética: melhora da qualidade da pele, envelhecimento cutâneo, manchas, flacidez e cicatrizes.",
        ],
      },
      { type: "heading", text: "Principais doenças tratadas pelo dermatologista" },
      {
        type: "list",
        items: [
          "Acne",
          "Rosácea",
          "Psoríase",
          "Dermatite atópica",
          "Dermatite de contato",
          "Manchas na pele",
          "Queda de cabelo",
          "Caspa",
          "Micose de pele e unhas",
          "Verrugas",
          "Infecções de pele",
          "Câncer de pele",
          "Alterações nas unhas",
        ],
      },
      { type: "heading", text: "Quando procurar um dermatologista?" },
      {
        type: "list",
        items: [
          "Surgimento de manchas novas na pele.",
          "Mudança de cor, tamanho ou formato de pintas.",
          "Coceira persistente.",
          "Feridas que não cicatrizam.",
          "Acne que não melhora.",
          "Queda excessiva de cabelo.",
          "Alterações nas unhas.",
          "Descamação frequente da pele.",
          "Histórico familiar de câncer de pele.",
        ],
      },
      { type: "heading", text: "Dermatologista cuida só de estética?" },
      {
        type: "paragraph",
        text: "Não. Apesar de o dermatologista também atuar na estética, sua principal função é cuidar da saúde da pele. A dermatologia estética é apenas uma parte da especialidade. Todo procedimento estético deve ser indicado com base em avaliação médica criteriosa.",
      },
      { type: "heading", text: "Importância da consulta com o dermatologista" },
      {
        type: "paragraph",
        text: "Durante a consulta, o dermatologista avalia a pele de forma global. Ele pode identificar doenças que o paciente ainda não percebe. A consulta permite diagnóstico precoce e prevenção de complicações. O acompanhamento dermatológico melhora a qualidade da pele ao longo da vida.",
      },
      { type: "heading", text: "Dermatologista em todas as fases da vida" },
      {
        type: "list",
        items: [
          "Crianças: dermatite atópica, infecções de pele, verrugas e manchas congênitas.",
          "Adultos: acne, queda de cabelo, doenças inflamatórias, estética e envelhecimento.",
          "Idosos: lesões suspeitas, ressecamento intenso, feridas crônicas e tumores cutâneos.",
        ],
      },
      { type: "heading", text: "Dermatologista e câncer de pele" },
      {
        type: "paragraph",
        text: "O dermatologista é o médico capacitado para diagnosticar o câncer de pele. Avaliação de pintas, manchas e feridas que não cicatrizam faz parte da consulta. O diagnóstico precoce aumenta significativamente as chances de cura.",
      },
      { type: "heading", text: "Diferença entre dermatologista e esteticista" },
      {
        type: "paragraph",
        text: "O dermatologista é médico, com formação e especialização. O esteticista não realiza diagnóstico médico nem prescreve medicamentos. Doenças de pele e procedimentos invasivos devem ser tratados por dermatologista.",
      },
      { type: "heading", text: "Com que frequência ir ao dermatologista?" },
      {
        type: "list",
        items: [
          "Pessoas sem queixas: pelo menos uma vez ao ano.",
          "Pacientes com doenças de pele: conforme orientação médica.",
          "Histórico de câncer de pele: acompanhamento regular.",
          "Pacientes em tratamento estético: conforme plano individual.",
        ],
      },
      { type: "heading", text: "Sobre a Dra. Janaína Martins" },
      {
        type: "paragraph",
        text: "A Dra. Janaína Martins é médica dermatologista e atua no diagnóstico, tratamento e acompanhamento das doenças da pele, cabelos e unhas. Com atendimento voltado para dermatologia clínica, cirúrgica e estética, realiza avaliação individualizada e criteriosa, sempre priorizando segurança, precisão diagnóstica e resultados naturais.",
      },
      {
        type: "paragraph",
        text: "Atende em Sorocaba, oferecendo acompanhamento dermatológico em todas as fases da vida — da infância à terceira idade — com foco em prevenção, saúde da pele e qualidade de vida.",
      },
      { type: "heading", text: "Conclusão" },
      {
        type: "paragraph",
        text: "A pele é um órgão vital e merece atenção especializada. O dermatologista é o profissional indicado para cuidar da saúde da pele em todas as fases da vida. Consultar regularmente um dermatologista é investir em saúde, prevenção e qualidade de vida.",
      },
    ],
  },
  {
    slug: "cirurgias-dermatologicas",
    title: "Cirurgias dermatológicas: quando são indicadas, tipos e a importância do dermatologista",
    description:
      "Saiba quando as cirurgias dermatológicas são indicadas, quais os principais tipos e por que devem ser realizadas exclusivamente por um dermatologista.",
    category: "Dermatologia Cirúrgica",
    tags: ["Dermatologia Cirúrgica", "Câncer de Pele"],
    coverImage: cirurgiaImg,
    publishedAt: "2026-08-19",
    readingTime: "5 min",
    blocks: [
      { type: "heading", text: "O que são cirurgias dermatológicas?" },
      {
        type: "paragraph",
        text: "As cirurgias dermatológicas são procedimentos médicos realizados pelo dermatologista com o objetivo de diagnosticar, tratar ou remover lesões da pele, unhas, cabelos e tecido subcutâneo.",
      },
      {
        type: "paragraph",
        text: "Essas cirurgias podem ter finalidade diagnóstica, terapêutica, preventiva, funcional ou estética. Fazem parte da formação do dermatologista e exigem conhecimento profundo da anatomia da pele, técnicas cirúrgicas e cuidados com cicatrização.",
      },
      { type: "heading", text: "Quem realiza cirurgias dermatológicas?" },
      {
        type: "paragraph",
        text: "As cirurgias dermatológicas devem ser realizadas exclusivamente por dermatologista, médico especializado no diagnóstico e tratamento das doenças da pele.",
      },
      {
        type: "paragraph",
        text: "O dermatologista é o profissional capacitado para avaliar corretamente a lesão, definir a necessidade de cirurgia, escolher a melhor técnica, garantir segurança e bom resultado estético e acompanhar cicatrização e evolução.",
      },
      { type: "heading", text: "Quando as cirurgias dermatológicas são indicadas?" },
      {
        type: "list",
        items: [
          "Lesões suspeitas de câncer de pele",
          "Câncer de pele confirmado",
          "Pintas que mudam de aspecto",
          "Nódulos na pele",
          "Cistos",
          "Lipomas",
          "Verrugas resistentes",
          "Unhas encravadas",
          "Lesões benignas com indicação funcional ou estética",
        ],
      },
      { type: "heading", text: "Cirurgias dermatológicas são apenas para câncer de pele?" },
      {
        type: "paragraph",
        text: "Não. Embora muito associadas ao câncer de pele, as cirurgias dermatológicas vão muito além disso. Elas também tratam lesões benignas, alterações funcionais, problemas estéticos e doenças inflamatórias localizadas.",
      },
      {
        type: "paragraph",
        text: "O objetivo não é apenas remover uma lesão, mas tratar o paciente como um todo, preservando saúde e qualidade de vida.",
      },
      { type: "heading", text: "Principais tipos de cirurgias dermatológicas" },
      {
        type: "paragraph",
        text: "Existem vários tipos de cirurgias dermatológicas, e a escolha depende do tipo de lesão, localização e características do paciente.",
      },
      {
        type: "list",
        items: [
          "Biópsia de pele — procedimento realizado para diagnóstico, no qual um fragmento da pele é retirado para análise.",
          "Exérese de lesões — remoção completa de lesões benignas ou malignas.",
          "Cirurgia para câncer de pele — indicada para tratamento definitivo de carcinomas e melanomas, com margens de segurança.",
          "Cirurgia de unhas — tratamento de unha encravada, tumores ungueais e alterações da matriz da unha.",
          "Cirurgia de cistos e lipomas — remoção de formações subcutâneas benignas.",
          "Correções cicatriciais — melhora estética e funcional de cicatrizes.",
        ],
      },
      { type: "heading", text: "Cirurgias dermatológicas para câncer de pele" },
      {
        type: "paragraph",
        text: "As cirurgias dermatológicas são o principal tratamento para muitos tipos de câncer de pele. O dermatologista avalia tipo de câncer, tamanho da lesão, localização e profundidade. O objetivo é remover completamente o tumor, preservando o máximo de tecido saudável possível.",
      },
      { type: "heading", text: "Cirurgias dermatológicas deixam cicatriz?" },
      {
        type: "paragraph",
        text: "Toda cirurgia deixa algum grau de cicatriz. Porém, nas cirurgias dermatológicas, o dermatologista utiliza técnicas específicas para minimizar cicatrizes. Fatores que influenciam a cicatriz incluem técnica cirúrgica, local da cirurgia, tipo de pele, cuidados pós-operatórios e genética do paciente.",
      },
      { type: "heading", text: "Como é o preparo para cirurgias dermatológicas?" },
      {
        type: "paragraph",
        text: "Antes das cirurgias dermatológicas, o dermatologista avalia o histórico do paciente, solicita exames quando necessário, orienta sobre medicamentos e explica o procedimento e o pós-operatório. A maioria das cirurgias dermatológicas é realizada com anestesia local, de forma ambulatorial.",
      },
      { type: "heading", text: "Cirurgias dermatológicas são seguras?" },
      {
        type: "paragraph",
        text: "Sim. As cirurgias dermatológicas são consideradas seguras quando realizadas por dermatologista capacitado. A segurança envolve avaliação correta da indicação, ambiente adequado, técnica cirúrgica apropriada e acompanhamento pós-operatório.",
      },
      { type: "heading", text: "Pós-operatório das cirurgias dermatológicas" },
      {
        type: "paragraph",
        text: "O pós-operatório costuma ser simples e inclui curativos locais, uso de medicamentos tópicos ou orais, evitar sol na área operada e retorno para avaliação e retirada de pontos, se necessário.",
      },
      { type: "heading", text: "Cirurgias dermatológicas doem?" },
      {
        type: "paragraph",
        text: "Durante o procedimento, não. As cirurgias dermatológicas são feitas com anestesia local. Após a cirurgia, pode haver desconforto leve, sensibilidade local ou inchaço discreto, geralmente temporários.",
      },
      { type: "heading", text: "Cirurgias dermatológicas em crianças e idosos" },
      {
        type: "paragraph",
        text: "As cirurgias dermatológicas podem ser realizadas em pacientes de todas as idades. Em crianças, são indicadas para lesões congênitas, verrugas e alterações ungueais. Em idosos, são comuns para câncer de pele, lesões crônicas e tumores cutâneos.",
      },
      { type: "heading", text: "Importância do acompanhamento após cirurgias dermatológicas" },
      {
        type: "paragraph",
        text: "O acompanhamento permite avaliar cicatrização, detectar recidivas, ajustar cuidados e orientar prevenção. Especialmente nos casos de câncer de pele, o seguimento regular é fundamental.",
      },
      { type: "heading", text: "Cirurgias dermatológicas e prevenção" },
      {
        type: "paragraph",
        text: "Além de tratar, as cirurgias dermatológicas também têm papel preventivo. A remoção precoce de lesões suspeitas pode evitar evolução para câncer, reduzir complicações e garantir tratamento mais simples.",
      },
      { type: "heading", text: "Quando procurar um dermatologista para cirurgias dermatológicas?" },
      {
        type: "paragraph",
        text: "Você deve procurar um dermatologista se notar lesões que crescem ou mudam, feridas que não cicatrizam, sangramento espontâneo, nódulos na pele, alterações em pintas ou dor persistente.",
      },
      { type: "heading", text: "Sobre a Dra. Janaína Martins" },
      {
        type: "paragraph",
        text: "A Dra. Janaína Martins é médica dermatologista e realiza cirurgias dermatológicas com avaliação criteriosa, técnica adequada e acompanhamento pós-operatório completo.",
      },
      {
        type: "paragraph",
        text: "Atende em Sorocaba, oferecendo segurança, precisão diagnóstica e cuidado integral ao paciente.",
      },
      { type: "heading", text: "Considerações finais" },
      {
        type: "paragraph",
        text: "As cirurgias dermatológicas são fundamentais para o diagnóstico e tratamento de diversas doenças da pele. Quando realizadas por dermatologista, são seguras, apresentam bons resultados funcionais e estéticos e contribuem para prevenção e saúde da pele.",
      },
    ],
  },
  {
    slug: "ultrassom-microfocado-liftera",
    title: "Ultrassom microfocado (Liftera): o que é, para que serve e quando o dermatologista indica",
    description:
      "Entenda o que é o ultrassom microfocado (Liftera), como funciona, para que serve, quem pode fazer e quando esse tratamento é indicado pelo dermatologista.",
    category: "Dermatologia Estética",
    tags: ["Dermatologia Estética", "Ultrassom Microfocado"],
    coverImage: ultrassomImg,
    publishedAt: "2026-08-14",
    readingTime: "4 min",
    blocks: [
      { type: "heading", text: "O que é ultrassom microfocado (Liftera)?" },
      {
        type: "paragraph",
        text: "O ultrassom microfocado (Liftera) é uma tecnologia utilizada na dermatologia para tratar flacidez da pele, estimular a produção de colágeno e promover efeito lifting não cirúrgico.",
      },
      {
        type: "paragraph",
        text: "Esse tratamento atua em camadas profundas da pele, sem necessidade de cortes, agulhas ou tempo de recuperação prolongado. Por isso, o ultrassom microfocado (Liftera) se tornou uma opção muito procurada por pacientes que desejam melhorar a firmeza da pele de forma segura e progressiva.",
      },
      {
        type: "paragraph",
        text: "O procedimento deve ser sempre indicado e realizado por um dermatologista, que avalia corretamente a anatomia, as indicações e os limites do tratamento.",
      },
      { type: "heading", text: "Para que serve o ultrassom microfocado (Liftera)?" },
      {
        type: "list",
        items: [
          "Tratamento da flacidez facial",
          "Tratamento da flacidez corporal",
          "Melhora do contorno facial",
          "Estimulação de colágeno",
          "Efeito lifting sem cirurgia",
          "Melhora da textura e firmeza da pele",
        ],
      },
      { type: "heading", text: "Como funciona o ultrassom microfocado (Liftera)?" },
      {
        type: "paragraph",
        text: "O ultrassom microfocado (Liftera) emite ondas de energia que atingem pontos específicos em profundidade, criando microcoagulações térmicas controladas. Esses pontos de calor estimulam a contração imediata das fibras de colágeno e a produção de novo colágeno ao longo do tempo.",
      },
      {
        type: "paragraph",
        text: "O diferencial do ultrassom microfocado (Liftera) é alcançar camadas profundas da pele, inclusive o SMAS, camada também tratada em cirurgias de lifting facial.",
      },
      { type: "heading", text: "O ultrassom microfocado (Liftera) dói?" },
      {
        type: "paragraph",
        text: "O ultrassom microfocado (Liftera) pode causar desconforto variável, dependendo da sensibilidade do paciente, da área tratada e da energia utilizada. Em geral, o desconforto é tolerável e momentâneo, e o dermatologista pode ajustar os parâmetros para maior conforto.",
      },
      { type: "heading", text: "Quais áreas podem ser tratadas com ultrassom microfocado (Liftera)?" },
      { type: "paragraph", text: "Face e pescoço:" },
      {
        type: "list",
        items: ["Rosto", "Pescoço", "Papada", "Mandíbula", "Região submentoniana", "Sobrancelhas"],
      },
      { type: "paragraph", text: "Corpo:" },
      {
        type: "list",
        items: ["Abdômen", "Braços", "Coxas", "Joelhos", "Flancos", "Glúteos"],
      },
      { type: "heading", text: "Ultrassom microfocado (Liftera) substitui cirurgia?" },
      {
        type: "paragraph",
        text: "Não. O ultrassom microfocado (Liftera) não substitui cirurgias plásticas em casos de flacidez intensa. Ele é indicado para flacidez leve a moderada, pacientes que não desejam cirurgia, manutenção de resultados cirúrgicos e prevenção do envelhecimento cutâneo.",
      },
      { type: "heading", text: "Quem pode fazer ultrassom microfocado (Liftera)?" },
      {
        type: "paragraph",
        text: "Homens e mulheres com flacidez inicial ou moderada, perda do contorno facial ou desejo de melhorar a firmeza da pele sem cirurgia. A indicação depende da qualidade da pele e da avaliação dermatológica individual.",
      },
      { type: "heading", text: "Quem não pode fazer ultrassom microfocado (Liftera)?" },
      {
        type: "list",
        items: [
          "Gestantes",
          "Infecções ativas na pele",
          "Feridas na área tratada",
          "Dispositivos metálicos implantados",
          "Condições específicas avaliadas pelo dermatologista",
        ],
      },
      { type: "heading", text: "Quando aparecem os resultados do ultrassom microfocado (Liftera)?" },
      {
        type: "paragraph",
        text: "Os resultados são progressivos e aparecem principalmente entre dois e seis meses após o procedimento, devido ao estímulo contínuo de colágeno.",
      },
      { type: "heading", text: "Quanto tempo dura o efeito do ultrassom microfocado (Liftera)?" },
      {
        type: "paragraph",
        text: "Os resultados costumam durar entre 12 e 18 meses, podendo haver indicação de sessões de manutenção.",
      },
      { type: "heading", text: "Ultrassom microfocado (Liftera) é seguro?" },
      {
        type: "paragraph",
        text: "Sim. Quando realizado por dermatologista capacitado, com indicação correta e equipamento adequado, o procedimento é considerado seguro.",
      },
      { type: "heading", text: "Ultrassom microfocado (Liftera) exige repouso?" },
      {
        type: "paragraph",
        text: "Não. O paciente pode retomar suas atividades habituais no mesmo dia.",
      },
      { type: "heading", text: "Ultrassom microfocado (Liftera) e envelhecimento da pele" },
      {
        type: "paragraph",
        text: "O ultrassom microfocado (Liftera) atua diretamente no estímulo de colágeno, ajudando a retardar e suavizar os sinais do envelhecimento cutâneo.",
      },
      { type: "heading", text: "Ultrassom microfocado (Liftera) pode ser associado a outros tratamentos?" },
      {
        type: "list",
        items: [
          "Bioestimuladores de colágeno",
          "Toxina botulínica",
          "Lasers",
          "Preenchimentos em momentos diferentes",
        ],
      },
      { type: "heading", text: "A importância da avaliação dermatológica" },
      {
        type: "paragraph",
        text: "A avaliação com dermatologista é essencial para definir indicação, alinhar expectativas e garantir segurança e bons resultados.",
      },
      { type: "heading", text: "Sobre a Dra. Janaína Martins" },
      {
        type: "paragraph",
        text: "A Dra. Janaína Martins é médica dermatologista e realiza avaliação individualizada para indicação do ultrassom microfocado (Liftera), com planejamento personalizado e acompanhamento completo.",
      },
      {
        type: "paragraph",
        text: "Atende em Sorocaba, oferecendo tecnologia moderna com segurança, precisão técnica e foco em resultados naturais.",
      },
      { type: "heading", text: "Considerações finais" },
      {
        type: "paragraph",
        text: "O ultrassom microfocado (Liftera) é uma tecnologia moderna, segura e eficaz para flacidez e estímulo de colágeno. Quando bem indicado, oferece resultados naturais, progressivos e com alto grau de satisfação.",
      },
    ],
  },
  {
    slug: "psoriase-sintomas-causas-tratamento",
    title: "Psoríase: o que é, sintomas, causas, impactos e tratamentos — incluindo imunobiológicos",
    description:
      "Entenda o que é a psoríase, seus sintomas, causas, tipos e opções de tratamento, incluindo os imunobiológicos, para o controle da doença a longo prazo.",
    category: "Dermatologia Clínica",
    tags: ["Dermatologia Clínica", "Psoríase"],
    coverImage: psoriaseImg,
    publishedAt: "2026-08-10",
    readingTime: "6 min",
    blocks: [
      { type: "heading", text: "O que é psoríase?" },
      {
        type: "paragraph",
        text: "A psoríase é uma doença inflamatória crônica da pele, não contagiosa, relacionada a uma disfunção do sistema imunológico. Ela se caracteriza por uma renovação acelerada das células da pele, o que leva ao aparecimento de placas avermelhadas, espessadas e com descamação esbranquiçada. A psoríase pode afetar pessoas de qualquer idade e apresenta períodos de melhora e piora ao longo da vida.",
      },
      {
        type: "paragraph",
        text: "Apesar de se manifestar na pele, a psoríase é considerada uma doença sistêmica, pois pode estar associada a outras condições inflamatórias e impactar significativamente a qualidade de vida física e emocional do paciente.",
      },
      { type: "heading", text: "Psoríase é contagiosa?" },
      {
        type: "paragraph",
        text: "Não. A psoríase não é contagiosa e não pode ser transmitida por contato físico, beijo, abraço, compartilhamento de objetos, uso de piscinas ou ambientes coletivos. Trata-se de uma condição inflamatória interna, e não de uma infecção.",
      },
      { type: "heading", text: "Quais são os sintomas da psoríase?" },
      {
        type: "list",
        items: [
          "Placas avermelhadas bem delimitadas",
          "Descamação branca ou prateada",
          "Pele ressecada e espessada",
          "Coceira, ardor ou dor local",
          "Rachaduras que podem sangrar",
          "Sensibilidade da pele nas áreas acometidas",
        ],
      },
      { type: "heading", text: "Onde a psoríase costuma aparecer?" },
      {
        type: "list",
        items: [
          "Couro cabeludo",
          "Cotovelos",
          "Joelhos",
          "Região lombar",
          "Atrás das orelhas",
          "Palmas das mãos e plantas dos pés",
          "Unhas",
        ],
      },
      { type: "heading", text: "Tipos de psoríase" },
      {
        type: "paragraph",
        text: "A psoríase apresenta diferentes formas clínicas, que variam conforme o aspecto das lesões e a região acometida.",
      },
      {
        type: "list",
        items: [
          "Psoríase em placas: forma mais comum, com placas espessas e descamativas.",
          "Psoríase gutata: lesões pequenas em forma de gotas, geralmente após infecções.",
          "Psoríase inversa: acomete áreas de dobras, como axilas e virilha.",
          "Psoríase pustulosa: presença de pústulas, podendo ser localizada ou generalizada.",
          "Psoríase eritrodérmica: forma grave, com acometimento extenso da pele.",
        ],
      },
      { type: "heading", text: "Psoríase nas unhas" },
      {
        type: "paragraph",
        text: "A psoríase pode atingir as unhas, causando espessamento, descolamento, manchas amareladas ou esbranquiçadas e alterações na superfície ungueal. Essas alterações podem gerar desconforto funcional e impacto estético importante.",
      },
      { type: "heading", text: "Psoríase e articulações" },
      {
        type: "paragraph",
        text: "Em parte dos pacientes, a psoríase pode se associar à artrite psoriásica, uma condição inflamatória que acomete as articulações e pode causar dor, rigidez, inchaço e limitação de movimentos. O diagnóstico precoce é fundamental para evitar danos articulares permanentes.",
      },
      { type: "heading", text: "O que causa a psoríase?" },
      {
        type: "paragraph",
        text: "A psoríase é uma doença multifatorial, resultante da interação entre predisposição genética e fatores ambientais.",
      },
      {
        type: "list",
        items: [
          "Alterações do sistema imunológico",
          "Predisposição genética",
          "Estresse emocional",
          "Infecções, especialmente de garganta",
          "Uso de alguns medicamentos",
          "Traumas físicos na pele",
        ],
      },
      { type: "heading", text: "Relação entre psoríase e estresse" },
      {
        type: "paragraph",
        text: "O estresse emocional é um dos principais fatores desencadeantes e agravantes da psoríase. Situações de tensão intensa podem desencadear crises ou piorar lesões já existentes, dificultando o controle da doença.",
      },
      { type: "heading", text: "Como o dermatologista diagnostica a psoríase?" },
      {
        type: "paragraph",
        text: "O diagnóstico da psoríase é realizado principalmente por meio da avaliação clínica feita pelo dermatologista, considerando o aspecto das lesões, sua distribuição e o histórico do paciente. Em casos específicos, pode ser indicada biópsia de pele para confirmação diagnóstica.",
      },
      { type: "heading", text: "Tratamento da psoríase" },
      {
        type: "paragraph",
        text: "O tratamento da psoríase é individualizado e depende da gravidade, extensão das lesões, impacto na qualidade de vida e presença de comorbidades. As opções terapêuticas incluem tratamentos tópicos, tratamentos sistêmicos, fototerapia e terapias imunobiológicas.",
      },
      { type: "heading", text: "Tratamentos tópicos" },
      {
        type: "paragraph",
        text: "São indicados principalmente para casos leves e incluem cremes, pomadas, loções e hidratantes específicos, que ajudam a reduzir a inflamação, a descamação e o ressecamento da pele.",
      },
      { type: "heading", text: "Tratamentos sistêmicos" },
      {
        type: "paragraph",
        text: "Indicados para casos moderados a graves, incluem medicamentos orais ou injetáveis que atuam de forma mais ampla no controle da inflamação.",
      },
      { type: "heading", text: "Fototerapia" },
      {
        type: "paragraph",
        text: "A fototerapia utiliza luz ultravioleta de forma controlada e pode ser uma opção eficaz para determinados pacientes com psoríase.",
      },
      { type: "heading", text: "Tratamento da psoríase com imunobiológicos" },
      {
        type: "paragraph",
        text: "Os imunobiológicos representam um avanço importante no tratamento da psoríase moderada a grave. Esses medicamentos são produzidos por biotecnologia e atuam de forma altamente específica em alvos do sistema imunológico envolvidos no processo inflamatório da psoríase.",
      },
      {
        type: "paragraph",
        text: "Eles são indicados quando há falha ou resposta inadequada a outros tratamentos, quando a doença compromete significativamente a qualidade de vida ou quando existe associação com artrite psoriásica.",
      },
      { type: "heading", text: "Benefícios dos imunobiológicos" },
      {
        type: "list",
        items: [
          "Redução significativa das lesões cutâneas",
          "Melhora rápida e sustentada dos sintomas",
          "Controle prolongado da doença",
          "Redução da frequência das crises",
          "Melhora importante da qualidade de vida",
        ],
      },
      { type: "heading", text: "Imunobiológicos curam a psoríase?" },
      {
        type: "paragraph",
        text: "Não. Os imunobiológicos não curam a psoríase, mas permitem um controle eficaz e duradouro da doença quando bem indicados e acompanhados pelo dermatologista.",
      },
      { type: "heading", text: "Segurança e acompanhamento com imunobiológicos" },
      {
        type: "paragraph",
        text: "O tratamento com imunobiológicos é considerado seguro quando realizado com acompanhamento médico adequado. Antes do início, são solicitados exames e feita uma avaliação criteriosa. Durante o uso, o acompanhamento regular é essencial para garantir eficácia e segurança.",
      },
      { type: "heading", text: "Cuidados diários para quem tem psoríase" },
      {
        type: "list",
        items: [
          "Manter a pele sempre hidratada",
          "Evitar banhos muito quentes",
          "Usar sabonetes suaves",
          "Evitar coçar as lesões",
          "Controlar o estresse",
          "Seguir corretamente o tratamento prescrito",
        ],
      },
      { type: "heading", text: "Impacto emocional da psoríase" },
      {
        type: "paragraph",
        text: "A psoríase pode impactar autoestima, relações sociais e bem-estar emocional. Por isso, o tratamento deve considerar o paciente de forma integral, indo além do controle das lesões cutâneas.",
      },
      { type: "heading", text: "Quando procurar um dermatologista?" },
      {
        type: "paragraph",
        text: "Sempre que surgirem lesões descamativas persistentes, alterações nas unhas, dor articular ou dificuldade no controle da doença, o dermatologista deve ser procurado para avaliação e ajuste do tratamento.",
      },
      { type: "heading", text: "Sobre a Dra. Janaína Martins" },
      {
        type: "paragraph",
        text: "A Dra. Janaína Martins é médica dermatologista e realiza diagnóstico e tratamento da psoríase de forma individualizada, incluindo terapias tópicas, sistêmicas e imunobiológicas quando indicadas.",
      },
      {
        type: "paragraph",
        text: "Atende em Sorocaba, oferecendo acompanhamento contínuo, controle da doença e foco na melhora da qualidade de vida do paciente.",
      },
      { type: "heading", text: "Considerações finais" },
      {
        type: "paragraph",
        text: "A psoríase é uma doença crônica, inflamatória e não contagiosa, que pode ser controlada com acompanhamento adequado. Com os tratamentos atuais, incluindo os imunobiológicos, muitos pacientes conseguem manter a doença sob controle e alcançar melhor qualidade de vida.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesSortedByDate(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
