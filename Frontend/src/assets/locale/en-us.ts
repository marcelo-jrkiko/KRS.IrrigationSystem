export default {
    name: "En",
    core: {
        details: "See more",
        selectall: "Select all",
        unselectall: "Select all",
        menu: {
            home: "Home",
            about: "About Mopi",
            map: "Map",
            panel: "Panel",
            povos: "Uncontacted Peoples",
            reports: "Bulletin",
            methodology: "Methodology",
            downloads: "Downloads"
        },
        onconstruction: "Warning: Map access via Desktop only",
        onconstructionText: "The map is not available to access on mobile devices at this time. It can only be accessed through desktops and laptops. We appreciate your understanding and are working to offer a broader experience in the future. To access the map, please use a device with a larger screen.",
        loading: "Loading...",
        desenvolvido: 'Developed by: <a href="mailto:contato@studiocuboweb.com.br" target="_blank">Studio Cubo</a>',
        erro404: '404 - Page not found',
        texto404: '<p>Lost in the digital jungle?</p>Looks like you\'ve ventured down an unknown path.<br />But don\'t worry, we\'re here to guide you back to the civilization of the web.<br / >In the meantime, take a deep breath and enjoy the virtual landscape!',
        button404: 'Back to homepage',
        erro500: '500 - Internal problems on our server',
        texto500: 'Oops! Something is lurking in the forest on the server, and it looks like our efforts to find it have caused a bit of a hiccup. Our digital shamans are working on a healing ceremony to restore harmony. In the meantime, why not explore other avenues in our virtual territory? Peace and tranquility will be restored soon!',
        button500: 'Back to homepage',
    },
    povos: {
        presentation: {
            title: "Apresentação (EN)",
            ethnonym: "Etnônimo, pertencimento étnico e linguístico (EN)",
            population: "População (EN)",
            mobility: "Mobilidade (EN)",
            surroundings: "Entorno (EN)",
        },
        history: {
            title: "Histórico (EN)",
            recent: "Histórico recente",
            funai: "Reconhecimento do registro pela FUNAI"
        },
        threads: {
            title: "Ameaças e pressões"
        },
        references: {
            title: "Para saber mais"
        },
        photos: {
            title: "Imagens"
        },
        authors: {
            title: "Autores deste verbete"
        }
    },
    home: {
        blocks: {
            hero: {
                title: "Monitor,<br />understand.<br /> and protect.",
                content: "Mopi provides geospatial information on the presence of uncontacted indigenous peoples in Brazil. Access the tool to learn about the threats and pressures faced by these peoples, browsing through thematic sections providing data on invasions, development projects, governance, health and overlappings that make their territories vulnerable.",
                button: "Go to map"
            },
            first: {
                title: "Bulletin",
                content: "The Mopi Bulletin presents an overview of the vulnerabilities faced by uncontacted peoples. In our first edition, we analyse a set of data on threats and pressures in areas where the presence of uncontacted peoples has been officially confirmed by the Brazilian State. Access the bulletin to see the balance sheet",
                button: ""
            },
            second: {
                title: "[EN] Nome do Boletim",
                content: "[EN] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et pellentesque nulla. Morbi tristique ligula ut turpis fermentum, nec tempus massa dignissim. Nunc sagittis metus libero, vel porttitor nibh lacinia sed. Cras justo lacus, semper pellentesque massa a, porta facilisis elit. Proin auctor eleifend quam sit amet pharetra. Curabitur tincidunt semper quam, ut porttitor risus pulvinar nec. Aliquam vehicula lobortis elit gravida bibendum.",
                button: "[EN] Download"
            },
            third: {
                title: "Methodology",
                content: "Learn about the monitoring methodology developed by Mopi's technical team. Learn more about the compiled basis* and thematic sections used to build our database and thematics maps.",
                button: "Go to methodology"
            },
            fourth: {
                title: "Uncontacted Indigenous Pooples",
                content: "The Amazon is home to the majority of uncontacted indigenous peoples in the world. Brazil knows the largest number of these peoples, whose isolation is less a consequence of a natural condition than the result of a historical situation. Increasingly surrounded by invaders, uncontacted peoples find themselves confined to what remains of their territories, essential for maintaining their ways of life. Learn more about some of the uncontacted indigenous peoples that live in the country.",
                button: "More"
            },
        },
    },
    sobre: {
        blocks: {
            hero: {
                title: "About<br />Mopi"
            },
            first: {
                content: 'Mopi, in the Zo\'é language, is a word that can be translated as "to make sting". Derived from the term opi - the same language expression for sting and Wayana word for medicinal plant - Mopi is also the nickname for the Monitoring of Uncontacted Indigenous Peoples platform, which presents the public with a comprehensive set of data on the threats and pressures faced by groups living in isolation in the country. Like the Opi - medicine for relatives and poison for enemies - Mopi is born for the dual purpose of stinging and healing. Explore the sections of the site to learn more.',
            },
            second: {
                title: "Development"
            },
            third: {
                title: "Partners",
            },
            contact: {
                title: "Contact",
                content: "Please send us comments, suggestions*, queries or requests. You can reach us at the addresses below:",
                mopi: "Mopi — Monitoring of Uncontacted Indigenous Peoples",
                opi: "Opi — Observatory of Uncontacted Peoples"
            }
        },
    },
    map: {
        controls: {
            streetview: "Streets",
            satelliteview: "Satellite",
            zoomin: "Zoom in",
            zoomout: "Zoom out",
            viewStyle: "Change the map style",
            expand: "Expands the map",
            cartoview: "Base map"
        },
        errors: {
            failedSnipFit: "Error when trying to find the snip.",
            noData: "No data found"
        },
        loading: "Loading the map...",
        loadingRegistry: "Finding...",
        defaultPopupMessage: "No information has this layer",
        defaultPopupTitle: "Attention",
        pin: "Click to toggle the layer as most important!",
        snipCut: {
            vulnerability: "Vulnerability Note",
            registry: "Records",
            snipFilter: "Breakdown",
            snipByRegistry: "Records",
            snipByTerritory: "Territorial",
            snipByNet: "Networks",
            tooltipHelp: "Help",
            infoModal: "<p>(EN) Os dados do Mopi podem ser visualizados através de três recortes principais. Ative um filtro para habilitar um recorte de visualização do mapa:</p><p>Recorte por registro: escolha esta opção para visualizar dados relativos a um registro de presença de povo indígena isolado. Após selecionar o registro, ative a camada de dados desejada para visualizar informações temáticas por registro de povo isolado.</p><p>Recorte por território: escolha esta opção para visualizar dados relativos a um território com registro de presença de povo indígena isolado. Após selecionar a Terra Indígena ou Unidade de Conservação, ative a camada de dados desejada para visualizar as informações temáticas por território.</p><p>Recorte por rede: escolha esta opção para visualizar dados relativos aos registros monitorados por cada uma das redes regionais do Opi. Após selecionar a rede, ative a camada de dados desejada para visualizar as informações temáticas por rede.</p>",
            resetLink: "Reset snip"
        },
        activedLayers: {
            title: "Legend",
            position: "Position",
            legend: "Legend",
            opacity: "Opacity",
            tooltipHelp: "Camadas Ativas ajuda."
        },
        indicators: {
            dimensions: "DIMENSIONS OF VULNERABILITY",
            base: {
                layerMenuTitle: "Select layers for the base: "
            },
            toolTipHelp: "Click for more information about the layer",
            infoModalGeral: "General View",
            infoModalConsiderations: "Considerations",
            infoModalSource: "Source"
        },
        layerFields : {
            ucsgroup: {
                pi: "Comprehensive Protection",
                us: "Sustainable Use"
            }
        }
    },
    metodologia: {
        blocks: {
            hero: {
                title: "Methodology"
            },
            first: {
                content: '<p>The <i>Mopi</i> is a geospatial platform aimed at monitoring the situation of vulnerability experienced by isolated indigenous peoples. Conceived by Opi and implemented in partnership with Coiab, the initiative is made up of a database and an interactive map, which provide the public with a set of information on threats and pressures that influence the conditions of existence of groups in isolation. By compiling this information, <i>Mopi</i> intends to contribute to the dissemination of data regarding the situation of vulnerability experienced by these peoples, providing subsidies for the work of indigenous organizations, indigenists and public bodies dedicated to the defense of their rights and protection of their lives.</p><p><i>Mopi</i> was conceived by an indigenist collective with experience in research and work in monitoring isolated indigenous peoples. This indigenous collective makes up the technical core of the platform, made up of researchers specialized in areas of knowledge such as indigenous ethnology, human rights, geoprocessing, health, ecology and information technology. The construction of a monitoring methodology is the main objective of the technical core, which has been dedicated to defining guidelines for the collection, treatment and systematization of information regarding the situation of vulnerability faced by isolated peoples. In constant improvement, this methodology seeks to ensure the reliability of the collected data and provide comparability to the monitored contexts.</p>',
            },
            second: {
                title: "Records of uncontacted indigenous peoples",
                content: 'The <i>Mopi</i> database is structured around records of the presence of isolated indigenous peoples officially recognized by the Brazilian State. Currently, the General Coordination of Isolated and Recent Contact Indians of the National Foundation for Indigenous Peoples (CGIIRC/FUNAI) has 114 presence records, classifying them into three distinct categories according to the availability of information on their location, mobility and territoriality, belonging ethnic and/or linguistic. The availability and quality of this information is directly related to the work carried out by the Ethno-environmental Protection Fronts (FPEs), decentralized units of the CGIIRC/FUNAI responsible for locating and monitoring, protection and surveillance actions and, in exceptional contexts, contacts with isolated peoples.',
                ps: '¹As Amorim (2016) points out, the methodology for monitoring isolated peoples used by the National Foundation for Indigenous Peoples has records as an analytical unit: "at the administrative level, the data collected in the field [by the indigenist agency] are linked to records previously existing in the Funai database [...]. The registry is considered the base unit in the process of systematizing data on the institutional recognition of the existence of isolated indigenous peoples. In general terms, the “registry” is linked to to the region, or geographical references, where possibly or demonstrably there is the presence of isolated indigenous peoples or groups, an identifying number being assigned to the record (Amorim, 2016: 27-28)".',
                ul: '<ul><li>The confirmed records concern indigenous groups in isolation whose existence is confirmed by the Brazilian State after systematic localization work. Confirmation of presence is carried out by the CGIIRC through a rigorous methodology, which can reconcile the conduct of expeditions and overflights with the analysis of satellite images with a view to identifying areas traditionally occupied by isolated indigenous peoples. These actions, sometimes developed by Ethno-environmental Protection Fronts with the collaboration of indigenous specialists in contact with the majority society, can be combined with documental research. In some cases, the studies necessary to confirm the presence of a record extend for decades, in which knowledge is also produced about the dynamics of mobility and territoriality, ways of life, recent history and ethnic-linguistic belonging of isolated indigenous peoples. .<br /><br /></li><li>The references under study concern the records of isolated peoples whose presence is studied by FUNAI. In these cases, a considerable corpus of evidence indicates the presence of an isolated people, although the information gathered does not allow the indigenist agency to confirm its existence or location precisely. Confirmation of the existence of a record under study, therefore, demands the continuity of the locating and monitoring work by FUNAI, which commonly has systematized documentation on sightings and traces and develops ethnological or historiographical studies on the isolated indigenous people whose presence is registered.<br /><br /></li><li>Information records, finally, concern information about the presence of a people in isolation officially recognized by FUNAI which, after an initial assessment for selection and screening, incorporates them into its database for further qualification. It is common for information about peoples in isolation to be collected by the FPEs during the locating and monitoring work, as well as with indigenous and indigenist organizations active in Indigenous Lands.</li></ul>',
                highlight: 'Currently, 28 of the 114 records of isolated indigenous peoples have their existence confirmed by FUNAI, which accounts for 26 references under study and 60 records of information. Despite the constant revision by the qualification work of the Ethno-environmental Protection Fronts, the official list of records was not subjected to a systematic review during the dismantling of FUNAI promoted by the Bolsonaro government (2018-2022), which is why it is out of date.',
                content2: 'The inaugural collection of the <i>Mopi</i> platform makes available to the public a complete set of thematic data regarding the vulnerabilities experienced by the records of isolated peoples recognized by the Brazilian State. We concentrated our first efforts on monitoring the 28 confirmed registrations in order to spread information about the situation of the areas they occupy and their surroundings. In addition to those confirmed, we included 5 references under study (Katawixi, Igarapé Ipiaçava/Ituna-Itatá, Baixo Jatapu/Oriente, Pitinga/Nhamundá-Mapuera, Karapawyana) in this version of the platform, most of which are located in ILs with Use Restriction Ordinances or in the process of regularization. This collection finally considers 1 presence record (Mamoriá) confirmed by the Madeira-Purus Ethno-Environmental Protection Front in September 2021, but <a href="https://povosisolados.org/stf-ordena-que-governo-brasileiro-tome-medidas-para-garantir-a-vida-e-os-territorios-dos-povos-indigenas-isolados/" target="_blank">not officially recognized by FUNAI</a> in the Bolsonaro government (2018-2022 ).',
                button: "View records of uncontacted indigenous peoples",
            },
            third: {
                title: "Monitored Areas",
                content: 'The monitoring of the situation of vulnerability of isolated indigenous peoples is carried out by Opi with attention to two main spatial units, delimited in order to distinguish the factors and processes that influence the areas of occupation from those that affect the areas surrounding the records . We present, below, the methodology used to delimit these clippings.',
                subtitle2: "Occupancy areas",
                content2: '<p>Lands traditionally occupied by indigenous peoples are defined by Article 231 of the Federal Constitution of 1988 as those "inhabited by them on a permanent basis, used for their productive activities, essential for the preservation of the environmental resources necessary for their well-being and those necessary for their physical and cultural reproduction, according to their uses, customs and traditions" (Brasil, 1988, Art 231). Still according to the Constitution, the rights of indigenous peoples to the lands they occupy are original, that is, prior to the State itself, and it is incumbent upon the Union to "demarcate them, protect them and ensure respect for all their assets". The demarcation of Indigenous Lands (TIs) is, therefore, a constitutional right of indigenous peoples who, through this process, see the limits of their territories officially recognized by the Brazilian State.</p><p>With regard to indigenous rights to lands in which they live, and based on the assumption that identification studies make explicit the limits of a traditionally occupied original territory, we consider the area of occupation of an isolated indigenous people as equivalent to the IL in which the presence record is located. Some areas in which records of the presence of isolated people, however, remain without any recognition by the State, deepening the situation of vulnerability to which these peoples are subjected. Among the non-demarcated areas occupied by isolated indigenous peoples, there are those that have Conservation Units (UCs) partially or completely overlapping, or even those located outside regions defined as Protected Areas. Thus, the areas of occupation not demarcated as ILs may correspond to the CUs overlapping them or, finally, be equivalent to a buffer of 50km radius, delimited for monitoring records of isolates located outside the limits of Protected Areas.</p >',
                ps2: '²Despite the fact that the Transitory Constitutional Provisions Act (ADCT) set, in its Article 67, a period of five years for the Union to complete the demarcations, several Indigenous peoples remain unidentified (and therefore without official recognition) by the State - some of which have a confirmed presence of isolated indigenous peoples.',
                subtitle3: "Surrounding area",
                content3: '<p>The areas surrounding the records of the presence of indigenous peoples in isolation are also the focus of monitoring by <i></i>Mopi. The delimitation of the surroundings was carried out based on studies that demonstrate the importance of buffer zones for the preservation of ecosystems located in Protected Areas (Nepstad et al 2006, Soares-Filho et al 2010, Cabral et al 2018), among which stand out There are two recent publications focused on Indigenous Lands (Rorato et al 2021 and 2022). Pointing to the intrinsic connection between the factors and processes that occur inside and outside the Indigenous Lands, such studies demonstrate that "the set of threats in the surrounding areas is very similar to the set of threats inside the Indigenous Lands", suggesting the need to policies aimed at protecting their buffer zones (Rorato et al 2021 and 2022).</p><p>The surrounding areas monitored by <i>Mopi</i> correspond to a "buffer zone" (buffer) of 40km from the limits of the area of occupation of a record of the presence of indigenous people in isolation. In addition to considering the aforementioned scientific studies, such a distance was defined based on the provisions of the regulations that regulate Indigenous Component Studies (ECI) that are part of environmental licensing processes (Interministerial Ordinance No. establishes that the impact on indigenous areas of roads and hydroelectric plants located up to 40km from the ILs is presumed.</p>',
            },
            vulnerabilidade: {
                title: "Socio-environmental vulnerability",
                content: '<p>The assessment of the situation experienced by isolated indigenous peoples has been carried out by <i>Mopi</i> based on the theoretical-methodological framework of vulnerability proposed by the Intergovernmental Panel on Climate Change (IPCC, in the acronym in English ) of the United Nations (McCarthy et al 2001, Schneider et al 2007). This framework, previously adapted for the analysis of the environmental vulnerability of Indigenous Lands in the Legal Amazon (Rorato et al 2022), presents guidelines for the study of socio-environmental systems susceptible to the impacts of climate change. In it, the concept of vulnerability is conceived as "the degree to which a [human, environmental or human-environmental] system is susceptible to, or unable to cope with, adverse effects of changes", and defined as a function of exposure, sensitivity and responsiveness of a system susceptible to threats (McCarthy et al 2001, Schneider et al 2007). Thus, a system is expected to be more vulnerable if it is exposed to threats, if it is sensitive to them, and if it has low responsiveness to deal with them and their impacts.</p><p>The <i> Mopi</i> has taken an indicator-based approach to describing the exposure, sensitivity and resilience of records of indigenous peoples in isolation to the threats and pressures they are subjected to. Based on the theoretical-methodological framework proposed by the IPCC and adapted by Rorato et al (2022) for analyzing the vulnerability of ILs in the Legal Amazon, we categorize these indicators into three components, distinguishing the factors and processes that directly influence the status of records (thus increasing their sensitivity) from those that impact them indirectly (thus increasing their exposure). We also built indicators to describe the factors and processes that influence the resilience (that is, the capacity to respond) of indigenous peoples in isolation, especially resistant to the situation of vulnerability to which they are submitted. The data used to construct the indicators show the different dimensions of vulnerability that affect the records. </p>',
            },
            dimensoes: {
                title: "Vulnerability Dimensions",
                content: 'The data relating to threats and pressures have been mapped and organized by the <i>Mopi</i> team with attention to different dimensions. To each dimension, we associate a set of thematic information, which describe the multiple factors and processes that influence the vulnerable situation of isolated peoples.',
                territorio: 'Territory',
                territorioTexto: 'The land dimension considers data related to the territorial situation of the registration of presence of isolated indigenous people. In this dimension, we compiled data on the stage of the regularization process of the Indigenous Land, as well as on the presence of Conservation Units, Settlement Projects, Quilombola Territories, Certified Rural Properties and Rural Environmental Registers overlapping their occupation area and their area of surroundings. The data gathered in this dimension are secondary, made available by public bodies.',
                empreendimentos: 'Businesses',
                empreendimentosTexto: 'The entrepreneurships dimension gathers data related to the presence of hydroelectric plants, transmission lines, railroads, highways, pipelines and mining processes in the areas of occupation and surroundings of the records of isolated indigenous peoples. The data compiled in this dimension are secondary, made available by public bodies.',
                ambiente: 'Environment',
                ambienteTexto: 'In the environment dimension, we compiled data on deforestation, forest degradation and integrity, fire scars and hot spots in the occupation area and in the area surrounding the registry. Data related to illegal mining were also considered in this dimension. The data that make up the indicators of deforestation, forest degradation, hot spots and forest integrity are periodically made available by the National Institute for Space Research (INPE). Data relating to the burned area, in turn, are a product of the Moderate Resolution Imaging Spectroradiometer (MODIS) sensor, while those relating to illicit mining were obtained from the site of the Amazon Network of Georeferenced Socio-Environmental Information (RAISG).',
                invasoes: 'Invasions',
                invasoesTexto: 'In the dimension of invasions, we compiled data on the presence of illegal logging, hunting, fishing and/or gathering, mining, drug trafficking and missionaries in the area occupied by the registry. Based on the right to exclusive use of ILs guaranteed to indigenous peoples by the Constitution, all these activities were considered invasions when carried out in ILs without the consent of the peoples they occupy. The data that make up the indicators of this dimension were collected and systematized by the technical core of <i>Mopi</i> through our regional networks. ',
                governanca: 'Governance',
                governancaTexto: 'The governance dimension considers data related to the monitoring, protection and surveillance actions carried out by the Ethno-environmental Protection Fronts, the availability of physical structure and human resources and the presence of indigenous organizations in the occupation areas of the records of indigenous peoples in isolation . The data that make up the indicators of this dimension were obtained from the General Coordination of Isolated and Recent Contact Indians of the National Foundation for Indigenous Peoples (CGIIRC/FUNAI) through the Law on Access to Information. Data regarding the presence of indigenous and indigenist organizations in territories occupied by isolated individuals, in turn, were collected and systematized by the technical core of <i>Mopi</i> through our regional networks.',
                saude: 'Health',
                saudeTexto: 'In the health dimension, finally, we compiled data about the Special Indigenous Sanitary Districts (DSEIs) and Base Poles (PBs) responsible for health care in the areas of occupation and surroundings of the monitored records of isolated indigenous peoples, as well as data on the Multidisciplinary Indigenous Health Teams (EMSIs) working in these regions and on the availability of Contingency Plans for Contact Situations. The data that make up the indicators of this dimension were obtained from the Special Secretariat for Indigenous Health of the Ministry of Health (SESAI/MS) through the Law on Access to Information.',
            },
            data: {
                title: "Spatialization and data modeling",
                content: "Primary and secondary data gathered or selected by Opi's technical team and regional networks, therefore, were systematized for the inaugural version of the platform. The fonts used in this version, shown in the following table, are part of a database carefully modeled in free access managers (Postgres/Postgis and Dbeaver). In addition to meeting Mopi's goals, the database was modeled to optimize queries and spatial operations and allow future updates to be conducted efficiently.",
                button: "Fonts",
                content2: '<p>The data collected and/or selected by <i>Mopi</i> were cut considering the need to contextualize the areas of occupation and surroundings of the records of isolated indigenous peoples. Thus, the area covered by the platform was mapped starting from the limit of the Legal Amazon, considering a range of 18 km in national territory and, in cross-border countries, a range of 100 km.</p><p>The construction of the data bank data involved the analysis of the data attribute tables and metadata, conducted with a view to identifying the fields and categories used to create a data dictionary. In view of the diversity of topics addressed, it was necessary to make efforts to understand the methodologies used in the mapping conductedby other institutions, the categories of territories that make up the public and private territorial network, the stages of the land and environmental regularization processes, and the categories and stages of infrastructure projects.</p><p>The research carried out allowed the adoption of procedures aimed at meeting the objectives of the platform and the efficiency of relationships in the database. In order to optimize the navigation experience, some of the procedures employed were: (a) the union of data made available separately (such as, for example, those related to public and private Rural Properties registered in SIGEF and SNCI, to Hydroelectric Plants and Small Hydroelectric Plants, the increase and mask of deforestation, etc.); (b) the grouping of distinct features (such as, for example, the lines, points and polygons of illegal mining); (c) the standardization of the tables and the recategorization of the stages of the projects, providing conditions for comparability between the different types of monitored infrastructure projects.</p>',
                button2: "Enterprise recategorization",
                content3: '<p>In the modeled database, the relationships were predominantly established by the identifier number of the records. As they are linked to the respective areas of occupation and surroundings, the performance of spatial operations (eg, intersection and intersection) evidenced the existence of territorial overlaps, the occurrence of enterprises in the areas of interest, the history of deforestation, forest degradation and fire , etc.</p><p>Despite our dedication, the data and maps presented still have several inconsistencies. If you have criticisms, collaborations, or suggestions, please contact us by e-mail: <a href="mailto:monitoramento@povosisolados.org" target="_blank">monitoramento@povosisolados.org</a></p>< p>The content of the site is public and can be used by reference: Mopi - Monitoring of Isolated Indigenous Peoples. "Website Area". 2023. Available at: "access link". Accessed on: "access date".</p>',
            },
            referencias: {
                title:'Referências',
                ref1:'AMORIM, Fabrício Ferreira. Povos indígenas isolados no Brasil e a política indigenista desenvolvida para efetivação de seus direitos: avanços, caminhos e ameaças. Revista Brasileira de Linguística Antropológica, Volume 8, Número 2, Dezembro de 2016, 19-39.',
                ref2:'BRASIL. Constituição da República Federativa do Brasil de 1988. Promulgada em 5 de outubro de 1988. Diário Oficial da União, Brasília, DF. Artigo 231 - Dos Índios. ',
                ref3:'BRASIL. Ministério do Meio Ambiente; Ministério da Justiça; Ministério da Cultura; Ministério da Saúde. Portaria Interministerial nº 60, de 2015. Diário Oficial da União, Brasília, DF, 25 de março de 2015. Disponível em: <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/malaria/publicacoes/licenciamento-ambiental/portaria-interministerial-no-60-de-marco-de-2015/view" target="_blank">https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/malaria/publicacoes/licenciamento-ambiental/portaria-interministerial-no-60-de-marco-de-2015/view</a>. Acesso em: 05 ago. 2023.',
                ref4:'CABRAL, A. I.; SAITO, C.; PEREIRA, H.; LAQUES, A. E. Deforestation pattern dynamics in protected areas of the Brazilian legal Amazon using remote sensing data. Applied Geography, v. 100, p. 101-115, 2018.',
                ref5:'COIAB - Coordenação das Organizações Indígenas da Amazônia Brasileira. Registros de Presença de Povos Indígenas Isolados no Brasil. Conjunto de dados georreferenciados, 2020. ',
                ref6:'CGIIRC/FUNAI - Coordenação Geral de Índios Isolados e Recém-Contatados da Fundação Nacional dos Povos Indígenas. Registros de Presença de Povos Indígenas Isolados no Brasil, Frentes de Proteção Ambiental, Bases de Proteção Etnoambiental e Terras Indígenas com Povos Isolados e de Recente Contato. Conjunto de dados georreferenciados (TIs, FPEs e BAPEs) e planilhas, 2023.',
                ref7:'CNUC/MMA. Cadastro Nacional de Unidades de Conservação do Ministério do Meio Ambiente. Unidades de Conservação.  Conjunto de dados vetoriais georreferenciados, 2022. Disponível em: <a href="https://www.gov.br/mma/pt-br/assuntos/areasprotegidasecoturismo/plataforma-cnuc-1/dados-georreferenciados" target="_blank">https://www.gov.br/mma/pt-br/assuntos/areasprotegidasecoturismo/plataforma-cnuc-1/dados-georreferenciados</a>. ',
                ref8:'FUNAI - Fundação Nacional dos Povos Indígenas. Terras Indígenas. Conjunto de dados vetoriais georreferenciados, 2023. Disponível em: <a href="https://www.gov.br/funai/pt-br/atuacao/terras-indigenas/geoprocessamento-e-mapas" target="_blank">https://www.gov.br/funai/pt-br/atuacao/terras-indigenas/geoprocessamento-e-mapas</a>. ',
                ref9:'INCRA - Instituto Nacional de Colonização e Reforma Agrária. Imóveis Rurais públicos e privados. Conjunto de dados vetoriais georreferenciados do Sistema de Gestão Fundiária (SIGEF), 2023. Disponível em: <a href="https://acervofundiario.incra.gov.br" target="_blank">https://acervofundiario.incra.gov.br</a>. ',
                ref10:'______________. Imóveis Rurais públicos e privados. Conjunto de dados vetoriais georreferenciados do Sistema Nacional de Cadastro de Imóveis (SNCI), 2023. Disponível em: <a href="https://acervofundiario.incra.gov.br" target="_blank">https://acervofundiario.incra.gov.br</a>. ',
                ref11:'______________. Territórios Quilombolas. Conjunto de dados georreferenciados do acervo fundiário, 2023. Disponível em: <a href="https://acervofundiario.incra.gov.br" target="_blank">https://acervofundiario.incra.gov.br</a>.',
                ref12:'______________. Projeto de Assentamento. Conjunto de dados georreferenciados do acervo fundiário, 2023. Disponível em: <a href="https://acervofundiario.incra.gov.br" target="_blank">https://acervofundiario.incra.gov.br</a>. ',
                ref13:'MCCARTHY, J.J.; CANZIANI, O.F.; LEARY, N.A.; DOKKEN, D.J.; WHITE, K.S. et al. Climate Change 2001: Impacts, Adaptation, and Vulnerability: contribution of Working Group II to the third assessment report of the Intergovernmental Panel on Climate Change (IPCC). Cambridge University Press, Cambridge, UK, 2001.',
                ref14:'MODIS Burned Area Product. MCD64A1 MODIS/Terra+Aqua Burned Area Monthly L3 Global 500m SIN Grid V006. Conjunto de dados georreferenciados referentes às áreas queimadas entre os anos de 2001-2021. Distribuído pela NASA EOSDIS Land Processes Distributed Active Archive Center, Disponível em:  <a href="https://lpdaac.usgs.gov/products/mcd64a1v006/" target="_blank">https://lpdaac.usgs.gov/products/mcd64a1v006/</a>. ',
                ref15:'NEPSTAD, D.; SCHWARTZMAN, S.; BAMBERGER, B.; SANTILLI, M.; RAY, D.; SCHLESINGER, P.; LEFEBVRE, P. et al. Inhibition of Amazon deforestation and fire by parks and indigenous lands. Conservation Biology, 2006. Disponível em: <a href="https://www.researchgate.net/profile/Stephan-Schwartzman-2/publication/6877189_Inhibition_of_Amazon_Deforestation_and_Fire_by_Parks_and_Indigenous_Lands/links/60884b46881fa114b4319c53/Inhibition-of-Amazon-Deforestation-and-Fire-by-Parks-and-Indigenous-Lands.pdf" target="_blank">https://www.researchgate.net/profile/Stephan-Schwartzman-2/publication/6877189_Inhibition_of_Amazon_Deforestation_and_Fire_by_Parks_and_Indigenous_Lands/links/60884b46881fa114b4319c53/Inhibition-of-Amazon-Deforestation-and-Fire-by-Parks-and-Indigenous-Lands.pdf</a>. Acesso em: 05 ago. 2023.',
                ref16:'RORATO, A. C., PICOLI, M. C., VERSTEGEN, J. A., CAMARA, G., SILVA BEZERRA, F. G., & ESCADA, M. I. S. (2021). Environmental threats over Amazonian indigenous lands. Land, 10(3), 267. Disponível em: <a href="https://www.mdpi.com/2073-445X/10/3/267" target="_blank">https://www.mdpi.com/2073-445X/10/3/267</a>. Acesso em: 05 ago. 2023.',
                ref17:'RORATO, Ana C.; ESCADA, Maria Isabel S.; CAMARA, Gilberto; PICOLI, Michelle CA; VERSTEGEN, Judith A. Environmental vulnerability assessment of Brazilian Amazon indigenous lands. Environmental Science & Policy, [S.l.], v. 129, p. 19-36, mar. 2022. Disponível em: <a href="https://www.sciencedirect.com/science/article/pii/S1462901121003609" target="_blank">https://www.sciencedirect.com/science/article/pii/S1462901121003609</a>. Acesso em: 05 ago. 2023.',
                ref18:'SCHNEIDER, S. et al. Assessing key vulnerabilities and the risk from climate change. In: PARRY, M. L.; CANZIANI, O. F.; PALUTIKOF, J. P.; VAN DER LINDEN, P. J.; HANSON, C. E. (Eds.). Climate Change 2007: Impacts, Adaptation and Vulnerability. Contribution of Working Group II to the Fourth Assessment Report of the Intergovernmental Panel on Climate. Cambridge University Press, Cambridge, UK, 2007.',
                ref19:'SOARES-FILHO, B.; MOUTINHO, P.; NEPSTAD, D.; ANDERSON, A.; RODRIGUES, H.; GARCIA, R.; DIETZSCH, L.; MERRY, F.; BOWMAN, M.; HISSA, L.; SILVESTRINI, R.; MARETTI, C. Role of Brazilian Amazon protected areas in climate change mitigation. Proceedings of the National Academy of Sciences, v. 107, p. 10821-10826, 2010.',
                ref20:'SESAI/MS - Secretaria de Saúde Indígena do Ministério da Saúde. Distritos Sanitários Especiais Indígenas (DSEIs) e Pólos-Base (PBs). Conjunto de dados georreferenciados, 2022.',
                ref21:'______________.Pólos-Base (Aldeias, população, atendimento, escala de trabalho, capacitação). Conjunto de dados (planilha), 2023.',
            },
            notas: {
                title:'Notes',
            },
        },
        sub:{
            intro:'Introduction',
            registros:'Records of isolated indigenous peoples',
            areas:'Monitored areas',
            vulnerabilidade:'Socio-environmental vulnerability',
            dimensoes:'Vulnerability dimensions',
            espacializacao:'Spatialization and data modeling',
            referencias:'References',
        },
    },
    Admin: {
        Usuarios: "Usuários",
        Extratos: "Extrato por Registro",
        Extrato: {
            "aggregated": "Agregado"
        }
    },
    Profiles: {
        'Admin' : "Administrador",
        'Partner': "Parceiro",
        "Reader" : "Leitor"
    }
}